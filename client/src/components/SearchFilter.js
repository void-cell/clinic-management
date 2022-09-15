import React from "react";

export default function SearchFilter(props) {
  return (
    <form noValidate className="row g-3">
      <div className="col-auto">
        <input
          type="search"
          name="filter"
          className="form-control"
          placeholder={`Search ${props.title}`}
          onChange={props.handleInput}
        />
      </div>
    </form>
  );
}
