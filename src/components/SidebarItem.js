import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function SidebarItem({ item }) {
  const [open, setOpen] = useState(false);

  if (item.childrens) {
    return (
      <div className={open ? "sidebar-itema open" : "sidebar-itema"}>
        <div className="sidebar-titlea">
          <span>
            {/* {item.icon && <i className={item.icon}></i>} */}
            {item.title}
          </span>
          <i
            className="bi-chevron-down toggle-btna"
            onClick={() => setOpen(!open)}
          ></i>
        </div>
        <div className="sidebar-contenta">
          {item.childrens.map((child, index) => (
            <SidebarItem key={index} item={child} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <a href={item.path || "#"} className="sidebar-itema plain">
        {/* {item.icon && <i className={item.icon}></i>} */}
        {item.title}
      </a>
    );
  }
}
