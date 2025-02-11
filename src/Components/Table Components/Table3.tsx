import { useEffect } from "react";
import { Employee } from "../../Classes/EmployeeClass";
import { Komisija, Sakljucari, Vozac } from "../../Classes/PripravnostClasses";
import { thisMonth, thisYear } from "../../Classes/StaticData";
import {
  ekspozituraHours,
  filijalaHours,
  komisija1Hours,
  komisija2Hours,
  vozacHours,
} from "../../Classes/UtilityFinctions";

type Table3Props = {
  employees: Employee[]; // Array of Employee objects

  filijalaSakljucari: Sakljucari;
  ekspozituraSakljucari: Sakljucari;
  komisija1: Komisija;
  komisija2: Komisija;
  vozac: Vozac;
};

export default function Table3({
  employees,
  filijalaSakljucari,
  ekspozituraSakljucari,
  komisija1,
  komisija2,
  vozac,
}: Table3Props) {
  // Get the last day of the current month
  const lastDayOfMonth = new Date(thisYear, thisMonth + 1, 0).getDate();

  const emptyArr = Array.from({ length: lastDayOfMonth }, () => 16);
  ////////////////////////////////////////////////////////////////////////////////////

  const calculateHours = () => {
    filijalaHours(filijalaSakljucari, employees);

    ekspozituraHours(ekspozituraSakljucari, employees);

    komisija1Hours(komisija1, employees);

    komisija2Hours(komisija2, employees);

    vozacHours(vozac, employees);
  };

  useEffect(() => {
    calculateHours();
  }, []); // Empty dependency array ensures it runs only on mount

  ////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full text-center">
        <thead>
          <tr>
            <th className="w-[147px] px-4 py-2 border">Ime i prezime</th>
            <th className="w-[147px] px-4 py-2 border">SAP br</th>
            {emptyArr.map((_, index) => (
              <th key={index} className="w-[3%] py-2 border">
                {index + 1}
              </th>
            ))}
            <th className="w-[91px] px-4 py-2 border">Ukupno c.</th>
          </tr>
        </thead>
        <tbody className="text-slate-500">
          {employees.map((employee, employeeIndex) => (
            <tr key={`employee-${employeeIndex}`}>
              <td className="w-[147px] px-4 py-2 border">
                {employee.imeZaposlenog} {employee.prezimeZaposlenog}
              </td>
              <td className="w-[147px] px-4 py-2 border">
                {employee.kadrovskiBroj}
              </td>
              {emptyArr.map((_, hourIndex) => (
                <td
                  key={`employee-${employeeIndex}-hours-${hourIndex}`}
                  className="w-[3%] py-2 border"
                >
                  0
                </td>
              ))}
              <td className="w-[91px] px-4 py-2 border">Fixed Last</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
