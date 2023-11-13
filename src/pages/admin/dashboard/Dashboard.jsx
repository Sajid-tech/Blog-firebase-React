import React, { useContext, useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import myContext from "../../../context/data/myContext";
import { Button } from "@material-tailwind/react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";
import { auth, fireDb } from "../../../firebase/FirebaseConfig";
import { signOut } from "firebase/auth";
import { getDocs, collection, where, query } from "firebase/firestore";

function Dashboard() {
  const context = useContext(myContext);
  const { mode, deleteBlogs } = context;

  const navigate = useNavigate();

  const { userId } = useParams();
  const [userData, setUserData] = useState(null);
  const [totalBlogs, setTotalBlogs] = useState(0); // new state for total blogs
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userImage, setUserImage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = auth.currentUser; // get the current user
        // console.log(user);

        if (user) {
          // update user indormation

          setUserName(user.displayName || "Guest");
          setUserEmail(user.email || "guest@example.com");

          // check if the user has a google provider

          const isGoogleUser = user.providerData.some(
            (provider) => provider.providerId === "google.com"
          );

          //set user image based on the provider

          setUserImage(
            isGoogleUser
              ? user.photoURL ||
                  "https://cdn-icons-png.flaticon.com/512/4980/4980606.png"
              : "https://cdn-icons-png.flaticon.com/512/4980/4980606.png"
          );

          const q = query(
            collection(fireDb, "blogPost"),
            where("userId", "==", user.uid)
          );
          const userDoc = await getDocs(q);
          const userData = userDoc.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setUserData(userData);

          // update totalblogs state
          setTotalBlogs(userData.length);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [userId]);

  const logout = async () => {
    // localStorage.clear("admin");
    try {
      await signOut(auth);
      navigate("/adminlogin");
    } catch (error) {
      console.log("Error logging out:", error);
    }
    // navigate("/");
  };

  const isDarkMode = mode === "dark";

  const containerStyle = {
    background: isDarkMode
      ? "linear-gradient(90deg, #2d3748 0%, #1a202c 100%)"
      : "linear-gradient(90deg, #edf2f7 0%, #f9fafb 100%)",
    color: isDarkMode ? "#F3F4F6" : "#374151",
  };

  const buttonStyle = {
    background: isDarkMode ? "#6B7280" : "#3B82F6",
    color: isDarkMode ? "white" : "black",
  };

  return (
    <Layout>
      <div className="py-10">
        <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 lg:gap-8 px-4 lg:px-0 mb-8">
          <div className="left">
            <img
              className="w-40 h-40 object-cover rounded-full border-4 border-blue-500 p-2 shadow-lg"
              src={userImage}
              alt="profile"
            />
          </div>
          <div className="right">
            <h1
              className=" font-extrabold text-4xl  mb-2"
              style={{ color: isDarkMode ? "white" : "black" }}
            >
              {userName}
            </h1>
            {/* <h2
              style={{ color: isDarkMode ? "white" : "black" }}
              className="font-semibold text-xl"
            >
              Software Developer
            </h2> */}
            <h2
              style={{ color: isDarkMode ? "white" : "black" }}
              className="font-semibold text-xl"
            >
              {userEmail}
            </h2>
            <h2
              style={{ color: isDarkMode ? "white" : "black" }}
              className="font-semibold text-xl"
            >
              <span className="text-blue-500">Total Blog: {totalBlogs}</span>
            </h2>
            <div className="flex gap-4 mt-4">
              <Link to={`/createblog/${userId}`}>
                <Button
                  style={buttonStyle}
                  className="px-12 py-3 hover:bg-blue-600 hover:text-white transition duration-300 transform hover:scale-105"
                >
                  Create Blog
                </Button>
              </Link>

              <Button
                onClick={logout}
                style={buttonStyle}
                className="px-12 py-3 hover:bg-red-600 hover:text-white transition duration-300 transform hover:scale-105"
              >
                Logout
              </Button>
            </div>
          </div>
        </div>

        <hr
          className={`border-2 ${
            isDarkMode ? "border-gray-600" : "border-gray-300"
          } my-8`}
        />

        <div className="container mx-auto px-4 max-w-7xl my-5">
          <div className="overflow-x-auto shadow-lg rounded-lg">
            <table
              className={`w-full border-2 shadow-lg text-sm text-left ${containerStyle}`}
            >
              <thead style={containerStyle} className="text-xs">
                <tr>
                  <th style={containerStyle} scope="col" className="px-6 py-4">
                    S.No
                  </th>
                  <th style={containerStyle} scope="col" className="px-6 py-4">
                    Thumbnail
                  </th>
                  <th style={containerStyle} scope="col" className="px-6 py-4">
                    Title
                  </th>
                  <th style={containerStyle} scope="col" className="px-6 py-4">
                    Category
                  </th>
                  <th style={containerStyle} scope="col" className="px-6 py-4">
                    Date
                  </th>
                  <th style={containerStyle} scope="col" className="px-6 py-4">
                    Action
                  </th>
                </tr>
              </thead>
              {/* tbody  */}
              <tbody>
                {userData &&
                  userData.map((item, index) => {
                    return (
                      <tr
                        key={item.id}
                        className="border-b-2"
                        style={containerStyle}
                      >
                        {/* s. no  */}
                        <td style={containerStyle} className="px-6 py-4">
                          {index + 1}
                        </td>
                        {/* blog thumbnail  */}

                        <th
                          style={containerStyle}
                          scope="row"
                          className="px-6 py-4 font-semibold"
                        >
                          {/* thumbnail  */}
                          <img
                            className="w-16 h-16 object-cover rounded-lg shadow-lg"
                            src={item.thumbnail}
                            alt="thumbnail"
                          />
                        </th>
                        {/* blog ka title  */}
                        <td
                          // key={item.id}
                          style={containerStyle}
                          className="px-6 py-4"
                        >
                          {item.title}
                        </td>
                        {/* blog category  */}
                        <td style={containerStyle} className="px-6 py-4">
                          {item.category}
                        </td>
                        {/* date  */}
                        <td style={containerStyle} className="px-6 py-4">
                          {item.date}
                        </td>

                        {/* delete blog  */}
                        <td style={containerStyle} className="px-6 py-4">
                          <button
                            onClick={() => deleteBlogs(item?.id)}
                            className="px-4 py-2 rounded-lg text-white font-bold bg-red-500 hover:bg-red-600 flex items-center justify-center transition duration-300 transform hover:scale-105"
                          >
                            <FiTrash2 className="mr-2" /> Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
