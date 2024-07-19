import { useState } from "react";
import LoginNavBar from "../../../LoginNavBar/LoginNavBar";
import axios from "axios";
import "../../../../bootstrap.css";
import "../../../../index.css";

const TechLogin = () => {
  const [topic, setTopic] = useState("");
  const [relation, setRelation] = useState("");
  const [description, setDescription] = useState("");
  const [highlightTopic, setHighlightTopic] = useState(false);
  const [highlightRelation, setHighlightRelation] = useState(false);
  const [highlightDescription, setHighlightDescription] = useState(false);

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
      axios.post("https://6698ebc42069c438cd70a6da.mockapi.io/tech", {
        topic: topic,
        realtion: relation,
        description: description,
      });
      (function updatedDate() {
        alert(`Topic is Updated to Tech and Programing Blog`);
      })();
      setTopic("");
      setRelation("");
      setDescription("");
      setHighlightTopic(false);
      setHighlightRelation(false);
      setHighlightDescription(false);
    }
  };
  return (
    <div>
      <LoginNavBar />
      <div className="container">
        <div className=" row">
          <div className="form col-md-6 border border-red-100">
            <span style={{ color: `${highlightTopic ? "red" : "green"}` }}>
              {highlightTopic ? "Fill the Topic" : "Topic"}
            </span>
            <input
              type="text"
              className="border border-black"
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
              className="border border-black"
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
              className="border border-black"
              placeholder="Enter Topic description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <button className="btn btn-primary" onClick={update}>
              Update
            </button>
          </div>
          <div className="relation col-md-6">
            <h1>Relation</h1>
            <ul>
              <li>Code & Coffee</li>
              <li>Tech Tapestry</li>
              <li>Dev Diaries</li>
              <li>Bytes & Brilliance</li>
              <li>The Coding Canvas</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechLogin;
