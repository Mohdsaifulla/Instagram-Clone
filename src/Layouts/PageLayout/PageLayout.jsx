import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";
import Navbar from "../../components/Navbar/Navbar";
const PageLayout = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const { pathname } = useLocation();
  const canRenderSidebar = pathname !== "/auth" && user;
  const canRenderNavbar = !user && !loading && pathname !== "/auth";
  return (
    <Flex flexDir={canRenderNavbar ? "column":"row"}>
      {canRenderSidebar ? (
        <Box w={{ base: "70px", md: "240px" }}>
          <Sidebar />
        </Box>
      ) : null}

      {/* navabar */}
      {canRenderNavbar ? <Navbar /> : null}

      <Box flex={1} w={{ base: "calc(100%-70px)", md: "calc(100%-240px)" }} mx={'auto '}>
        {children}
      </Box>
    </Flex>
  );
}; 

export default PageLayout;
