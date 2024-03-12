import axios from "axios";
import React, { useEffect, useState } from "react";
import { RootObject } from "./DataFetcher";
import Card from "./Card";

const CardContainer = () => {
  const [data, setData] = useState<Array<RootObject>>();

  const handleApi = async () => {
    try {
      const { data } = await axios.get<Array<RootObject>>(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleApi();
  }, []);

  return (
    <div>
      {data !== undefined &&
        data.map((it) => (
          <Card title={it.title} description={it.body} image="" />
        ))}
    </div>
  );
};

export default CardContainer;


