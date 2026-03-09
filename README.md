# anaveo.github.io

Personal portfolio site — Jekyll, dark-mode-first, no frameworks.

Live at: [anaveo.github.io](https://anaveo.github.io)

---

## Running locally (Windows + WSL)

Jekyll on native Windows is unreliable. Use WSL (Ubuntu) instead.

### 1. Open a WSL terminal

In Windows Terminal or PowerShell:
```
wsl
```

### 2. Install Ruby via rbenv (one-time setup)

```bash
# Install dependencies
sudo apt update && sudo apt install -y git curl libssl-dev libreadline-dev zlib1g-dev \
  autoconf bison build-essential libyaml-dev libncurses5-dev libffi-dev libgdbm-dev

# Install rbenv + ruby-build
curl -fsSL https://github.com/rbenv/rbenv-installer/raw/HEAD/bin/rbenv-installer | bash

# Add rbenv to your shell (add these lines to ~/.bashrc too)
export PATH="$HOME/.rbenv/bin:$PATH"
eval "$(rbenv init -)"

# Install Ruby 3.3
rbenv install 3.3.0
rbenv global 3.3.0

# Verify
ruby -v   # should print ruby 3.3.x
```

### 3. One-time cleanup (first WSL run only)

Jekyll may have previously built the site on Windows, creating `_site/` and `.jekyll-cache/`
with Windows ACLs that WSL can't write to. Clear them from **PowerShell** (not WSL) where
you have full Windows permissions:

```powershell
# Run this in PowerShell (not WSL)
cd C:\Users\omana\Desktop\Projects\Portfolio\anaveo.github.io
Remove-Item -Recurse -Force _site, .jekyll-cache
```

After this, WSL will own those directories and you'll never hit this again.

### 4. Navigate to the project

The Windows filesystem is mounted at `/mnt/c/` in WSL:
```bash
cd /mnt/c/Users/omana/Desktop/Projects/Portfolio/anaveo.github.io
```

> Tip: add an alias to your `~/.bashrc`:
> `alias portfolio="cd /mnt/c/Users/omana/Desktop/Projects/Portfolio/anaveo.github.io"`

### 5. Install gems

```bash
gem install bundler
bundle install
```

### 6. Serve locally

```bash
bundle exec jekyll serve
```

Open [http://localhost:4000](http://localhost:4000) in your browser.

**Useful flags:**
```bash
bundle exec jekyll serve --livereload   # auto-reload on file changes
bundle exec jekyll serve --drafts       # include draft posts
bundle exec jekyll build                # build only, output to _site/
```

---

## Project setup checklist

After cloning or after the initial revamp, each `_projects/*.md` file needs two frontmatter fields:

```yaml
date: 2024-01       # YYYY-MM — used for sorting (newest first)
featured: true      # true = 2-column wide card, false = standard card
```

---

## Deployment

Push to `main` — GitHub Actions builds and deploys automatically to the `gh-pages` branch.

Workflow file: `.github/workflows/deploy.yml`

---

## Project structure

```
_layouts/       → default, home, project, about
_includes/      → head, nav, footer, figure
_sass/          → _variables, _reset, _nav, _home, _project, _about
assets/css/     → main.scss (master import)
_projects/      → project markdown files
_pages/         → about.md, 404.md
_data/          → cv.yml, socials.yml
assets/pdf/     → resume PDF
assets/img/     → project images
```
