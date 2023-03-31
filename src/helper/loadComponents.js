const loadComponents = async () => {
  const contexts = [
    require.context("../components/canvas", true, /\.jsx$/),
    require.context("../components/css", true, /\.jsx$/),
    require.context("../components/svg", true, /\.jsx$/),
    require.context("../components/webGL", true, /\.jsx$/),
    require.context("../components/utility", true, /\.jsx$/),

  ];

  const components = {};

  contexts.forEach(async (context) => {
    for (const key of context.keys()) {
      const componentName = key.replace(/^\.\/(.*)\/(.*)\.jsx$/, "$2");; //extracts filename without extension
      components[componentName] = (await context(key)).default; //accesses the default export of the file
    }
  });
  return components;
};

export default loadComponents;
