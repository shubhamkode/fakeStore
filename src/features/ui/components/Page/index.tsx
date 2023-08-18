import React from "react";

import Header from "../Header";

const Page = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-screen h-[100dvh] overflow-y-scroll bg-[#F1F2F4]" >
      <Header />
      <div className="py-2 pb-10">{children}</div>
    </div>
  );
};

export default Page;
