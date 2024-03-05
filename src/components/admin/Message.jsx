import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Message = () => {
  const { id } = useParams();

  const [message, setMessage] = useState("");

  const getMessage = async () => {
    const response = await axios
      .get(`http://127.0.0.1:8000/api/contact/view/?id=${id}`)
      .then((res) => setMessage(res.data.message));
  };

  const edit = async (id) => {
    const response = await axios
      .get(`http://127.0.0.1:8000/api/contact/edit/?id=${id}`)
      .then((res) => {
        getMessage();
      });
  };

  useEffect(() => {
    getMessage();
  }, []);

  return (
    <div>
      {message.message}
      <br />
      <br />
      {typeof message == "string" ? (
        ""
      ) : (
        <button onClick={() => edit(id)}>
          Mark as {message.solved ? "unread" : "read"}
        </button>
      )}
    </div>
  );
};

export default Message;
