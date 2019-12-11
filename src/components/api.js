import axios from "axios";

export const getArticles = (topic, sort_by) => {
  return axios
    .get("https://hamza-nc-news.herokuapp.com/api/articles", {
      params: {
        topic: topic,
        sort_by: sort_by
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

export const changeVotesOnArticle = (article_id, value) => {
  return axios
    .patch(`https://hamza-nc-news.herokuapp.com/api/articles/${article_id}`, {
      inc_votes: value
    })
    .then(response => {
      return response.data.article;
    });
};

export const getComments = article_id => {
  return axios
    .get(
      `https://hamza-nc-news.herokuapp.com/api/articles/${article_id}/comments`
    )
    .then(response => {
      return response.data.comments;
    });
};
