const withTM = require("next-transpile-modules")(["@turborepo-example/ui"]);

module.exports = withTM({
  reactStrictMode: true,
});
