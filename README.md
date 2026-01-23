# Shinsei Technology — Static Website

This repository contains a small static website scaffold for Shinsei Technology built from a simple template.

Local preview

Open `index.html` in a browser or serve with a local static server. Example using Python 3:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Deploy to GitHub Pages

Option A (recommended): Push to GitHub and enable Pages from the repository settings (choose `gh-pages` or `main`/`docs` depending on your preference).

Option B: Create a `gh-pages` branch and push built files (this repo is already static):

```bash
git init
git add .
git commit -m "Add Shinsei site"
git remote add origin <your-git-url>
git push -u origin main
# In GitHub repo settings > Pages, select branch and folder ("/ (root)")
```

This scaffold uses the images in `/resources/images` (logo + favicon). Replace placeholder text and images as needed.
