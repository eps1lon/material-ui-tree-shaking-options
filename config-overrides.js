const { override, addBabelPlugin } = require("customize-cra");

/**
 * For prod builds webpack with tree-shaking does all the heavy lifting. tree-shaking
 * is an optimization and therefore disabled in dev. This can affect build times
 * which is why we apply manual tree shaking by rewriting the named imports to path
 * imports.
 *
 * Don't do this for the core if you import anything other than components e.g.
 * `import { withStyles } from '@material-ui/core'` will be rewritten to
 * `import withStyles from '@material-ui/core/withStyles'` which will not import the
 * correct function.
 */

const devOverride = override(
  addBabelPlugin([
    "transform-imports",
    {
      "@material-ui/icons": {
        transform: "@material-ui/icons/esm/${member}"
      }
    }
  ])
);

const prodOverride = override();

module.exports =
  process.env.NODE_ENV === "production" ? prodOverride : devOverride;
