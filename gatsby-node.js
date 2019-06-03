const path = require(`path`);

exports.createPages = ({ actions: { createPage } }) => {
    ["project1", "project2", "project3", "project4", "project5"].forEach(projectItem => {
    createPage({
      path: projectItem,
      component: path.resolve(`./src/templates/projectDetail.js`),
      context: {
        slug: projectItem,
        title: projectItem,
        imgsRegex: `/${projectItem}_/`
      }
    });
  });
};
