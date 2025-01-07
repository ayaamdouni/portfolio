import React from 'react';
import projects from './../assets/projects.json';

const ProjectsCard = () => {
  return (
    <div className="bg-backg dark:bg-black flex flex-wrap justify-center gap-6 p-7">
      {Object.entries(projects).map(([key, value]) => (
        <a
          href={value.link}
          target="_blank"
          rel="noopener noreferrer"
          key={key}
          className="relative shadow-lg rounded-xl h-60 w-full sm:w-[45%] lg:w-[30%] flex flex-col items-center overflow-hidden hover:opacity-50 hover:border-2 hover:border-blue-500"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${value.image})` }}
          ></div>
          <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 px-4 py-2 rounded ">
            <h3 className="text-lg font-bold text-tagColor ">{value.name}</h3>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ProjectsCard;
