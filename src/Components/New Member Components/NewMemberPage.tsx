import { useState } from "react";
import { Employee } from "../../Classes/EmployeeClass";
import NewMemberForm from "./NewMemberForm";
import GroupsForm from "../Group components/GroupsForm";
import { Komisija, Sakljucari, Vozac } from "../../Classes/PripravnostClasses";

type NewMemberPageProps = {
  setNewMember: React.Dispatch<React.SetStateAction<boolean>>;
  employees: Employee[];
  setEmployees: React.Dispatch<React.SetStateAction<Employee[]>>;

  setFilijalaSakljucari: React.Dispatch<React.SetStateAction<Sakljucari>>;
  setEkspozituraSakljucari: React.Dispatch<React.SetStateAction<Sakljucari>>;
  setKomisija1: React.Dispatch<React.SetStateAction<Komisija>>;
  setKomisija2: React.Dispatch<React.SetStateAction<Komisija>>;
  setNepredvidjeni: React.Dispatch<React.SetStateAction<Employee[]>>;
  nepredvidjeni: Employee[];
  setVozac: React.Dispatch<React.SetStateAction<Vozac>>;
};

export default function NewMemberPage({
  setNewMember,
  employees,
  setEmployees,
  setFilijalaSakljucari,
  setEkspozituraSakljucari,
  setKomisija1,
  setKomisija2,
  setNepredvidjeni,
  nepredvidjeni,
  setVozac,
}: NewMemberPageProps) {
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [groups, setGroups] = useState<boolean>(false);

  const [selectedType, setSelectedType] = useState<string>("");

  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);

  const [employee, setEmployee] = useState<Employee>(new Employee());

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;

    // Set selectedType to the selected value
    setSelectedType(selectedValue);

    // Set groups to false if "Nije u grupi" is selected
    if (selectedValue === "") {
      setGroups(false);
    } else {
      setGroups(true); // Show GroupsForm if a group is selected
    }
  };

  // console.log(checkbox2);

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="absolute inset-0 bg-slate-700/90 flex justify-center items-center p-4 backdrop-blur-sm gap-4">
      <NewMemberForm
        setNewMember={setNewMember}
        employees={employees}
        setEmployees={setEmployees}
        setEmployee={setEmployee}
        employee={employee}
        /////////////////////////////////
        handleSelectChange={handleSelectChange}
        checkbox1={checkbox1}
        checkbox2={checkbox2}
        setCheckbox1={setCheckbox1}
        setCheckbox2={setCheckbox2}
        setGroups={setGroups}
      />

      {groups && (
        <GroupsForm
          selectedType={selectedType}
          employee={employee}
          setFilijalaSakljucari={setFilijalaSakljucari}
          setEkspozituraSakljucari={setEkspozituraSakljucari}
          setKomisija1={setKomisija1}
          setKomisija2={setKomisija2}
          setNepredvidjeni={setNepredvidjeni}
          nepredvidjeni={nepredvidjeni}
          setVozac={setVozac}
        />
      )}
    </div>
  );
}
