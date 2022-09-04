import fs from "fs-extra";
import ejs from "ejs";
import prettier from "prettier";
import MarkdownIt from "markdown-it";
import hljs from "highlight.js";
import type { Article } from "~/types/Article";

const setArticlePage = (item: Article) => {
  const template = fs.readFileSync("src/template/article.ejs", { encoding: "utf-8" });
  const parsedItem = {
    ...item,
    body: new MarkdownIt({
      highlight: function (code, lang) {
        return hljs.highlightAuto(code, [lang]).value;
      },
      html: true,
      linkify: true,
      breaks: true,
      typographer: true,
    }).render(item.body),
  };
  const html = ejs.render(template, { data: parsedItem });
  fs.writeFileSync(`docs/article/${item.title}.html`, prettier.format(html, { parser: "html" }), { encoding: "utf-8" });
};

export default setArticlePage;
