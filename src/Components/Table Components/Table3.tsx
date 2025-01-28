import { Employee } from "../../Classes/EmployeeClass";
import { thisMonth, thisYear } from "../../Classes/StaticData";

type Table3Props = {
  employees: Employee[]; // Array of Employee objects
};

export default function Table3({ employees }: Table3Props) {
  // Get the last day of the current month
  const lastDayOfMonth = new Date(thisYear, thisMonth + 1, 0).getDate();

  const emptyArr = Array.from({ length: lastDayOfMonth }, () => 0);

  // // Total number of columns is days in the current month + 4
  // const totalColumns = lastDayOfMonth + 4;

  // Column headers
  const columnHeaders = [
    "Ime i prezime", // Second column
    "Sap br", // Third column
    ...[...Array(lastDayOfMonth)].map((_, index) => `${index + 1}`), // Dynamic columns for days
    "Ukupno c.", // Last column
  ];

  return (
    <div>
      <table className="w-full max-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            {/* Dynamically create column headers */}
            {columnHeaders.map((header, index) => (
              <th
                key={index}
                className="border border-gray-300 bg-gray-100 p-2"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, rowIndex) =>
            employee.pripravnost === true ? (
              <tr key={`rowPripravnost-${rowIndex}`}>
                <td>
                  {employee.imeZaposlenog} {employee.prezimeZaposlenog}
                </td>
                <td>{employee.kadrovskiBroj}</td>

                {emptyArr.map((_, index) => (
                  <td key={index} className="p-2 bg-red-500">
                    {employee.bolovanjeArr.includes(index + 1) ? 0 : 16}
                  </td>
                ))}

                <td>ukupno</td>
              </tr>
            ) : (
              ""
            )
          )}
        </tbody>
      </table>
    </div>
  );
}
