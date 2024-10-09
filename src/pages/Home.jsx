import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiURL = "http://localhost:4000";
        const res = await axios.get(apiURL);
        const data = await res.data;
        setData(data?.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();

    return () => {};
  }, []);

  return (
    <div className="container text-center">
      <h1 className="text-3xl font-bold">React Gofiber Blog</h1>

      <div className="grid grid-cols-3">
        {data &&
          data.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col content-center p-2 m-2 border-2 border-black border-solid rounded-md "
            >
              <Link to={`/blog/${item?.blog_id}`}>
                <p>{item?.title}</p>
              </Link>
              <p>{item?.post}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
