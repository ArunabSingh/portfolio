import React, { useContext, useState, useEffect } from "react";
import Typist from "react-typist";
import HomeContext from "../../context/home.context";

import "./Home.styles.scss";

const Home = React.memo(() => {
  const { hi, name, paragraphs, roles } = useContext(HomeContext);
  const [reset, setReset] = useState(1);

  useEffect(() => {
    setReset(1);
  }, [reset]);
  return (
    <div className="home">
      <img
        className="profile-picture"
        src="https://res.cloudinary.com/bcityelpcamp/image/upload/v1630521904/samples/aru_fcoods.jpg"
        alt="Avatar"
      />
      <div className="content-container">
        
        <div className="heading-container">
          <h2 className="heading-2">{hi}</h2>
          <h1 className="heading-1">{name}</h1>
          {reset ? (
            <Typist
              avgTypingDelay={50}
              onTypingDone={() => {
                setReset(0);
              }}
              className="heading-2 typical"
            >
              {roles[0]}
              <Typist.Backspace count={33} delay={4000} />
              {roles[1]}
              <Typist.Backspace count={33} delay={4000} />
              {roles[2]}
              <Typist.Backspace count={33} delay={4000} />
              {roles[3]}
              <Typist.Backspace count={33} delay={4000} />
              {roles[4]}
              <Typist.Backspace count={33} delay={2000} />
            </Typist>
          ) : (
            <div style={{ height: "100%" }}></div>
          )}
        </div>
        <div className="text-box">
          <h2 className="heading-3">ABOUT ME</h2>
          {paragraphs.map((paragraph, i) => (
            <div key={i}>{paragraph}</div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Home;
