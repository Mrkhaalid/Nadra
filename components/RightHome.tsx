import Image from "next/image";
import React from "react";

const RightHome = () => {
  return (
    <div>
      <Image
        src="https://complaints.nadra.gov.pk/img/form_imgae.png"
        alt="Home Image Missing"
        width={600}
        height={500}
        loading="lazy"
      />
    </div>
  );
};

export default RightHome;
