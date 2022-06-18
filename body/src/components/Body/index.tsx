import React from "react";

type Props = {
  children: any;
};

const Body = ({ ...props }: Props) => {
  return <div className="flex flex-grow bg-zinc-200 p-4">{props.children}</div>;
};

export default Body;
