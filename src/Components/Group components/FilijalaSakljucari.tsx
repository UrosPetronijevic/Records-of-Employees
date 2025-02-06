import { useState } from "react";
import { Sakljucari } from "../../Classes/PripravnostClasses";
import { Employee } from "../../Classes/EmployeeClass";

type FilijalaSakljucariProps = {
  setFilijalaSakljucari: React.Dispatch<React.SetStateAction<Sakljucari>>;

  employee: Employee;
};

export default function FilijalaSakljucari({
  setFilijalaSakljucari,
  employee,
}: FilijalaSakljucariProps) {
  const [sakljucar1, setSakljucar1] = useState<boolean>(false);
  const [zamenik1, setZamenik1] = useState<boolean>(false);
  const [zamenik3, setZamenik3] = useState<boolean>(false);
  const [neodredjeni1, setNeodredjeni1] = useState<boolean>(false);

  const [sakljucar2, setSakljucar2] = useState<boolean>(false);
  const [zamenik2, setZamenik2] = useState<boolean>(false);
  const [zamenik4, setZamenik4] = useState<boolean>(false);
  const [neodredjeni2, setNeodredjeni2] = useState<boolean>(false);

  const [selected, setSelected] = useState<string>("");

  const handleSelect = (selected: string) => {
    const stateMap: {
      [key: string]: React.Dispatch<React.SetStateAction<boolean>>;
    } = {
      sakljucar1: setSakljucar1,
      zamenik1: setZamenik1,
      zamenik3: setZamenik3,
      neodredjeni1: setNeodredjeni1,
      sakljucar2: setSakljucar2,
      zamenik2: setZamenik2,
      zamenik4: setZamenik4,
      neodredjeni2: setNeodredjeni2,
    };

    // If the selected key exists in the state map, toggle it and reset others
    if (stateMap[selected]) {
      Object.keys(stateMap).forEach((key) => {
        stateMap[key](key === selected ? (prev) => !prev : false);
      });
    }

    setSelected(selected);

    // setFilijalaSakljucari((prev) => {
    //   const updated = new Sakljucari();
    //   Object.assign(updated, prev); // Copy existing properties
    //   updated.setSakljucar(selected, employee.kadrovskiBroj); // ✅ Modify the new object
    //   return updated; // ✅ Return new object to trigger re-render
    // });
  };

  const handleSubmit = (selected: string) => {
    setFilijalaSakljucari((prev) => {
      const updated = new Sakljucari();
      Object.assign(updated, prev); // Copy existing properties
      updated.setSakljucar(selected, employee.kadrovskiBroj); // ✅ Modify the new object
      return updated; // ✅ Return new object to trigger re-render
    });
  };

  return (
    <div className="flex flex-col justify-center gap-10 text-[1rem] w-full">
      <div className="grid grid-cols-2 gap-8">
        <div className="underline flex justify-center text-[1.5rem] select-none">
          <span>GORNJA BRAVA</span>
        </div>
        <div className="underline flex justify-center text-[1.5rem] select-none">
          <span>DONJA BRAVA</span>
        </div>
        <div
          className={`rounded-[.5rem] py-4 border-slate-300 border px-2 text-center cursor-pointer select-none ${
            sakljucar1 ? "bg-[#B3E2A7]" : "bg-[#6295A2]"
          } text-white ${
            sakljucar1 ? "hover:bg-[#80B9AD]" : "hover:bg-[#538392]"
          }`}
          onClick={() => handleSelect("sakljucar1")}
        >
          Sakljucar gornje brave
        </div>

        <div
          className={`rounded-[.5rem] py-4 border-slate-300 border px-2 text-center cursor-pointer select-none ${
            sakljucar2 ? "bg-[#B3E2A7]" : "bg-[#6295A2]"
          } text-white ${
            sakljucar2 ? "hover:bg-[#80B9AD]" : "hover:bg-[#538392]"
          }`}
          onClick={() => handleSelect("sakljucar2")}
        >
          Sakljucar donje brave
        </div>

        <div
          className={`rounded-[.5rem] py-4 border-slate-300 border px-2 text-center cursor-pointer select-none ${
            zamenik1 ? "bg-[#B3E2A7]" : "bg-[#6295A2]"
          } text-white ${
            zamenik1 ? "hover:bg-[#80B9AD]" : "hover:bg-[#538392]"
          }`}
          onClick={() => handleSelect("zamenik1")}
        >
          Prvi zamenik sakljucara gornje brave
        </div>

        <div
          className={`rounded-[.5rem] py-4 border-slate-300 border px-2 text-center cursor-pointer select-none ${
            zamenik2 ? "bg-[#B3E2A7]" : "bg-[#6295A2]"
          } text-white ${
            zamenik2 ? "hover:bg-[#80B9AD]" : "hover:bg-[#538392]"
          }`}
          onClick={() => handleSelect("zamenik2")}
        >
          Prvi zamenik sakljucara donje brave
        </div>

        <div
          className={`rounded-[.5rem] py-4 border-slate-300 border px-2 text-center cursor-pointer select-none ${
            zamenik3 ? "bg-[#B3E2A7]" : "bg-[#6295A2]"
          } text-white ${
            zamenik3 ? "hover:bg-[#80B9AD]" : "hover:bg-[#538392]"
          }`}
          onClick={() => handleSelect("zamenik3")}
        >
          Drugi zamenik sakljucara gornje brave
        </div>

        <div
          className={`rounded-[.5rem] py-4 border-slate-300 border px-2 text-center cursor-pointer select-none ${
            zamenik4 ? "bg-[#B3E2A7]" : "bg-[#6295A2]"
          } text-white ${
            zamenik4 ? "hover:bg-[#80B9AD]" : "hover:bg-[#538392]"
          }`}
          onClick={() => handleSelect("zamenik4")}
        >
          Drugi zamenik sakljucara donje brave
        </div>

        <div
          className={`rounded-[.5rem] py-4 border-slate-300 border px-2 text-center cursor-pointer select-none ${
            neodredjeni1 ? "bg-[#B3E2A7]" : "bg-[#6295A2]"
          } text-white ${
            neodredjeni1 ? "hover:bg-[#80B9AD]" : "hover:bg-[#538392]"
          }`}
          onClick={() => handleSelect("neodredjeni1")}
        >
          Nepredvidjeni zamenik sakljucara gornje brave
        </div>

        <div
          className={`rounded-[.5rem] py-4 border-slate-300 border px-2 text-center cursor-pointer select-none ${
            neodredjeni2 ? "bg-[#B3E2A7]" : "bg-[#6295A2]"
          } text-white ${
            neodredjeni2 ? "hover:bg-[#80B9AD]" : "hover:bg-[#538392]"
          }`}
          onClick={() => handleSelect("neodredjeni2")}
        >
          Nepredvidjeni zamenik sakljucara donje brave
        </div>
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
