import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BlogDetails from "./pages/BlogDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>
    </>
  );
}

export default App;
