import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navigation from "./Components/Navigation Components/Navigation";
import Table1 from "./Components/Table Components/Table1";
import Table2 from "./Components/Table Components/Table2";
import Table3 from "./Components/Table Components/Table3";
import Table4 from "./Components/Table Components/Table4";
import { Employee } from "./Classes/EmployeeClass";
import { useState } from "react";
import AttendanceManagement from "./Components/Absence Components/AttendanceManagement";
import { Komisija, Sakljucari, Vozac } from "./Classes/PripravnostClasses";
import NewMemberPage from "./Components/New Member Components/NewMemberPage";

export default function App() {
  /////////////////////EMPLOYEES ARRAY
  const [employees, setEmployees] = useState<Employee[]>([]);
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /////////////////////NEW MEMBER TOGGLE
  const [newMember, setNewMember] = useState<boolean>(false);
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /////////////////////ABSENCE TOGGLE
  const [absence, setAbsence] = useState<boolean>(false);
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /////////////////////ABSENCE TOGGLE
  const [selectedEmployeeId, setSelectedEmployeeId] = useState<string>("");
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /////////////////////SAKLJUCARI
  const [filijalaSakljucari, setFilijalaSakljucari] = useState<Sakljucari>(
    new Sakljucari()
  );
  const [ekspozituraSakljucari, setEkspozituraSakljucari] =
    useState<Sakljucari>(new Sakljucari());
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /////////////////////KOMISIJA
  const [komisija1, setKomisija1] = useState<Komisija>(new Komisija());
  const [komisija2, setKomisija2] = useState<Komisija>(new Komisija());
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /////////////////////NEPREDVIDJENI
  const [nepredvidjeni, setNepredvidjeni] = useState<Employee[]>([]);
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /////////////////////VOZAC
  const [vozac, setVozac] = useState<Vozac>(new Vozac());
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  console.log(
    // employees,
    // nepredvidjeni,

    // ekspozituraSakljucari,
    // vozac
    // filijalaSakljucari
    komisija2
  );

  return (
    <div className="font-bold text-slate-700">
      <Router>
        <Navigation />
        <main className="p-8">
          <Routes>
            <Route path="/" element={<Navigate to="/table1" />} />
            <Route
              path="/table1"
              element={
                <Table1
                  setAbsence={setAbsence}
                  absence={absence}
                  newMember={newMember}
                  setNewMember={setNewMember}
                  employees={employees}
                  setEmployees={setEmployees}
                  setSelectedEmployeeId={setSelectedEmployeeId}
                />
              }
            />
            <Route path="/table2" element={<Table2 />} />
            <Route
              path="/table3"
              element={
                <Table3
                  employees={employees}
                  ////////////////////////////////////////
                  filijalaSakljucari={filijalaSakljucari}
                  ekspozituraSakljucari={ekspozituraSakljucari}
                  komisija1={komisija1}
                  komisija2={komisija2}
                  vozac={vozac}
                />
              }
            />
            <Route path="/table4" element={<Table4 />} />
          </Routes>
        </main>
      </Router>

      {absence && (
        <AttendanceManagement
          setAbsence={setAbsence}
          absence={absence}
          employees={employees}
          setEmployees={setEmployees}
          selectedEmployeeId={selectedEmployeeId}
        />
      )}
      {newMember && (
        <NewMemberPage
          setNewMember={setNewMember}
          employees={employees}
          setEmployees={setEmployees}
          /////////////////////////
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
