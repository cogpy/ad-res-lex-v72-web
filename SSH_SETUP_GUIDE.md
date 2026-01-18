# SSH Configuration for GitHub Codespace

## Quick Start: Launch Codespace (No SSH Setup Required!)

The **easiest way** to get started is to use GitHub Codespaces directly without SSH:

### Option 1: Web Browser (Recommended - No Setup)
1. Go to: https://github.com/cogpy/ad-res-lex-v72-web
2. Click **Code** → **Codespaces** → **Create codespace on main**
3. Wait ~2 minutes for environment to load
4. Full VS Code experience in browser - ready to code!

### Option 2: VS Code Desktop (With GitHub Extension)
1. Install [GitHub Codespaces extension](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces) in VS Code
2. Open VS Code
3. Click **Remote Explorer** → **Codespaces**
4. Find your repository and click "Create on main"
5. VS Code connects automatically

---

## Advanced: SSH Configuration (Optional)

If you prefer SSH access from terminal:

### Step 1: Generate SSH Key

```bash
ssh-keygen -t ed25519 -C "d@rzo.io" -f ~/.ssh/github_codespace
```

Press Enter twice (no passphrase needed, or set one for security).

### Step 2: Add Public Key to GitHub

```bash
# Copy your public key
cat ~/.ssh/github_codespace.pub
```

1. Go to: https://github.com/settings/keys
2. Click **New SSH key**
3. Paste the key content
4. Click **Add SSH key**

### Step 3: Configure SSH Config

Create/edit `~/.ssh/config`:

```
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/github_codespace
  AddKeysToAgent yes
```

### Step 4: Test SSH Connection

```bash
ssh -T git@github.com
# Expected output: Hi <username>! You've successfully authenticated...
```

### Step 5: Connect via SSH

```bash
# List your codespaces
gh codespace list

# Connect to a codespace via SSH
gh codespace ssh -c <codespace-name>

# Or use direct SSH
ssh -i ~/.ssh/github_codespace <codespace-name>.<username>.github.dev
```

---

## Development Inside Codespace

Once you're inside the Codespace (any method):

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Run tests
pnpm test
```

The dev server will be available at the forwarded port (usually `http://localhost:3000`).

---

## Useful GitHub Codespace Commands

```bash
# List all your codespaces
gh codespace list

# Stop a codespace (saves resources)
gh codespace stop -c <codespace-name>

# Delete a codespace
gh codespace delete -c <codespace-name>

# Rebuild codespace (if .devcontainer config changes)
gh codespace rebuild -c <codespace-name>

# View codespace logs
gh codespace logs -c <codespace-name>
```

---

## Codespace Features & Limits

✅ **Included:**
- 120 free hours per month (GitHub Pro)
- Full terminal access
- Git integration
- All VS Code extensions
- Port forwarding (3000, 5173, etc.)
- 2-4 core CPU options
- Auto-stops after 30 minutes of inactivity

⚠️ **Considerations:**
- Codespaces are billed by compute time
- Free tier: 60 hours/month (limited)
- Pro tier: 120 hours/month
- Can use multiple codespaces simultaneously

---

## Troubleshooting

### "Permission denied (publickey)"
- Ensure SSH key is added to GitHub: https://github.com/settings/keys
- Verify SSH config is correct: `cat ~/.ssh/config`
- Test connection: `ssh -T git@github.com`

### Codespace won't start
- Check GitHub status: https://www.githubstatus.com
- Try rebuilding: `gh codespace rebuild -c <name>`
- Delete and recreate: `gh codespace delete -c <name>`

### Port forwarding not working
- Codespace automatically forwards ports 3000 and 5173
- Check port visibility in Codespace settings
- Ensure dev server is actually running: `pnpm dev`

---

## Recommended Workflow

1. **For quick edits:** Use browser Codespace (Option 1)
2. **For heavy development:** Use VS Code Codespace (Option 2)
3. **For terminal work:** Use SSH (Advanced setup)

All methods use the same underlying Codespace - pick what works best for you!
