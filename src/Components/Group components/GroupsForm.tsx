import EkspozituraSakljucari from "./EkspozituraSakljucari";
import FilijalaSakljucari from "./FilijalaSakljucari";
import Komisija1 from "./Komisija1";

type GroupsFormProps = {
  selectedType: string;
};
// F99417
export default function GroupsForm({ selectedType }: GroupsFormProps) {
  return (
    <div className="w-[35%] bg-white flex flex-col p-4 items-center shadow-[4.0px_4.0px_4.0px_4.0px_rgba(0,0,0,0.18)] rounded-lg backdrop-blur-sm">
      <h1 className="text-[2.5rem] text-slate-700 font-bold">
        {selectedType === "filijalaSakljucari" && "SAKLJUCARI FILIJALA"}
        {selectedType === "ekspozituraSakljucari" && "SAKLJUCARI EKS."}

        {selectedType === "komisija1" && "PRIJEM I OBRADA"}
        {selectedType === "komisija2" && "OBRADA I PREDAJA"}

        {selectedType === "nepredvidjeni" && "NEPREDVIDJENI"}
        {selectedType === "vozac" && "VOZAC"}
      </h1>

      <div className="h-max w-full flex flex-col-reverse p-4">
        <form className="w-full flex flex-col h-full justify-between p-8 text-slate-700">
          {selectedType === "filijalaSakljucari" && <FilijalaSakljucari />}
          {selectedType === "ekspozituraSakljucari" && (
            <EkspozituraSakljucari />
          )}
          {selectedType === "komisija1" && <Komisija1 />}
          {selectedType === "komisija2" && <div></div>}
          {selectedType === "nepredvidjeni" && <div></div>}
          {selectedType === "vozac" && <div></div>}
        </form>
      </div>
    </div>
  );
}
