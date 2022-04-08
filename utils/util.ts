import { NavItem, ChatsProp } from "../@types/types";

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Inspiration",
    children: [
      {
        label: "Explore Design Work",
        subLabel: "Trending Design to inspire you",
        href: "#",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "#",
      },
    ],
  },
  {
    label: "Find Work",
    children: [
      {
        label: "Job Board",
        subLabel: "Find your dream design job",
        href: "#",
      },
      {
        label: "Freelance Projects",
        subLabel: "An exclusive list for contract work",
        href: "#",
      },
    ],
  },
  {
    label: "Learn Design",
    href: "#",
  },
  {
    label: "Hire Designers",
    href: "#",
  },
];

export const ChatMessage: Array<ChatsProp> = [
  {
    text: "Hello, Dr. Arin.",
    senderId: "12345",
    receiverId: "5432169",
  },
  {
    text: "Hi there",
    receiverId: "12345",
    senderId: "5432169",
  },
  {
    text: "Thank you for reaching out",
    receiverId: "12345",
    senderId: "5432169",
  },
  
  {
    text: "Thank you for reaching out",
    receiverId: "12345",
    senderId: "5432169",
  },

];
