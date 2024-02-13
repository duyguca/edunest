import * as React from "react";
import Typography from "../Typography";

type footerNavItem = {
  label: string;

  onClick?: () => void;
};

export interface FooterNavProps {
  items?: footerNavItem[];
  title?: string;
}

const FooterNav: React.FC<FooterNavProps> = ({ items, title }) => {
  console.log(items);
  return (
    <>
      <nav>
        <Typography variant="h6" className="mb-6">
          {title}
        </Typography>

        <ul className="flex flex-col justify-start items-start ">
          {items?.map((item, index) => (
            <li key={index} className="mb-4">
              <Typography as="span" variant="pS">
                {item.label}
              </Typography>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default FooterNav;
