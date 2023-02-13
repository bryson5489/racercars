import { GasCar } from "./gascar";
import { RaceCar } from "./racecar";

export const findRacersWithEmptyFuel = (racers: RaceCar[]) => {
  return racers.filter((item) => item.isFuelEmpty() === true);
};

export const findAverageSpeed = (racers: RaceCar[]): number => {
  if (racers.length > 0) {
    return racers.reduce((ac, cv) => ac + cv.speed, 0) / racers.length;
  } else {
    return 0;
  }
};

export const getFasterRacer = (
  racerA: RaceCar,
  racerB: RaceCar
): string | null => {
  if (racerA.speed > racerB.speed) {
    return "racerA is faster";
  } else if (racerA.speed < racerB.speed) {
    return "racerB is faster";
  } else if (racerA.speed === racerB.speed) {
    return "RacerA and RacerB have the same speed";
  } else {
    return null;
  }
};
