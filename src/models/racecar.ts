export interface RaceCar {
  team: string;
  speed: number;
  accelerate: () => void;
  isFuelEmpty: () => boolean;
}
