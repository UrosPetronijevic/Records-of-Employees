import { Employee } from "../../Classes/EmployeeClass";
import Absences from "./Absences";
import Calendar from "./Calendar";

type AttendanceManagementProps = {
  setAbsence: React.Dispatch<React.SetStateAction<boolean>>;
  absence: boolean;
  employees: Employee[];
  selectedEmployeeId: string;
  setEmployees: React.Dispatch<React.SetStateAction<Employee[]>>;
};

export default function AttendanceManagement({
  setAbsence,
  absence,
  employees,
  selectedEmployeeId,
  setEmployees,
}: AttendanceManagementProps) {
  const handleToggle = () => {
    setAbsence((prev) => !prev); // Toggles the absence state
  };

  return (
    <div className="absolute inset-0 bg-white/90 text-white flex flex-col p-8 gap-10">
      <div
        className="self-end text-slate-500 text-5xl hover:text-red-500 cursor-pointer"
        onClick={handleToggle}
      >
        &#x2715;
      </div>
      <div className="flex justify-between self-center w-full h-[80%]">
        <Calendar
          selectedEmployeeId={selectedEmployeeId}
          setEmployees={setEmployees}
          employees={employees}
        />
        <Absences
          setAbsence={setAbsence}
          absence={absence}
          employees={employees}
        />
      </div>
    </div>
  );
}
