import React from "react";

const ResumeForm = ({ onChange }) => {
  return (
    <div className="p-4 space-y-3">
      <h2 className="text-xl font-semibold mb-2">Resume Form</h2>
      <div>
        <label className="block font-medium">Full Name</label>
        <input
          type="text"
          name="name"
          className="border rounded p-2 w-full"
          placeholder="Enter your name"
          onChange={onChange}
        />
      </div>
      <div>
        <label className="block font-medium">Email</label>
        <input
          type="email"
          name="email"
          className="border rounded p-2 w-full"
          placeholder="Enter your email"
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default ResumeForm;
