import { GasCar } from "../src/models/gascar";

describe("GasCar class", () => {
  test("The team and fuel properties are set from the constructor parameters.", () => {
    const gasCar: GasCar = new GasCar("Brysons Team", 10);
    expect(gasCar).toEqual({
      team: "Brysons Team",
      speed: 0,
      fuel: 10,
    });
  });
  test("The team and fuel properties are set from the constructor parameters.", () => {
    const gasCar: GasCar = new GasCar("Brysons Team", undefined);
    expect(gasCar).toEqual({
      team: "Brysons Team",
      speed: 0,
      fuel: 10,
    });
  });
  test("The team and fuel properties are set from the constructor parameters.", () => {
    const gasCar: GasCar = new GasCar("Brysons Team", undefined);
    gasCar.accelerate();

    expect(gasCar).toEqual({
      team: "Brysons Team",
      speed: 2,
      fuel: 9,
    });
  });
  test("The team and fuel properties are set from the constructor parameters.", () => {
    const gasCar: GasCar = new GasCar("Brysons Team", undefined);
    gasCar.accelerate();
    gasCar.accelerate();

    expect(gasCar).toEqual({
      team: "Brysons Team",
      speed: 4,
      fuel: 8,
    });
  });
  test("The team and fuel properties are set from the constructor parameters.", () => {
    const gasCar: GasCar = new GasCar("Brysons Team", undefined);
    gasCar.accelerate();
    gasCar.accelerate();

    expect(gasCar.isFuelEmpty()).toBe(false);
  });
  test("The team and fuel properties are set from the constructor parameters.", () => {
    const gasCar: GasCar = new GasCar("Brysons Team", undefined);
    gasCar.accelerate();
    gasCar.accelerate();

    expect(gasCar.isFuelEmpty()).toBe(false);
  });
  test("The team and fuel properties are set from the constructor parameters.", () => {
    const gasCar: GasCar = new GasCar("Brysons Team", undefined);
    gasCar.accelerate();
    gasCar.accelerate();
    gasCar.accelerate();
    gasCar.accelerate();
    gasCar.accelerate();
    gasCar.accelerate();
    gasCar.accelerate();
    gasCar.accelerate();
    gasCar.accelerate();
    gasCar.accelerate();

    expect(gasCar.isFuelEmpty()).toBe(true);
  });
});
