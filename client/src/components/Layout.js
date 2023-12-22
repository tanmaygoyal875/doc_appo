import React from "react";
import '../layout.css';
import { Link, useLocation } from "react-router-dom";


function Layout({children}) {
  const [collapsed, setCollapsed] = React.useState(false);
  const location = useLocation;
  const userMenu = [
    {
      name: 'Home',
      path: '/',
      icon: 'ri-home-line'
    },
    {
      name: 'Appointments',
      path: '/appointments',
      icon: 'ri-file-list-3-line'
    },
    {
      name: 'ApplyDoctor',
      path: '/apply-doctor',
      icon: 'ri-user-3-line'
    },
    {
      name: 'Profile',
      path: '/profile',
      icon: 'ri-profile-line'
    },
    {
      name: 'Logout',
      path: '/logout',
      icon: 'ri-logout-box-r-line'
    },
  ];

  const menuToBeRendered = userMenu

  return (
    

    <div className="main">
      <div className="d-flex layout">

        <div className= "sidebar">
          <div className="sidebar-header">
            <h1>LOGI</h1>
          </div>
          <div className="menu">
            {menuToBeRendered.map((menu) => {
              const isActive = location.pathname === menu.path
              return <div className={`d-flex menu-item ${isActive && 'active-menu-item'}`}>
                <i className={menu.icon}></i>
                {!collapsed && <Link to={menu.path}>{menu.name}</Link>}
              </div>
            })}
          </div>
        </div>

        <div className="content">
          <div className="header">
            {collapsed ? <i className="ri-close-fill close-icon" onClick={()=>setCollapsed(false)}></i> : <i className="ri-close-fill close-icon" onClick={()=>setCollapsed(true)}></i>}
            <dv className="d-flex">
              <i className="ri-notification-line layout-action-icon"></i>
            </dv>
          </div>
          <div className="body">
              {children}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Layout;
