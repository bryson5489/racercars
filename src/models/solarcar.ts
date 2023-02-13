import { RaceCar } from "./racecar";

export class SolarCar implements RaceCar {
  team: string;
  speed: number = 0;
  constructor(team: string) {
    this.team = team;
  }
  accelerate() {
    this.speed++;
  }
  isFuelEmpty() {
    return false;
  }
}
