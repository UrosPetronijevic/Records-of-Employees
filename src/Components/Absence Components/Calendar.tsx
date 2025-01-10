type CalendarProps = {};

export default function Calendar({}: CalendarProps) {
  // Get the current date
  const today = new Date();
  const thisMonth = today.getMonth();
  const thisYear = today.getFullYear();

  // Calculate the number of days in the current month
  const daysInMonth = new Date(thisYear, thisMonth + 1, 0).getDate();

  // Create an array of days for the current month
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  //////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="w-[50%] text-slate-500 bg-slate-50 shadow-md flex flex-col justify-between p-8 rounded-md cursor-pointer border border-slate-500">
      <h1 className="self-center text-5xl">
        {today.toLocaleString("default", { month: "long" })} {thisYear}
      </h1>
      <div className="grid grid-cols-5 grid-rows-7 gap-2">
        {daysArray.map((day) => (
          <div
            key={day}
            className={`flex p-4 shadow-md  justify-center items-center border border-slate-300 rounded-sm`}
            onClick={() => {}}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}
