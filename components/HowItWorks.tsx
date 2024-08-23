import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const HowItWorks = () => {
  return (
    <div className="my-10 lg:px-20 md:px-20 sm:px-10 px-5">
      <h1 className="text-center text-4xl font-bold pb-8">How it works</h1>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-5">
        {/* Card 1 */}
        <div className="bg-orange-100 border-l-4 border-orange-500 p-6 rounded-md shadow-md">
          <div className="flex items-center mb-4">
            <div className="flex-shrink-0 bg-orange-500 text-white text-xl font-bold rounded-full w-10 h-10 flex items-center justify-center">
              01
            </div>
            <h2 className="ml-4 text-orange-600 text-2xl font-bold">
              COMPLAINT REGISTRATION
            </h2>
          </div>
          <p className="text-orange-600">
            Customers can lodge a complaint with NADRA Customer Care through the
            website, call center, or social media.
          </p>
          <p className="text-orange-600 mt-2">
            An email and SMS is sent out to the customer after the launch of the
            complaint containing complaint no, date of the complaint, and
            expected resolution time.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-red-100 border-l-4 border-red-500 p-6 rounded-md shadow-md">
          <div className="flex items-center mb-4">
            <div className="flex-shrink-0 bg-red-500 text-white text-xl font-bold rounded-full w-10 h-10 flex items-center justify-center">
              02
            </div>
            <h2 className="ml-4 text-red-600 text-2xl font-bold">
              COMPLAINT ASSIGNMENT
            </h2>
          </div>
          <p className="text-red-600">
            Depending on the nature of the complaint, the system automatically
            assigns the complaint to the relevant Department, Region, and Teams.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-teal-100 border-l-4 border-teal-500 p-6 rounded-md shadow-md">
          <div className="flex items-center mb-4">
            <div className="flex-shrink-0 bg-teal-500 text-white text-xl font-bold rounded-full w-10 h-10 flex items-center justify-center">
              03
            </div>
            <h2 className="ml-4 text-teal-600 text-2xl font-bold">
              COMPLAINT MONITORING
            </h2>
          </div>
          <p className="text-teal-600">
            The system continuously monitors all the complaints and provides a
            real-time Dashboard to the Senior Management.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-teal-100 border-l-4 border-teal-500 p-6 rounded-md shadow-md">
          <div className="flex items-center mb-4">
            <div className="flex-shrink-0 bg-teal-500 text-white text-xl font-bold rounded-full w-10 h-10 flex items-center justify-center">
              04
            </div>
            <h2 className="ml-4 text-teal-600 text-2xl font-bold">
              COMPLAINT STATUS
            </h2>
          </div>
          <p className="text-teal-600">
            Customer can check status of their complaint any time using the
            website.
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-green-100 border-l-4 border-green-500 p-6 rounded-md shadow-md">
          <div className="flex items-center mb-4">
            <div className="flex-shrink-0 bg-green-500 text-white text-xl font-bold rounded-full w-10 h-10 flex items-center justify-center">
              05
            </div>
            <h2 className="ml-4 text-green-600 text-2xl font-bold">
              RESOLUTION AND FEEDBACK
            </h2>
          </div>
          <p className="text-green-600">
            After complaint resolution, customer is informed via email and SMS.
            Also to assess the quality of service, NADRA Call Centers also calls
            the customer for their feedback.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
