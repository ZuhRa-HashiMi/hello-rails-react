import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMessage } from "../redux/greetingsReducer";
import axios from "axios";

const Greeting = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.greeting);

  async function fetchMessage() {
    await axios.get("api/messages").then((response) => {
      dispatch(getMessage(response.data.greeting));
    });
  }

  useEffect(() => {
    fetchMessage();
  }, []);

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={() => fetchMessage()}>Generate greeting message</button>
    </div>
  );
};

export default Greeting;
