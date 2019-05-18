# material-ui-tree-shaking-options

One option per branch:

- [`master`](https://github.com/eps1lon/material-ui-tree-shaking-options/tree/master) uses named imports and default create-react-app
- [`use-path-imports`](https://github.com/eps1lon/material-ui-tree-shaking-options/tree/use-path-imports) shows that path imports cause a minimal increased for production builds
- [`use-usedExports`](https://github.com/eps1lon/material-ui-tree-shaking-options/tree/use-usedExports) shows that `usedExports` webpack option doesn't help startup times for dev builds
- [`use-babel-plugin-import`](https://github.com/eps1lon/material-ui-tree-shaking-options/tree/use-babel-plugin-import) shows that [`babel-plugin-import`](https://www.npmjs.com/package/babel-plugin-import) help startup times for dev builds
- [`use-babel-transform-import`](https://github.com/eps1lon/material-ui-tree-shaking-options/tree/use-babel-transform-import) shows that [`babel-plugin-transform-import`](https://www.npmjs.com/package/babel-plugin-transform-import) help startup times for dev builds
