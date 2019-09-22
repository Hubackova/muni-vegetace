const path = require(`path`);
const { galleryNames, projectsNames } = require("./src/content/pagesNames");

exports.createPages = ({ actions: { createPage } }) => {
  projectsNames.forEach(projectItem => {
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
  galleryNames.forEach(galleryItem => {
    createPage({
      path: `gallery-${galleryItem}`,
      component: path.resolve(`./src/templates/gallery.js`),
      context: {
        slug: `gallery-${galleryItem}`,
        title: galleryItem,
        imgsRegex: `/${galleryItem}_/`,
        subImgsRegex: `/--${galleryItem}_/`
      }
    });
  });
};
