import React from "react";
interface Props {
  children: React.ReactNode;
}
export default function Rootlayout({ children }: Props) {
  return <div className="h-full bg-red-500 text-white">{children}</div>;
}
