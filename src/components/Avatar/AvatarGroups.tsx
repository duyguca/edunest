import * as React from "react";

interface AvatarGroupsProps {
  children: React.ReactNode;
}

const AvatarGroups: React.FC<AvatarGroupsProps> = ({ children }) => {
  const arrayChildren = React.Children.toArray(children);
  console.log({ arrayChildren });

  return (
    <div className="flex justify-between items-center w-max">
      {arrayChildren.map((child, index) => {
        const isNotFirst = index !== 0;
        const marginLeftClass = isNotFirst ? "ml-[-18px]" : "";

        return (
          <div className={marginLeftClass}>
            {React.cloneElement(child, {
              src: child.props.src,
            })}
          </div>
        );
      })}
    </div>
  );
};

export default AvatarGroups;
