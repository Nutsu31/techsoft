import Hero from "../../assets/hero.png";
import React from "react";
import Banner from "./components/Banner";
import TechStack from "./components/TechStack";
import LongBanner from "../../components/shared/LongBanner";
import ServiceBanner from "../../assets/Text Container.png";
import { CgIfDesign } from "react-icons/cg";
import { FaPuzzlePiece } from "react-icons/fa";
import { FaDiagramProject } from "react-icons/fa6";
const LandingPage = () => {
  const cardProps = [
    {
      title: "Design",
      sub: "At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.",
      icon: <CgIfDesign color="rgb(132 204 22)" size={28} />,
    },
    {
      title: "Engineering",
      sub: "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.",
      icon: <FaPuzzlePiece color="rgb(132 204 22)" size={28} />,
    },
    {
      title: "Project Management",
      sub: "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.",
      icon: <FaDiagramProject color="rgb(132 204 22)" size={28} />,
    },
  ];
  return (
    <>
      <Banner />
      <TechStack />
      <LongBanner
        img={ServiceBanner}
        cardProps={cardProps}
        title="Our Services"
        subTitle="Transform your brand with our innovative digital solutions that captivate and engage your audience."
      />
    </>
  );
};

export default LandingPage;
