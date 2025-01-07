import React from 'react';
import certifications from './../assets/certifications.json';

const CardCertifications = () => {
  return (
    <div className="pt-7 p-8 lg:pl-20 lg:pr-20 bg-backg dark:bg-black flex flex-wrap justify-center items-center">
      <div style={{
          backgroundImage: `url(../images/certifications.png)`,
          /* From https://css.glass */
          backgroundColor: "#7CB9E8",
          borderRadius: "16px",
          border: "1px solid rgba(80, 83, 208, 0.3)",
          backgroundSize: "700px 700px", 
          backgroundPosition: "right center",
          backgroundRepeat: "no-repeat",
        }}
      className="cardIntroduction bg-gradient-to-bl from-slate-800 to-stone-800 rounded-[4rem] text-center border-4 border-blue-700 shadow-xl shadow-blue-500/50 p-6 w-full h-[500px] flex flex-row flex-wrap justify-start gap-6">
        <div className='flex md:flex-row lg:flex-row lg:w-1/2 gap-6 flex-wrap'>{Object.entries(certifications).map(([key, value]) => (
          <div
            className="relative shadow-lg rounded-xl h-32 w-32 md:h-44 md:w-72 lg:h-44 lg:w-72 flex flex-row items-center overflow-hidden border border-blue-500"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${value.image})` }}
            ></div>
            <div className="absolute bottom-2 left-2 h-6 w-20 md:h-10 md:w-32 bg-tagColor bg-opacity-50 px-4 py-2 rounded flex items-center justify-center">
              <h3 className="text-[10px] md:text-sm font-bold text-tagColor">{value.name}</h3>
          </div>
            
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default CardCertifications;
