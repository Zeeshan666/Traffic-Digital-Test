import React from "react";
import Header from "./header";
import { Divider } from "antd";
import Search from '../Homepage/Search'
const index = () => {
  return (
    <div className="container m-5">
      <Header title="GitHub GIST Search API" />
      <Divider orientation="left">Search by user</Divider>
      <Search />
    </div>
  );
};

export default index;
