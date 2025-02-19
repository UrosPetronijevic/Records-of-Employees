import { useEffect } from "react";
import { Employee } from "../../Classes/EmployeeClass";

type Table1Props = {
  setAbsence: React.Dispatch<React.SetStateAction<boolean>>;
  absence: boolean;
  newMember: boolean;
  setNewMember: React.Dispatch<React.SetStateAction<boolean>>;
  employees: Employee[]; // Array of Employee objects
  setEmployees: React.Dispatch<React.SetStateAction<Employee[]>>; // Function to update employees state
  setSelectedEmployeeId: React.Dispatch<React.SetStateAction<string>>;
};

export default function Table1({
  newMember,
  setNewMember,
  employees,
  setEmployees,
  absence,
  setAbsence,
  setSelectedEmployeeId,
}: Table1Props) {
  useEffect(() => {
    const updatedEmployees = employees.map((employee) => {
      const updatedEmployee = new Employee();
      Object.assign(updatedEmployee, employee);
      updatedEmployee.setStats(); // Recalculate stats
      return updatedEmployee;
    });

    setEmployees(updatedEmployees);
  }, [employees, setEmployees]);
  const columns: string[] = [
    "Kadrovski broj",
    "Ime zapos./kandidata",
    "Fond sati",
    "Datum početka",
    "Datum završetka",
    "Redovan rad",
    "Godišnji odmor",
    "Državni/verski praznik",
    "Plaćeno odsustvo",
    "Bolovanje do 30d 65%",
    "Bolovanje 100%",
    "Bolovanje na teret Fonda",
    "Porodiljsko odsustvo",
  ];
  return (
    <div>
      <table className="table-auto border-collapse border border-gray-300 w-full">
        <thead>
          <tr>
            {columns.map((column, colIndex) => (
              <th
                key={`header-${colIndex}`}
                className="border border-gray-300 px-4 py-2 bg-gray-100"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, rowIndex) => (
            <tr key={`rowMor-${rowIndex}`}>
              <td className="border border-gray-300 px-4 py-2">
                {employee.kadrovskiBroj}
              </td>
              <td
                className="border border-gray-300 px-4 py-2"
                onClick={() => {
                  setSelectedEmployeeId(employee.getId());
                  setAbsence(!absence);
                }}
              >
                {employee.imeZaposlenog} {employee.prezimeZaposlenog}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {employee.fondSati}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {employee.datumPocetka.toLocaleDateString()}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {employee.datumZavrsetka.toLocaleDateString()}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {employee.redovanRad}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {employee.godisnjiOdmor}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {employee.drzavniVerskiPraznik}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {employee.placenoOdsustvo}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {employee.bolovanjeDo30d}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {employee.bolovanje100}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {employee.bolovanjeNaTertFonda}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {employee.porodiljskoOdsustvo}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex bg-lime-200 flex-row-reverse">
        <button
          type="button"
          className="bg-indigo-400 text-white rounded-md text-2xl p-2"
          onClick={() => setNewMember(!newMember)}
        >
          Novi clan
        </button>
      </div>
    </div>
  );
}
