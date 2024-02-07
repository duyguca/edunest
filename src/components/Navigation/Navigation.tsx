import * as React from "react";

type NavigationItem = {
  label: string;
  onClick?: () => void;
};

interface NavigationProps {
  items?: NavigationItem[];
}

const Navigation: React.FC<NavigationProps> = ({ items }) => {
  console.log(items);
  return (
    <>
      <nav>
        <ul className="flex justify-center items-center gap-4">
          {items?.map((item, index) => (
            <li key={index} className="p-regular-14 px-4 py-2">
              {item.label}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
