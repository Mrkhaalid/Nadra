"use client";
import React, { useState } from "react";

function RegisterComplaint() {
  const [fullName, setFullName] = useState("");
  const [citizenNumber, setCitizenNumber] = useState("");
  const [trackingId, setTrackingId] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [category, setCategory] = useState("");
  const [complaintDetail, setComplaintDetail] = useState("");
  const [attachment, setAttachment] = useState<File | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("citizenNumber", citizenNumber);
    formData.append("trackingId", trackingId);
    formData.append("email", email);
    formData.append("country", country);
    formData.append("contactNumber", contactNumber);
    formData.append("category", category);
    formData.append("complaintDetail", complaintDetail);
    if (attachment) {
      formData.append("attachment", attachment);
    }

    try {
      const response = await fetch("/api/register-complaint", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Complaint registered successfully!");
      } else {
        console.error("Error registering complaint:", response.status);
      }
    } catch (error) {
      console.error("Error registering complaint:", error);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setAttachment(event.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen py-10 bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">
          Register Complaint
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name / پورانام:
            </label>
            <input
              type="text"
              id="fullName"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="citizenNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Citizen Number / شناختی کارڈ نمبر:
            </label>
            <input
              type="text"
              id="citizenNumber"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
              value={citizenNumber}
              onChange={(e) => setCitizenNumber(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="trackingId"
              className="block text-sm font-medium text-gray-700"
            >
              Tracking ID / ٹریکنگ آئی ڈی:
            </label>
            <input
              type="text"
              id="trackingId"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email / ای میل:
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700"
            >
              Country / ملک کا نام:
            </label>
            <select
              id="country"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            >
              {/* Populate this dropdown with country options */}
            </select>
          </div>

          <div>
            <label
              htmlFor="contactNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Contact Number / رابطہ نمبر:
            </label>
            <input
              type="text"
              id="contactNumber"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700"
            >
              Category / شکایت کی قسم:
            </label>
            <select
              id="category"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              {/* Populate this dropdown with category options */}
            </select>
          </div>

          <div>
            <label
              htmlFor="complaintDetail"
              className="block text-sm font-medium text-gray-700"
            >
              Complaint Detail / شکایت کی تفصیل:
            </label>
            <textarea
              id="complaintDetail"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
              rows={5}
              value={complaintDetail}
              onChange={(e) => setComplaintDetail(e.target.value)}
              required
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="attachment"
              className="block text-sm font-medium text-gray-700"
            >
              Attachment:
            </label>
            <input
              type="file"
              id="attachment"
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
              accept="image/*"
              onChange={handleFileChange}
            />
            <small className="text-gray-500">
              Only images are allowed as attachments. Attachments size must not
              exceed 2MB.
            </small>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="humanCheck"
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
              required
            />
            <label htmlFor="humanCheck" className="ml-2 text-sm text-gray-700">
              I am human
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700"
          >
            LAUNCH COMPLAINT
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterComplaint;
