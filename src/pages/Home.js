import React, { useEffect, useState } from "react";
import CardComponent from "../components/Card.component";

const Home = () => {
  const [items, setItems] = useState();

  const getData = async () => {
    try {
      const res = await fetch(
        "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json"
      );
      const data = await res.json();
      setItems(data);
      return;
    } catch (error) {
      console.error("API_CALL_ERROR:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="row--25-25-25-25  is-split-on-medium">
      {items?.map((item) => (
        <CardComponent key={item?.id} item={item} />
      ))}
    </div>
  );
};

export default Home;
