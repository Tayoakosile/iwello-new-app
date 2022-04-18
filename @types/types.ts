import { Crop } from "react-image-crop";

export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export interface ChatsProp {
  text?: string | null;
  senderId?: string;
  receiverId?: string;
  croppedImage?: string | null;
}
