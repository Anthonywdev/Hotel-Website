import React from "react";
import { Button } from "antd";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";

function HomePage() {
  return (
    <>
      <Hero>
        <Banner
          title="luxurious rooms"
          subtitle="deluxe rooms starting at $299"
        >
          <Button size="large" style={{ backgroundColor: "#162447" }}>
            {" "}
            <Link style={{ color: "white", fontSize: "1rem" }} to="/rooms">
              Our Rooms
            </Link>{" "}
          </Button>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
}

export default HomePage;
