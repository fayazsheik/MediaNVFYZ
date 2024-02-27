
import "./sidebar.css";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import Header from "../Header";
import { FaCircle } from "react-icons/fa";

const orderMenuItems = [
  {
      id:1,
      displayText: "Pending",
      value: "Pending",
  },
  {
      id:2,
      displayText: "Accepted",
      value: "Accepted",
  },
  {
      id:3,
      displayText: "AWB Created",
      value: "AWB Created",
  },
  {
      id:4,
      displayText: "Redy to Ship",
      value: "Redy to Ship",
  },
  {
      id:5,
      displayText: "Shipped",
      value: "Shipped",
  },
  {
      id:6,
      displayText: "Completed",
      value: "Completed",
  },
  {
      id:7,
      displayText: "Cancelled",
      value: "Cancelled",
  },
]

const Sidebar = ({ selectedTab, setSelectedTab }) => {
  
  return (
    <div className="d-flex">
      <div
        className="d-flex flex-column flex-shrink-0  bg-body-tertiary sidebar"
        style={{ width: "180px" }}
      >
        <div className="text-center">
          <FaCircle/>
          LOGO
        </div>
        <ul className="nav nav-pills flex-column mb-auto">
          <li
            className="nav-item "
            onClick={() => {
              setSelectedTab("Bid");
            }}
          >
            <a
              href={orderMenuItems.value}
              className={`nav-link text-black ${
                selectedTab === "Bid" && "active"
              }`}
              aria-current="page"
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#home"></use>
              </svg>
              <BsFillGrid1X2Fill className="me-2" />
              Bid
            </a>
          </li>
          <li
            onClick={() => {
              setSelectedTab("POD");
            }}
          >
            <a
              href={orderMenuItems.value}
              className={`nav-link text-black ${
                selectedTab === "POD" && "active"
              }`}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#speedometer2"></use>
              </svg>
              <BsFillGrid1X2Fill  className="me-2" />
              POD
            </a>
          </li>
          <li
            onClick={() => {
              setSelectedTab("Vendor");
            }}
          >
            <a href={orderMenuItems.value}
              className={`nav-link text-black ${
                selectedTab === "Vendor" && "active"
              }`}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#table"></use>
              </svg>
              <BsFillGrid1X2Fill className="me-2" />
              Vendor
            </a>
          </li>
          <li
            onClick={() => {
              setSelectedTab("User");
            }}
            className="mb-5"
          >
            <a
              href={orderMenuItems.value}
              className={`nav-link text-black ${
                selectedTab === "User" && "active"
              }`}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#grid"></use>
              </svg>
              <BsFillGrid1X2Fill className="me-2" />
              User
            </a>
          </li>
          
          <li
            onClick={() => {
              setSelectedTab("Settings");
            }}
            className="mt-5"
          >
            <a
              href={orderMenuItems.value}
              className={`nav-link text-black ${
                selectedTab === "Settings" && "active"
              }`}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#people-circle"></use>
              </svg>
              <BsFillGrid1X2Fill className="me-2" />
              Settings
            </a>
          </li>

          <li
            onClick={() => {
              setSelectedTab("Profile");
            }}
          >
            <a
              href={orderMenuItems.value}
              className={`nav-link text-black ${
                selectedTab === "Profile" && "active"
              }`}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#people-circle"></use>
              </svg>
              <BsFillGrid1X2Fill className="me-2" />
              Profile
            </a>
          </li>

          <li
            onClick={() => {
              setSelectedTab("Contact Us");
            }}
          >
            <a
              href={orderMenuItems.value}
              className={`nav-link text-black ${
                selectedTab === "Contact Us" && "active"
              }`}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#people-circle"></use>
              </svg>
              <BsFillGrid1X2Fill className="me-2" />
              Contact Us
            </a>
          </li>

          <li
            onClick={() => {
              setSelectedTab("Logout");
            }}
          >
            <a
              href={orderMenuItems.value}
              className={`nav-link text-black ${
                selectedTab === "Logout" && "active"
              }`}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#people-circle"></use>
              </svg>
              <BsFillGrid1X2Fill className="me-2" />
              Logout
            </a>
          </li>
        </ul>
      </div>
      
      {selectedTab === "Bid" ? (<div><Header/></div>): <center className="no-data">NO Data Of <span className="selected">{selectedTab}</span></center>}
      
    </div>
  );
};

export default Sidebar;