import { useState } from "react";
import { IoMdContact } from "react-icons/io";
import "./header.css";
import TransportTable from "../TransportTable";

const orderMenuItems = [
  {
      id:1,
      displayText: "Bid",
      value: "Bid",
  },
  {
      id:2,
      displayText: "POD",
      value: "POD",
  },
  {
      id:3,
      displayText: "Vendor",
      value: "Vendor",
  },
  {
      id:4,
      displayText: "User",
      value: "User",
  },
 
]

const Header = () => {
  const [selectedItem, setSelectedItem] = useState("Pending");

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  return (
    <div>
    <nav className="nav-container">
      <ul className="ul-container d-flex justify-content-end">
      <ul className='options-ul'>
            {orderMenuItems.map((item) => (
              <li  key={item.id} onClick={()=> handleItemClick(item)} 
                style={{
                cursor: 'pointer',
                color: selectedItem && selectedItem.id === item.id ? 'rgb(46, 46, 243)' : 'black',
                      }}
                className={selectedItem && selectedItem.id === item.id ? 'bottom-border': 'option'}
               >
                  <p>{item.displayText}</p>
              </li>
              
                    ))}

              <li  className="select">
                <IoMdContact/>
                <select className="select">
                  <option>
                    Freight EG
                  </option>
                </select>
              </li>
          </ul>
      </ul> 
    </nav>
    <div>
      {selectedItem.id === 1 ? <TransportTable/> : <center className='no-data'>Please select "Bid" from NavBar to see the results.otherwise No
      DaTA  {selectedItem.displayText}</center>}
      </div>
    </div>  

  );
};
export default Header;
