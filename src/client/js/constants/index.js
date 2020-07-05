export const IMAGE_PATH = {
  AVATAR: "/images/avatar.jpg",
  CONTACT: "/images/contact-me.jpg",
  EDUCATION: "/images/education.jpg",
  INTRO: "/images/intro.jpg",
  ORACLE: "/images/oracle.png",
  SKILLS: "/images/skills.jpg",
  SU: "/images/su.png",
  UDACITY: "/images/udacity.jpg",
  EXPERIENCES: "/images/work-experiences.jpg",
  YANSHAN: "images/yanshan.png"
};

export const TABS = [
  { path: "/", label: "intro", bgPath: IMAGE_PATH.INTRO },
  { path: "/education", label: "education", bgPath: IMAGE_PATH.EDUCATION },
  { path: "/skills", label: "skills", bgPath: IMAGE_PATH.SKILLS },
  {
    path: "/experiences",
    label: "experiences",
    bgPath: IMAGE_PATH.EXPERIENCES,
  },
  { path: "/contact", label: "contact", bgPath: IMAGE_PATH.CONTACT },
];
