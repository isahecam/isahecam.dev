import { TECHNOLOGIES } from "@/data/technologies";
import { TechnologyName } from "@/types/technology";

export const getTech = (names: TechnologyName[]) => {
  return names
    .map(name => TECHNOLOGIES.find(tech => tech.name === name))
    .filter((tech): tech is NonNullable<typeof tech> => tech !== undefined);
};
