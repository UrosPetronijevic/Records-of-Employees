import { drzavniPraznici, daysArray, thisMonth, thisYear } from "./StaticData";

export class Employee {
  kadrovskiBroj: string = "";
  imeZaposlenog: string = "";
  prezimeZaposlenog: string = "";
  fondSati: number = 0;
  datumPocetka: Date;
  datumZavrsetka: Date;
  redovanRad: number = 0;
  godisnjiOdmor: number = 0;
  drzavniVerskiPraznik: number = 0;
  placenoOdsustvo: number = 0;
  bolovanjeDo30d: number = 0;
  bolovanje100: number = 0;
  bolovanjeNaTertFonda: number = 0;
  porodiljskoOdsustvo: number = 0;

  godisnjiOdmorArr: number[] = [];
  placenoOdsustvoArr: number[] = [];
  bolovanjeArr: number[] = [];
  slavaArr: number[] = [];
  selectedDaysArr: number[] = [];

  weekendsArr: number[] = []; // New array for weekends
  verskiPraznikArr: number[] = [];
  drzavniPraznikArr: number[] = [];

  dodatnoOpt: boolean = false;
  pripravnost: boolean = false;

  pripravnostSati: (number | string | null)[] = [];
  pripravnostTotal: number = 0;

  constructor() {
    // Calculate start and end dates for the current month
    this.datumPocetka = new Date(thisYear, thisMonth, 1);
    this.datumZavrsetka = new Date(thisYear, thisMonth + 1, 0);

    // Populate the weekendsArr with weekends (Saturdays and Sundays)
    this.populateWeekends();

    // Populate state holidays based on the current month
    this.populateDrzavniPraznici(thisMonth);

    // Calculate Orthodox Easter for the current year and populate verskiPraznikArr
    this.verskiPraznikArr = this.calculateOrthodoxEaster();
  }

  // Populate drzavniPraznikArr based on the current month
  private populateDrzavniPraznici(month: number): void {
    this.drzavniPraznikArr = drzavniPraznici[month].dani;
  }

  // Method to populate weekendsArr with weekends in the current month
  private populateWeekends(): void {
    const currentDate = new Date(this.datumPocetka);

    while (currentDate <= this.datumZavrsetka) {
      const dayOfWeek = currentDate.getDay();
      if (dayOfWeek === 0 || dayOfWeek === 6) {
        // Add the day (date) to weekendsArr if it's a Saturday or Sunday
        this.weekendsArr.push(currentDate.getDate());
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
  }

  // Method to calculate Orthodox Easter for a given year (default: current year)
  private calculateOrthodoxEaster(
    year: number = new Date().getFullYear()
  ): number[] {
    const a = year % 19;
    const b = year % 7;
    const c = year % 4;

    const d = (19 * a + 15) % 30;
    const e = (2 * c + 4 * b - d + 34) % 7;

    const month = Math.floor((d + e + 114) / 31); // Month of Orthodox Easter
    const day = ((d + e + 114) % 31) + 1; // Day of the month

    const julianDate = new Date(year, month - 1, day); // Convert to Julian calendar
    const julianOffset = 13; // Offset to convert to Gregorian calendar

    const easterDate = new Date(julianDate);
    easterDate.setDate(julianDate.getDate() + julianOffset);

    // Check if Easter is in the current month
    if (easterDate.getMonth() + 1 === this.datumPocetka.getMonth() + 1) {
      // Array for Easter and surrounding days
      const days = [
        new Date(easterDate).setDate(easterDate.getDate() - 2), // Two days before
        new Date(easterDate).setDate(easterDate.getDate() - 1), // One day before
        easterDate.getTime(), // Easter day
        new Date(easterDate).setDate(easterDate.getDate() + 1), // One day after
      ];

      // Filter to only include days in the current month
      return days
        .map((timestamp) => new Date(timestamp).getDate())
        .filter((day) => day >= 1 && day <= this.datumZavrsetka.getDate());
    }

    return []; // Return an empty array if Easter is not in the current month
  }

  // Method to get kadrovskiBroj (ID)
  getId(): string {
    return this.kadrovskiBroj;
  }

  setDodatnoOpt() {
    this.dodatnoOpt = !this.dodatnoOpt;
  }

  setPripravnost() {
    this.pripravnost = !this.pripravnost;
  }

  setPripravnostSati(hours: (number | string | null)[]) {
    this.pripravnostSati = hours;
  }

  setPripravnostTotal(hours: (number | string | null)[]) {
    let arr = [...hours].filter((hour) => hour !== null);
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
      sum += Number(arr[i]);
    }

    this.pripravnostTotal = sum;
  }

  setStats() {
    this.godisnjiOdmor = this.godisnjiOdmorArr.length * 8;
    this.placenoOdsustvo = this.placenoOdsustvoArr.length * 8;
    this.drzavniVerskiPraznik =
      (this.verskiPraznikArr.length + this.drzavniPraznikArr.length) * 8;
  }

  calculateWorkingHours() {
    this.fondSati = 0; // Reset total working hours
    this.redovanRad = 0; // Reset actual worked hours

    for (const day of daysArray) {
      const currentDate = new Date(thisYear, thisMonth, day);
      const dayOfWeek = currentDate.getDay(); // 0 = Sunday, 6 = Saturday

      // Calculate possible working hours (fondSati)
      if (
        dayOfWeek !== 0 && // Not Sunday
        dayOfWeek !== 6 && // Not Saturday
        !this.drzavniPraznikArr.includes(day) &&
        !this.verskiPraznikArr.includes(day)
      ) {
        this.fondSati += 8;
      }

      // Calculate actual worked hours (redovanRad)
      if (
        dayOfWeek !== 0 && // Not Sunday
        dayOfWeek !== 6 && // Not Saturday
        !this.weekendsArr.includes(day) &&
        !this.drzavniPraznikArr.includes(day) &&
        !this.verskiPraznikArr.includes(day) &&
        !this.godisnjiOdmorArr.includes(day) &&
        !this.placenoOdsustvoArr.includes(day) &&
        !this.bolovanjeArr.includes(day) &&
        !this.slavaArr.includes(day)
      ) {
        this.redovanRad += 8;
      }
    }
  }
}
