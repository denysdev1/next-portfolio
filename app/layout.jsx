import Layout from "../components/layout/Layout";
import "../styles/globals.css";

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <Layout>{children}</Layout>
      <div id="notifications"></div>
    </body>
  </html>
);

export default RootLayout;
