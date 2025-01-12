import { Employee } from "../../Classes/EmployeeClass";
import { absenceTypes } from "../../Classes/StaticData";

type CalendarProps = {
  selectedEmployeeId: string;
  employees: Employee[];
  setEmployees: React.Dispatch<React.SetStateAction<Employee[]>>;
};

export default function Calendar({
  selectedEmployeeId,
  employees,
  setEmployees,
}: CalendarProps) {
  // Get the current date
  const today = new Date();
  const thisMonth = today.getMonth();
  const thisYear = today.getFullYear();

  // Calculate the number of days in the current month
  const daysInMonth = new Date(thisYear, thisMonth + 1, 0).getDate();

  // Create an array of days for the current month
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  //////////////////////////////////////////////////////////////////////////////////////////

  const toggleDay = (day: number) => {
    const updatedEmployees = employees.map((employee) => {
      if (employee.getId() === selectedEmployeeId) {
        const updatedDaysArr = employee.selectedDaysArr.includes(day)
          ? employee.selectedDaysArr.filter((d) => d !== day) // Remove the day if it exists
          : [...employee.selectedDaysArr, day]; // Add the day if it doesn't exist

        // Return a new Employee instance with updated selectedDaysArr
        return Object.assign(new Employee(), employee, {
          selectedDaysArr: updatedDaysArr,
        });
      }
      return employee;
    });

    setEmployees(updatedEmployees); // Update the state to trigger re-render
  };

  //////////////////////////////////////////////////////////////////////////////////////////

  const getDayColor = (day: number): string => {
    const selectedEmployee = employees.find(
      (employee) => employee.getId() === selectedEmployeeId
    );

    if (!selectedEmployee) return "";

    if (selectedEmployee.selectedDaysArr.includes(day)) {
      return "bg-indigo-400 text-white";
    }

    for (const absence of absenceTypes) {
      const key = absence.key as keyof Employee;
      const array = selectedEmployee[key] as number[] | undefined;
      if (array?.includes(day)) {
        return absence.color;
      }
    }

    return "hover:bg-slate-300 hover:text-indigo-400";
  };

  //////////////////////////////////////////////////////////////////////////////////////////

  // Helper to check if a day is selected
  const isDaySelected = (day: number): boolean => {
    const selectedEmployee = employees.find(
      (employee) => employee.getId() === selectedEmployeeId
    );
    return selectedEmployee?.selectedDaysArr.includes(day) ?? false;
  };

  //////////////////////////////////////////////////////////////////////////////////////////
  return (
    <div className="w-[50%] text-slate-500 bg-slate-50 shadow-md flex flex-col justify-between p-8 rounded-md cursor-pointer border border-slate-500">
      <h1 className="self-center text-5xl">
        {today.toLocaleString("default", { month: "long" })} {thisYear}
      </h1>
      <div className="grid grid-cols-5 grid-rows-7 gap-2">
        {daysArray.map((day) => (
          <div
            key={day}
            className={`flex p-4 shadow-md justify-center items-center border border-slate-300 rounded-sm text-[1.2rem] ${getDayColor(
              day
            )}`}
            onClick={() => toggleDay(day)}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}
