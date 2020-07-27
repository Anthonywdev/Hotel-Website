import React, { Component } from "react";
import { FaCocktail, FaShuttleVan, FaBeer, FaHamburger } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "Lorem ipsun dolor sit amet consectrtur adipsising elit. mangi, corpris",
      },
      {
        icon: <FaHamburger />,
        title: "free hamburgers",
        info:
          "Lorem ipsun dolor sit amet consectrtur adipsising elit. mangi, corpris",
      },
      {
        icon: <FaShuttleVan />,
        title: "free transportation",
        info:
          "Lorem ipsun dolor sit amet consectrtur adipsising elit. mangi, corpris",
      },
      {
        icon: <FaBeer />,
        title: "free drinks and alcohols",
        info:
          "Lorem ipsun dolor sit amet consectrtur adipsising elit. mangi, corpris",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
