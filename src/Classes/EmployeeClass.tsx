export class Employee {
  kadrovskiBroj: number | undefined = undefined;
  imeZaposlenog: string = "";
  prezimeZaposlenog: string = "";
  fondSati: number;
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
  drzavniPraznikArr: number[] = [];
  verskiPraznikArr: number[] = [];
  slavaArr: number[] = [];

  constructor() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();

    // Calculate start and end dates for the current month
    this.datumPocetka = new Date(year, month, 1);
    this.datumZavrsetka = new Date(year, month + 1, 0);

    // Calculate fondSati (working hours in the current month, 8 hours per weekday)
    this.fondSati = this.calculateFondSati();
  }

  // Method to calculate working hours (8h/day excluding weekends)
  private calculateFondSati(): number {
    let workingHours = 0;
    const currentDate = new Date(this.datumPocetka);

    while (currentDate <= this.datumZavrsetka) {
      const dayOfWeek = currentDate.getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        // Exclude Sundays (0) and Saturdays (6)
        workingHours += 8;
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return workingHours;
  }

  // Method to get kadrovskiBroj (ID)
  getId(): number {
    return this.kadrovskiBroj;
  }
}
