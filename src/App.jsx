import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const body = JSON.stringify({
        limit: 10,
        offset: 0,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body,
      };

      try {
        const response = await fetch(
          "https://api.weekday.technology/adhoc/getSampleJdJSON",
          requestOptions
        );
        const data = await response.text();
        console.log(JSON.parse(data).jdList);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return <></>;
}

export default App;
