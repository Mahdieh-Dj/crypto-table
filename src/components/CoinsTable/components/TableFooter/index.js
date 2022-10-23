import { Pagination } from "antd";
import React, { useState } from "react";

export function TableFooter() {
  const [current, setCurrent] = useState(3);
  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
  };
  return (
    <>
      <Pagination current={current} onChange={onChange} total={50} />;
    </>
  );
}
