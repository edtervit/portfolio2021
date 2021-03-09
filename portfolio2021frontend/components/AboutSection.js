import React, { useState } from "react";

function AboutSection({ data }) {
  console.log("about data:");
  console.log(data);

  const bioArray = [data.bio1, data.bio2, data.bio3, data.bio4, data.bio5];

  const [bio, setBio] = useState(bioArray[2]);

  return (
    <div className="text-center p-10 flex flex-col container mx-auto">
      <h2 className="text-3xl">About Me</h2>
      <div className="bg-gray p-10 my-5 text-white">
        <div className="w-full md:w-2/3">
          <p>{bio}</p>
        </div>
        <div className="w-full md:w-1/3">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
