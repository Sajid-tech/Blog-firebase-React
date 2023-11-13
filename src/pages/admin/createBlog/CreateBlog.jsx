import React, { useState, useContext, useRef } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import myContext from "../../../context/data/myContext";
import { Link, useNavigate } from "react-router-dom";
import { Button, Typography } from "@material-tailwind/react";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import toast from "react-hot-toast";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { fireDb, storage } from "../../../firebase/FirebaseConfig";
import { useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function CreateBlog() {
  // ....
  const { userId } = useParams();
  const context = useContext(myContext);
  const { mode } = context;

  const navigate = useNavigate();

  // Use the hook to get user and loading state
  // const [user] = useAuthState(auth);
  const [blogs, setBlogs] = useState({
    title: "",
    category: "",
    content: "",
    formattedContent: "",
    time: Timestamp.now(),
    thumbnail: "", // Adding thumbnail here
  });

  // quil
  const handleInputEditorChange = (value) => {
    setBlogs({
      ...blogs,
      content: value,
    });
  };

  // Function to handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBlogs({ ...blogs, [name]: value });
  };

  // Function to handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setBlogs({ ...blogs, thumbnail: file });
  };

  // Function to add a blog post
  const addPost = async () => {
    if (
      blogs.title === "" ||
      blogs.category === "" ||
      blogs.content === "" ||
      !blogs.thumbnail
    ) {
      toast.error("Please Fill All Fields");
    } else {
      uploadImage();
    }
  };
  const uploadImage = () => {
    const imageRef = ref(storage, `blogimage/${blogs.thumbnail.name}`);
    uploadBytes(imageRef, blogs.thumbnail).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        const productRef = collection(fireDb, "blogPost");
        try {
          addDoc(productRef, {
            ...blogs,
            userId: userId, // Use the userId from useParams
            thumbnail: url,
            time: Timestamp.now(),
            date: new Date().toLocaleString("en-US", {
              month: "short",
              day: "2-digit",
              year: "numeric",
            }),
          });
          navigate(`/dashboard/${userId}`);
          toast.success("Post Added Successfully");
        } catch (error) {
          toast.error(error.message);
          console.log(error);
        }
      });
    });
  };

  //* Create markup function
  function createMarkup(c) {
    return { __html: c };
  }
  return (
    <div className="container mx-auto max-w-5xl py-6">
      <div
        className="p-5"
        style={{
          background: mode === "dark" ? "#353b48" : "rgb(226, 232, 240)",
          borderBottom:
            mode === "dark"
              ? " 4px solid rgb(226, 232, 240)"
              : " 4px solid rgb(30, 41, 59)",
        }}
      >
        {/* Top Item */}
        <div className="mb-2 flex justify-between">
          <div className="flex gap-2 items-center">
            {/* Dashboard Link */}
            <Link to={navigate(`/dashboard/${userId}`)}>
              <BsFillArrowLeftCircleFill size={25} />
            </Link>

            {/* Text */}
            <Typography
              variant="h4"
              style={{
                color: mode === "dark" ? "white" : "black",
              }}
            >
              Create blog
            </Typography>
          </div>
        </div>
        {/* main Content */}
        <div className="mb-3">
          {/* Thumbnail */}
          {blogs.thumbnail && (
            <img
              className="w-full rounded-md mb-3"
              src={URL.createObjectURL(blogs.thumbnail)}
              alt="thumbnail"
            />
          )}

          {/* Text */}
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-2 font-semibold"
            style={{ color: mode === "dark" ? "white" : "black" }}
          >
            Upload Thumbnail
          </Typography>

          {/* First Thumbnail Input */}
          <input
            type="file"
            accept="image/*"
            className="shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] placeholder-black w-full rounded-md p-1"
            style={{
              background: mode === "dark" ? "#dcdde1" : "rgb(226, 232, 240)",
            }}
            onChange={handleImageUpload}
          />
        </div>
        {/* Second Title Input */}
        <div className="mb-3">
          <input
            label="Enter your Title"
            className={`shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] w-full rounded-md p-1.5 
                 outline-none ${
                   mode === "dark" ? "placeholder-black" : "placeholder-black"
                 }`}
            placeholder="Enter Your Title"
            style={{
              background: mode === "dark" ? "#dcdde1" : "rgb(226, 232, 240)",
            }}
            name="title"
            onChange={handleInputChange}
            value={blogs.title}
          />
        </div>
        {/* Third Category Input */}
        <div className="mb-3">
          <input
            label="Enter your Category"
            className={`shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] w-full rounded-md p-1.5 
                 outline-none ${
                   mode === "dark" ? "placeholder-black" : "placeholder-black"
                 }`}
            placeholder="Enter Your Category"
            style={{
              background: mode === "dark" ? "#dcdde1" : "rgb(226, 232, 240)",
            }}
            name="category"
            onChange={handleInputChange}
            value={blogs.category}
          />
        </div>
        {/* Four Editor */}
        {/* <textarea
          rows="10"
          name="content"
          className="w-full rounded-md p-1.5 shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] outline-none"
          placeholder="Enter your content"
          style={{
            background: mode === "dark" ? "#dcdde1" : "rgb(226, 232, 240)",
          }}
          onChange={handleInputChange}
          value={blogs.content}
        /> */}
        <ReactQuill
          name="content"
          theme="snow"
          onChange={handleInputEditorChange}
          value={blogs.content}
          className="w-full h-full rounded-md p-1.5 shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] outline-none"
          placeholder="Enter your content"
          style={{
            background: mode === "dark" ? "#dcdde1" : "rgb(226, 232, 240)",
          }}
        />

        {/* Six Preview Section  */}
        <div className="">
          <h1 className=" text-center mb-3 text-2xl">Preview</h1>
          <div className="content">
            <div
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
              dangerouslySetInnerHTML={createMarkup(blogs.content)}
            ></div>
          </div>
        </div>

        {/* Five Submit Button */}
        <Button
          className="w-full mt-2 "
          onClick={addPost}
          style={{
            background:
              mode === "dark" ? "rgb(226, 232, 240)" : "rgb(30, 41, 59)",
            color: mode === "dark" ? "rgb(30, 41, 59)" : "rgb(226, 232, 240)",
          }}
        >
          Publish
        </Button>
      </div>
    </div>
  );
}
export default CreateBlog;
