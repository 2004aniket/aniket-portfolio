

import { CTA } from "../components";
import { skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className='max-container p-5 text-xl font-mono bg-gradient-to-r from-fuchsia-500 to-cyan-500 h-[100%]'>
      <h1 className='head-text'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Aniket
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col  gap-3 text-white justify-center'>
        <p>
          Software Developer based in India,with expertise in various technologies and specializing in Full Stack Development.
        </p>
      </div>

       <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 grid grid-cols-5 gap-12 bg-gradient-to-r from-blue-200 to-cyan-200 p-4 rounded-3xl'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain hover:animate-spin'
                />
              </div>
              <span className="text-center mt-3">{skill.name}</span>

            </div>
          ))}
        </div>
      </div> 

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;