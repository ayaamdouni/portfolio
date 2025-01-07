import React from "react";
import skills from "../assets/skills.json";

const SkillsCard = () => {
  return (
    <div className="bg-backg dark:bg-black flex flex-wrap justify-center gap-6 p-7">
      {Object.entries(skills).map(([category, { image, items }]) => (
        <div
          key={category}
          className="bg-skillbg dark:bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg rounded-[3rem] p-7 w-full sm:w-[45%] lg:w-[22%] flex flex-col"
        >
          <div className="flex flex-row items-center mb-4">
            <img src={image} alt={`${category} icon`} className="w-10 m-4" />
            <h3 className="text-2xl font-semibold text-titleColor">{category}</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {items.map((skill) => (
              <span
                key={skill}
                className="backdrop-blur-[20px] bg-tagColor dark:bg-[rgba(77,237,133,0.4)] text-bgCard text-xl rounded-full px-3 py-1 shadow-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsCard;
