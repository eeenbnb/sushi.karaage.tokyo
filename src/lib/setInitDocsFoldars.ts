import fs from "fs-extra";

const setInitDocsFoldars = () => {
  fs.removeSync("docs");
  fs.mkdirSync("docs");
  fs.mkdirSync("docs/article");
  fs.mkdirSync("docs/page");
};

export default setInitDocsFoldars;
