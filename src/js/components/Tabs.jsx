import React, { useState } from "react";
import ArticleGrid from "./ArticleGrid";

const Tabs = () => {
  if (window.location.hash) {
    var hash = window.location.hash.substring(1);
    if (hash === "osu") {
      var [activeId, setActive] = useState("tab3");
    } else {
      var [activeId, setActive] = useState("tab2");
    }
  } else {
    var [activeId, setActive] = useState("tab1");
  }
  function tabClick(e) {
    setActive(e.target.id);
  }
  return (
    <div className="articleContainer">
      <br />
      <ul className="mainTabs">
        <li
          id="tab1"
          className={activeId === "tab1" ? "activeTab" : undefined}
          onClick={tabClick}
        >
          All
        </li>
        <li
          id="tab2"
          className={activeId === "tab2" ? "activeTab" : undefined}
          onClick={tabClick}
        >
          The Michigan Daily
        </li>
        <li
          id="tab3"
          className={activeId === "tab3" ? "activeTab" : undefined}
          onClick={tabClick}
        >
          The Lantern
        </li>
      </ul>
      {activeId === "tab1" ? (
        <ArticleGrid tabType="All" />
      ) : activeId === "tab2" ? (
        <ArticleGrid tabType="UM" />
      ) : (
        <ArticleGrid tabType="OSU" />
      )}
    </div>
  );
};

export default Tabs;
