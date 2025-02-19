import { Employee } from "../../Classes/EmployeeClass";
import {
  absenceTypes,
  calendarArray,
  daysOfWeek,
  thisYear,
  today,
} from "../../Classes/StaticData";

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
  //////////////////////////////////////////////////////////////////////////////////////////

  // Function to determine the color and interactivity of each day
  const getDayColor = (day: number): string => {
    const selectedEmployee = employees.find(
      (employee) => employee.getId() === selectedEmployeeId
    );

    if (!selectedEmployee) return "";

    // Check if the day is a weekend or holiday and set to red
    if (selectedEmployee.weekendsArr.includes(day)) {
      return "bg-red-500 text-white cursor-not-allowed";
    }

    if (selectedEmployee.drzavniPraznikArr.includes(day)) {
      return "bg-[#23749d] text-white cursor-not-allowed";
    }

    if (selectedEmployee.verskiPraznikArr.includes(day)) {
      return "bg-[#6b1a93] text-white cursor-not-allowed";
    }

    // Check if the day is null
    if (day === null) {
      return "cursor-not-allowed border-none shadow-none";
    }

    // Check if the day is selected
    if (selectedEmployee.selectedDaysArr.includes(day)) {
      return "bg-indigo-400 text-white";
    }

    // Check other absence types
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

  // Function to toggle day selection (excluding weekends and holidays)
  const toggleDay = (day: number) => {
    const selectedEmployee = employees.find(
      (employee) => employee.getId() === selectedEmployeeId
    );

    if (
      !selectedEmployee ||
      selectedEmployee.weekendsArr.includes(day) ||
      selectedEmployee.verskiPraznikArr.includes(day) ||
      selectedEmployee.drzavniPraznikArr.includes(day)
    ) {
      return; // Do nothing if day is in weekends or holidays
    }

    const updatedEmployees = employees.map((employee) => {
      if (employee.getId() === selectedEmployeeId) {
        const updatedDaysArr = employee.selectedDaysArr.includes(day)
          ? employee.selectedDaysArr.filter((d) => d !== day) // Remove if already selected
          : [...employee.selectedDaysArr, day]; // Add if not selected

        // Remove the day from other relevant arrays
        const updatedGodisnjiOdmorArr = employee.godisnjiOdmorArr.filter(
          (d) => d !== day
        );
        const updatedPlacenoOdsustvoArr = employee.placenoOdsustvoArr.filter(
          (d) => d !== day
        );
        const updatedSlavaArr = employee.slavaArr.filter((d) => d !== day);
        const updatedBolovanjeArr = employee.bolovanjeArr.filter(
          (d) => d !== day
        );

        return Object.assign(new Employee(), employee, {
          selectedDaysArr: updatedDaysArr,
          godisnjiOdmorArr: updatedGodisnjiOdmorArr,
          placenoOdsustvoArr: updatedPlacenoOdsustvoArr,
          slavaArr: updatedSlavaArr,
          bolovanjeArr: updatedBolovanjeArr,
        });
      }
      return employee;
    });

    setEmployees(updatedEmployees); // Update the state
  };
  //////////////////////////////////////////////////////////////////////////////////////////

  // // Helper to check if a day is selected
  // const isDaySelected = (day: number): boolean => {
  //   const selectedEmployee = employees.find(
  //     (employee) => employee.getId() === selectedEmployeeId
  //   );
  //   return selectedEmployee?.selectedDaysArr.includes(day) ?? false;
  // };

  //////////////////////////////////////////////////////////////////////////////////////////
  return (
    <div className="w-[60%] text-slate-500 bg-slate-50 shadow-md flex flex-col gap-10 p-8 rounded-md cursor-pointer border border-slate-500">
      <h1 className="self-center text-5xl">
        {today.toLocaleString("default", { month: "long" })} {thisYear}
      </h1>
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-7">
          {daysOfWeek.map((dayOfWeek, index) => (
            <div
              className="flex p-4 justify-center items-center rounded-sm text-[1.2rem] underline"
              key={`${dayOfWeek} - ${index}`}
            >
              {dayOfWeek}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 grid-rows-5 gap-2">
          {calendarArray.map((day, index) => (
            <div
              key={`${day}-${index}`}
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
    </div>
  );
}
