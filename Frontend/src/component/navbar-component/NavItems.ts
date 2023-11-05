// components/NavItems.ts
  
export interface NavItem {
    label: string;
    itemLink?: string;
}

export const NAV_ITEMS = [
  {
    label: "Home",
  },
  {
    label: "Product",
  },
  {
    label: "About Us",
    itemLink: "#",
  },
];

export default NAV_ITEMS;
