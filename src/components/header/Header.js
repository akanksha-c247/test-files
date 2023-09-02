import React from "react";
import "./header.css";
import Phone from "../inputFields/Phone";
import Location from "../inputFields/Location";
import Search from "../inputFields/Search";

export const Header = () => {
  const handleSearch = (query) => {
    console.log("Searching for: ", query);
  };

  return (
    <div className="frame">
      <div className="div">
        <div className="div-2">
          <Phone className="icon-instance-node" />
          <div className="text-wrapper">(571) 316-0676</div>
        </div>
        <div className="div-2">
          <Location
            address="1751 Pinnacle Dr #600d, McLean, VA 22102"
            className="some-class"
            // color="#000"
          />
        </div>
      </div>
      <div className="div-3">
        {/* <div className="text-wrapper-2">Search</div> */}
        <Search 
          placeholder="Search for something..." 
          className="custom-search-class"
          onSearch={handleSearch}
        />
      </div>
    </div>
  );
};
