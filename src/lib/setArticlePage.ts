import fs from "fs-extra";
import ejs from "ejs";
import prettier from "prettier";
import { marked } from "marked";
import MarkdownIt from "markdown-it";
import type { Article } from "~/types/Article";

var md = require("markdown-it")({
  html: true,
  linkify: true,
  typographer: true,
});

const setArticlePage = (item: Article) => {
  const template = fs.readFileSync("src/template/article.ejs", { encoding: "utf-8" });
  const parsedItem = {
    ...item,
    body: new MarkdownIt({
      html: true,
      linkify: true,
      typographer: true,
    }).render(item.body),
  };
  const html = ejs.render(template, { data: parsedItem });
  // prettier.format(html, { parser: "html" });
  fs.writeFileSync(`docs/article/${item.title}.html`, html, { encoding: "utf-8" });
};

export default setArticlePage;
