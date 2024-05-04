import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";

function App() {
  const [jdList, setJdList] = useState([]);
  const [isEndOfScroll, setIsEndOfScroll] = useState(false);
  const [offset, setOffSet] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;
      const scrollTop =
        window.scrollY ||
        window.pageYOffset ||
        document.body.scrollTop +
          ((document.documentElement && document.documentElement.scrollTop) ||
            0);

      if (scrollTop + windowHeight >= documentHeight) {
        setIsEndOfScroll(true);
      } else {
        setIsEndOfScroll(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const body = JSON.stringify({
        limit: 10,
        offset: offset,
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
        setJdList([...jdList, ...JSON.parse(data)?.jdList]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [offset]);

  useEffect(() => {
    setOffSet(offset + 1);
  }, [isEndOfScroll]);

  console.log(jdList);

  return (
    <>
      <div
        style={{ display: "grid", gridTemplateColumns: "auto auto auto auto" }}
      >
        {jdList?.map((ele) => (
          <Card
            key={ele?.jdUid}
            role={ele?.jobRole}
            location={ele?.location}
            jd={ele?.jobDetailsFromCompany}
            minExp={ele?.minExp}
            maxJdSalary={ele?.maxJdSalary}
            minJdSalary={ele?.minJdSalary}
            logoUrl={ele?.logoUrl}
            name={ele?.companyName}
          />
        ))}
      </div>
    </>
  );
}

export default App;
