import React, { useContext } from "react";
import myContext from "../../context/data/myContext";
import Layout from "../../components/layout/Layout";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function AllBlogs() {
  const context = useContext(myContext);
  const { mode, getAllBlog } = context;

  const navigate = useNavigate();

  //* Create markup function
  function createMarkup(c) {
    return { __html: c };
  }

  return (
    <Layout>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto max-w-7xl ">
          {/* Top Heading  */}
          <div className="mb-5">
            <h1
              className=" text-center text-2xl font-bold"
              style={{
                color: mode == "dark" ? "rgba(45,196,121,1)" : " black",
              }}
            >
              All Travel Junkies Blog
            </h1>
          </div>
          {/* Main Content  */}
          <div className="flex flex-wrap justify-center gap-5 m-4 mb-5">
            {/* Card 1  */}
            {getAllBlog.length > 0 ? (
              <>
                {getAllBlog.map((item, index) => {
                  const { thumbnail, id, date, title, content } = item;
                  return (
                    <Card
                      className="mt-6 w-96 "
                      key={index}
                      style={{
                        background:
                          mode === "dark"
                            ? "linear-gradient(0deg, rgba(228,230,217,1) 0%, rgba(38,138,138,1) 90%, rgba(9,39,31,1) 100%)"
                            : "white",
                      }}
                    >
                      <CardHeader
                        color="blue-gray"
                        style={{
                          background:
                            mode === "dark" ? "rgb(30, 41, 59)" : "white",
                          borderBottom:
                            mode === "dark"
                              ? " 4px solid rgb(226, 232, 240)"
                              : " 4px solid rgb(30, 41, 59)",
                        }}
                        className={`relative h-56 shadow-lg  hover:-translate-y-1 cursor-pointer hover:shadow-gray-400
                      ${mode === "dark" ? "shadow-gray-700" : "shadow-xl"} 
                      rounded-xl overflow-hidden`}
                      >
                        {/* Blog Thumbnail  */}
                        <img
                          className=" w-full h-full object-fill "
                          src={thumbnail}
                          alt="blog"
                        />
                      </CardHeader>

                      {/* Top Items  */}
                      <CardBody>
                        {/* Blog Date  */}
                        <Typography
                          variant="h6"
                          color="blue-gray"
                          className="mb-2"
                          style={{
                            color:
                              mode === "dark" ? "black" : " rgb(30, 41, 59)",
                          }}
                        >
                          {date}
                        </Typography>

                        {/* Blog Title  */}
                        <Typography
                          variant="h3"
                          color="blue-gray"
                          className="mb-2"
                          style={{
                            color:
                              mode === "dark" ? "black" : " rgb(30, 41, 59)",
                          }}
                        >
                          {title}
                        </Typography>

                        {/* Blog Description  */}
                        <Typography
                          color="blue-gray"
                          className="mb-2"
                          style={{
                            color:
                              mode === "dark" ? "black" : " rgb(30, 41, 59)",
                          }}
                        >
                          {/* {`${content.slice(0, 150)}...`} */}

                          <div
                            dangerouslySetInnerHTML={{
                              __html: content

                                .replace(/\s+/g, " ")
                                .slice(0, 100),
                            }}
                          ></div>
                          {/* <div
                            className={`[&> h1]:text-[32px] [&>h1]:font-bold  [&>h1]:mb-2.5
                        ${
                          mode === "dark"
                            ? "[&>h1]:text-[#ff4d4d]"
                            : "[&>h1]:text-black"
                        }

                        [&>h2]:text-[24px] [&>h2]:font-bold [&>h2]:mb-2.5
                        ${
                          mode === "dark"
                            ? "[&>h2]:text-white"
                            : "[&>h2]:text-black"
                        }

                        [&>h3]:text-[18.72] [&>h3]:font-bold [&>h3]:mb-2.5
                        ${
                          mode === "dark"
                            ? "[&>h3]:text-white"
                            : "[&>h3]:text-black"
                        }

                        [&>h4]:text-[16px] [&>h4]:font-bold [&>h4]:mb-2.5
                        ${
                          mode === "dark"
                            ? "[&>h4]:text-white"
                            : "[&>h4]:text-black"
                        }

                        [&>h5]:text-[13.28px] [&>h5]:font-bold [&>h5]:mb-2.5
                        ${
                          mode === "dark"
                            ? "[&>h5]:text-white"
                            : "[&>h5]:text-black"
                        }

                        [&>h6]:text-[10px] [&>h6]:font-bold [&>h6]:mb-2.5
                        ${
                          mode === "dark"
                            ? "[&>h6]:text-white"
                            : "[&>h6]:text-black"
                        }

                        [&>p]:text-[16px] [&>p]:mb-1.5
                        ${
                          mode === "dark"
                            ? "[&>p]:text-[#7efff5]"
                            : "[&>p]:text-black"
                        }

                        [&>ul]:list-disc [&>ul]:mb-2
                        ${
                          mode === "dark"
                            ? "[&>ul]:text-white"
                            : "[&>ul]:text-black"
                        }

                        [&>ol]:list-decimal [&>li]:mb-10
                        ${
                          mode === "dark"
                            ? "[&>ol]:text-white"
                            : "[&>ol]:text-black"
                        }

                        [&>li]:list-decimal [&>ol]:mb-2
                        ${
                          mode === "dark"
                            ? "[&>ol]:text-white"
                            : "[&>ol]:text-black"
                        }

                        [&>img]:rounded-lg
                        `}
                            dangerouslySetInnerHTML={createMarkup(
                              content.slice(0, 150)
                            )}
                          ></div> */}
                        </Typography>
                      </CardBody>
                      <CardFooter className="pt-0 ">
                        <Button onClick={() => navigate(`/bloginfo/${id}`)}>
                          Read More
                        </Button>
                      </CardFooter>
                    </Card>
                  );
                })}
              </>
            ) : (
              <>
                <h1>Not Found</h1>
              </>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default AllBlogs;
