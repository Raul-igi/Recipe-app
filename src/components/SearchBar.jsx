import React from "react";

const SearchBar = ({ value, isLoading, handleSubmit, onChange }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={value}
          disabled={isLoading}
          onChange={onChange}
          placeholder="search recipes"
          className="form-control"
        />
        <input
          disabled={isLoading || !value}
          type="submit"
          className="btn"
          value="search"
        />
      </form>
    </div>
  );
};

export default SearchBar;
