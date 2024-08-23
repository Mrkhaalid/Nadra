import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const LeftHome = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl font-bold pb-1">
        NADRA <br /> Customer Care
      </h1>
      <p className="text-lg font-light leading-6">
        NADRA's online complaint system provides multichannel capabilities,
        advanced reporting functionalities as well as a platform for
        cross-function collaboration and immediate customer feedback system
      </p>
      <p>
        <Link href="#" className="text-blue-500 text-lg" title="click here">
          More Information
        </Link>
      </p>
      <div className="flex gap-4">
        <Button variant={"default"} className="bg-primary text-lg">
          Register Complaints
        </Button>
        <Button
          variant={"default"}
          className="bg-secondary hover:bg-secondary/95 hover:shadow-sm text-lg"
        >
          Complaint Status
        </Button>
      </div>
    </div>
  );
};

export default LeftHome;
