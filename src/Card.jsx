import React from "react";

const Card = () => {
  return (
    <>
      <main
        style={{
          border: "2px solid #edf2ef",
          height: "440px",
          width: "280px",
          borderRadius: "20px",
          paddingTop: "10px",
          paddingBottom: "10px",
        }}
      >
        <section
          style={{
            display: "flex",
            padding: "10px",
          }}
        >
          <div>
            <img
              src="https://logo.clearbit.com/dropbox.com"
              alt="img"
              height={40}
              width={50}
            />
          </div>
          <div style={{ position: "relative", bottom: "20px", left: "10px" }}>
            <p>Next Labs</p>
            <p>Frontend Developer</p>
            <p>India</p>
          </div>
        </section>
        <section
          style={{
            paddingLeft: "10px",
            position: "relative",
            bottom: "50px",
          }}
        >
          <p>Estimate Salary: ₹15 to 20 LPA</p>
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
          <p>
            React.js, a comprehensive JavaScript library for building user
            interfaces, has changed the way we think about front-end
            development. React.js has grasped the interest of the open source
            community and it is here to stay. However, the nuances and
          </p>
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
          <p>3 years</p>
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
    </>
  );
};

export default Card;
