import getIssuesForArticle from "./lib/getIssuesForArticle";
import setArticlePage from "./lib/setArticlePage";
import setInitDocsFoldars from "./lib/setInitDocsFoldars";

const main = async () => {
  setInitDocsFoldars();

  const articleData = await getIssuesForArticle();
  articleData.forEach((item) => {
    setArticlePage(item);
  });
};

main();
