import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { useState } from "react";
import BigCard from "./BigCard";
import SmallCard from "./SmallCard";
import Toggle from "./Toggle";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const handleDarkMode = (newState) => {
    setDarkMode(newState);
  };
  return (
    <div className={`${darkMode ? "bg-dark" : "bg"}`}>
      <Container>
        <div className="d-flex justify-content-between">
          <h2 className="mt-4 fw-bold">Social Media Dashboard</h2>
          <div className="mt-5">
            <Toggle handleDarkMode={handleDarkMode} />
          </div>
        </div>
        <h6 className="text-secondary mb-5">Total Followes: 23,004</h6>

        <Row>
          {/* facebook */}
          <BigCard
            socialIcon="bi bi-facebook "
            socialIconColor="facebook"
            border="facebook-border"
            arrow="up"
            name="@nathanf"
            title="1987"
            subTitle="F O L L O W E R S"
            footer="12 Today"
            darkMode={darkMode}
          />
          {/* twitter */}
          <BigCard
            socialIcon="bi bi-twitter "
            socialIconColor="twitter"
            border="twitter-border"
            arrow="up"
            name="@nathanf"
            title="1044"
            subTitle="F O L L O W E R S"
            footer="99 Today"
            darkMode={darkMode}
          />

          {/* instagram */}
          <BigCard
            socialIcon="bi bi-instagram "
            socialIconColor="instagram"
            border="instagram-border"
            arrow="up"
            name="@realnathanf"
            title="11k"
            subTitle="F O L L O W E R S"
            footer="1099 Today"
            darkMode={darkMode}
          />

          {/* Youtube */}
          <BigCard
            socialIcon="bi bi-youtube "
            socialIconColor="youtube"
            border="youtube-border"
            arrow="down"
            name="Nathan F."
            title="8239"
            subTitle="S U B S C R I B E R S"
            footer="144 Today"
            darkMode={darkMode}
          />
        </Row>

        <h2 className="mb-4 mt-5 fw-bold">Overview - Today</h2>
        <Row>
          {/* first row */}
          <SmallCard
            title="Page Views"
            socialIcon="bi bi-facebook "
            socialIconColor="facebook"
            number="87"
            arrow="up"
            percentage="3%"
            darkMode={darkMode}
          />

          <SmallCard
            title="Likes"
            socialIcon="bi bi-facebook "
            socialIconColor="facebook"
            number="52"
            arrow="down"
            percentage="2%"
            darkMode={darkMode}
          />

          <SmallCard
            title="Likes"
            socialIcon="bi bi-instagram "
            socialIconColor="instagram"
            number="5462"
            arrow="up"
            percentage="2257%"
            darkMode={darkMode}
          />

          <SmallCard
            title="Profile Views"
            socialIcon="bi bi-instagram "
            socialIconColor="instagram"
            number="52k"
            arrow="up"
            percentage="1375%"
            darkMode={darkMode}
          />

          {/* second */}
          <SmallCard
            title="Retweets"
            socialIcon="bi bi-twitter "
            socialIconColor="twitter"
            number="117"
            arrow="up"
            percentage="303%"
            darkMode={darkMode}
          />

          <SmallCard
            title="Likes"
            socialIcon="bi bi-twitter "
            socialIconColor="twitter"
            number="507"
            arrow="up"
            percentage="553%"
            darkMode={darkMode}
          />

          <SmallCard
            title="Likes"
            socialIcon="bi bi-youtube "
            socialIconColor="youtube"
            number="107"
            arrow="down"
            percentage="19%"
            darkMode={darkMode}
          />

          <SmallCard
            title="Total Views"
            socialIcon="bi bi-youtube "
            socialIconColor="youtube"
            number="1407"
            arrow="down"
            percentage="12%"
            darkMode={darkMode}
          />
        </Row>
      </Container>
    </div>
  );
}
export default App;
