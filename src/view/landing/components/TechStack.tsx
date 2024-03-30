import React from "react";
import DockerLogo from "../../../assets/tech/docker.svg";
import ReactLogo from "../../../assets/tech/react.svg";
import ExpressLogo from "../../../assets/tech/express.svg";
import NestLogo from "../../../assets/tech/nest.svg";
import PostgresLogo from "../../../assets/tech/postgres.svg";
import MongoDbLogo from "../../../assets/tech/mongoDB.svg";
import FigmaLogo from "../../../assets/tech/figma.svg";
import NodeLogo from "../../../assets/tech/node.svg";
import TypeScriptLogo from "../../../assets/tech/typescript.svg";
import Card from "../../../components/ui/Card";

const logos = [
  {
    title: "Docker",
    logo: DockerLogo,
  },
  {
    title: "ReactJS",
    logo: ReactLogo,
  },
  {
    title: "ExpressJS",
    logo: ExpressLogo,
  },
  {
    title: "NestJS",
    logo: NestLogo,
  },
  {
    title: "NodeJS",
    logo: NodeLogo,
  },
  {
    title: "Typescript",
    logo: TypeScriptLogo,
  },
  {
    title: "PostgreSQL",
    logo: PostgresLogo,
  },
  {
    title: "MongoDB",
    logo: MongoDbLogo,
  },
  {
    title: "Figma",
    logo: FigmaLogo,
  },
];

const TechStack = () => {
  return (
    <>
      <h1 className="text-white font-bold text-4xl p-2 m-4">Technologies</h1>
      <Card className="w-full ml-0 my-4 p-4 border-stone-800 flex flex-wrap items-center justify-evenly px-12 gap-8 lg:flex-nowrap ">
        {logos.map((logo: (typeof logos)[0]) => (
          <div
            key={logo.title}
            className="flex flex-col items-center gap-2 w-1/4 md:w-1/6"
          >
            <img src={logo.logo} className="w-16" alt={logo.title} />
            <p className="text-white text-center">{logo.title}</p>
          </div>
        ))}
      </Card>
    </>
  );
};

export default TechStack;
