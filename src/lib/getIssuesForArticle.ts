import { Octokit } from "@octokit/rest";
import type { Article } from "~/types/Article";

const getIssuesForArticle = async (): Promise<Article[]> => {
  const octokit = new Octokit();
  const { data } = await octokit.rest.issues.listForRepo({
    owner: "eeenbnb",
    repo: "sushi.karaage.tokyo",
  });

  return getArtcleData(filterByEeeNbnb(data));
};

const filterByEeeNbnb = (data: any) => {
  return data.filter((v: any) => {
    return v.user?.login == "eeenbnb";
  });
};

const getArtcleData = (data: any): Article[] => {
  return data.map((v: any) => {
    return {
      title: v.title,
      body: v.body,
    };
  });
};

export default getIssuesForArticle;
