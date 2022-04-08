export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export interface ChatsProp {
  text: string;
  senderId: string;
  receiverId: string;
}
