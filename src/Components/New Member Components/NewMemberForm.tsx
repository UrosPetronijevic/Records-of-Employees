import { useState } from "react";
import { Employee } from "../../Classes/EmployeeClass";

type NewMemberFormProps = {
  newMember: boolean;
  setNewMember: React.Dispatch<React.SetStateAction<boolean>>;
  employees: Employee[];
  setEmployees: React.Dispatch<React.SetStateAction<Employee[]>>;
};

export default function NewMemberForm({
  // newMember,
  setNewMember,
  // employees,
  setEmployees,
}: NewMemberFormProps) {
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const [employee, setEmployee] = useState<Employee>(new Employee());

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //////////////HANDLE FORM SUBMIT ACTION
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Add new employee to the list
    setEmployees((prev) => [...prev, employee]);

    // Reset form and close modal
    setNewMember(false);
  };

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  ////////////HANDLE INPUT CHANGE IN LABEL
  const handleInputChange = <T extends keyof Employee>(
    key: T,
    value: Employee[T]
  ) => {
    setEmployee((prev) => {
      const updatedEmployee = new Employee();
      Object.assign(updatedEmployee, prev); // Copy previous properties
      updatedEmployee[key] = value; // Update the specific property
      return updatedEmployee;
    });
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="absolute inset-0 bg-slate-700/90 flex justify-center items-center flex-col p-4 backdrop-blur-sm">
      <div className="w-[35%] bg-white flex flex-col p-1 items-center shadow-[4.0px_4.0px_4.0px_4.0px_rgba(0,0,0,0.18)] rounded-lg backdrop-blur-sm">
        <button
          className="text-slate-700 text-3xl w-fit self-end py-1 px-2 rounded-lg"
          type="button"
          onClick={() => setNewMember(false)}
        >
          &#x2715;
        </button>

        <h1 className="text-5xl font-thin text-slate-700">FORM</h1>

        <div className="h-max w-full flex flex-col-reverse p-4">
          <form
            onSubmit={handleFormSubmit}
            className="w-full flex flex-col h-full justify-between p-8 text-slate-700"
          >
            <div className="flex flex-col justify-center h-max gap-10 text-[1rem] w-full">
              <label className="flex gap-1 flex-col">
                Ime:
                <input
                  placeholder="Petar"
                  type="text"
                  className="rounded-[.3rem] h-10 border-slate-300 border px-2"
                  value={employee.imeZaposlenog}
                  onChange={(e) =>
                    handleInputChange("imeZaposlenog", e.target.value)
                  }
                />
              </label>

              <label className="flex gap-1 flex-col">
                Prezime:
                <input
                  placeholder="Petrovic"
                  type="text"
                  className="rounded-[.3rem] h-10 border-slate-300 border px-2"
                  value={employee.prezimeZaposlenog}
                  onChange={(e) =>
                    handleInputChange("prezimeZaposlenog", e.target.value)
                  }
                />
              </label>

              <label className="flex gap-1 flex-col">
                Br.:
                <input
                  placeholder="123"
                  type="number"
                  className="rounded-[.3rem] h-10 border-slate-300 border px-2"
                  value={employee.kadrovskiBroj}
                  onChange={(e) =>
                    handleInputChange("kadrovskiBroj", e.target.value)
                  }
                />
              </label>

              <div className="flex justify-between mt-4 text-white">
                <button type="button" className="p-4 bg-indigo-500 rounded-md">
                  Dodatno Opt.
                </button>
                <button type="button" className="p-4 bg-indigo-500 rounded-md">
                  Pripravnost
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="bg-slate-800 text-white px-8 py-4 mt-10 rounded-[.5rem]"
            >
              Zavrsi
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
