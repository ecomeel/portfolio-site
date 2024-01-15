export interface IProject {
  name: string;
  technologies: string;
  description: string;
  imgSrc: string;
  url: string;
}

export interface ICompetence {
  title: string;
  description: string;
  img: string;
  imgAlt: string;
}

export interface IService extends ICompetence {}
