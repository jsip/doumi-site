## 💻 Local Development

Start development environment with

```
$ cd doumi-site
$ npm install
$ gatsby develop
```

The site is now available at `localhost:8000/`.

You can connect Netlify CMS to your [local git repo](https://www.netlifycms.org/docs/beta-features/#working-with-a-local-git-repository) (currenly a beta feature) by running this command in a separate terminal.

```
$ npx netlify-cms-proxy-server
```

The Netlify CMS Admin will then be available at `localhost:8000/admin`.

For more details on how to set up the CMS, check out the [Netlify CMS Docs](https://www.netlifycms.org/docs/intro/).

## 🙌 Credits and thanks

- This template was inspired by [gatsby-starter-netlify-cms](https://github.com/netlify-templates/gatsby-starter-netlify-cms)
- Taylor Bell for his great course [Build a Blog with React and Markdown using Gatsby](https://egghead.io/courses/build-a-blog-with-react-and-markdown-using-gatsby), available for free on Egghead.io
- [Merakiui.com](https://merakiui.com/) for the great free Tailwind CSS components
- [Unsplash](https://unsplash.com/) and photographers for amazing photos
- How to hide and show navbar on scroll: https://dev.to/pratiksharm/navbar-hide-and-show-on-scroll-using-custom-react-hooks-1k98
- How to use prevent layout components from unmounting: https://www.gatsbyjs.com/docs/how-to/routing/layout-components/#how-to-prevent-layout-components-from-unmounting
