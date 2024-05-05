import React from "react";

const Card = ({
  role,
  location,
  jd,
  minExp,
  maxJdSalary,
  minJdSalary,
  logoUrl,
  name,
  key,
}) => {
  return (
    <div key={key}>
      <main
        style={{
          border: "2px solid #edf2ef",
          height: "440px",
          width: "280px",
          borderRadius: "20px",
          paddingTop: "10px",
          paddingBottom: "10px",
          marginTop: "20px",
        }}
      >
        <section
          style={{
            display: "flex",
            padding: "10px",
          }}
        >
          <div>
            <img src={logoUrl} alt="img" height={40} width={50} />
          </div>
          <div style={{ position: "relative", bottom: "20px", left: "10px" }}>
            <p>{name}</p>
            <p>{role}</p>
            <p>{location}</p>
          </div>
        </section>
        <section
          style={{
            paddingLeft: "10px",
            position: "relative",
            bottom: "50px",
          }}
        >
          <p>{`Estimate Salary: ₹${
            minJdSalary === null ? 0 : minJdSalary
          } to ${maxJdSalary} LPA`}</p>
        </section>
        <section
          style={{
            paddingLeft: "10px",
            paddingRight: "10px",
            position: "relative",
            bottom: "50px",
          }}
        >
          <h4>Job Description</h4>
          <p>{jd?.length > 250 ? jd?.substring(0, 250) : jd}</p>
        </section>
        <section
          style={{
            paddingLeft: "10px",
            paddingRight: "10px",

            position: "relative",
            bottom: "50px",
          }}
        >
          <p>Minimum Experience</p>
          <p> {`${minExp === null ? 0 : minExp} years`}</p>
        </section>
        <section
          style={{
            paddingLeft: "10px",
            paddingRight: "10px",
            cursor: "pointer",
          }}
        >
          <button
            style={{
              width: "100%",
              height: "35px",
              borderRadius: "20px",
              cursor: "pointer",
              background: "#51eda4",
              color: "black",
              border: "1px solid #51eda4",

              position: "relative",
              bottom: "50px",
            }}
          >
            Easy Apply
          </button>
        </section>
      </main>
    </div>
  );
};

export default Card;
