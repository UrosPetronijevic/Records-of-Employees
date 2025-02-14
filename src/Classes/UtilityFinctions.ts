import { Employee } from "./EmployeeClass";
import { Komisija, Sakljucari, Vozac } from "./PripravnostClasses";
import { daysInMonth, drzavniPraznici } from "./StaticData";

export const filijalaHours = (
  filijalaSakljucari: Sakljucari,
  employees: Employee[]
) => {
  let radniSatiZamenika1Gornje: (number | null)[] = [];
  let radniSatiZamenika2Gornje: (number | null)[] = [];
  let radniSatiNeodredjenogGornje: (number | null)[] = [];

  let fsg1 = employees.find(
    (employee) => employee.kadrovskiBroj === filijalaSakljucari.sakljucarGornje
  );
  let fsg2 = employees.find(
    (employee) => employee.kadrovskiBroj === filijalaSakljucari.zamenik1Gornje
  );
  let fsg3 = employees.find(
    (employee) => employee.kadrovskiBroj === filijalaSakljucari.zamenik2Gornje
  );
  let fsg4 = employees.find(
    (employee) =>
      employee.kadrovskiBroj === filijalaSakljucari.nepredvidjeniGornje
  );

  if (!fsg1) return; // Stop execution if no main employee

  // Number of days in the current month
  const totalDays = daysInMonth;
  let odsustva: (number | null)[] = []; // Allow null values in the array

  // Get the current month as an index (0-based)
  const currentMonthIndex = new Date().getMonth();

  // Get the state holidays for the current month
  const drzavniPraznikDani = drzavniPraznici[currentMonthIndex]?.dani || [];

  for (let day = 1; day <= totalDays; day++) {
    const currentDate = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      day
    );
    const isWeekend = currentDate.getDay() === 0 || currentDate.getDay() === 6; // Sunday (0) or Saturday (6)

    if (isWeekend || drzavniPraznikDani.includes(day)) {
      odsustva.push(null); // Push null for weekends
    } else if (fsg1.bolovanjeArr.includes(day)) {
      odsustva.push(0);
    } else if (
      fsg1.godisnjiOdmorArr.includes(day) ||
      fsg1.slavaArr.includes(day) ||
      fsg1.placenoOdsustvoArr.includes(day)
    ) {
      odsustva.push(0);
      if (odsustva.length > 1) {
        for (let i = odsustva.length - 1; i >= 0; i--) {
          if (odsustva[i] === 8.5) {
            odsustva[i] = 16;
            break;
          }
          if (odsustva[i] !== 0 && odsustva[i] !== null) {
            // Ensure we're not changing a null value
            odsustva[i] = 7.5;
            break;
          }
        }
      }
    } else {
      // Check if the previous day was a weekend (pushed null)
      if (
        odsustva[odsustva.length - 1] === 8.5 ||
        odsustva[odsustva.length - 1] === 7.5 ||
        odsustva[odsustva.length - 1] === 16
      ) {
        odsustva.push(16);
      } else if (
        odsustva.length > 0 &&
        odsustva[odsustva.length - 1] === null
      ) {
        for (let i = odsustva.length - 1; i >= 0; i--) {
          if (
            odsustva[i] === 7.5 ||
            odsustva[i] === 8.5 ||
            odsustva[i] === 16
          ) {
            odsustva.push(16);
            break;
          } else if (odsustva[i] === 0) {
            odsustva.push(8.5);
            break;
          } else if (i === 0 && odsustva[i] === null) {
            odsustva.push(8.5);
            break;
          }
        }
      } else {
        odsustva.push(8.5);
      }
    }
  }

  console.log(fsg1, [...odsustva]);

  for (let i = 0; i < odsustva.length; i++) {
    if (odsustva[i] === null) {
      radniSatiZamenika1Gornje.push(null);
    } else if (odsustva[i] === 7.5) {
      radniSatiZamenika1Gornje.push(8.5);
    } else if (odsustva[i] === 8.5) {
      radniSatiZamenika1Gornje.push(7.5);
    } else if (odsustva[i] === 16) {
      radniSatiZamenika1Gornje.push(0);
    } else if (
      (odsustva[i] === 0 &&
        radniSatiZamenika1Gornje[radniSatiZamenika1Gornje.length - 1] === 0) ||
      radniSatiZamenika1Gornje[radniSatiZamenika1Gornje.length - 1] === 7.5
    ) {
      radniSatiZamenika1Gornje.push(8.5);
    } else if (
      odsustva[i] === 0 &&
      radniSatiZamenika1Gornje[radniSatiZamenika1Gornje.length - 1] === 8.5
    ) {
      radniSatiZamenika1Gornje.push(16);
    } else if (
      odsustva[i] === 0 &&
      radniSatiZamenika1Gornje[radniSatiZamenika1Gornje.length - 1] === 16
    ) {
      radniSatiZamenika1Gornje.push(16);
    } else if (
      odsustva[i] === 0 &&
      radniSatiZamenika1Gornje[radniSatiZamenika1Gornje.length - 1] === null
    ) {
      for (let i = radniSatiZamenika1Gornje.length - 1; i >= 0; i--) {
        if (radniSatiZamenika1Gornje[i] === 0) {
          radniSatiZamenika1Gornje.push(8.5);
          break;
        } else if (
          radniSatiZamenika1Gornje[i] === 7.5 ||
          radniSatiZamenika1Gornje[i] === 8.5 ||
          radniSatiZamenika1Gornje[i] === 16
        ) {
          radniSatiZamenika1Gornje.push(16);
          break;
        }
      }
    }
  }

  console.log(
    `Zamenik1: ${radniSatiZamenika1Gornje}`,
    `Zamenik2: ${radniSatiZamenika2Gornje}`,
    `Zamenik3: ${radniSatiNeodredjenogGornje}`
  );
};

export const ekspozituraHours = (ekspozituraSakljucari, employees) => {};

export const komisija1Hours = (komisija1, employees) => {};

export const komisija2Hours = (komisija2, employees) => {};

export const vozacHours = (vozac, employees) => {};
