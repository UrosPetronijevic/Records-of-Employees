import Absences from "./Absences";
import Calendar from "./Calendar";

type AttendanceManagementProps = {
  setAbsence: React.Dispatch<React.SetStateAction<boolean>>;
  absence: boolean;
};

export default function AttendanceManagement({
  setAbsence,
  absence,
}: AttendanceManagementProps) {
  return (
    <div className="absolute inset-0 bg-white/90 text-white flex flex-col p-8">
      <div
        className="w-[1rem] self-end text-red-500 text-5xl"
        onClick={() => {
          setAbsence(!absence);
        }}
      >
        &#x2715;
      </div>
      <div className="flex justify-between self-center bg-cyan-300">
        <Calendar />
        <Absences />
      </div>
    </div>
  );
}
