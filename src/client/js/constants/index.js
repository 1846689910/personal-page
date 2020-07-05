/**
 * @description the background image would be better to search `xxx wallpaper` and pick the ones with size >2000 x >=2000
 */
export const IMAGE_PATH = {
  AVATAR: "/images/avatar.jpg",
  CONTACT: "/images/contact-me.jpg",
  EDUCATION: "/images/education.jpg",
  INTRO: "/images/intro.jpg",
  SKILLS: "/images/skills.jpg",
  EXPERIENCES: "/images/work-experiences.jpg",
};

/**
 * @description the institute icon would be better to download from LinkedIn institute page logo
 */
export const INSTITUTE_ICON_PATH = {
  SU: "/images/su.png",
  UDACITY: "/images/udacity.jpg",
  YANSHAN: "images/yanshan.png",
  ORACLE: "/images/oracle.png",
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
