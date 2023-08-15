import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
export default function Signupform() {
  return (
    <>
      <Box className="svg-box">
        <svg
          id="sw-js-blob-svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          width={"100%"}
          className="float"
        >
          {" "}
          <defs>
            {" "}
            <linearGradient id="sw-gradient1" x1="0" x2="1" y1="1" y2="0">
              {" "}
              <stop
                id="stop1"
                stop-color="rgba(255, 207.851, 0, 1)"
                offset="0%"
              ></stop>{" "}
              <stop
                id="stop2"
                stop-color="rgba(247.102, 9.853, 9.853, 1)"
                offset="100%"
              ></stop>{" "}
            </linearGradient>{" "}
          </defs>{" "}
          <path
            fill="url(#sw-gradient1)"
            d="M27.9,-21.8C34.7,-13.6,38,-2.1,36,8.8C33.9,19.6,26.6,29.9,16.4,35.3C6.2,40.7,-7,41.2,-17.9,36.3C-28.9,31.4,-37.6,21,-39.9,9.5C-42.3,-2.1,-38.3,-14.7,-30.5,-23.1C-22.8,-31.5,-11.4,-35.6,-0.5,-35.3C10.5,-34.9,21,-30,27.9,-21.8Z"
            width="100%"
            height="100%"
            transform="translate(50 50)"
            stroke-width="0"
            style={{ transition: "all 0.3s ease 0s" }}
          ></path>{" "}
        </svg>
      </Box>
      <Box className="svg-box1 flex justify-end">
        <svg
          id="sw-js-blob-svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          width={"100%"}
          className="float1"
        >
          {" "}
          <defs>
            {" "}
            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
              {" "}
              <stop id="stop1" stop-color="#0068FF" offset="0%"></stop>{" "}
              <stop
                id="stop2"
                stop-color="rgba(0, 251.656, 110.999, 1)"
                offset="100%"
              ></stop>{" "}
            </linearGradient>{" "}
          </defs>{" "}
          <path
            fill="url(#sw-gradient)"
            d="M27.9,-21.8C34.7,-13.6,38,-2.1,36,8.8C33.9,19.6,26.6,29.9,16.4,35.3C6.2,40.7,-7,41.2,-17.9,36.3C-28.9,31.4,-37.6,21,-39.9,9.5C-42.3,-2.1,-38.3,-14.7,-30.5,-23.1C-22.8,-31.5,-11.4,-35.6,-0.5,-35.3C10.5,-34.9,21,-30,27.9,-21.8Z"
            width="100%"
            height="100%"
            transform="translate(50 50)"
            stroke-width="0"
            style={{ transition: "all 0.3s ease 0s" }}
          ></path>{" "}
        </svg>
      </Box>

      <Box className="form-box w-4/5">
        <form className="form">
          <p className="title">Register </p>
          <Box className="">
            <label>
              <input
                required=""
                placeholder="Name"
                type="text"
                className="input w-full"
              />
            </label>
          </Box>

          <label>
            <input
              required=""
              placeholder="Email"
              type="email"
              className="input"
            />
          </label>

          <label>
            <input
              required=""
              placeholder="Password"
              type="password"
              className="input"
            />
          </label>
          <label>
            <input
              required=""
              placeholder="Confirm Password"
              type="password"
              className="input"
            />
          </label>
          <Link to={"/Homepage"}>
            <Button className="submit">Signup</Button>
          </Link>
        </form>
      </Box>
    </>
  );
}
