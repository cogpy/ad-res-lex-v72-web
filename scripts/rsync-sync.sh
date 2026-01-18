#!/bin/bash

################################################################################
# Rsync Synchronization Script for Code-Server ↔ Codespace
# 
# This script provides real-time file synchronization between:
# - Local Code-Server: /home/ubuntu/ad-res-lex-v72-web
# - GitHub Codespace: via SSH
#
# Usage:
#   ./scripts/rsync-sync.sh push      # Push local changes to Codespace
#   ./scripts/rsync-sync.sh pull      # Pull Codespace changes to local
#   ./scripts/rsync-sync.sh watch     # Watch and auto-sync on changes
#
################################################################################

set -e

# Configuration
PROJECT_DIR="/home/ubuntu/ad-res-lex-v72-web"
CODESPACE_HOST="${CODESPACE_HOST:-}"  # Set via environment or GitHub Codespace
CODESPACE_PATH="/workspaces/ad-res-lex-v72-web"
RSYNC_OPTS="-avz --delete --exclude=node_modules --exclude=.git --exclude=dist --exclude=.next"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Helper functions
log_info() {
    echo -e "${BLUE}ℹ${NC} $1"
}

log_success() {
    echo -e "${GREEN}✓${NC} $1"
}

log_error() {
    echo -e "${RED}✗${NC} $1"
}

log_warn() {
    echo -e "${YELLOW}⚠${NC} $1"
}

# Check if Codespace is configured
check_codespace() {
    if [ -z "$CODESPACE_HOST" ]; then
        log_error "CODESPACE_HOST not set!"
        echo ""
        echo "To use rsync sync, you need to:"
        echo "1. Create a GitHub Codespace: https://github.com/cogpy/ad-res-lex-v72-web/codespaces"
        echo "2. Get the Codespace SSH host:"
        echo "   gh codespace list  # Find your codespace name"
        echo "   gh codespace ssh -c <codespace-name>  # Connect and get hostname"
        echo ""
        echo "3. Set the environment variable:"
        echo "   export CODESPACE_HOST='<username>.<codespace-name>.github.dev'"
        echo ""
        echo "4. Or add to ~/.bashrc:"
        echo "   export CODESPACE_HOST='<username>.<codespace-name>.github.dev'"
        exit 1
    fi
}

# Push local changes to Codespace
push_to_codespace() {
    log_info "Pushing local changes to Codespace..."
    check_codespace
    
    if rsync $RSYNC_OPTS "$PROJECT_DIR/" "codespace@$CODESPACE_HOST:$CODESPACE_PATH/"; then
        log_success "Successfully pushed to Codespace"
    else
        log_error "Failed to push to Codespace"
        exit 1
    fi
}

# Pull Codespace changes to local
pull_from_codespace() {
    log_info "Pulling changes from Codespace..."
    check_codespace
    
    if rsync $RSYNC_OPTS "codespace@$CODESPACE_HOST:$CODESPACE_PATH/" "$PROJECT_DIR/"; then
        log_success "Successfully pulled from Codespace"
    else
        log_error "Failed to pull from Codespace"
        exit 1
    fi
}

# Watch for changes and auto-sync
watch_and_sync() {
    log_info "Watching for changes (press Ctrl+C to stop)..."
    check_codespace
    
    # Check if inotify-tools is installed
    if ! command -v inotifywait &> /dev/null; then
        log_warn "inotify-tools not installed. Installing..."
        sudo apt-get install -y inotify-tools > /dev/null
    fi
    
    # Watch for file changes and sync
    inotifywait -m -r -e modify,create,delete,move \
        --exclude 'node_modules|\.git|dist|\.next|\.vite' \
        "$PROJECT_DIR" |
    while read path action file; do
        log_info "Detected: $action on $file"
        push_to_codespace
    done
}

# Bidirectional sync (push then pull)
sync_bidirectional() {
    log_info "Performing bidirectional sync..."
    push_to_codespace
    log_info "Waiting 2 seconds before pull..."
    sleep 2
    pull_from_codespace
    log_success "Bidirectional sync complete"
}

# Show status
show_status() {
    log_info "Rsync Sync Status"
    echo ""
    echo "Local Code-Server:"
    echo "  Path: $PROJECT_DIR"
    echo "  Size: $(du -sh $PROJECT_DIR 2>/dev/null | cut -f1)"
    echo ""
    
    if [ -n "$CODESPACE_HOST" ]; then
        echo "GitHub Codespace:"
        echo "  Host: $CODESPACE_HOST"
        echo "  Path: $CODESPACE_PATH"
        echo ""
        
        if ssh -o ConnectTimeout=5 "codespace@$CODESPACE_HOST" "test -d $CODESPACE_PATH" 2>/dev/null; then
            log_success "Codespace is reachable"
            REMOTE_SIZE=$(ssh "codespace@$CODESPACE_HOST" "du -sh $CODESPACE_PATH 2>/dev/null | cut -f1")
            echo "  Size: $REMOTE_SIZE"
        else
            log_error "Codespace is not reachable"
        fi
    else
        log_error "CODESPACE_HOST not configured"
    fi
    
    echo ""
    echo "Rsync Options: $RSYNC_OPTS"
}

# Main script logic
case "${1:-help}" in
    push)
        push_to_codespace
        ;;
    pull)
        pull_from_codespace
        ;;
    watch)
        watch_and_sync
        ;;
    sync)
        sync_bidirectional
        ;;
    status)
        show_status
        ;;
    help|--help|-h)
        cat << EOF
Rsync Synchronization Script for Code-Server ↔ Codespace

USAGE:
    $0 <command>

COMMANDS:
    push      Push local changes to Codespace
    pull      Pull Codespace changes to local
    watch     Watch for changes and auto-sync (requires inotify-tools)
    sync      Bidirectional sync (push then pull)
    status    Show sync status
    help      Show this help message

EXAMPLES:
    # One-time push
    $0 push

    # One-time pull
    $0 pull

    # Watch and auto-sync
    $0 watch

    # Bidirectional sync
    $0 sync

SETUP:
    1. Create a GitHub Codespace:
       https://github.com/cogpy/ad-res-lex-v72-web/codespaces

    2. Get your Codespace SSH host:
       gh codespace list
       gh codespace ssh -c <codespace-name>

    3. Set environment variable:
       export CODESPACE_HOST='<username>.<codespace-name>.github.dev'

    4. Add to ~/.bashrc to persist:
       echo "export CODESPACE_HOST='<username>.<codespace-name>.github.dev'" >> ~/.bashrc

NOTES:
    - Excludes: node_modules, .git, dist, .next, .vite
    - Use --delete to remove files not in source
    - SSH key must be configured for GitHub Codespace

For more info: https://rsync.samba.org/

EOF
        ;;
    *)
        log_error "Unknown command: $1"
        echo "Run '$0 help' for usage information"
        exit 1
        ;;
esac
