import { useState } from "react";
import { Employee } from "../../Classes/EmployeeClass";

type NewMemberFormProps = {
  setNewMember: React.Dispatch<React.SetStateAction<boolean>>;
  employees: Employee[];
  setEmployees: React.Dispatch<React.SetStateAction<Employee[]>>;
  handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;

  employee: Employee;
  setEmployee: React.Dispatch<React.SetStateAction<Employee>>;

  checkbox1: boolean;
  checkbox2: boolean;
  setCheckbox1: React.Dispatch<React.SetStateAction<boolean>>;
  setCheckbox2: React.Dispatch<React.SetStateAction<boolean>>;

  setGroups: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function NewMemberForm({
  setNewMember,
  handleSelectChange,
  setEmployees,

  checkbox1,
  checkbox2,
  setCheckbox1,
  setCheckbox2,
  setGroups,

  employee,
  setEmployee,
}: NewMemberFormProps) {
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [imeError, setImeError] = useState<string | null>(null);
  const [prezimeError, setPrezimeError] = useState<string | null>(null);
  const [brojError, setBrojError] = useState<string | null>(null);

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

  ////////////VALIDATE ERROR
  const validateForm = () => {
    let isValid = true;

    if (!employee.imeZaposlenog.trim()) {
      setImeError("Ime je obavezno.");
      isValid = false;
    } else {
      setImeError(null);
    }

    if (!employee.prezimeZaposlenog.trim()) {
      setPrezimeError("Prezime je obavezno.");
      isValid = false;
    } else {
      setPrezimeError(null);
    }

    if (!employee.kadrovskiBroj) {
      setBrojError("Broj je obavezan.");
      isValid = false;
    } else {
      setBrojError(null);
    }

    return isValid;
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const handleCheckbox1 = () => {
    if (checkbox1 === false) {
      setCheckbox1(true);
      employee.setDodatnoOpt();
    } else {
      setCheckbox1(false);
      employee.setDodatnoOpt();
    }
  };

  const handleCheckbox2 = () => {
    if (checkbox2 === false) {
      setCheckbox2(true);
      employee.setPripravnost();
    } else {
      setCheckbox2(false);
      employee.setPripravnost();
      setGroups(false);
    }
  };

  //////////////HANDLE FORM SUBMIT ACTION
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return; // Stop submission if validation fails

    setGroups(false);
    // Add new employee to the list
    setEmployees((prev) => [...prev, employee]);

    // Reset form and close modal
    setNewMember(false);
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
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
          <div className="flex flex-col justify-center h-max gap-8 text-[1rem] w-full">
            <label className="flex gap-1 flex-col">
              Ime:
              <input
                placeholder="Petar"
                type="text"
                className="rounded-[.3rem] py-2 border-slate-300 border px-2"
                value={employee.imeZaposlenog}
                onChange={(e) =>
                  handleInputChange("imeZaposlenog", e.target.value)
                }
              />
              {imeError && <span className="text-red-500">{imeError}</span>}
            </label>

            <label className="flex gap-1 flex-col">
              Prezime:
              <input
                placeholder="Petrovic"
                type="text"
                className="rounded-[.3rem] py-2 border-slate-300 border px-2"
                value={employee.prezimeZaposlenog}
                onChange={(e) =>
                  handleInputChange("prezimeZaposlenog", e.target.value)
                }
              />
              {prezimeError && (
                <span className="text-red-500">{prezimeError}</span>
              )}
            </label>

            <label className="flex gap-1 flex-col">
              Br.:
              <input
                placeholder="123"
                type="number"
                className="rounded-[.3rem] py-2 border-slate-300 border px-2"
                value={employee.kadrovskiBroj}
                onChange={(e) =>
                  handleInputChange("kadrovskiBroj", e.target.value)
                }
              />
              {brojError && <span className="text-red-500">{brojError}</span>}
            </label>

            {employee.pripravnost && (
              <label className="flex gap-1 flex-col">
                Izaberi:
                <select
                  className="rounded-[.3rem] py-2 border-slate-300 border px-2"
                  onChange={handleSelectChange} // Attach the handler here
                >
                  <option value="">Nije u grupi</option>
                  <option value="filijalaSakljucari">
                    Filijala Sakljucari
                  </option>
                  <option value="ekspozituraSakljucari">
                    Ekspozitura Sakljucari
                  </option>
                  <option value="komisija1">
                    Komisija za prijem i obradu amaneta
                  </option>
                  <option value="komisija2">
                    Komisija za obradu i predaju amaneta
                  </option>
                  <option value="nepredvidjeni">Nepredvidjeni</option>
                  <option value="vozac">Vozac</option>
                </select>
              </label>
            )}

            <div className="flex justify-between mt-4 text-white">
              <div
                className={`${
                  checkbox1 ? "bg-[#379777]" : "bg-[#F4CE14]"
                } rounded-md`}
              >
                <label className=" p-4 flex gap-2">
                  <input
                    type="checkbox"
                    name="checkbox1"
                    checked={checkbox1}
                    onChange={handleCheckbox1}
                  />
                  <span className="select-none cursor-pointer">
                    Dodatno Opt.
                  </span>
                </label>
              </div>

              <div
                className={`${
                  checkbox2 ? "bg-[#379777]" : "bg-[#F4CE14]"
                } rounded-md`}
              >
                <label className="p-4 flex gap-2">
                  <input
                    type="checkbox"
                    name="checkbox2"
                    checked={checkbox2}
                    onChange={handleCheckbox2}
                  />
                  <span className="select-none cursor-pointer">
                    Pripravnost
                  </span>
                </label>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="bg-slate-800 text-white px-8 py-4 mt-10 rounded-[.5rem] cursor-pointer"
          >
            Zavrsi
          </button>
        </form>
      </div>
    </div>
  );
}
