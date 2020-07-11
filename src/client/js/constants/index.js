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
  WECHAT: "/images/wechat.png",
  WECHAT_QR: "/images/wechatQR.png",
};

/**
 * @description the institute icon would be better to download from LinkedIn institute page logo
 */
export const INSTITUTE_ICON_PATH = {
  SU: "/images/su.png",
  UDACITY: "/images/udacity.jpg",
  YANSHAN: "images/yanshan.png",
  ORACLE: "/images/oracle.png",
  APPLE: "/images/apple.png",
  WALMART_LABS: "/images/walmart-labs.png",
  CHUWA_AMERICA: "/images/chuwa.png",
};

export const LINKS = {
  GITHUB: "https://github.com/1846689910",
  LINKEDIN: "https://www.linkedin.com/in/zuhuihe/",
  EMAIL: "mailto:eric14706@gmail.com",
};

export const TABS = [
  { path: "/", label: "Intro", bgPath: IMAGE_PATH.INTRO },
  { path: "/education", label: "Education", bgPath: IMAGE_PATH.EDUCATION },
  { path: "/skills", label: "Skills", bgPath: IMAGE_PATH.SKILLS },
  {
    path: "/experiences",
    label: "Experiences",
    bgPath: IMAGE_PATH.EXPERIENCES,
  },
  { path: "/contact", label: "Contact", bgPath: IMAGE_PATH.CONTACT },
];
