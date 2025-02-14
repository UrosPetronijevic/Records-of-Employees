import { useState } from "react";
import { Komisija } from "../../Classes/PripravnostClasses";
import { Employee } from "../../Classes/EmployeeClass";

type Komisija1Props = {
  setKomisija1: React.Dispatch<React.SetStateAction<Komisija>>;
  employee: Employee;
};

export default function Komisija1({ setKomisija1, employee }: Komisija1Props) {
  const [predsednikKomisije, setPredsednikKomisije] = useState<boolean>(false);
  const [zamenikPredsednika, setZamenikPredsednika] = useState<boolean>(false);

  const [clanKomisije2, setClanKomisije2] = useState<boolean>(false);
  const [zamenikClana2, setZamenikClana2] = useState<boolean>(false);

  const [clanKomisije3, setClanKomisije3] = useState<boolean>(false);
  const [zamenikClana3, setZamenikClana3] = useState<boolean>(false);

  const [selected, setSelected] = useState<string>("");

  const handleSelect = (selected: string) => {
    const stateMap: {
      [key: string]: React.Dispatch<React.SetStateAction<boolean>>;
    } = {
      predsednikKomisije: setPredsednikKomisije,
      zamenikPredsednika: setZamenikPredsednika,
      clanKomisije2: setClanKomisije2,
      zamenikClana2: setZamenikClana2,
      clanKomisije3: setClanKomisije3,
      zamenikClana3: setZamenikClana3,
    };

    // If the selected key exists in the state map, toggle it and reset others
    if (stateMap[selected]) {
      Object.keys(stateMap).forEach((key) => {
        stateMap[key](key === selected ? (prev) => !prev : false);
      });
    }

    setSelected(selected);
  };

  const handleSubmit = (selected: string) => {
    setKomisija1((prev) => {
      const updated = new Komisija();
      Object.assign(updated, prev); // Copy existing properties
      updated.setKomisionar(selected, employee.kadrovskiBroj); // ✅ Modify the new object
      return updated; // ✅ Return new object to trigger re-render
    });
  };

  return (
    <div className="flex flex-col justify-center gap-10 text-[1rem] w-full">
      <div className="flex flex-col gap-4">
        <div
          className={`rounded-[.5rem] py-4 border-slate-300 border px-2 text-center cursor-pointer select-none ${
            predsednikKomisije ? "bg-[#FFDAB3] text-[#574964]" : "bg-[#574964]"
          } text-white ${
            predsednikKomisije ? "hover:bg-[#C8AAAA]" : "hover:bg-[#9F8383]"
          }`}
          onClick={() => handleSelect("predsednikKomisije")}
        >
          Predsednik komisije
        </div>
        <div
          className={`rounded-[.5rem] py-4 border-slate-300 border px-2 text-center cursor-pointer select-none ${
            zamenikPredsednika ? "bg-[#FFDAB3] text-[#574964]" : "bg-[#574964]"
          } text-white ${
            zamenikPredsednika ? "hover:bg-[#C8AAAA]" : "hover:bg-[#9F8383]"
          }`}
          onClick={() => handleSelect("zamenikPredsednika")}
        >
          Zamenik predsednika
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div
          className={`rounded-[.5rem] py-4 border-slate-300 border px-2 text-center cursor-pointer select-none ${
            clanKomisije2 ? "bg-[#FFDAB3] text-[#574964]" : "bg-[#574964]"
          } text-white ${
            clanKomisije2 ? "hover:bg-[#C8AAAA]" : "hover:bg-[#9F8383]"
          }`}
          onClick={() => handleSelect("clanKomisije2")}
        >
          Clan 2 komisije
        </div>
        <div
          className={`rounded-[.5rem] py-4 border-slate-300 border px-2 text-center cursor-pointer select-none ${
            zamenikClana2 ? "bg-[#FFDAB3] text-[#574964]" : "bg-[#574964]"
          } text-white ${
            zamenikClana2 ? "hover:bg-[#C8AAAA]" : "hover:bg-[#9F8383]"
          }`}
          onClick={() => handleSelect("zamenikClana2")}
        >
          Zamenik clana 2
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div
          className={`rounded-[.5rem] py-4 border-slate-300 border px-2 text-center cursor-pointer select-none ${
            clanKomisije3 ? "bg-[#FFDAB3] text-[#574964]" : "bg-[#574964]"
          } text-white ${
            clanKomisije3 ? "hover:bg-[#C8AAAA]" : "hover:bg-[#9F8383]"
          }`}
          onClick={() => handleSelect("clanKomisije3")}
        >
          Clan 3 komisije
        </div>
        <div
          className={`rounded-[.5rem] py-4 border-slate-300 border px-2 text-center cursor-pointer select-none ${
            zamenikClana3 ? "bg-[#FFDAB3] text-[#574964]" : "bg-[#574964]"
          } text-white ${
            zamenikClana3 ? "hover:bg-[#C8AAAA]" : "hover:bg-[#9F8383]"
          }`}
          onClick={() => handleSelect("zamenikClana3")}
        >
          Zamenik clana 3
        </div>
      </div>

      <button
        className="py-4 px-10 bg-[#F99417] text-white rounded-[.4rem] 
             transition duration-150 ease-in-out 
             active:bg-[#d87f12] active:translate-y-[15%]"
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
