import StudentVideo from "./StudentVideo";
import Title from "./Title";
import students from "../data/recital24.json";

const studentsList = students.map((student, i) => {
  return (
    <div
      className="w-full md:w-auto flex flex-col md:flex-row  justify-center items-center space-y-6 
      md:space-y-0 md:space-x-6 md:justify-start"
      key={i}
    >
      {student?.side === "left" ? (
        <>
          <StudentVideo videoId={student.video} />
          <div>
            <h3 className="text-xl md:text-3xl font-semibold text-primary-300">
              {student.name}
            </h3>
            <p className="text-[11px] font-sans text-neutral-400">
              {student.musics}
            </p>
          </div>
        </>
      ) : (
        <>
          <div>
            <h3 className="text-xl md:text-3xl font-semibold text-primary-300">
              {student.name}
            </h3>
            <p className="text-[11px] font-sans text-neutral-400">
              {student.musics}
            </p>
          </div>
          <StudentVideo videoId={student.video} />
        </>
      )}
    </div>
  );
});

const mobileStudentsList = students.map((student, i) => {
  return (
    <div
      className="w-full md:w-auto flex flex-col md:flex-row  justify-center items-center space-y-6 
      md:space-y-0 md:space-x-6 md:justify-start"
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
      </div>
    </div>
  );
});

const Recital24 = () => {
  return (
    <div className="w-full px-6 md:px-0 md:w-[1200px] flex flex-col items-center justify-center">
      <Title title="Recital 2024" line="w-full" />
      <div className="max-w-full md:flex flex-wrap justify-between py-10 gap-10 hidden">
        {studentsList}
      </div>
      <div className="max-w-full flex flex-wrap justify-between pt-5 gap-10 md:hidden">
        {mobileStudentsList}
      </div>
    </div>
  );
};

export default Recital24;