installation

1. run : yarn add react-router dom

import this in the file that house all the nav link
import { Link, Outlet } from 'react-router-dom';


usage:

return (
    <>
      <StyledNavbar />
      <Outlet />
    </>
  );

  This will wrapper the styled navbar component for active state. 
  
An <Outlet> should be used in parent route elements to render their child route elements