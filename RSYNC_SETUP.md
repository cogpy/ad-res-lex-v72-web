# Rsync Setup Guide: Real-Time Code-Server ↔ Codespace Sync

This guide explains how to set up **rsync** for real-time file synchronization between your local code-server and GitHub Codespace.

---

## **Why Rsync?**

| Feature | Git | Rsync |
|---------|-----|-------|
| **Speed** | Slower (commits) | Fast (delta sync) |
| **Real-time** | ❌ Manual | ✅ Automatic |
| **Bandwidth** | Moderate | Minimal (only changes) |
| **Workflow** | Commit-based | File-based |
| **History** | ✅ Full history | ❌ No history |
| **Best for** | Collaboration | Development |

**Use Git** for: Collaboration, version control, backups  
**Use Rsync** for: Real-time development, instant sync

---

## **Quick Start**

### **Step 1: Create GitHub Codespace**

```bash
# Go to repository
https://github.com/cogpy/ad-res-lex-v72-web

# Click: Code → Codespaces → Create codespace on main
# Wait ~2 minutes for environment to load
```

### **Step 2: Get Codespace SSH Host**

```bash
# List your codespaces
gh codespace list

# Output will show something like:
# cogpy/ad-res-lex-v72-web  <codespace-name>  Available  ...

# Get the SSH host
gh codespace ssh -c <codespace-name>

# It will show: <username>.<codespace-name>.github.dev
```

### **Step 3: Configure Rsync**

```bash
# Set environment variable (temporary)
export CODESPACE_HOST='<username>.<codespace-name>.github.dev'

# Or add to ~/.bashrc (permanent)
echo "export CODESPACE_HOST='<username>.<codespace-name>.github.dev'" >> ~/.bashrc
source ~/.bashrc
```

### **Step 4: Test Rsync Connection**

```bash
# Test SSH connection to Codespace
ssh -T codespace@$CODESPACE_HOST

# Should output: Hi <username>! You've successfully authenticated...
```

### **Step 5: Use Rsync Sync Script**

```bash
cd /home/ubuntu/ad-res-lex-v72-web

# Push local changes to Codespace
./scripts/rsync-sync.sh push

# Pull Codespace changes to local
./scripts/rsync-sync.sh pull

# Watch and auto-sync (requires inotify-tools)
./scripts/rsync-sync.sh watch

# Check sync status
./scripts/rsync-sync.sh status
```

---

## **Detailed Setup Instructions**

### **1. Install Prerequisites**

Rsync is already installed. For auto-watch feature, install inotify-tools:

```bash
sudo apt-get install -y inotify-tools
```

### **2. Create GitHub Codespace**

**Option A: Web Browser**
1. Go to: https://github.com/cogpy/ad-res-lex-v72-web
2. Click **Code** → **Codespaces** → **Create codespace on main**
3. Wait for environment to load

**Option B: Command Line**
```bash
gh codespace create -r cogpy/ad-res-lex-v72-web -b main
```

### **3. Configure SSH Key for Codespace**

GitHub automatically handles SSH authentication, but verify it works:

```bash
# Test connection
ssh -T git@github.com
# Output: Hi <username>! You've successfully authenticated...

# Test Codespace connection
ssh -T codespace@$CODESPACE_HOST
# Output: Hi <username>! You've successfully authenticated...
```

### **4. Set CODESPACE_HOST Environment Variable**

**Temporary (current session only):**
```bash
export CODESPACE_HOST='dan.ad-res-lex-v72-web-xyz123.github.dev'
```

**Permanent (add to ~/.bashrc):**
```bash
cat >> ~/.bashrc << 'EOF'

# GitHub Codespace rsync sync
export CODESPACE_HOST='dan.ad-res-lex-v72-web-xyz123.github.dev'
EOF

source ~/.bashrc
```

### **5. Verify Setup**

```bash
./scripts/rsync-sync.sh status

# Output should show:
# Local Code-Server: /home/ubuntu/ad-res-lex-v72-web
# GitHub Codespace: dan.ad-res-lex-v72-web-xyz123.github.dev
# ✓ Codespace is reachable
```

---

## **Usage Examples**

### **One-Time Sync**

```bash
# Push local changes to Codespace
./scripts/rsync-sync.sh push

# Pull Codespace changes to local
./scripts/rsync-sync.sh pull

# Bidirectional sync (push then pull)
./scripts/rsync-sync.sh sync
```

### **Continuous Sync**

```bash
# Watch for changes and auto-sync
./scripts/rsync-sync.sh watch

# This will continuously monitor for file changes and sync automatically
# Press Ctrl+C to stop
```

### **Check Status**

```bash
./scripts/rsync-sync.sh status

# Shows:
# - Local directory size
# - Codespace reachability
# - Remote directory size
# - Rsync configuration
```

---

## **Typical Development Workflow**

### **Scenario 1: Develop in Code-Server**

```bash
# 1. Edit files in code-server
# (https://8329-i1k7qmvjohh5kvg1wbqmt-1df655df.us2.manus.computer)

# 2. Watch and auto-sync to Codespace
./scripts/rsync-sync.sh watch

# 3. In Codespace terminal, run dev server
pnpm dev

# 4. Changes sync automatically as you edit
```

### **Scenario 2: Develop in Codespace**

```bash
# 1. In Codespace, edit files and run dev server
pnpm dev

# 2. In code-server, pull changes
./scripts/rsync-sync.sh pull

# 3. View changes in code-server
```

### **Scenario 3: Sync Before Committing**

```bash
# 1. Work in code-server
# 2. Sync to Codespace
./scripts/rsync-sync.sh push

# 3. Test in Codespace
# 4. Commit and push to GitHub
cd /home/ubuntu/ad-res-lex-v72-web
git add .
git commit -m "Feature: description"
git push origin main
```

---

## **Rsync Options Explained**

The script uses these rsync options:

```bash
rsync -avz --delete --exclude=node_modules --exclude=.git --exclude=dist --exclude=.next
```

| Option | Meaning |
|--------|---------|
| `-a` | Archive mode (preserves permissions, timestamps) |
| `-v` | Verbose (shows what's being synced) |
| `-z` | Compress (faster over network) |
| `--delete` | Delete files in destination not in source |
| `--exclude` | Skip these directories (faster, smaller) |

---

## **Excluding Additional Files**

To exclude more files/directories, edit the script:

```bash
# In scripts/rsync-sync.sh, find this line:
RSYNC_OPTS="-avz --delete --exclude=node_modules --exclude=.git --exclude=dist --exclude=.next"

# Add more excludes:
RSYNC_OPTS="-avz --delete --exclude=node_modules --exclude=.git --exclude=dist --exclude=.next --exclude=.env --exclude=*.log"
```

---

## **Troubleshooting**

### **"Permission denied" when connecting**

```bash
# Verify SSH key is configured
ssh -T git@github.com

# Verify Codespace SSH works
ssh -T codespace@$CODESPACE_HOST

# If fails, regenerate SSH key
ssh-keygen -t ed25519 -C "d@rzo.io"
```

### **"CODESPACE_HOST not set"**

```bash
# Check if variable is set
echo $CODESPACE_HOST

# If empty, set it
export CODESPACE_HOST='<username>.<codespace-name>.github.dev'

# Verify
echo $CODESPACE_HOST
```

### **"Codespace is not reachable"**

```bash
# Check if Codespace is running
gh codespace list

# If stopped, start it
gh codespace start -c <codespace-name>

# If deleted, create new one
gh codespace create -r cogpy/ad-res-lex-v72-web -b main
```

### **Rsync is slow**

```bash
# Check network
ping $CODESPACE_HOST

# Reduce verbosity (faster)
# Edit script and remove -v flag

# Or use --bwlimit to throttle
rsync -avz --bwlimit=1000 ...  # 1000 KB/s limit
```

### **Files not syncing**

```bash
# Check if files are excluded
./scripts/rsync-sync.sh status

# Try manual sync with verbose output
rsync -avz /home/ubuntu/ad-res-lex-v72-web/ codespace@$CODESPACE_HOST:/workspaces/ad-res-lex-v72-web/

# Look for errors in output
```

---

## **Advanced: Manual Rsync Commands**

If you prefer to run rsync directly:

```bash
# Push to Codespace
rsync -avz --delete --exclude=node_modules --exclude=.git \
  /home/ubuntu/ad-res-lex-v72-web/ \
  codespace@$CODESPACE_HOST:/workspaces/ad-res-lex-v72-web/

# Pull from Codespace
rsync -avz --delete --exclude=node_modules --exclude=.git \
  codespace@$CODESPACE_HOST:/workspaces/ad-res-lex-v72-web/ \
  /home/ubuntu/ad-res-lex-v72-web/

# Dry run (preview without making changes)
rsync -avz --dry-run --delete \
  /home/ubuntu/ad-res-lex-v72-web/ \
  codespace@$CODESPACE_HOST:/workspaces/ad-res-lex-v72-web/
```

---

## **Combining Git + Rsync**

**Best practice workflow:**

```bash
# 1. Develop with rsync auto-sync
./scripts/rsync-sync.sh watch

# 2. When feature is complete, commit
git add .
git commit -m "Feature: description"
git push origin main

# 3. Stop rsync watch (Ctrl+C)

# 4. Other developers pull changes
git pull origin main
```

---

## **Useful Links**

- **Rsync Documentation:** https://rsync.samba.org/
- **GitHub Codespaces:** https://github.com/features/codespaces
- **Repository:** https://github.com/cogpy/ad-res-lex-v72-web
- **Code-Server:** https://8329-i1k7qmvjohh5kvg1wbqmt-1df655df.us2.manus.computer

---

## **Summary**

✅ **Rsync provides:**
- Real-time file synchronization
- Minimal bandwidth usage (delta sync)
- Fast development workflow
- Works with any editor/IDE

✅ **Combined with Git:**
- Version control and history
- Collaboration and backups
- Code review and CI/CD

**Use rsync for development, git for collaboration!**
