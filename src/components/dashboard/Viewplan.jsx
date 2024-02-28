import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Viewplan = () => {
  const { id } = useParams();

  const [plan, setPlan] = useState("");

  const getPlan = async () => {
    const response = await axios
      .get(`https://mayank518.pythonanywhere.com/api/get/plan/?id=${id}`)
      .then((res) => setPlan(res.data.plan));
  };

  useEffect(() => {
    getPlan();
  }, []);

  return (
    <div>
      <center>
      {plan == "does not exist" ? (
        <h1>Plan with this ID does not exist</h1>
      ) : (
        <div id="data" dangerouslySetInnerHTML={{ __html: plan }} />
      )}
      </center>
      <br />
    </div>
  );
};

export default Viewplan;
