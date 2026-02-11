import React from "react";

const Resume = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Resume</h1>
      <div className="w-full h-[80vh] border rounded-md overflow-hidden">
        <iframe
          src="/Aditya-Hada-Resume.pdf"
          className="w-full h-full"
          title="Aditya Hada Resume"
        />
      </div>
      <p className="mt-4 text-sm text-gray-600">
        If the resume does not load,{" "}
        <a
          href="/Aditya-Hada-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          click here to download it.
        </a>
      </p>
    </div>
  );
};

export default Resume;

