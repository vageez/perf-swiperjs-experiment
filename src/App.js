import React, { useEffect, useState } from "react";
import Track from "./Track";
import { items } from "./data";
import "./styles.css";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/lazy/lazy.scss";
import "lazysizes";
import "lazysizes/plugins/attrchange/ls.attrchange";

const fetchData = () => {
  return new Promise((resolve, reject) => {
    return resolve(items);
  });
};

export default function App() {
  const [state, setState] = useState();
  useEffect(() => {
    fetchData().then((res) => setState(res));
  }, []);

  return (
    <div className="App">
      <Track items={state} />
    </div>
  );
}
