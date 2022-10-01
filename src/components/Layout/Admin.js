import React, { createRef, useEffect, useState } from 'react';
// creates a beautiful scrollbar
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// core components
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';

// assets
import Styles from 'assets/jss/core/layouts/adminStyle';
// import logo from "assets/img/reactlogo.png";

const useStyles = makeStyles(Styles);

export default function Admin({ children, ...rest }) {
  const classes = useStyles();

  // ref to help us initialize PerfectScrollbar on windows devices
  const mainPanel = createRef();

  // states and functions
  const [mobileOpen, setMobileOpen] = useState(false);
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('routes');
    setRoutes(JSON.parse(saved));
  });

  const handleDrawerToggle = () => {
    if (mobileOpen) {
      setMobileOpen(false);
    } else {
      setMobileOpen(true);
    }
  };
  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };
  // initialize and destroy the PerfectScrollbar plugin
  React.useEffect(() => {
    if (navigator.platform.indexOf('Win') > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false
      });
      document.body.style.overflow = 'hidden';
    }
    window.addEventListener('resize', resizeFunction);
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf('Win') > -1) {
        ps.destroy();
      }
      window.removeEventListener('resize', resizeFunction);
    };
  }, [mainPanel]);

  return (
    <div className={classes.wrapper}>
      <Sidebar
        routes={routes}
        logoText={'Master'}
        logo=""
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        {...rest}
      />
      <div className={classes.mainPanel} ref={mainPanel}>
        <Navbar routes={routes} handleDrawerToggle={handleDrawerToggle} />
        <div className={classes.content}>
          <div className={classes.container}>
            <div className={classes.content}>
              <div className={classes.container}>{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
