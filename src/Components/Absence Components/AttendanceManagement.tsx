import { Employee } from "../../Classes/EmployeeClass";
import Absences from "./Absences";
import Calendar from "./Calendar";

type AttendanceManagementProps = {
  setAbsence: React.Dispatch<React.SetStateAction<boolean>>;
  absence: boolean;
  employees: Employee[];
};

export default function AttendanceManagement({
  setAbsence,
  absence,
  employees,
}: AttendanceManagementProps) {
  return (
    <div className="absolute inset-0 bg-white/90 text-white flex flex-col p-8 gap-10">
      <div
        className="self-end text-red-500 text-5xl"
        onClick={() => {
          setAbsence(!absence);
        }}
      >
        &#x2715;
      </div>
      <div className="flex justify-between self-center w-full h-[80%]">
        <Calendar />
        <Absences
          setAbsence={setAbsence}
          absence={absence}
          employees={employees}
        />
      </div>
    </div>
  );
}
