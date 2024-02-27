import React from "react";
import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "./generator.css"

const Generator = () => {
  const [destination, setDestination] = useState("");
  const [budget, setBudget] = useState("");
  const [currency, setCurrency] = useState("");
  const [data, setData] = useState("");
  const [loader, setLoader] = useState("")

  // Access your API key as an environment variable (see "Set up your API key" above)
  const genAI = new GoogleGenerativeAI(
    "AIzaSyAzsqBT9wCN03wqE3T3FtbfI11Pe1W71H0"
  );

  async function run(sentence) {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = sentence;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text();
    text = text.replaceAll("`", "")
    text = text.replace("html", "")
    setData(text)
    setLoader("")
  }

  const generate = () => {
    if (!destination || !budget || !currency)
      return alert("Please fill all fields");

    const sentence = `Generate a day wise iterinary for a trip to ${destination} with a budget of ${budget}${currency} in the form of html code within a div element without using id attribute for any of the elements with a budget plan without output`;

    setLoader("Please wait...")

    run(sentence);

  };


  const Presenter = () => {
    return (
      <div id="data" dangerouslySetInnerHTML={{ __html: data }} />
    )
  }


  return (
    <div className=" justify-center items-center p-[50px] grid-cols-2">
      <div className="flex p-10">
        <strong className="text-3xl mb-5 ">Select Country: </strong>
        <select
          className="select select-ghost w-full max-w-xs"
          onChange={(e) => setDestination(e.target.value)}
        >
          <option disabled selected>
            Pick your destination
          </option>
          <option value="Las Vegas">Las Vegas</option>
          <option value="Dubai">Dubai</option>
          <option value="Paris">Paris</option>
        </select>
      </div>
      <div className="flex p-10">
        <strong className="text-3xl ">Enter Your Budget: </strong>
        <input
          type="text"
          placeholder="Type here"
          className="input input-ghost w-full max-w-xs"
          onChange={(e) => setBudget(e.target.value)}
        />
      </div>
      <div className="flex p-10">
        <strong className="text-3xl ">Enter Currency: </strong>
        <input
          type="text"
          placeholder="Type here"
          className="input input-ghost w-full max-w-xs"
          onChange={(e) => setCurrency(e.target.value)}
        />
      </div>

      <br />
      <br />

      <button type="button" onClick={() => generate()} className="btn btn-primary">
        Generate
      </button>

      <br />
      <br />

      {loader}

      <Presenter />
    </div>
  );
};

export default Generator;
