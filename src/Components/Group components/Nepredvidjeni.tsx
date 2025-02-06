import { Employee } from "../../Classes/EmployeeClass";

type NepredvidjeniProps = {
  setNepredvidjeni: React.Dispatch<React.SetStateAction<Employee[]>>;
  nepredvidjeni: Employee[];

  employee: Employee;
};

export default function Nepredvidjeni({
  setNepredvidjeni,
  nepredvidjeni,
  employee,
}: NepredvidjeniProps) {
  return (
    <div className="flex flex-col justify-center gap-10 text-[1rem] w-full">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-blue-200">
            <th className="border border-slate-500 px-4 py-2">Član</th>
            <th className="border border-slate-500 px-4 py-2">Ime</th>
            <th className="border border-slate-500 px-4 py-2">Prezime</th>
            <th className="border border-slate-500 px-4 py-2">Kadrovski br.</th>
          </tr>
        </thead>
        <tbody>
          {nepredvidjeni.map((clan: Employee, i) => (
            <tr key={i} className="text-center">
              <td className="border border-slate-500 px-4 py-2">{i + 1}</td>
              <td className="border border-slate-500 px-4 py-2">
                {clan.imeZaposlenog}
              </td>
              <td className="border border-slate-500 px-4 py-2">
                {clan.prezimeZaposlenog}
              </td>
              <td className="border border-slate-500 px-4 py-2">
                {clan.kadrovskiBroj}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        className="py-3 px-7 text-2xl bg-[#F99417] text-white rounded-[.4rem] w-min self-center"
        onClick={(e) => {
          e.preventDefault();
          setNepredvidjeni((prev) => [...prev, employee]);
        }}
      >
        Dodaj
      </button>
    </div>
  );
}
