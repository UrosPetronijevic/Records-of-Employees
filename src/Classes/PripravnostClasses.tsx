export class Sakljucari {
  sakljucarGornje: string | null = null;
  sakljucarDonje: string | null = null;

  zamenik1Gornje: string | null = null;
  zamenik1Donje: string | null = null;

  zamenik2Gornje: string | null = null;
  zamenik2Donje: string | null = null;

  nepredvidjeniGornje: string | null = null;
  nepredvidjeniDonje: string | null = null;

  setSakljucar(key: string, value: string) {
    // Remove the value from all properties if it exists
    Object.keys(this).forEach((prop) => {
      if ((this as any)[prop] === value) {
        (this as any)[prop] = null;
      }
    });

    // Assign value to the correct key
    if (key === "sakljucar1") this.sakljucarGornje = value;
    if (key === "sakljucar2") this.sakljucarDonje = value;
    if (key === "zamenik1") this.zamenik1Gornje = value;
    if (key === "zamenik2") this.zamenik1Donje = value;
    if (key === "zamenik3") this.zamenik2Gornje = value;
    if (key === "zamenik4") this.zamenik2Donje = value;
    if (key === "neodredjeni1") this.nepredvidjeniGornje = value;
    if (key === "neodredjeni2") this.nepredvidjeniDonje = value;
  }
}

export class Komisija {
  predsednikKomisije: string | null = null;
  zamenikPredsednika: string | null = null;

  clanKomisije2: string | null = null;
  zamenikClana2: string | null = null;

  clanKomisije3: string | null = null;
  zamenikClana3: string | null = null;

  setKomisionar(key: string, value: string) {
    // Remove the value from all properties if it exists
    Object.keys(this).forEach((prop) => {
      if ((this as any)[prop] === value) {
        (this as any)[prop] = null;
      }
    });

    if (key === "predsednikKomisije") this.predsednikKomisije = value;
    if (key === "zamenikPredsednika") this.zamenikPredsednika = value;

    if (key === "clanKomisije2") this.clanKomisije2 = value;
    if (key === "zamenikClana2") this.zamenikClana2 = value;

    if (key === "clanKomisije3") this.clanKomisije3 = value;
    if (key === "zamenikClana3") this.zamenikClana3 = value;
  }
}

export class Vozac {
  vozac: string | null = null;
  zamenaVozaca: string | null = null;

  setVozac(key: string, value: string) {
    Object.keys(this).forEach((prop) => {
      if ((this as any)[prop] === value) {
        (this as any)[prop] = null;
      }
    });

    if (key === "vozac") this.vozac = value;
    if (key === "zamenaVozaca") this.zamenaVozaca = value;
  }
}
