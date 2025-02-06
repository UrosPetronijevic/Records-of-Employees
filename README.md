Project Description: Records of Employees

The "Records of Employees" application is a comprehensive employee management system designed to track and manage employee working hours, absences, and corresponding payments. It provides an intuitive interface for recording and categorizing non-working days, such as vacations, sick leaves, holidays, and other absences. These categories are treated differently based on company policies and are calculated accordingly for accurate payroll processing.

This application simplifies employee record-keeping, enhances transparency, and streamlines payroll management by providing clear insights into attendance and payment structures.

////////////

filijalaSakljucari={stalni1:milos,stalni2:zoka,zamenik1:uros,zamenik2:vera}

ekspozituraSakljucari=[{stalni1:milos,stalni2:zoka,zamenik1:kuros, zamenik2=ne postoji},{},{}]

komisija1=[{clan1komisije:marko, zamenikclana1:jovan}]

komisija2=[{clan1komisije:marko, zamenikclana1:jovan}]

nepredvidjeni=[{nepredvidjeniclan1: mirko,petar,bane}]

vozac = [{vozac:kuki,zamenik:tuki}]

<table className="w-full max-w-full border border-gray-300 flex flex-col">
        <thead>
          <tr className="flex justify-between">
            {/* Dynamically create column headers */}
            {columnHeaders.map((header, index) => (
              <th
                key={index}
                className="border border-gray-300 bg-gray-100 p-2"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, rowIndex) =>
            employee.pripravnost === true ? (
              <tr
                key={`rowPripravnost-${rowIndex}`}
                className="flex justify-between"
              >
                <td>
                  {employee.imeZaposlenog} {employee.prezimeZaposlenog}
                </td>
                <td>{employee.kadrovskiBroj}</td>

                {emptyArr.map((_, index) => (
                  <td key={index} className="p-2 bg-red-500">
                    {employee.bolovanjeArr.includes(index + 1) ? 0 : 16}
                  </td>
                ))}

                <td>ukupno</td>
              </tr>
            ) : (
              ""
            )
          )}
        </tbody>
      </table>

//////////////////////

 <div className="w-full max-w-full">
      <div className=" grid grid-cols-dynamic bg-red-400 items-center text-center">
        {columnHeaders.map((e) => (
          <div className="py-2 px-2">{Number(e) < 10 ? `0${e}` : e}</div>
        ))}
      </div>
      <div>
        {employees.map((employee) => (
          <div className="grid grid-cols-dynamic bg-green-200 items-center text-center">
            <div className="py-2 px-2">
              {employee.imeZaposlenog} {employee.prezimeZaposlenog}
            </div>
            <div>{employee.kadrovskiBroj}</div>
            {emptyArr.map((e) => (
              <div className="py-2 px-2">{e}</div>
            ))}
            <div className="py-2 px-2">168</div>
          </div>
        ))}
      </div>
    </div>

 <label className="flex gap-1 flex-col">
                Izaberi:
                <select
                  className="rounded-[.3rem] h-10 border-slate-300 border px-2"
                  onChange={() => {}} // Attach the handler here
                >
                  <option value="stalniSakljucar1">Stalni sakljucar 1</option>
                  <option value="zamenaSakljucara1">Zamena sakljucara 1</option>
                  <option value="stalniSakljucar1">Stalni sakljucar 2</option>
                  <option value="zamenaSakljucara2">Zamena sakljucara 2</option>
                </select>
              </label>

// const handleSelect = (selected: string) => {
// if (selected === "sakljucar1") {
// setSakljucar1(!sakljucar1);
// setZamenik1(false);
// setZamenik3(false);
// setNeodredjeni1(false);

// setSakljucar2(false);
// setZamenik2(false);
// setZamenik4(false);
// setNeodredjeni2(false);
// }

// if (selected === "zamenik1") {
// setSakljucar1(false);
// setZamenik1(!zamenik1);
// setZamenik3(false);
// setNeodredjeni1(false);

// setSakljucar2(false);
// setZamenik2(false);
// setZamenik4(false);
// setNeodredjeni2(false);
// }

// if (selected === "zamenik3") {
// setSakljucar1(false);
// setZamenik1(false);
// setZamenik3(!zamenik3);
// setNeodredjeni1(false);

// setSakljucar2(false);
// setZamenik2(false);
// setZamenik4(false);
// setNeodredjeni2(false);
// }

// if (selected === "neodredjeni1") {
// setSakljucar1(false);
// setZamenik1(false);
// setZamenik3(false);
// setNeodredjeni1(!neodredjeni1);

// setSakljucar2(false);
// setZamenik2(false);
// setZamenik4(false);
// setNeodredjeni2(false);
// }

// if (selected === "sakljucar2") {
// setSakljucar1(false);
// setZamenik1(false);
// setZamenik3(false);
// setNeodredjeni1(false);

// setSakljucar2(!sakljucar2);
// setZamenik2(false);
// setZamenik4(false);
// setNeodredjeni2(false);
// }

// if (selected === "zamenik2") {
// setSakljucar1(false);
// setZamenik1(false);
// setZamenik3(false);
// setNeodredjeni1(false);

// setSakljucar2(false);
// setZamenik2(!zamenik2);
// setZamenik4(false);
// setNeodredjeni2(false);
// }

// if (selected === "zamenik4") {
// setSakljucar1(false);
// setZamenik1(false);
// setZamenik3(false);
// setNeodredjeni1(false);

// setSakljucar2(false);
// setZamenik2(false);
// setZamenik4(!zamenik4);
// setNeodredjeni2(false);
// }

// if (selected === "neodredjeni2") {
// setSakljucar1(false);
// setZamenik1(false);
// setZamenik3(false);
// setNeodredjeni1(false);

// setSakljucar2(false);
// setZamenik2(false);
// setZamenik4(false);
// setNeodredjeni2(!neodredjeni2);
// }
// };

const handleSelect = (selected: string) => {
// Reset all states to false
setSakljucar1(false);
setZamenik1(false);
setZamenik3(false);
setNeodredjeni1(false);
setSakljucar2(false);
setZamenik2(false);
setZamenik4(false);
setNeodredjeni2(false);

    // Toggle only the selected state
    switch (selected) {
      case "sakljucar1":
        setSakljucar1((prev) => !prev);
        break;
      case "zamenik1":
        setZamenik1((prev) => !prev);
        break;
      case "zamenik3":
        setZamenik3((prev) => !prev);
        break;
      case "neodredjeni1":
        setNeodredjeni1((prev) => !prev);
        break;
      case "sakljucar2":
        setSakljucar2((prev) => !prev);
        break;
      case "zamenik2":
        setZamenik2((prev) => !prev);
        break;
      case "zamenik4":
        setZamenik4((prev) => !prev);
        break;
      case "neodredjeni2":
        setNeodredjeni2((prev) => !prev);
        break;
      default:
        break;
    }

};
