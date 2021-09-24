import axios from "axios";
import { useState, useEffect } from "react";
import moment from "moment";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

const ApiService = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const getData = () => {
    axios
      .get("/posts")
      .then((response) => {
        setResponse(
          response.data.map((item) => {
            return {
              ...item,
              date_of_post: moment(
                new Date(+new Date() - Math.floor(Math.random() * 10000000000))
              ).format("MM/DD/YYYY"),
            };
          })
        );
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const updateData = (id, title, body) => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {id, title, body })
      .then(function (response) {
          console.log(response);
      })
      .catch(function (error) {
          setError(error.message);
          console.log(error, "console.log api");
      })
  };

  useEffect(() => {
      getData();
  }, []);

  return { response, error, loading, updateData };
};

export default ApiService;
