export const absenceTypes = [
  {
    type: "Godisnji Odmor",
    color: "bg-green-500 text-white",
    key: "godisnjiOdmorArr",
  },
  {
    type: "Placeno odsustvo",
    color: "bg-blue-500 text-white",
    key: "placenoOdsustvoArr",
  },
  { type: "Bolovanje", color: "bg-yellow-300 text-white", key: "bolovanjeArr" },

  { type: "Slava", color: "bg-pink-300 text-white", key: "slavaArr" },
];
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const drzavniPraznici = [
  { mesec: "Januar", dani: [1, 2, 7] },
  { mesec: "Februar", dani: [15, 16, 17] },
  { mesec: "Mart", dani: [] },
  { mesec: "April", dani: [] },
  { mesec: "Maj", dani: [1, 2] },
  { mesec: "Jun", dani: [] },
  { mesec: "Jul", dani: [] },
  { mesec: "Avgust", dani: [] },
  { mesec: "Spetembar", dani: [] },
  { mesec: "Oktobar", dani: [] },
  { mesec: "Novembar", dani: [11] },
  { mesec: "Decembar", dani: [] },
];

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Get the current date
export const today = new Date();
export const thisMonth = today.getMonth();
export const thisYear = today.getFullYear();

// Calculate the number of days in the current month
export const daysInMonth = new Date(thisYear, thisMonth + 1, 0).getDate();

// Get the weekday of the first day of the month (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
export const firstDayOfMonth = new Date(thisYear, thisMonth, 1).getDay();

// Calculate the number of empty slots before the first day (if first day is 3rd day of the week, we need 2 empty slots)
export const emptySlots = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1; // Adjust for Monday being first day

// Create an array of days for the current month
export const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

// Prepend empty slots to the beginning of the array
export const calendarArray = [...Array(emptySlots).fill(null), ...daysArray];

export const daysOfWeek = [
  "Ponedeljak",
  "Utorak",
  "Sreda",
  "Cetvrtak",
  "Petak",
  "Subota",
  "Nedelja",
];

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
