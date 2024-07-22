import LoginNavBar from "../../LoginNavBar/LoginNavBar";
import React, { useEffect, useState } from "react";
import axios from "axios";

const TravelLogin = () => {
  const [topic, setTopic] = useState("");
  const [relation, setRelation] = useState("");
  const [description, setDescription] = useState("");
  const [highlightTopic, setHighlightTopic] = useState(false);
  const [highlightRelation, setHighlightRelation] = useState(false);
  const [highlightDescription, setHighlightDescription] = useState(false);
  const [data, setData] = useState([]);

  const update = (e) => {
    e.preventDefault();

    if (topic === "") {
      alert("Fill the Topic name");
      setHighlightTopic(true);
    } else if (relation === "") {
      alert("Fill the topic Realtion name");
      setHighlightRelation(true);
    } else if (description === "") {
      alert("Fill the topic Description name");
      setHighlightDescription(true);
    } else {
      axios.post("https://66990e8a2069c438cd7126f1.mockapi.io/Travel", {
        topic: topic,
        realtion: relation,
        description: description,
      });
      (function updatedDate() {
        alert(`Topic is Updated to Travel Blog`);
      })();
      setTopic("");
      setRelation("");
      setDescription("");
      setHighlightTopic(false);
      setHighlightRelation(false);
      setHighlightDescription(false);
    }
  };
  const showData = async () => {
    const data = await fetch(
      "https://66990e8a2069c438cd7126f1.mockapi.io/Travel"
    );
    const res = await data.json();
    setData(res);
    console.log(res);
  };
  const handleDelete = (id) => {
    console.log(id);
    axios
      .delete(`https://66990e8a2069c438cd7126f1.mockapi.io/Travel/${id}`)
      .then(() => {
        showData();
      });
  };
  useEffect(() => {
    showData();
  }, []);
  return (
    <div>
      <LoginNavBar />
      <div className="container">
        <div className=" row">
          <div className="form col-md-6 mt-5 p-1 border border-red-100">
            <span style={{ color: `${highlightTopic ? "red" : "green"}` }}>
              {highlightTopic ? "Fill the Topic" : "Topic"}
            </span>
            <input
              type="text"
              className="w-full px-4 py-2 h-[100px] mb-4 mt-1 leading-tight text-gray-700 bg-gray-200 border border-gray-300 rounded appearance-none focus:outline-none focus:bg-white focus:border-blue-500"
              // className="border border-black"
              placeholder="Enter Topic"
              value={topic}
              onChange={(e) => {
                setTopic(e.target.value);
              }}
            />{" "}
            <br />
            <span style={{ color: `${highlightRelation ? "red" : "green"}` }}>
              {highlightRelation
                ? "Fill the Relation"
                : "Enter Topic Related to"}
            </span>
            {/* <span>Enter Topic Related to</span> */}
            <input
              type="text"
              className="w-full px-4 py-2 h-[100px] mb-4 mt-1 leading-tight text-gray-700 bg-gray-200 border border-gray-300 rounded appearance-none focus:outline-none focus:bg-white focus:border-blue-500"
              // className="border border-black"
              placeholder="Enter Relation"
              value={relation}
              onChange={(e) => {
                setRelation(e.target.value);
              }}
            />{" "}
            <br />
            <span
              style={{ color: `${highlightDescription ? "red" : "green"}` }}
            >
              {highlightDescription
                ? "Fill the Description"
                : "Enter Topic Description"}
            </span>
            {/* <span>Enter Topic Description</span> */}
            <input
              type="text"
              className="w-full px-4 py-2 h-[100px] mb-4 mt-1 leading-tight text-gray-700 bg-gray-200 border border-gray-300 rounded appearance-none focus:outline-none focus:bg-white focus:border-blue-500"
              // className="border border-black"
              placeholder="Enter Topic description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <button className="btn float-right btn-primary" onClick={update}>
              Update
            </button>
          </div>
          <div className="relation col-md-6 pt-[39px] pb-[40px]  ">
            <h1>Travel</h1>

            <ul>
              <li>Journey Jotter</li>
              <li>Wander Writes</li>
              <li>Nomadic Notes</li>
              <li>Passport Pages</li>
              <li>Roaming Reflections</li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <h1 className="text-center my-3">Table list of Blog</h1>
      <hr />
      <div className="table flex justify-center ">
        <table className="w-[99%] ml-3">
          <thead>
            <tr className="text-center">
              <th className="border border-black">ID</th>
              <th className="border border-black">Topic</th>
              <th className="border border-black">Relation</th>
              <th className="border border-black">Description</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((elem, i) => {
                return (
                  <>
                    <tr
                      key={i}
                      className="border cursor-pointer border-black hover:bg-gray-200"
                    >
                      <td className="border   cursor-pointer border-black hover:bg-gray-400">
                        {elem.id}
                      </td>
                      <td className="border   cursor-pointer border-black hover:bg-gray-400">
                        {elem.topic}
                      </td>
                      <td className="border  cursor-pointer border-black hover:bg-gray-400">
                        {elem.realtion}
                      </td>
                      <td className="p-3 border cursor-pointer  border-black hover:bg-gray-400">
                        {elem.description}
                      </td>
                      <td>
                        <button
                          className="btn mx-2 btn-danger"
                          onClick={() => {
                            handleDelete(elem.id);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TravelLogin;
