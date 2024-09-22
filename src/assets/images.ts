const context = require.context("./", true, /\.(png|jpe?g|svg)$/);

const images = context
  .keys()
  .filter((x) => x.startsWith("."))
  .reduce((acc: { [key: string]: any }, key) => {
    acc[key.replace(/^\.\//, "")] = context(key).default;
    return acc;
  }, {});

export { images };
