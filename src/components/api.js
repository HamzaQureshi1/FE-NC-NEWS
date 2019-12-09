import axios from "axios";

export const getArticles = topic => {
  console.log(topic);
  return axios
    .get("https://hamza-nc-news.herokuapp.com/api/articles", {
      params: {
        topic: topic
      }
    })

    .then(response => {
      return response.data.articles;
    });
};

export const getSingleArticle = article_id => {
  console.log(article_id);
  return axios
    .get(`https://hamza-nc-news.herokuapp.com/api/articles/${article_id}`)
    .then(response => {
      return response.data.article;
    });
};
