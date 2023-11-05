// components/NavItems.ts
  
export interface NavItem {
    label: string;
    itemLink?: string;
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
  },
];

export default NAV_ITEMS;
