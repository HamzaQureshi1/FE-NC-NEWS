import axios from "axios";

const getArticles = topic => {
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
export default getArticles;
