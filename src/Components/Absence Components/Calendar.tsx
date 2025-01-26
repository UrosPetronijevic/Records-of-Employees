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

  // Get the weekday of the first day of the month (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const firstDayOfMonth = new Date(thisYear, thisMonth, 1).getDay();

  // Calculate the number of empty slots before the first day (if first day is 3rd day of the week, we need 2 empty slots)
  const emptySlots = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1; // Adjust for Monday being first day

  // Create an array of days for the current month
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  // Prepend empty slots to the beginning of the array
  const calendarArray = [...Array(emptySlots).fill(null), ...daysArray];

  const daysOfWeek = [
    "Ponedeljak",
    "Utorak",
    "Sreda",
    "Cetvrtak",
    "Petak",
    "Subota",
    "Nedelja",
  ];

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

        return Object.assign(new Employee(), employee, {
          selectedDaysArr: updatedDaysArr,
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
          {daysOfWeek.map((dayOfWeek) => (
            <div className="flex p-4 justify-center items-center rounded-sm text-[1.2rem] underline">
              {dayOfWeek}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 grid-rows-5 gap-2">
          {calendarArray.map((day) => (
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
    </div>
  );
}
