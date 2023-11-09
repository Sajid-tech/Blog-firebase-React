import React, { useContext, useEffect, useState } from "react";
import myContext from "../../context/data/myContext";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { fireDb } from "../../firebase/FirebaseConfig";
import Layout from "../../components/layout/Layout";
import Loader from "../../components/loader/Loader";

const BlogInfo = () => {
  const context = useContext(myContext);
  const { mode, loading, setLoading } = context;
  const params = useParams();
  console.log(params.id);

  // to get blog info
  const [getBlog, setGetBlog] = useState();

  const getInfoBlogs = async () => {
    setLoading(true);
    try {
      const productTemp = await getDoc(doc(fireDb, "blogPost", params.id));
      if (productTemp.exists()) {
        setGetBlog(productTemp.data());
      } else {
        console.log("Document does not exist");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getInfoBlogs();
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <section className="rounded-lg h-full overflow-hidden max-w-4xl mx-auto px-4 ">
        <div className=" py-4 lg:py-8">
          {loading ? (
            <Loader />
          ) : (
            <div>
              {/* Thumbnail  */}
              <img
                alt="content"
                className="mb-3 rounded-lg h-full w-full"
                src={getBlog?.thumbnail}
              />
              {/* title And date  */}
              <div className="flex justify-between items-center mb-3">
                <h1
                  style={{ color: mode === "dark" ? "white" : "black" }}
                  className=" text-xl md:text-2xl lg:text-2xl font-semibold"
                >
                  {getBlog?.title}
                </h1>
                <p style={{ color: mode === "dark" ? "white" : "black" }}>
                  {getBlog?.date}
                </p>
              </div>
              <div
                className={`border-b mb-5 ${
                  mode === "dark" ? "border-gray-600" : "border-gray-400"
                }`}
              />

              {/* blog Content  */}
              <div style={{ color: mode === "dark" ? "white" : "black" }}>
                {getBlog?.content}
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default BlogInfo;
