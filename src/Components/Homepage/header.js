import React from "react";
import { Typography } from "antd";
const { Title } = Typography;

const header = ({title}) => {
  return (
    <div>
      <Title className="TitleName">{title}</Title>
    </div>
  );
};

export default header;
