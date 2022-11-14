import { useState } from "react";
import reactLogo from "./assets/react.svg";
import socketLogo from "./assets/socket.svg";
import "./App.css";
import { Heading } from "@chakra-ui/react";
import { io } from "socket.io-client";
import { Button, ButtonGroup } from "@chakra-ui/react";
function App() {
  // const socket = io('/');

  return (
    <div className="App">
      <div className="logoWrapper">
        <a href="https://socket.io/zh-CN/" target="_blank">
          <img src={socketLogo} className="logo" alt="SocketIO logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Heading>Socket IO Playground</Heading>
      <div className="card">
        <Button
          colorScheme="teal"
          size="md"
          onClick={() => {
            // socket.on("connect", () => {
            //   console.log(socket.id); // x8WIv7-mJelg7on_ALbx
            // });
          }}
        >
          连接
        </Button>
        <Button
          colorScheme="orange"
          size="md"
          onClick={() => {
            // socket.disconnect()
            console.log('something happened')
          }}
        >
          停止
        </Button>
      </div>
      <p className="read-the-docs">
        Click on the SocketIO and React logos to learn more
      </p>
    </div>
  );
}

export default App;
