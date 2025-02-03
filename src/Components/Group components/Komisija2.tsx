import { useState } from "react";
import { Komisija } from "../../Classes/PripravnostClasses";

type Komisija2Props = {
  setKomisija2: React.Dispatch<React.SetStateAction<Komisija>>;
};

export default function Komisija2({ setKomisija2 }: Komisija2Props) {
  const [predsednikKomisije, setPredsednikKomisije] = useState<boolean>(false);
  const [zamenikPredsednika, setZamenikPredsednika] = useState<boolean>(false);

  const [clanKomisije2, setClanKomisije2] = useState<boolean>(false);
  const [zamenikClana2, setZamenikClana2] = useState<boolean>(false);

  const [clanKomisije3, setClanKomisije3] = useState<boolean>(false);
  const [zamenikClana3, setZamenikClana3] = useState<boolean>(false);

  const handleSelect = (selected: string) => {
    if (selected === "predsednikKomisije") {
      setPredsednikKomisije(!predsednikKomisije);

      setZamenikPredsednika(false);

      setClanKomisije2(false);
      setZamenikClana2(false);

      setClanKomisije3(false);
      setZamenikClana3(false);
    }

    if (selected === "zamenikPredsednika") {
      setPredsednikKomisije(false);

      setZamenikPredsednika(!zamenikPredsednika);

      setClanKomisije2(false);
      setZamenikClana2(false);

      setClanKomisije3(false);
      setZamenikClana3(false);
    }

    if (selected === "clanKomisije2") {
      setPredsednikKomisije(false);

      setZamenikPredsednika(false);

      setClanKomisije2(!clanKomisije2);
      setZamenikClana2(false);

      setClanKomisije3(false);
      setZamenikClana3(false);
    }

    if (selected === "zamenikClana2") {
      setPredsednikKomisije(false);

      setZamenikPredsednika(false);

      setClanKomisije2(false);
      setZamenikClana2(!zamenikClana2);

      setClanKomisije3(false);
      setZamenikClana3(false);
    }

    if (selected === "clanKomisije3") {
      setPredsednikKomisije(false);

      setZamenikPredsednika(false);

      setClanKomisije2(false);
      setZamenikClana2(false);

      setClanKomisije3(!clanKomisije3);
      setZamenikClana3(false);
    }

    if (selected === "zamenikClana3") {
      setPredsednikKomisije(false);

      setZamenikPredsednika(false);

      setClanKomisije2(false);
      setZamenikClana2(false);

      setClanKomisije3(false);
      setZamenikClana3(!zamenikClana3);
    }
  };

  return (
    <div className="flex flex-col justify-center gap-10 text-[1rem] w-full">
      <div className="flex flex-col gap-4">
        <div
          className={`rounded-[.5rem] py-4 border-slate-300 border px-2 text-center cursor-pointer select-none ${
            predsednikKomisije ? "bg-[#FFEB00] text-[#344CB7]" : "bg-[#577BC1]"
          } text-white ${
            predsednikKomisije
              ? "hover:bg-[#344CB7] hover:text-white"
              : "hover:bg-[#000957]"
          }`}
          onClick={() => handleSelect("predsednikKomisije")}
        >
          Predsednik komisije
        </div>
        <div
          className={`rounded-[.5rem] py-4 border-slate-300 border px-2 text-center cursor-pointer select-none ${
            zamenikPredsednika ? "bg-[#FFEB00] text-[#344CB7]" : "bg-[#577BC1]"
          } text-white ${
            zamenikPredsednika
              ? "hover:bg-[#344CB7] hover:text-white"
              : "hover:bg-[#000957]"
          }`}
          onClick={() => handleSelect("zamenikPredsednika")}
        >
          Zamenik predsednika
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div
          className={`rounded-[.5rem] py-4 border-slate-300 border px-2 text-center cursor-pointer select-none ${
            clanKomisije2 ? "bg-[#FFEB00] text-[#344CB7]" : "bg-[#577BC1]"
          } text-white ${
            clanKomisije2
              ? "hover:bg-[#344CB7] hover:text-white"
              : "hover:bg-[#000957]"
          }`}
          onClick={() => handleSelect("clanKomisije2")}
        >
          Predsednik komisije
        </div>
        <div
          className={`rounded-[.5rem] py-4 border-slate-300 border px-2 text-center cursor-pointer select-none ${
            zamenikClana2 ? "bg-[#FFEB00] text-[#344CB7]" : "bg-[#577BC1]"
          } text-white ${
            zamenikClana2
              ? "hover:bg-[#344CB7] hover:text-white"
              : "hover:bg-[#000957]"
          }`}
          onClick={() => handleSelect("zamenikClana2")}
        >
          Zamenik predsednika
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div
          className={`rounded-[.5rem] py-4 border-slate-300 border px-2 text-center cursor-pointer select-none ${
            clanKomisije3 ? "bg-[#FFEB00] text-[#344CB7]" : "bg-[#577BC1]"
          } text-white ${
            clanKomisije3
              ? "hover:bg-[#344CB7] hover:text-white"
              : "hover:bg-[#000957]"
          }`}
          onClick={() => handleSelect("clanKomisije3")}
        >
          Predsednik komisije
        </div>
        <div
          className={`rounded-[.5rem] py-4 border-slate-300 border px-2 text-center cursor-pointer select-none ${
            zamenikClana3 ? "bg-[#FFEB00] text-[#344CB7]" : "bg-[#577BC1]"
          } text-white ${
            zamenikClana3
              ? "hover:bg-[#344CB7] hover:text-white"
              : "hover:bg-[#000957]"
          }`}
          onClick={() => handleSelect("zamenikClana3")}
        >
          Zamenik predsednika
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
