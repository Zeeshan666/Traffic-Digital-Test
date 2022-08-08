import React, { useState } from "react";
import gitHubApi from "../../Services/Api/Api";
import { Card, Button, Tag, Divider } from "antd";
import Forks from "./Forks";

const Cards = (gistData) => {
  const [data, setData] = useState(null);
  const [isShow, setIsShow] = useState(false);
  const unidata = gistData.gistData;
  const files = unidata.files;
  const fileArr = [];
  for (let file in files) {
    let language = files[file].language;
    if (fileArr.indexOf(language) === -1) {
      fileArr.push(language);
    }
  }

  const noOfFiles = Object.keys(files).length;

  const isOpen = async (value) => {
    if (value) {
      gitHubApi
        .gistById(value)
        .then((res) => {
            console.log(res)
          setData(res);
          setIsShow(true);
        })
        .catch(() => {
          setIsShow(false);
        });
    }
  };
  return (
    <div className="site-card-wrapper">
      <Card
        title={unidata.description || "No Description"}
        bordered
        extra={
          <Button type="primary" onClick={() => isOpen(`${unidata.id}`)}>
            Forks?
          </Button>
        }
      >
        <p className="numberFiles">
          {noOfFiles} {noOfFiles > 1 ? "Files" : "File"}
        </p>

        <div>
          {fileArr.map((language, index) => {
            return (
              <Tag color="geekblue" key={index}>
                {language}
              </Tag>
            );
          })}
        </div>

        {isShow && data && <Forks forks={data} />}
      </Card>
      <Divider dashed />
    </div>
  );
};

export default Cards;
