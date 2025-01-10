import { Employee } from "../../Classes/EmployeeClass";

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

  const absenceTypes = [
    { type: "Godisnji Odmor", color: "bg-green-500" },
    { type: "Placeno odsustvo", color: "bg-blue-500" },
    { type: "Bolovanje", color: "bg-yellow-500" },
    { type: "Drzavni praznik", color: "bg-red-500" },
    { type: "Verski praznik", color: "bg-purple-500" },
    { type: "Slava", color: "bg-orange-500" },
  ];

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="w-[35%] bg-purple-950/70 p-8 flex flex-col gap-10 rounded-lg backdrop-blur-sm">
      <h1 className="text-5xl font-bold self-center">Odsustva</h1>

      <ol className="h-full w-full flex flex-col text-2xl justify-center gap-5">
        {absenceTypes.map((absence) => (
          <li
            key={absence.type + absence.color}
            className="flex justify-between bg-purple-950/30 p-4 rounded-md shadow-md"
          >
            <span>{absence.type}</span>
            <div className={`h-7 w-7 rounded-full ${absence.color}`}></div>
          </li>
        ))}
      </ol>
    </div>
  );
}
