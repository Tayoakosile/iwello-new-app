import { Box, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import Headroom from 'react-headroom';

export default function HomeMenu() {
  const { isOpen, onToggle } = useDisclosure();
  const route = useRouter().pathname;
  const [showMenu, setShowMenu] = useState(true);

  // This makes sure no menu is shown in signup or login route
  useEffect(() => {
    {
      route === "/signup" || route === "/login"
        ? setShowMenu(false)
        : setShowMenu(true);
    }
  }, [route]);

  return (
    <>
      {showMenu && (
        <Headroom>
          <Box as="header" d={{ base: "none", md: "block" }}>
            {/* Desktop Nav */}

            <DesktopMenu />
          </Box>
          {/* Sign In Button */}
          <Box as="header" d={{ base: "b    lock", md: "none" }}>
            <MobileMenu />
          </Box>
        </Headroom>
      )}
    </>
  );
}
