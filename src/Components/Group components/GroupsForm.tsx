import { Employee } from "../../Classes/EmployeeClass";
import { Komisija, Sakljucari, Vozac } from "../../Classes/PripravnostClasses";
import EkspozituraSakljucari from "./EkspozituraSakljucari";
import FilijalaSakljucari from "./FilijalaSakljucari";
import Komisija1 from "./Komisija1";
import Komisija2 from "./Komisija2";
import Nepredvidjeni from "./Nepredvidjeni";

type GroupsFormProps = {
  selectedType: string;

  employee: Employee;

  setFilijalaSakljucari: React.Dispatch<React.SetStateAction<Sakljucari>>;
  setEkspozituraSakljucari: React.Dispatch<React.SetStateAction<Sakljucari>>;
  setKomisija1: React.Dispatch<React.SetStateAction<Komisija>>;
  setKomisija2: React.Dispatch<React.SetStateAction<Komisija>>;
  setNepredvidjeni: React.Dispatch<React.SetStateAction<Employee[]>>;
  nepredvidjeni: Employee[];
  setVozac: React.Dispatch<React.SetStateAction<Vozac>>;
};
// F99417
export default function GroupsForm({
  selectedType,
  employee,
  setFilijalaSakljucari,
  setEkspozituraSakljucari,
  setKomisija1,
  setKomisija2,
  setNepredvidjeni,
  nepredvidjeni,
  setVozac,
}: GroupsFormProps) {
  console.log(selectedType);
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
          {selectedType === "filijalaSakljucari" && (
            <FilijalaSakljucari setFilijalaSakljucari={setFilijalaSakljucari} />
          )}

          {selectedType === "ekspozituraSakljucari" && (
            <EkspozituraSakljucari
              setEkspozituraSakljucari={setEkspozituraSakljucari}
            />
          )}

          {selectedType === "komisija1" && (
            <Komisija1 setKomisija1={setKomisija1} />
          )}

          {selectedType === "komisija2" && (
            <Komisija2 setKomisija2={setKomisija2} />
          )}

          {selectedType === "nepredvidjeni" && (
            <Nepredvidjeni
              employee={employee}
              setNepredvidjeni={setNepredvidjeni}
              nepredvidjeni={nepredvidjeni}
            />
          )}

          {selectedType === "vozac" && <div></div>}
        </form>
      </div>
    </div>
  );
}
