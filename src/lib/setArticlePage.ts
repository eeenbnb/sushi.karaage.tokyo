import fs from "fs-extra";
import type { Article } from "~/types/Article";

const setArticlePage = (item: Article) => {
  const body = item.body;
  fs.writeFileSync(`docs/article/${item.title}.html`, body, { encoding: "utf-8" });
};

export default setArticlePage;
