import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";
import Select from "react-select";
const optionsRole = [
  { value: "frontend", label: "frontend" },
  { value: "ios", label: "ios" },
  { value: "android", label: "android" },
  { value: "tech lead", label: "tech lead" },
];

const optionsLocation = [
  { value: "delhi ncr", label: "delhi ncr" },
  { value: "mumbai", label: "mumbai" },
  { value: "remote", label: "remote" },
  { value: "chennai", label: "chennai" },
];

const optionsMinEx = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "5", label: "5" },
];

function App() {
  const [jdList, setJdList] = useState([]);
  const [isEndOfScroll, setIsEndOfScroll] = useState(false);
  const [offset, setOffSet] = useState(0);
  const [companyName, setCompanyName] = useState(null);
  const [persistJD, setPersistJD] = useState([]);
  const [selectedOptionRole, setSelectedOptionRole] = useState(null);
  const [selectedOptionLocation, setSelectedOptionLocation] = useState(null);
  const [selectedOptionMinEx, setSelectedOptionMinEx] = useState(null);

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
        setPersistJD([...persistJD, ...JSON.parse(data)?.jdList]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [offset]);

  useEffect(() => {
    setOffSet(offset + 1);
  }, [isEndOfScroll]);

  useEffect(() => {
    if (companyName?.length > 1) {
      setJdList(
        persistJD?.filter((ele) =>
          ele?.companyName?.toLowerCase()?.includes(companyName?.toLowerCase())
        )
      );
    } else {
      setJdList([...persistJD]);
    }
  }, [companyName]);

  useEffect(() => {
    if (selectedOptionLocation) {
      setJdList(
        persistJD?.filter((ele) =>
          ele?.location
            ?.toLowerCase()
            ?.includes(selectedOptionLocation?.value?.toLowerCase())
        )
      );
    } else if (selectedOptionMinEx) {
      setJdList(
        persistJD?.filter((ele) =>
          String(ele?.minExp)?.includes(selectedOptionMinEx?.value)
        )
      );
    } else if (selectedOptionRole) {
      setJdList(
        persistJD?.filter((ele) =>
          ele?.jobRole
            ?.toLowerCase()
            ?.includes(selectedOptionRole?.value?.toLowerCase())
        )
      );
    }
  }, [selectedOptionLocation, selectedOptionMinEx, selectedOptionRole]);

  console.log("data", jdList, persistJD, selectedOptionLocation);
  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ width: "180px" }}>
          <Select
            defaultValue={selectedOptionRole}
            onChange={setSelectedOptionRole}
            options={optionsRole}
            placeholder={"Role"}
          />
        </div>
        <div style={{ width: "180px", marginLeft: "20px" }}>
          <Select
            defaultValue={selectedOptionLocation}
            onChange={setSelectedOptionLocation}
            options={optionsLocation}
            placeholder={"Location"}
          />
        </div>
        <div style={{ width: "180px", marginLeft: "20px" }}>
          <Select
            defaultValue={selectedOptionMinEx}
            onChange={setSelectedOptionMinEx}
            options={optionsMinEx}
            placeholder={"Min Exp"}
          />
        </div>
        <div style={{ marginLeft: "30px" }}>
          <input
            type="text"
            placeholder="Search Company Name"
            style={{
              height: "35px",
              width: "210px",
              border: "1px solid #cfcdca",
              borderRadius: "5px",
            }}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
      </div>
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
