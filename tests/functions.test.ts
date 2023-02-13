import {
  findAverageSpeed,
  findRacersWithEmptyFuel,
  getFasterRacer,
} from "../src/models/functions";
import { GasCar } from "../src/models/gascar";
import { SolarCar } from "../src/models/solarcar";

describe("findRacersWithEmptyFuel Function", () => {
  test("Do a test case with an array of GasCar where some have no fuel.", () => {
    const raceCar1 = new GasCar("Justin's team", 10);
    const raceCar2 = new GasCar("Henry's team", 9);
    const raceCar3 = new GasCar("Bryson's team", 0);
    const raceCar4 = new GasCar("Paul's team", 0);
    const arrayOfCars = [raceCar1, raceCar2, raceCar3, raceCar4];
    expect(findRacersWithEmptyFuel(arrayOfCars)).toEqual([
      { fuel: 0, speed: 0, team: "Bryson's team" },
      { fuel: 0, speed: 0, team: "Paul's team" },
    ]);
  });
  test("Do a test case with an array of GasCar where all have no fuel.", () => {
    const raceCar1 = new GasCar("Justin's team", 0);
    const raceCar2 = new GasCar("Henry's team", 0);
    const raceCar3 = new GasCar("Bryson's team", 0);
    const raceCar4 = new GasCar("Paul's team", 0);
    const arrayOfCars = [raceCar1, raceCar2, raceCar3, raceCar4];
    expect(findRacersWithEmptyFuel(arrayOfCars)).toEqual([
      { fuel: 0, speed: 0, team: "Justin's team" },
      { fuel: 0, speed: 0, team: "Henry's team" },
      { fuel: 0, speed: 0, team: "Bryson's team" },
      { fuel: 0, speed: 0, team: "Paul's team" },
    ]);
  });
  test("Do a test case with an array of GasCar where none have no fuel. ", () => {
    const raceCar1 = new GasCar("Justin's team", 5);
    const raceCar2 = new GasCar("Henry's team", 5);
    const raceCar3 = new GasCar("Bryson's team", 10);
    const raceCar4 = new GasCar("Paul's team", 50);
    const arrayOfCars = [raceCar1, raceCar2, raceCar3, raceCar4];
    expect(findRacersWithEmptyFuel(arrayOfCars)).toEqual([]);
  });
  test("Do a test case with an array of SolarCar.", () => {
    const raceCar1 = new SolarCar("Justin's team");
    const raceCar2 = new SolarCar("Henry's team");
    const raceCar3 = new SolarCar("Bryson's team");
    const raceCar4 = new SolarCar("Paul's team");
    const arrayOfCars = [raceCar1, raceCar2, raceCar3, raceCar4];
    expect(findRacersWithEmptyFuel(arrayOfCars)).toEqual([]);
  });
  test("Do a test case with an array that has a mix of SolarCar and GasCar.", () => {
    const raceCar1 = new SolarCar("Justin's team");
    const raceCar2 = new SolarCar("Henry's team");
    const raceCar3 = new GasCar("Bryson's team", 10);
    const raceCar4 = new GasCar("Paul's team", 50);
    const arrayOfCars = [raceCar1, raceCar2, raceCar3, raceCar4];
    expect(findRacersWithEmptyFuel(arrayOfCars)).toEqual([]);
  });
  test("Do a test case with an empty array.", () => {
    const arrayOfCars = [];
    expect(findRacersWithEmptyFuel([])).toEqual([]);
  });
});
describe("findAverageSpeed Function", () => {
  test("Do a test case with an array of GasCar with different speeds", () => {
    const raceCar1 = new GasCar("Justin's team", 5);
    const raceCar2 = new GasCar("Henry's team", 5);
    const raceCar3 = new GasCar("Bryson's team", 10);
    const raceCar4 = new GasCar("Paul's team", 50);
    raceCar1.accelerate();
    raceCar2.accelerate();
    raceCar3.accelerate();
    raceCar4.accelerate();
    const arrayOfCars = [raceCar1, raceCar2, raceCar3, raceCar4];
    expect(findAverageSpeed(arrayOfCars)).toBe(2);
  });
  test("Do a test case with an array that has a mix of SolarCar and GasCar with different speed", () => {
    const raceCar1 = new GasCar("Justin's team", 5);
    const raceCar2 = new GasCar("Henry's team", 5);
    const raceCar3 = new SolarCar("Bryson's team");
    const raceCar4 = new SolarCar("Paul's team");
    raceCar1.accelerate();
    raceCar2.accelerate();

    const arrayOfCars = [raceCar1, raceCar2, raceCar3, raceCar4];
    expect(findAverageSpeed(arrayOfCars)).toBe(1);
  });
  test("Do a test case with an array of cars that all have 0 speed.", () => {
    const raceCar1 = new GasCar("Justin's team", 0);
    const raceCar2 = new GasCar("Henry's team", 0);
    const raceCar3 = new SolarCar("Bryson's team");
    const raceCar4 = new SolarCar("Paul's team");

    const arrayOfCars = [raceCar1, raceCar2, raceCar3, raceCar4];
    expect(findAverageSpeed(arrayOfCars)).toBe(0);
  });
  test("Do a test case with an array of cars that all have 0 speed.", () => {
    expect(findAverageSpeed([])).toBe(0);
  });
});

describe("getFasterRacer Function", () => {
  test("Test with racerA faster.", () => {
    const racerA = new GasCar("Justin's team", 20);
    const racerB = new GasCar("Henry's team", 20);
    racerA.accelerate();
    racerA.accelerate();
    racerA.accelerate();
    racerA.accelerate();
    racerB.accelerate();
    racerB.accelerate();
    racerB.accelerate();
    expect(getFasterRacer(racerA, racerB)).toBe("racerA is faster");
  });
  test("Test with racerB faster.", () => {
    const racerA = new GasCar("Justin's team", 20);
    const racerB = new GasCar("Henry's team", 20);
    racerA.accelerate();
    racerB.accelerate();
    racerB.accelerate();
    racerB.accelerate();
    expect(getFasterRacer(racerA, racerB)).toBe("racerB is faster");
  });
  test("Test with racerB faster.", () => {
    const racerA = new GasCar("Justin's team", 20);
    const racerB = new GasCar("Henry's team", 20);
    racerA.accelerate();
    racerB.accelerate();
    expect(getFasterRacer(racerA, racerB)).toBe(
      "RacerA and RacerB have the same speed"
    );
  });
  test("Repeat one of the above with a different mix GasCar and SolarCar in the parameters.", () => {
    const racerA = new SolarCar("Justin's team");
    const racerB = new GasCar("Henry's team", 20);
    racerA.accelerate();
    racerA.accelerate();

    racerB.accelerate();
    expect(getFasterRacer(racerA, racerB)).toBe(
      "RacerA and RacerB have the same speed"
    );
  });
});
