import React from "react";

type Props = {
  children: any;
};

const Body = ({ ...props }: Props) => {
  return (
    <div className="flex flex-col gap-3 justify-center items-center w-full h-full bg-zinc-400 dark:bg-zinc-800 p-4">
      {props.children}
    </div>
  );
};

export default Body;
