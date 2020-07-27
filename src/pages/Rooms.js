import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { Button } from "antd";
import RoomsContainer from "../components/RoomsContainer";

function Rooms() {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our rooms">
          <Button size="large" style={{ backgroundColor: "#162447" }}>
            <Link to="/" style={{ color: "white", fontSize: "1rem" }}>
              Return Home
            </Link>
          </Button>
        </Banner>
      </Hero>
      <RoomsContainer />
    </>
  );
}

export default Rooms;
