import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "./generator.css";

const Generator = () => {
  const [destination, setDestination] = useState("");
  const [budget, setBudget] = useState("");
  const [currency, setCurrency] = useState("");
  const [data, setData] = useState("");
  const [loader, setLoader] = useState("");

  const genAI = new GoogleGenerativeAI(
    "AIzaSyAzsqBT9wCN03wqE3T3FtbfI11Pe1W71H0"
  );

  async function run(sentence) {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = sentence;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text();
    text = text.replaceAll("`", "");
    text = text.replace("html", "");
    setData(text);
    setLoader("");
  }

  const generate = () => {
    if (!destination || !budget || !currency) {
      alert("Please fill all fields");
      return;
    }

    const sentence = `Generate a day wise iterinary for a trip to ${destination} with a budget of ${budget}${currency} in the form of html code within a div element without using id attribute for any of the elements with a budget summary and use iframe with google maps api for showing location of place without output`;

    
    setLoader(
      <div className="p-3 animate-spin drop-shadow-2xl bg-gradient-to-bl from-yellow-400 via-orange-400 to-red-600 md:w-48 md:h-48 h-32 w-32 aspect-square rounded-full">
        <div className="rounded-full h-full w-full bg-slate-100 dark:bg-zinc-900 background-blur-md "></div>
      </div>
    );


    setData("");

    
    run(sentence);
  };

  const Presenter = () => {
    return <div id="data" dangerouslySetInnerHTML={{ __html: data }} />;
  };

  return (
    <div className="justify-center items-center p-[50px] grid-cols-2 h-screen">
        
      <div className="flex p-10">
        <strong className="text-3xl m-5 ">Select Country: </strong>
        <select
          className="select select-ghost w-full max-w-xs m-5"
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
        <strong className="text-3xl m-5">Enter Your Budget: </strong>
        <input
          type="text"
          placeholder="Type here"
          className="input input-ghost w-full max-w-xs m-5"
          onChange={(e) => setBudget(e.target.value)}
        />
      </div>
      <div className="flex p-10">
        <strong className="text-3xl m-5">Enter Currency: </strong>
        <input
          type="text"
          placeholder="Type here"
          className="input input-ghost w-full max-w-xs m-5"
          onChange={(e) => setCurrency(e.target.value)}
        />
      </div>

      <br />
      <br />
    <div className="flex grid-cols-2 gap-x-10 p-10">
      <button type="button" onClick={() => generate()}>
        
        <div class="w-full h-40 flex items-center justify-center cursor-pointer">
            <div
                class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-amber-400 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 dark:bg-gray-700 dark:text-white dark:hover:text-gray-200 dark:shadow-none group"
            >
                <span
                class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-yellow-600 group-hover:h-full"
                ></span>
                <span
                class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12"
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                    class="w-5 h-5 text-yellow-400"
                >
                    <path
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                    stroke-width="2"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    ></path>
                </svg>
                </span>
                <span
                class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200"
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                    class="w-5 h-5 text-yellow-400"
                >
                    <path
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                    stroke-width="2"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    ></path>
                </svg>
                </span>
                <span
                class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-gray-200"
                >Generate</span>
            </div>
        </div>
    </button>
      {loader}
    </div>

      <Presenter />
    </div>
  );
};

export default Generator;
