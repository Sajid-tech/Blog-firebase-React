import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import myContext from "../../../context/data/myContext";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../../firebase/FirebaseConfig";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

export default function AdminLogin() {
  const context = useContext(myContext);
  const { mode } = context;

  const navigate = useNavigate();

  const Provider = new GoogleAuthProvider();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    if (!email || !password) {
      return toast.error("Fill all required fields");
    }
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const userId = result.user.uid;
      toast.success("login Sucess");

      // localStorage.setItem("admin", JSON.stringify(result));
      navigate(`/dashboard/${userId}`);
    } catch (error) {
      toast.error("Login Failed");
      console.log(error);
    }
  };

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, Provider);
      const userId = result.user.uid;
      toast.success("Google login successful");
      navigate(`/dashboard/${userId}`); // Redirect to the dashboard after successful Google login
    } catch (error) {
      toast.error("Google login failed");
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {/* Card  */}
      <Card
        className="w-full max-w-[24rem]"
        style={{
          background:
            mode === "dark" ? "rgb(30, 41, 59)" : "rgb(226, 232, 240)",
        }}
      >
        {/* CardHeader */}
        <CardHeader
          color="blue"
          floated={false}
          shadow={false}
          className="m-0 grid place-items-center rounded-b-none py-8 px-4 text-center"
          style={{
            background:
              mode === "dark" ? "rgb(226, 232, 240)" : "rgb(30, 41, 59)",
          }}
        >
          <div className="mb-4 rounded-full border border-white/10 bg-white/10 p-2 text-white">
            <div className=" flex justify-center">
              {/* Image  */}
              <img
                src="https://cdn-icons-png.flaticon.com/128/727/727399.png"
                className="h-20 w-20"
              />
            </div>
          </div>

          {/* Top Haeding  */}
          <div className="bg-black/[0.05] text-white w-full py-4 mt-10 rounded-full transition-transform hover:bg-black/[0.8] active:scale-90 flex justify-center items-center gap-4 cursor-pointer group">
            <FcGoogle size={22} />
            <span
              className="font-medium text-black group-hover:text-white"
              onClick={signInWithGoogle}
            >
              Login with Google
            </span>
          </div>

          <Typography
            variant="h4"
            style={{
              color: mode === "dark" ? "rgb(30, 41, 59)" : "rgb(226, 232, 240)",
            }}
          >
            Admin Login
          </Typography>
        </CardHeader>

        {/* CardBody */}
        <CardBody>
          <form className=" flex flex-col gap-4">
            {/* First Input  */}
            <div>
              <Input
                type="email"
                label="Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* Second Input  */}
            <div>
              <Input
                type="password"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {/* Login Button  */}
            <Button
              onClick={login}
              style={{
                background:
                  mode === "dark" ? "rgb(226, 232, 240)" : "rgb(30, 41, 59)",
                color:
                  mode === "dark" ? "rgb(30, 41, 59)" : "rgb(226, 232, 240)",
              }}
            >
              Login
            </Button>
            <Link to={"/"} className="text-center">
              Home
            </Link>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
