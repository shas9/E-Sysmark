// components/NavItems.ts
  
export interface NavItem {
    label: string;
    itemLink?: string;
    target?: string;
}

export const NAV_ITEMS = [
  {
    label: "Home",
    itemLink: "home",
  },
  {
    label: "Product",
    itemLink: "products",
  },
  {
    label: "About Us",
    itemLink: "https://www.sysmarkbd.com/",
    target: "_blank",
  },
];

export default NAV_ITEMS;
