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
      <div className="flex flex-col gap-2">
        {nepredvidjeni.map((clan: Employee, i) => (
          <span key={i}>
            Clan:{i} {clan.imeZaposlenog} {clan.prezimeZaposlenog}{" "}
            {clan.kadrovskiBroj}
          </span>
        ))}
      </div>

      <button
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
