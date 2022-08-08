import React, { useState } from "react";
import { Input, notification, Skeleton } from "antd";
import gitHubApi from "../../Services/Api/Api";
import Results from "./Results";

const { Search } = Input;

export const SearchBar = () => {
  const [username, setUsername] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const onSearch = (username) => {
    const usersname = username.trim();
    setUsername(usersname);
    if (username) {
      setLoading(true);
      gitHubApi
        .getGistByUser(username)
        .then((res) => {
          if (res.length) {
            setData(res);
          } else {
            notification.error({
              className: "m-4  text-danger",
              description: "User Not Available.Please used another name",
              placement: "topRight",
            });
          }
          setLoading(false);
        })
        .catch(() => {
          setData([]);
          setLoading(false);
          notification.error({
            className: "m-4  text-danger",
            description: "User Not Available.Please used another name",
            placement: "topRight",
          });
        });
    }
  };

  return (
    <>
      <Search
        placeholder="Search by UserName"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />

      <Skeleton
        loading={loading}
        className="m-4"
        avatar
        paragraph={{ rows: 4 }}
      >
        {username && data && <Results data={data} username={username} />}
      </Skeleton>
    </>
  );
};
export default SearchBar;
