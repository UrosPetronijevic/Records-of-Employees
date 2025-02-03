import { useState } from "react";
import { Sakljucari } from "../../Classes/PripravnostClasses";

type EkspozituraSakljucariProps = {
  setEkspozituraSakljucari: React.Dispatch<React.SetStateAction<Sakljucari>>;
};

export default function EkspozituraSakljucari({
  setEkspozituraSakljucari,
}: EkspozituraSakljucariProps) {
  const [sakljucar1, setSakljucar1] = useState<boolean>(false);
  const [zamenik1, setZamenik1] = useState<boolean>(false);

  const [sakljucar2, setSakljucar2] = useState<boolean>(false);
  const [zamenik2, setZamenik2] = useState<boolean>(false);

  const handleSelect = (selected: string) => {
    if (selected === "sakljucar1") {
      setSakljucar1(!sakljucar1);

      setZamenik1(false);
      setSakljucar2(false);
      setZamenik2(false);
    }

    if (selected === "zamenik1") {
      setZamenik1(!zamenik1);

      setSakljucar1(false);
      setSakljucar2(false);
      setZamenik2(false);
    }

    if (selected === "sakljucar2") {
      setSakljucar2(!sakljucar2);

      setZamenik1(false);
      setSakljucar1(false);
      setZamenik2(false);
    }

    if (selected === "zamenik2") {
      setZamenik2(!zamenik2);

      setZamenik1(false);
      setSakljucar2(false);
      setSakljucar1(false);
    }
  };

  return (
    <div className="flex flex-col justify-center gap-16 text-[1rem] w-full">
      <div className="flex flex-col gap-8">
        <div
          className={`rounded-[.5rem] py-4 border-slate-300 border px-2 text-center cursor-pointer select-none ${
            sakljucar1 ? "bg-[#FFF2AF] text-[#493d9e]" : "bg-[#B2A5FF]"
          } text-white ${
            sakljucar1 ? "hover:bg-[#DAD2FF]" : "hover:bg-[#493D9E]"
          }`}
          onClick={() => handleSelect("sakljucar1")}
        >
          Stalni sakljucar 1
        </div>
        <div
          className={`rounded-[.5rem] py-4 border-slate-300 border px-2 text-center cursor-pointer select-none ${
            zamenik1 ? "bg-[#FFF2AF] text-[#493d9e]" : "bg-[#B2A5FF]"
          } text-white ${
            zamenik1 ? "hover:bg-[#DAD2FF]" : "hover:bg-[#493D9E]"
          }`}
          onClick={() => handleSelect("zamenik1")}
        >
          Zamenik sakljucara 1
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <div
          className={`rounded-[.5rem] py-4 border-slate-300 border px-2 text-center cursor-pointer select-none ${
            sakljucar2 ? "bg-[#FFF2AF] text-[#493d9e]" : "bg-[#B2A5FF]"
          } text-white ${
            sakljucar2 ? "hover:bg-[#DAD2FF]" : "hover:bg-[#493D9E]"
          }`}
          onClick={() => handleSelect("sakljucar2")}
        >
          Stalni sakljucar 2
        </div>
        <div
          className={`rounded-[.5rem] py-4 border-slate-300 border px-2 text-center cursor-pointer select-none ${
            zamenik2 ? "bg-[#FFF2AF] text-[#493d9e]" : "bg-[#B2A5FF]"
          } text-white ${
            zamenik2 ? "hover:bg-[#DAD2FF]" : "hover:bg-[#493D9E]"
          }`}
          onClick={() => handleSelect("zamenik2")}
        >
          Zamenik sakljucara 2
        </div>
      </div>

      <button
        type="submit"
        className="py-4 px-10 bg-[#F99417] text-white rounded-[.4rem]"
      >
        Potvrdi
      </button>
    </div>
  );
}
