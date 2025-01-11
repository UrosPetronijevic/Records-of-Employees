import { Employee } from "../../Classes/EmployeeClass";
import { absenceTypes } from "../../Classes/StaticData";

type AbsenceProps = {
  setAbsence: React.Dispatch<React.SetStateAction<boolean>>;
  absence: boolean;
  employees: Employee[];
};

export default function Absences({
  setAbsence,
  absence,
  employees,
}: AbsenceProps) {
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const handleToggle = () => {
    setAbsence((prev) => !prev); // Toggles the absence state
  };
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="w-[35%] bg-indigo-400 p-8 flex flex-col gap-10 rounded-lg backdrop-blur-sm cursor-pointer">
      <h1 className="text-5xl font-bold self-center">Odsustva</h1>

      <ol className="h-full w-full flex flex-col text-2xl justify-center gap-5">
        {absenceTypes.map((absence) => (
          <li
            key={absence.type + absence.color}
            className="flex justify-between bg-indigo-200/20 p-4 rounded-md shadow-md hover:bg-indigo-900/30"
            onClick={handleToggle}
          >
            <span>{absence.type}</span>
            <div className={`h-7 w-7 rounded-full ${absence.color}`}></div>
          </li>
        ))}
      </ol>
    </div>
  );
}
