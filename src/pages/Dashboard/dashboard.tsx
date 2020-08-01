import React, { useEffect, useState } from "react";
import { proxy } from "~config";

interface Scream {
  id?: number;
  content: string;
  likes: number;
}

const Dashboard = () => {
  const [screams, setScreams] = useState([]);

  useEffect(() => {
    fetch(`${proxy}/screams`)
      .then((res) => {
        return res.json();
      })
      .then(({ screams }) => {
        setScreams(screams);
      });
  }, []);

  return (
    <>
      {screams.length &&
        screams.map((scream: Scream, index) => {
          return <div key={index}>{scream.content}</div>;
        })}
    </>
  );
};

export default Dashboard;
