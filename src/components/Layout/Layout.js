import { Fragment } from "react";
import Filters from "../Filters/Filters";

const Layout = (props) => {
  return (
    <Fragment>
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
