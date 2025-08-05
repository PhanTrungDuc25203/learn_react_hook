import "react-pro-sidebar/dist/css/styles.css";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

import { FaTachometerAlt, FaGem, FaList, FaGithub } from "react-icons/fa";
import { DiReact } from "react-icons/di";
import sidebarBg from "../../assets/bg2.jpg";
import "./SideBar.scss";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const SideBar = (props) => {
  const { image, collapsed, toggled, handleToggleSidebar, setCollapsed } =
    props;

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Chỉ collapse khi scroll xuống > 150px
      if (currentScrollY > lastScrollY && currentScrollY > 100 && !collapsed) {
        setCollapsed(true);
      }
      // Chỉ expand lại khi scroll lên và < 50px
      else if (
        currentScrollY < lastScrollY &&
        currentScrollY < 50 &&
        collapsed
      ) {
        setCollapsed(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [collapsed, setCollapsed]);

  return (
    <>
      <ProSidebar
        image={sidebarBg}
        collapsed={collapsed}
        toggled={toggled}
        breakPoint="md"
        onToggle={handleToggleSidebar}
      >
        <SidebarHeader>
          <div
            style={{
              padding: "5px",
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: 14,
              letterSpacing: "1px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            <DiReact
              size={"3rem"}
              color={"#00bfff"}
              style={{ marginLeft: "9px", cursor: "pointer" }}
              onClick={() => setCollapsed(!collapsed)}
            />
            <span
              style={{
                fontSize: "20px",
                fontWeight: "600",
                display: "inline-block",
                verticalAlign: "middle",
                marginLeft: "0.2rem",
              }}
            >
              {collapsed ? "" : "Ecami"}
            </span>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <Menu iconShape="circle">
            <MenuItem
              style={{ fontSize: "18px" }}
              icon={<FaTachometerAlt style={{ fontSize: "18px" }} />}
            >
              <Link to="/admin" />
              Dashboard
            </MenuItem>
            <MenuItem
              style={{ fontSize: "18px" }}
              icon={<FaGem style={{ fontSize: "18px" }} />}
            >
              Intruction
            </MenuItem>
          </Menu>

          <Menu iconShape="circle">
            <SubMenu
              style={{ fontSize: "18px" }}
              icon={<FaList style={{ fontSize: "18px" }} />}
              title={"Management"}
            >
              <MenuItem>
                <Link to="/admin/manage-user" />
                Users management
              </MenuItem>
              <MenuItem> Exam management</MenuItem>
              <MenuItem> Quiz management</MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>

        <SidebarFooter style={{ textAlign: "center" }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: "20px 24px",
            }}
          >
            <a
              href="#"
              target="_blank"
              className="sidebar-btn"
              rel="noopener noreferrer"
            >
              <FaGithub />
              <span
                style={{
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                PhanPiscean@2025
              </span>
            </a>
          </div>
        </SidebarFooter>
      </ProSidebar>
    </>
  );
};

export default SideBar;
