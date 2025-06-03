# jangarong.github.io

If you are seeing this page, let's hope it's not because the CI/CD failed.

This is a Next.js based website with a few special things added:

* `/posts/` is used to add static posts in `.mdx` (Markdown) format. See the existing posts for examples.
* There is a "corp" set of files that will not be committed to the repository. (corp = LAN server I run privately) **Please back these gitignored files separately!**
    * `/posts/<name>.corp.mdx` - Posts with this format are intended to be accessed via the corp network.
    * `/public/assets/b/log/corp/<anything>` - Any assets stored here will not be committed. Please use this directory for any assets the corp posts will need.
    * For archive page:
        * `/src/app/b/archive/page.tsx` - This is the archive page which routes to archived singlefiles.
        * `/public/b/archive/*` - This contains archived pages stored in singefile.

Side B development has been paused. Expect bugs on this website!
