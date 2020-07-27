export default class EducationExp {
  imageSrc: string;
  imageAlt: string;
  institute: string;
  degree: string;
  range: string;
  constructor(
    imageSrc: string,
    imageAlt: string,
    institute: string,
    degree: string,
    range: string,
  ) {
    this.imageSrc = imageSrc;
    this.imageAlt = imageAlt;
    this.institute = institute;
    this.degree = degree;
    this.range = range;
  }
  static buildFromObject = (object: {
    imageSrc: string;
    imageAlt: string;
    institute: string;
    degree: string;
    range: string;
  }): EducationExp =>
    new EducationExp(
      object.imageSrc,
      object.imageAlt,
      object.institute,
      object.degree,
      object.range,
    );
}
