import { motion } from "framer-motion";
import Skill from "./Skill";
import Form from "./Form";

const Menu = ({ isOpened, setIsOpened }) => {
  if (isOpened) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
        animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
        transition={{ duration: 0.5 }}
        className="lg:no-scrollbar scrollbar-thin fixed p-4 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-100 rounded-[32px] shadow-lg left-1/2 top-1/2 z-[100] w-[80%] h-[90%] grid place-items-center overflow-y-scroll 2xl:w-[60%]"
      >
        <button
          onClick={() => setIsOpened(false)}
          className="absolute top-0 text-6xl transition duration-200 right-3 text-stone-400 hover:text-stone-500"
        >
          &times;
        </button>
        <div className="flex flex-col items-center justify-center gap-12 lg:flex-row xl:gap-32 xl:w-[85%] mt-8 lg:mt-0">
          <img
            className="h-full rounded-full w-80 xl:w-[40%]"
            alt="Profile"
            src="/profile.jpg"
          />
          <div className="flex flex-col gap-9 ">
            <div className="flex flex-col gap-6 ">
              <h2 className="text-green-800 xl:text-lg">About Me</h2>
              <h1 className="text-3xl font-bold text-red-700 xl:text-5xl">
                Hey, I'm{" "}
                <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-red-500 relative inline-block">
                  <span class="relative text-white">Cindy</span>
                </span>
              </h1>
              <p className="text-sm leading-6 xl:text-md text-amber-900">
                Hey, I'm Cindy! I'm a passionate web developer with a strong
                focus on front-end development. I love creating beautiful and
                user-friendly websites.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-green-800">Skills</h2>
              <div className="flex flex-wrap items-center gap-2 text-white">
                <Skill>Marketing</Skill>
                <Skill>Public Speaking</Skill>
                <Skill>Analytical Thinking</Skill>
                <Skill>Problem Solving</Skill>
                <Skill>Creativity</Skill>
                <Skill>Adaptability</Skill>
                <Skill>Innovation</Skill>
              </div>
            </div>
          </div>
        </div>
        <Form />
      </motion.div>
    );
  }
};

export default Menu;
