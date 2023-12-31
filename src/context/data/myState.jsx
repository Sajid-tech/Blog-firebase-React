import React, { useEffect, useState } from "react";
import MyContext from "./myContext";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { fireDb } from "../../firebase/FirebaseConfig";

// state for light and dark mode

const MyState = (props) => {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(17, 24, 39)";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  // search state
  const [searchkey, setSearchkey] = useState("");
  // loading state
  const [loading, setLoading] = useState(false);

  // get all blog state
  const [getAllBlog, setGetAllBlog] = useState([]);

  function getAllBlogs() {
    setLoading(true);
    try {
      const q = query(collection(fireDb, "blogPost"), orderBy("time"));
      const data = onSnapshot(q, (QuerySnapshot) => {
        let blogArray = [];
        QuerySnapshot.forEach((doc) => {
          blogArray.push({ ...doc.data(), id: doc.id });
        });

        setGetAllBlog(blogArray);
        // console.log(productsArray)
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getAllBlogs();
  }, []);

  // blog delete Function

  const deleteBlogs = async (id) => {
    try {
      await deleteDoc(doc(fireDb, "blogPost", id));
      window.location.reload();

      getAllBlogs();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MyContext.Provider
      value={{
        mode,
        toggleMode,
        searchkey,
        setSearchkey,
        loading,
        setLoading,
        getAllBlog,
        deleteBlogs,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default MyState;
