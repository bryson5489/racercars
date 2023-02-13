import { RaceCar } from "./racecar";

export class GasCar implements RaceCar {
  team: string;
  speed: number = 0;
  fuel: number;
  constructor(team: string, fuel: number = 10) {
    this.team = team;
    this.fuel = fuel;
  }
  accelerate(): void {
    this.speed += 2;
    this.fuel -= 1;
  }
  isFuelEmpty(): boolean {
    return this.fuel <= 0;
  }
}
