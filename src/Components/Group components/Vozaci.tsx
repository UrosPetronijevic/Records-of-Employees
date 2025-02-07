import { useState } from "react";
import { Vozac } from "../../Classes/PripravnostClasses";
import { Employee } from "../../Classes/EmployeeClass";

type Vozaci = {
  setVozac: React.Dispatch<React.SetStateAction<Vozac>>;

  employee: Employee;
};

export default function Vozaci({ setVozac, employee }: Vozaci) {
  const [glavniVozac, setGlavniVozac] = useState<boolean>(false);
  const [zamenaVozaca, setZamenaVozaca] = useState<boolean>(false);

  const [selected, setSelected] = useState<string>("");

  const handleSelect = (selected: string) => {
    setSelected(selected);

    if (selected === "glavniVozac") {
      setGlavniVozac(!glavniVozac);
    }

    if (selected === "zamenikVozaca") {
      setZamenaVozaca(!zamenaVozaca);
    }
  };

  const handleSubmit = (selected: string) => {
    setVozac((prev) => {
      const updated = new Vozac();
      Object.assign(updated, prev); // Copy existing properties
      updated.setVozac(selected, employee.kadrovskiBroj); // ✅ Modify the new object
      return updated; // ✅ Return new object to trigger re-render
    });
  };

  return (
    <div className="flex flex-col justify-center gap-10 text-[1rem] w-full">
      <div
        className={`rounded-[.5rem] py-4 border-slate-300 border px-2 text-center cursor-pointer select-none ${
          glavniVozac ? "bg-[#B3E2A7]" : "bg-[#6295A2]"
        } text-white ${
          glavniVozac ? "hover:bg-[#80B9AD]" : "hover:bg-[#538392]"
        }`}
        onClick={() => handleSelect("vozac")}
      >
        Vozac
      </div>

      <div
        className={`rounded-[.5rem] py-4 border-slate-300 border px-2 text-center cursor-pointer select-none ${
          zamenaVozaca ? "bg-[#B3E2A7]" : "bg-[#6295A2]"
        } text-white ${
          zamenaVozaca ? "hover:bg-[#80B9AD]" : "hover:bg-[#538392]"
        }`}
        onClick={() => handleSelect("zamenaVozaca")}
      >
        Zamenik vozaca
      </div>

      <button
        className="py-4 px-10 bg-[#F99417] text-white rounded-[.4rem]"
        onClick={(event) => {
          event.preventDefault(); // Prevents default form submission behavior
          handleSubmit(selected); // Calls your existing function
        }}
      >
        Potvrdi
      </button>
    </div>
  );
}
