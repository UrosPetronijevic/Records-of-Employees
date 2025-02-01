import { useState } from "react";
import { Employee } from "../../Classes/EmployeeClass";
import NewMemberForm from "./NewMemberForm";
import GroupsForm from "../Group components/GroupsForm";

type NewMemberPageProps = {
  setNewMember: React.Dispatch<React.SetStateAction<boolean>>;
  employees: Employee[];
  setEmployees: React.Dispatch<React.SetStateAction<Employee[]>>;
};

export default function NewMemberPage({
  setNewMember,
  employees,
  setEmployees,
}: NewMemberPageProps) {
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [groups, setGroups] = useState<boolean>(false);

  const [selectedType, setSelectedType] = useState<string>("");

  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);

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

  console.log(checkbox2);

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="absolute inset-0 bg-slate-700/90 flex justify-center items-center p-4 backdrop-blur-sm gap-4">
      <NewMemberForm
        setNewMember={setNewMember}
        employees={employees}
        setEmployees={setEmployees}
        handleSelectChange={handleSelectChange}
        checkbox1={checkbox1}
        checkbox2={checkbox2}
        setCheckbox1={setCheckbox1}
        setCheckbox2={setCheckbox2}
        setGroups={setGroups}
      />

      {groups && <GroupsForm selectedType={selectedType} />}
    </div>
  );
}
