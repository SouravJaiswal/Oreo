const path = require("path");
const glob = require("glob");

module.exports = {
  title: "Oreo",
  components: function () {
    return glob
      .sync(path.resolve(__dirname, "src/*/*.tsx"))
      .filter(function (module) {
        const files = module.split("/");
        if (
          files[files.length - 1] === "index.tsx" ||
          files[files.length - 1].indexOf("interface") >= 0
        ) {
          return false;
        }
        return true;
      });
  },
  resolver: require("react-docgen").resolver.findAllComponentDefinitions,
  propsParser: require("react-docgen-typescript").withDefaultConfig({
    propFilter: { skipPropsWithoutDoc: false },
  }).parse,
  require: [path.join(__dirname, "src/main.scss")],
};
