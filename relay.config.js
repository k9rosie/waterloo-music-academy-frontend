module.exports = {
  // ...
  // Configuration options accepted by the `relay-compiler` command-line tool and `babel-plugin-relay`.
  src: "./src",
  schema: "./data/schema.json",
  extensions: ['js', 'jsx'],
  verbose: true,
  exclude: ["**/node_modules/**", "**/__mocks__/**", "**/__generated__/**"],
}
