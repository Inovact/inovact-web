import React from "react";
import TagsInput from "./TagsInput";
import style from "react-style-tag";

let tags;

export const Form = ({ onSubmit }) => {
  const selectedTags = (tag) => {
    tags = JSON.stringify(tag);
    // console.log(tags);
    document.getElementById("tags").value = tags;
  };
  return (
    <div>
      <form onSubmit={onSubmit} style={{ transition: "600ms ease" }}>
        <div className="form-group">
          <input
            className="form-control"
            id="tags"
            defaultValue=""
            type="hidden"
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Name</label>
          <input
            type="text"
            style={{ height: "20px" }}
            className="form-control"
            id="title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control materialize-textarea"
            id="description"
          />
        </div>
        <div className="form-group">
          <TagsInput id="tags" selectedTags={selectedTags} tags={["nodejs"]} />
        </div>
        <div className="form-group">
          <button
            style={{ background: "#23232e" }}
            className="form-control btn btn-primary"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      <style>
        {`
                input[type="text"]:focus,textarea:focus{
                    border-bottom:1px solid orange  !important;
                    border-shadow:0 1px 0 0 orange !important;
                    -webkit-box-shadow:0 1px 0 0 orange !important;
                }
                `}
      </style>
    </div>
  );
};
