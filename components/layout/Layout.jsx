import { MainNavigation } from "./MainNavigation/MainNavigation";

const Layout = ({ children }) => (
  <>
    <MainNavigation />
    <main>{children}</main>
  </>
);

export default Layout;
