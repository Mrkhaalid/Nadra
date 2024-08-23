import Image from "next/image";
import React from "react";

const Support = () => {
  return (
    <div className="my-20 lg:px-80 md:px-60 sm:px-10 px-5">
      <div className="flex md:flex-row flex-col gap-20 mb-28">
        <Image
          src={"https://complaints.nadra.gov.pk/img/imporved_img.png"}
          alt="Support Image"
          width={200}
          height={200}
          loading="lazy"
        />
        <div>
          <h1 className="text-[38px] font-bold">
            Improved Customer <br /> Experience
          </h1>
          <p className="text-lg font-light leading-7">
            NADRA's improved Complaint Management System provides users with the
            capability to track each complaint through its lifecycle. Embedded
            intelligence ensures that users do not face similar issues in the
            future
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col-reverse` gap-20 mb-28">
        <div>
          <h1 className="text-[38px] font-bold">
            Efficient and Effective
            <br />
            Processing of Complaints
          </h1>
          <p className="text-lg font-light leading-7">
            A fully automated management system with real-time monitoring
            ensures timely resolution of complaints
          </p>
        </div>
        <Image
          src={"https://complaints.nadra.gov.pk/img/speed_img.png"}
          alt="Support Image"
          width={200}
          height={200}
          loading="lazy"
        />
      </div>
      <div className="flex md:flex-row flex-col gap-20 mb-28">
        <Image
          src={"https://complaints.nadra.gov.pk/img/24_seven_img.png"}
          alt="Support Image"
          width={200}
          height={200}
          loading="lazy"
        />
        <div>
          <h1 className="text-[38px] font-bold">24/7 Support</h1>
          <p className="text-lg font-light leading-7">
            NADRA Customer Care is committed to deliver highest level of service
            for the satisfaction of its customer and operates 24/7. For further
            queries please contact our helpline at 1777 (for subscribers of
            Mobilink,Ufone,Telenor and Zong), +92 51 111 786 100 (for fixed
            lines and overseas applicants)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Support;
