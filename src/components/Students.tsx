"use client";

import StudentVideo from "./StudentVideo";
import Title from "./Title";
import students from "../data/recital23.json";
import { motion } from "framer-motion";

const studentsList = students.map((student, i) => {
  return (
    <div
      className="w-full md:w-auto flex flex-col md:flex-row  justify-center items-center space-y-6 
      md:space-y-0 md:space-x-6 md:justify-start"
      key={i}
    >
      {student?.side === "left" ? (
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="w-full md:w-auto flex flex-col md:flex-row justify-center items-center 
          gap-6"
        >
          <StudentVideo videoId={student.video} />
          <div>
            <h3 className="text-xl md:text-3xl font-semibold text-primary-300">
              {student.name}
            </h3>
            <p className="text-[11px] font-sans text-neutral-400">
              {student.musics}
            </p>
            <ul className="">
              <li
                className="text-xs font-sans text-neutral-400 
              list-disc list-inside"
              >
                {student.age}
              </li>
              <li
                className="text-xs font-sans text-neutral-400 
             list-disc list-inside"
              >
                {student.experience}
              </li>
            </ul>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="w-full md:w-auto flex flex-col md:flex-row justify-center items-center 
          gap-6"
        >
          <div>
            <h3 className="text-xl md:text-3xl font-semibold text-primary-300">
              {student.name}
            </h3>
            <p className="text-[11px] font-sans text-neutral-400">
              {student.musics}
            </p>
            <ul className="">
              <li
                className="text-xs font-sans text-neutral-400 
              list-disc list-inside"
              >
                {student.age}
              </li>
              <li
                className="text-xs font-sans text-neutral-400 
             list-disc list-inside"
              >
                {student.experience}
              </li>
            </ul>
          </div>
          <StudentVideo videoId={student.video} />
        </motion.div>
      )}
    </div>
  );
});

const mobileStudentsList = students.map((student, i) => {
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      className="w-full md:w-auto flex flex-col md:flex-row  justify-center items-center space-y-6 
    md:space-y-0 md:space-x-6 md:justify-start gap-6"
      key={i}
    >
      <StudentVideo videoId={student.video} />
      <div>
        <h3 className="text-xl md:text-3xl font-semibold text-primary-300">
          {student.name}
        </h3>
        <p className="text-[11px] font-sans text-neutral-400">
          {student.musics}
        </p>
        <ul className="">
          <li
            className="text-xs font-sans text-neutral-400 
              list-disc list-inside"
          >
            {student.age}
          </li>
          <li
            className="text-xs font-sans text-neutral-400 
             list-disc list-inside"
          >
            {student.experience}
          </li>
        </ul>
      </div>
    </motion.div>
  );
});

const Students = () => {
  return (
    <div className="w-full px-6 md:px-0 md:w-[1200px] flex flex-col items-center justify-center">
      <Title title="Recital 2023" line="w-full" />
      <div className="max-w-full md:flex flex-wrap justify-between py-10 gap-10 hidden">
        {studentsList}
      </div>
      <div className="max-w-full flex flex-wrap justify-between pt-5 gap-10 md:hidden">
        {mobileStudentsList}
      </div>
    </div>
  );
};

export default Students;
