import React, { useState } from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import Loginform from "../components/Loginform";
import Signupform from "../components/Signupform";

export default function Landingpage() {
  const [Form, setForm] = useState("Login");
  const [loginForm, setLoginForm] = useState(false);
  const [signupForm, setSignupForm] = useState(false);
  const handleForm = (page) => {
    if (page === "Login") {
      setForm("Login");
      setLoginForm(true);
      setSignupForm(false);
    } else {
      setForm("Signup");
      setLoginForm(false);
      setSignupForm(true);
    }
  };

  const displayForm = (Form) => {
    if (Form === "Signup") {
      return <Loginform />;
    } else {
      return <Signupform />;
    }
  };

  return (
    <section
      style={{ backgroundColor: "#08070F" }}
      className="flex justify-center "
    >
      <Box className="nav-bar">
        <nav className="relative flex w-full flex-wrap items-center justify-between p-3">
          <Box className="flex w-full flex-wrap items-center justify-between px-3">
            <Box>
              <Image
                alt={"Logo"}
                align={"center"}
                src={require("../img/Screenshot (484).png")}
                w={"5rem"}
              />
            </Box>
            <button
              onClick={() => handleForm(Form === "Login" ? "Signup" : "Login")}
              className="button1"
            >
              <p className="text">{Form}</p>
            </button>
          </Box>
        </nav>
      </Box>
      <Box minH={"100vh"} className="container p-3 mt-5">
        <Box className="grid grid-cols-1 md:grid-cols-2 p-5 lg:grid-cols-2 gap-4 h-full align-middle">
          <Box className="p-5 flex items-center">
            <Box className="p-5">
              <Box className="flex flex-wrap">
                <Box
                  style={{
                    fontSize: "50px",
                    fontWeight: "800",
                    background:
                      "linear-gradient(90deg, hsla(181, 100%, 50%, 1) 0%, hsla(216, 100%, 50%, 1) 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Welcome to
                </Box>
                <Box
                  className="px-2"
                  style={{
                    fontSize: "50px",
                    fontWeight: "800",
                    background:
                      "linear-gradient(90deg, hsla(19, 100%, 50%, 1) 0%, hsla(37, 100%, 50%, 1) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  <Typewriter
                    options={{
                      strings: ["Swift,", "Secure,", "Social,", "SYNC..."],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </Box>
              </Box>
              <Text color={"white"}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officiis libero, doloremque ullam corporis consequuntur
                deleniti. Vero eius eveniet aperiam culpa?
              </Text>
            </Box>
          </Box>
          <Box className="p-5 flex items-center justify-center w-full relative">
            {displayForm(Form)}
          </Box>
        </Box>
      </Box>
    </section>
  );
}
