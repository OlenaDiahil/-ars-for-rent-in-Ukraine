import { NavLink, Outlet } from "react-router-dom";
import {
  Header,
  HeaderDiv,
  NavigationLinks,
} from "./Layout.styled";

function Layout() {
  return (
    <div>
      <Header>
        <HeaderDiv className="container">
          <NavigationLinks>
            <NavLink to="/">Main</NavLink>
            <NavLink to="/catalog">Catalog</NavLink>
            <NavLink to="/favorites">Favorites</NavLink>
          </NavigationLinks>
        </HeaderDiv>
      </Header>
      <Outlet />
    </div>
  );
}

export default Layout;
