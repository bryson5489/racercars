import { SolarCar } from "../src/models/solarcar";

describe("SolarCar class", () => {
  test("The team property is set from the constructor parameter.", () => {
    const solarCar: SolarCar = new SolarCar("Bryson's team");
    expect(solarCar.team).toBe("Bryson's team");
  });
  test("The team property is set from the constructor parameter.", () => {
    const solarCar: SolarCar = new SolarCar("Bryson's team");
    expect(solarCar.speed).toBe(0);
  });
  test("The team property is set from the constructor parameter.", () => {
    const solarCar: SolarCar = new SolarCar("Bryson's team");
    solarCar.accelerate();
    solarCar.accelerate();
    solarCar.accelerate();
    expect(solarCar.speed).toBe(3);
  });
  test("The team property is set from the constructor parameter.", () => {
    const solarCar: SolarCar = new SolarCar("Bryson's team");
    expect(solarCar.isFuelEmpty()).toBe(false);
  });
});
