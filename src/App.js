import "./App.css";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import StickyBox from "react-sticky-box/dist/esnext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { MdMenu } from "react-icons/md";
import { FaGithub, FaHome } from "react-icons/fa";
import { GoSignOut } from "react-icons/go";
import { Link } from "react-router-dom";
import Home from "./pages/Home";
import { useSelector, useDispatch } from "react-redux";
import { setCollapseStatus } from "./features/sidebarSlice";
import Cars from "./pages/Cars";
import Layout from "./components/Layout";
const routes = [
  {
    path: "/",
    exact: true,
    main: () => (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/cars",
    exact: true,
    main: () => (
      <Layout>
        <Cars />
      </Layout>
    ),
  },
];

function App() {
  const status = useSelector((state) => state.sidebar.collapseStatus);
  const dispatch = useDispatch();

  return (
    <Router>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        <StickyBox>
          <ProSidebar collapsed={status} style={{ height: "100vh" }}>
            <SidebarHeader>
              <Menu iconShape="square">
                <MenuItem
                  icon={<MdMenu />}
                  onClick={() => {
                    dispatch(setCollapseStatus(!status));
                  }}
                >
                  Car Rental
                </MenuItem>
              </Menu>
            </SidebarHeader>
            <Menu iconShape="square">
              <MenuItem icon={<FaHome />}>
                <Link to="/">Home</Link>
              </MenuItem>
              <MenuItem icon={<FaHome />}>
                <Link to="/cars">Cars</Link>
              </MenuItem>
            </Menu>
            <SidebarFooter>
              <Menu iconShape="square">
                <MenuItem icon={<FaGithub />}>
                  <a href="https://github.com/PiyushIngale007/Multiplayer-Quiz/">
                    View Source
                  </a>
                </MenuItem>
              </Menu>
              <Menu iconShape="square">
                <MenuItem icon={<GoSignOut />}>
                  <Link to="/login">Sign Out</Link>
                </MenuItem>
              </Menu>
            </SidebarFooter>
          </ProSidebar>
        </StickyBox>
        <Switch>
          {routes.map((route, index) => (
            // You can render a <Route> in as many places
            // as you want in your app. It will render along
            // with any other <Route>s that also match the URL.
            // So, a sidebar or breadcrumbs or anything else
            // that requires you to render multiple things
            // in multiple places at the same URL is nothing
            // more than multiple <Route>s.
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.main />}
            />
          ))}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
