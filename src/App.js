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
import carimage from "./assets/car.jpeg";

import { MdMenu } from "react-icons/md";
import {
  FaAngleDoubleUp,
  FaCarSide,
  FaGithub,
  FaHome,
  FaQuestion,
} from "react-icons/fa";
import { GoPerson, GoSignIn, GoSignOut } from "react-icons/go";
import { Link } from "react-router-dom";
import Home from "./pages/Home";
import { useSelector, useDispatch } from "react-redux";
import { setCollapseStatus } from "./features/sidebarSlice";
import Cars from "./pages/Cars";
import Layout from "./components/Layout";
import AboutUs from "./pages/AboutUs";
import Faq from "./pages/Faq";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

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
  {
    path: "/aboutus",
    exact: true,
    main: () => (
      <Layout>
        <AboutUs />
      </Layout>
    ),
  },
  {
    path: "/faq",
    exact: true,
    main: () => (
      <Layout>
        <Faq />
      </Layout>
    ),
  },
  {
    path: "/profile",
    exact: true,
    main: () => (
      <Layout>
        <Profile />
      </Layout>
    ),
  },
  {
    path: "/login",
    exact: true,
    main: () => (
      <Layout>
        <Login />
      </Layout>
    ),
  },
  {
    path: "/signup",
    exact: true,
    main: () => (
      <Layout>
        <Signup />
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
                <img
                  src={carimage}
                  alt="logo"
                  width="100%"
                  style={{
                    padding: "10px 0px",
                  }}
                />
              </Menu>
            </SidebarHeader>
            <Menu iconShape="square">
              <MenuItem icon={<FaHome />}>
                <Link to="/">Home</Link>
              </MenuItem>
              <MenuItem icon={<FaCarSide />}>
                <Link to="/cars">Cars</Link>
              </MenuItem>
              <MenuItem icon={<FaQuestion />}>
                <Link to="/faq">FAQ</Link>
              </MenuItem>
              <MenuItem icon={<GoPerson />}>
                <Link to="/profile">Profile</Link>
              </MenuItem>
              <MenuItem icon={<GoSignIn />}>
                <Link to="/aboutus">About us</Link>
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
