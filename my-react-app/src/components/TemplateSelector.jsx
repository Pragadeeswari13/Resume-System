import React from "react";

export default function TemplateSelector({ template, setTemplate }) {
  return (
    <div className="mt-4">
      <label className="block text-sm font-medium mb-2">Select Template:</label>
      <div className="flex gap-3">
        {["modern", "classic", "minimal"].map((type) => (
          <button
            key={type}
            onClick={() => setTemplate(type)}
            className={`px-3 py-1 rounded ${template === type
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
              }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}
