import React, { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const ModelCard = ({ children }: Props) => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-40 h-56 
      sm:w-48 sm:h-64 md:w-[110px] md:h-[250px]
      overflow-hidden hover:z-[1000] hover:scale-125 
       duration-300 border-white-500 border-4 transform skew-x-12 ">
        <div className="-skew-x-12 flex items-center justify-center h-full w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
