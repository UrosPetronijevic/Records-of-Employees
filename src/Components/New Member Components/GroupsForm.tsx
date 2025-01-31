import { useState } from "react";

type GroupsFormProps = {
  selectedType: string;
};

export default function GroupsForm({ selectedType }: GroupsFormProps) {
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
    <div className="w-[35%] bg-white flex flex-col p-4 items-center shadow-[4.0px_4.0px_4.0px_4.0px_rgba(0,0,0,0.18)] rounded-lg backdrop-blur-sm">
      <h1 className="text-5xl font-thin text-slate-700">GROUPS</h1>

      <div className="h-max w-full flex flex-col-reverse p-4">
        <form className="w-full flex flex-col h-full justify-between p-8 text-slate-700">
          {selectedType === "filijalaSakljucari" && (
            <div className="flex flex-col justify-center gap-16 text-[1rem] w-full">
              <div className="flex flex-col gap-8">
                <div
                  className={`rounded-[.5rem] py-4 border-slate-300 border px-2 text-center cursor-pointer select-none ${
                    sakljucar1 ? "bg-green-500" : "bg-indigo-500"
                  } text-white ${
                    sakljucar1 ? "hover:bg-green-400" : "hover:bg-indigo-400"
                  }`}
                  onClick={() => handleSelect("sakljucar1")}
                >
                  Stalni sakljucar 1
                </div>
                <div
                  className={`rounded-[.5rem] py-4 border-slate-300 border px-2 text-center cursor-pointer select-none ${
                    zamenik1 ? "bg-green-500" : "bg-indigo-500"
                  } text-white ${
                    zamenik1 ? "hover:bg-green-400" : "hover:bg-indigo-400"
                  }`}
                  onClick={() => handleSelect("zamenik1")}
                >
                  Zamenik sakljucara 1
                </div>
              </div>

              <div className="flex flex-col gap-8">
                <div
                  className={`rounded-[.5rem] py-4 border-slate-300 border px-2 text-center cursor-pointer select-none ${
                    sakljucar2 ? "bg-green-500" : "bg-indigo-500"
                  } text-white ${
                    sakljucar2 ? "hover:bg-green-400" : "hover:bg-indigo-400"
                  }`}
                  onClick={() => handleSelect("sakljucar2")}
                >
                  Stalni sakljucar 2
                </div>
                <div
                  className={`rounded-[.5rem] py-4 border-slate-300 border px-2 text-center cursor-pointer select-none ${
                    zamenik2 ? "bg-green-500" : "bg-indigo-500"
                  } text-white ${
                    zamenik2 ? "hover:bg-green-400" : "hover:bg-indigo-400"
                  }`}
                  onClick={() => handleSelect("zamenik2")}
                >
                  Zamenik sakljucara 2
                </div>
              </div>

              <button
                type="submit"
                className="py-4 px-10 bg-red-500 text-white rounded-[.4rem]"
              >
                Potvrdi
              </button>
            </div>
          )}
          {selectedType === "filijalaSakljucari" && <div></div>}
          {selectedType === "filijalaSakljucari" && <div></div>}
          {selectedType === "filijalaSakljucari" && <div></div>}
          {selectedType === "filijalaSakljucari" && <div></div>}
          {selectedType === "filijalaSakljucari" && <div></div>}
        </form>
      </div>
    </div>
  );
}
