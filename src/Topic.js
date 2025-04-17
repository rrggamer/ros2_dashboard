// src/Topic.js
import React, { useState, useEffect } from "react";
import ROSLIB from "roslib";

function Topic() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Connect to ROS2 WebSocket
    const ros = new ROSLIB.Ros({
      url: "ws://localhost:9090", // WebBridge WebSocket URL
    });

    // Create a ROS Topic object
    const chatterTopic = new ROSLIB.Topic({
      ros: ros,
      name: "/talker", // Replace with your topic name
      messageType: "std_msgs/String", // Replace with your message type
    });

    // Define a callback to handle incoming messages
    chatterTopic.subscribe(function (msg) {
      console.log("Received message: " + msg.data);
    });

    // Cleanup on component unmount
    return () => {
      chatterTopic.unsubscribe();
    };
  }, []);

  return (
    <div>
      <h2>ROS2 Topic: /chatter</h2>
      <p>Received message: {message}</p>
    </div>
  );
}

export default Topic;
