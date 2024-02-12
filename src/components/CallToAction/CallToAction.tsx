import * as React from "react";

export interface CallToActionProps {
  children: React.ReactNode;
}

const CallToAction: React.FC<CallToActionProps> = ({ children }) => {
  return (
    <div className="relative w-full h-auto mx-auto bg-gray-900 rounded-sm overflow-hidden flex flex-col items-center justify-center p-10 gap-5">
      <div className="flex flex-col absolute top-0 left-0">
        <div className="absolute w-[200px] h-[200px] bg-yellow-light rounded-full border-8 border-textColor z-[10] top-[-50px] left-[-125px]"></div>
        <div className="absolute w-[200px] h-[200px] bg-pink-light rounded-full border-8 border-textColor top-[50px] left-[-125px] z-[9]"></div>
        <div className="absolute w-[200px] h-[200px] bg-teal-light rounded-full border-8 border-textColor z-[8] top-[150px] left-[-125px] "></div>
      </div>
      {children}

      <div className="flex flex-col absolute top-0 right-0">
        <div className="absolute w-[200px] h-[200px] bg-yellow-light rounded-full border-8 border-textColor z-[10] top-[-50px] right-[-125px]"></div>
        <div className="absolute w-[200px] h-[200px] bg-pink-light rounded-full border-8 border-textColor top-[50px] right-[-125px] z-[9]"></div>
        <div className="absolute w-[200px] h-[200px] bg-teal-light rounded-full border-8 border-textColor z-[8] top-[150px] right-[-125px] "></div>
      </div>
    </div>
  );
};

export default CallToAction;
