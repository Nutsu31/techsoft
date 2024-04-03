import { BiStar } from "react-icons/bi";
import { BsPeople, BsPeopleFill } from "react-icons/bs";
import { CgIfDesign } from "react-icons/cg";
import { FaPuzzlePiece } from "react-icons/fa";
import { FaDiagramProject } from "react-icons/fa6";
import { FcCollaboration } from "react-icons/fc";

export const serviceCardProps = [
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

export const chooseCardProps = [
  {
    title: "Expertise",
    sub: "Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.",
    icon: <BiStar color="rgb(132 204 22)" size={28} />,
  },
  {
    title: "Client-Centric Approach",
    sub: "We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success.",
    icon: <BsPeople color="rgb(132 204 22)" size={28} />,
  },
  {
    title: "Results-Driven Solutions",
    sub: "Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.",
    icon: <FaDiagramProject color="rgb(132 204 22)" size={28} />,
  },
  {
    title: "Collaborative Partnership",
    sub: "We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.",
    icon: <BsPeopleFill color="rgb(132 204 22)" size={28} />,
  },
];
