# Sync Guide: Code-Server ↔ GitHub Codespace

This guide explains how to keep your local code-server instance synchronized with GitHub Codespace.

---

## **Architecture Overview**

```
┌─────────────────────────────────────────────────────────────┐
│                    GitHub Repository                        │
│              (cogpy/ad-res-lex-v72-web)                     │
│                         ↕ (git sync)                        │
├──────────────────────────┬──────────────────────────────────┤
│                          │                                  │
│   Local Code-Server      │    GitHub Codespace             │
│   (Sandbox)              │    (Cloud)                       │
│                          │                                  │
│ https://8329-...         │  https://github.com/...          │
│ Port: 8329               │  (Web or SSH)                    │
│ Password: 8e95bf...      │                                  │
│                          │                                  │
│ ✅ Fast local edits      │  ✅ Cloud-based                  │
│ ✅ Direct file access    │  ✅ More resources               │
│ ✅ No internet needed    │  ✅ Collaborative                │
│                          │                                  │
└──────────────────────────┴──────────────────────────────────┘
```

---

## **Workflow: How to Keep Them in Sync**

### **Method 1: Git Push/Pull (Recommended)**

#### From Code-Server (Local):
```bash
# Make changes in code-server
# Then commit and push:
cd /home/ubuntu/ad-res-lex-v72-web
git add .
git commit -m "Update: description of changes"
git push origin main
```

#### From Codespace (Cloud):
```bash
# Make changes in Codespace
# Then commit and push:
git add .
git commit -m "Update: description of changes"
git push origin main

# Other developers/instances pull the changes:
git pull origin main
```

---

### **Method 2: Automatic Sync with GitHub Actions**

A GitHub Actions workflow automatically runs on every push to verify both environments work:

**Workflow file:** `.github/workflows/sync-codespace.yml`

**What it does:**
- ✅ Installs dependencies
- ✅ Builds the project
- ✅ Runs tests
- ✅ Verifies sync is complete

**View results:** https://github.com/cogpy/ad-res-lex-v72-web/actions

---

## **Step-by-Step: Working with Both Environments**

### **Scenario 1: Edit in Code-Server, Sync to Codespace**

```bash
# 1. Edit files in code-server
# (https://8329-i1k7qmvjohh5kvg1wbqmt-1df655df.us2.manus.computer)

# 2. Commit and push changes
cd /home/ubuntu/ad-res-lex-v72-web
git add .
git commit -m "Add new feature"
git push origin main

# 3. In Codespace, pull the changes
git pull origin main
pnpm install  # if dependencies changed
pnpm dev      # restart dev server
```

### **Scenario 2: Edit in Codespace, Sync to Code-Server**

```bash
# 1. Edit files in Codespace
# (https://github.com/cogpy/ad-res-lex-v72-web)

# 2. Commit and push changes
git add .
git commit -m "Update documentation"
git push origin main

# 3. In code-server, pull the changes
cd /home/ubuntu/ad-res-lex-v72-web
git pull origin main
pnpm install  # if dependencies changed
```

---

## **Best Practices**

### ✅ DO:
- **Commit frequently** with clear messages
- **Pull before starting work** to get latest changes
- **Push after finishing** a feature or fix
- **Use meaningful commit messages** (e.g., "Fix: navbar responsive design")
- **Test locally** before pushing to GitHub

### ❌ DON'T:
- **Don't edit the same file** simultaneously in both environments
- **Don't force push** (`git push -f`) unless absolutely necessary
- **Don't commit node_modules** or build artifacts
- **Don't leave uncommitted changes** for long periods

---

## **Resolving Conflicts**

If you get a merge conflict:

```bash
# 1. Pull the latest changes
git pull origin main

# 2. Git will mark conflicting sections
# Look for: <<<<<<< HEAD, =======, >>>>>>>

# 3. Edit the file and choose which version to keep
# Remove the conflict markers

# 4. Stage and commit
git add .
git commit -m "Resolve merge conflict"
git push origin main
```

---

## **Quick Reference: Common Commands**

```bash
# Check status
git status

# See recent commits
git log --oneline -10

# See differences
git diff

# Undo uncommitted changes
git checkout -- <filename>

# Undo last commit (keep changes)
git reset --soft HEAD~1

# See all branches
git branch -a

# Switch to a branch
git checkout <branch-name>

# Create a new branch
git checkout -b <new-branch-name>
```

---

## **Environment Comparison**

| Feature | Code-Server (Local) | Codespace (Cloud) |
|---------|-------------------|-------------------|
| **Access** | Browser (password) | Browser or SSH |
| **Speed** | Fast (local) | Medium (cloud) |
| **Resources** | Limited | More CPU/RAM |
| **Cost** | Free | 120 hrs/mo free |
| **Offline** | ✅ Yes | ❌ No |
| **Collaboration** | ❌ No | ✅ Yes (via GitHub) |
| **Port Forwarding** | Manual | Automatic |
| **Terminal** | ✅ Full | ✅ Full |

---

## **Recommended Workflow**

1. **Daily Development:** Use code-server (faster, local)
2. **Heavy Builds:** Use Codespace (more resources)
3. **Collaboration:** Push to GitHub, others pull
4. **Backup:** Always commit important work to GitHub

---

## **Troubleshooting**

### "Permission denied" when pushing
```bash
# Check SSH key is configured
ssh -T git@github.com

# Or use HTTPS with token
git remote set-url origin https://<token>@github.com/cogpy/ad-res-lex-v72-web.git
```

### "Your branch is behind"
```bash
# Pull latest changes
git pull origin main
```

### "Merge conflict"
See "Resolving Conflicts" section above.

### "Files not syncing"
```bash
# Force refresh
git fetch origin
git reset --hard origin/main
```

---

## **Useful Links**

- **Repository:** https://github.com/cogpy/ad-res-lex-v72-web
- **Code-Server:** https://8329-i1k7qmvjohh5kvg1wbqmt-1df655df.us2.manus.computer
- **GitHub Actions:** https://github.com/cogpy/ad-res-lex-v72-web/actions
- **Git Documentation:** https://git-scm.com/doc

---

## **Summary**

- ✅ Both environments share the same GitHub repository
- ✅ Use `git push` to sync from one to the other
- ✅ Use `git pull` to get latest changes
- ✅ GitHub Actions automatically verifies builds
- ✅ Work in whichever environment suits your task best
