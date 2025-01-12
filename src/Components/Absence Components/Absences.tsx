import { Employee } from "../../Classes/EmployeeClass";
import { absenceTypes } from "../../Classes/StaticData";

type AbsenceProps = {
  employees: Employee[];
  setEmployees: React.Dispatch<React.SetStateAction<Employee[]>>;

  selectedEmployeeId: string;
};

export default function Absences({
  employees,
  setEmployees,
  selectedEmployeeId,
}: AbsenceProps) {
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // const handleAbsenceArrangement = (type: string) => {
  //   const updatedEmployees = employees.map((employee) => {
  //     if (employee.getId() === selectedEmployeeId) {
  //       const updatedEmployee: Partial<Employee> = {};
  //       let targetArray: keyof Employee | undefined;

  //       // Determine the target array based on the absence type
  //       switch (type) {
  //         case "Godisnji Odmor":
  //           targetArray = "godisnjiOdmorArr";
  //           break;
  //         case "Placeno odsustvo":
  //           targetArray = "placenoOdsustvoArr";
  //           break;
  //         case "Bolovanje":
  //           targetArray = "bolovanjeArr";
  //           break;
  //         case "Drzavni praznik":
  //           targetArray = "drzavniPraznikArr";
  //           break;
  //         case "Verski praznik":
  //           targetArray = "verskiPraznikArr";
  //           break;
  //         case "Slava":
  //           targetArray = "slavaArr";
  //           break;
  //         default:
  //           console.warn(`Unhandled absence type: ${type}`);
  //           return employee; // Return the employee unchanged if type is invalid
  //       }

  //       if (targetArray) {
  //         // Move selectedDaysArr to the target array
  //         updatedEmployee[targetArray] = [
  //           ...((employee[targetArray] as number[]) || []),
  //           ...employee.selectedDaysArr,
  //         ];
  //         updatedEmployee.selectedDaysArr = []; // Clear selectedDaysArr
  //       }

  //       return Object.assign(new Employee(), employee, updatedEmployee);
  //     }
  //     return employee;
  //   });

  //   setEmployees(updatedEmployees); // Update state
  // };

  const handleAbsenceArrangement = (type: string) => {
    const updatedEmployees = employees.map((employee) => {
      if (employee.getId() === selectedEmployeeId) {
        const updatedEmployee: Partial<Employee> = {};
        let targetArray: keyof Employee | undefined;

        // Determine the target array based on the absence type
        switch (type) {
          case "Godisnji Odmor":
            targetArray = "godisnjiOdmorArr";
            break;
          case "Placeno odsustvo":
            targetArray = "placenoOdsustvoArr";
            break;
          case "Bolovanje":
            targetArray = "bolovanjeArr";
            break;
          case "Drzavni praznik":
            targetArray = "drzavniPraznikArr";
            break;
          case "Verski praznik":
            targetArray = "verskiPraznikArr";
            break;
          case "Slava":
            targetArray = "slavaArr";
            break;
          default:
            console.warn(`Unhandled absence type: ${type}`);
            return employee; // Return the employee unchanged if type is invalid
        }

        if (targetArray) {
          // Filter out the selected days from all absence arrays
          const selectedDays = employee.selectedDaysArr;
          updatedEmployee.godisnjiOdmorArr = employee.godisnjiOdmorArr.filter(
            (day) => !selectedDays.includes(day)
          );
          updatedEmployee.placenoOdsustvoArr =
            employee.placenoOdsustvoArr.filter(
              (day) => !selectedDays.includes(day)
            );
          updatedEmployee.bolovanjeArr = employee.bolovanjeArr.filter(
            (day) => !selectedDays.includes(day)
          );
          updatedEmployee.drzavniPraznikArr = employee.drzavniPraznikArr.filter(
            (day) => !selectedDays.includes(day)
          );
          updatedEmployee.verskiPraznikArr = employee.verskiPraznikArr.filter(
            (day) => !selectedDays.includes(day)
          );
          updatedEmployee.slavaArr = employee.slavaArr.filter(
            (day) => !selectedDays.includes(day)
          );

          // Move selectedDaysArr to the target array
          updatedEmployee[targetArray] = [
            ...((employee[targetArray] as number[]) || []),
            ...selectedDays,
          ];
          updatedEmployee.selectedDaysArr = []; // Clear selectedDaysArr
        }

        return Object.assign(new Employee(), employee, updatedEmployee);
      }
      return employee;
    });

    setEmployees(updatedEmployees); // Update state
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
            onClick={() => handleAbsenceArrangement(absence.type)}
          >
            <span>{absence.type}</span>
            <div className={`h-7 w-7 rounded-full ${absence.color}`}></div>
          </li>
        ))}
      </ol>
    </div>
  );
}
