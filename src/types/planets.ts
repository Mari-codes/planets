export interface PlanetSection {
  content: string;
  source: string;
}

export interface Planet {
  name: string;
  overview: PlanetSection;
  structure: PlanetSection;
  geology: PlanetSection;
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: {
    planet: string;
    internal: string;
    geology: string;
  };
}
