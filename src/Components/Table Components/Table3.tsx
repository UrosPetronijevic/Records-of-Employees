import { Employee } from "../../Classes/EmployeeClass";
import { thisMonth, thisYear } from "../../Classes/StaticData";

type Table3Props = {
  employees: Employee[]; // Array of Employee objects
};

export default function Table3({ employees }: Table3Props) {
  // Get the last day of the current month
  const lastDayOfMonth = new Date(thisYear, thisMonth + 1, 0).getDate();

  const emptyArr = Array.from({ length: lastDayOfMonth }, () => 16);

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
