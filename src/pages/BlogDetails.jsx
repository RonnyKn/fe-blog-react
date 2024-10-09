import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        //   const apiURL = `process.env.REACT_API}/${id}`;
        const apiURL = `http://localhost:4000/${id}`;
        const res = await axios.get(apiURL);
        const data = await res.data;
        return setData(data?.data);
      } catch (error) {
        return console.log("Error fetching data:", error);
      }
    };
    fetchDetails();
  }, [id]);

  return (
    <>
      <h1>BLOG DETAILS</h1>
      <div className="flex flex-col content-center p-2 m-2 border-2 border-black border-solid rounded-md ">
        <p>{data?.title}</p>
        <p>{data?.post}</p>
      </div>
    </>
  );
};

export default BlogDetails;
