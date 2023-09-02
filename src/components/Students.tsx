import StudentVideo from "./StudentVideo";
import Title from "./Title";
import students from "../data/students.json";

const studentsList = students.map((student, i) => {
  return (
    <div className="flex justify-center items-center" key={i}>
      {student?.side === "left" ? (
        <>
          <StudentVideo videoId={student.video} />
          <div>
            <h3 className="text-3xl font-semibold text-primary-300">
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
        </>
      ) : (
        <>
          <div>
            <h3 className="text-3xl font-semibold text-primary-300">
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
        </>
      )}
    </div>
  );
});

const Students = () => {
  return (
    <div className="w-[1200px] flex flex-col items-center justify-center py-5">
      <Title title="Alunos" line="w-[50px]" />
      <div className="max-w-full flex flex-wrap justify-between py-10 gap-10">
        {studentsList}
      </div>
    </div>
  );
};

export default Students;
