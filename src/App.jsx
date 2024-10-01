import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:4000");
      const data = res.data;
      setData(data?.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  return (
    <>
      <div className="container text-center">
        <h1 className="text-3xl font-bold">React Gofiber Blog</h1>

        <div>
          {data.map((item) => (
            <div key={item?.id} className="flex flex-col py-2 ">
              <p>{item?.title}</p>
              <p>{item?.post}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
