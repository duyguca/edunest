import Image from "next/image";
import React from "react";
import Navigation from "../Navigation/Navigation";
import Button from "../Button/Button";
import Container from "../Container";
import Avatar from "../Avatar/Avatar";

interface HeaderProps {
  imgPath: string;
}

const Header: React.FC<HeaderProps> = ({ imgPath }) => {
  const items = [
    { label: "COURSES", link: "/courses" },
    { label: "SCHEDULE", link: "/schedule" },
    { label: "TUTORS", link: "/tutors" },
    { label: "CONTACT", link: "/contact" },
  ];
  return (
    <header className=" w-full h-25 bg-white border-b border-solid border-gray-light ">
      <Container>
        <div className="flex justify-between items-center gap-12">
          <img src={imgPath} alt="logo" className="w-10 h-10 object-fill" />
          <Avatar />

          <Navigation items={items} />
          <Button label="Register" size="small" variant="secondary" />
        </div>
      </Container>
    </header>
  );
};

export default Header;
