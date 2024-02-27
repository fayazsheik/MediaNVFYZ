

import { useState } from "react";
import { PiArrowDownFill } from "react-icons/pi";
import { FaFilter } from "react-icons/fa";

import "./table.css"
import { FaPlusSquare } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaCircle } from "react-icons/fa";
import ViewMore from "../ViewMore";



const orderDetails = [
    {
        bidNo: "#122345678123",
        date: "14/02/2024",
        time: " 7hr 20min",
       
        vehicleDetails: "Truck, 20 ft close body , 1",
        materialWeight: "4000 Kg",
        response: "4",
        assignedStaff: "mohit",
        details: "View Details"
    },
    {
      bidNo: "#122345678123",
      date: "14/02/2024",
      time: " 7hr 20min",
  
      vehicleDetails: "Truck, 20 ft close body , 1",
      materialWeight: "4000 Kg",
      response: "4",
      assignedStaff: "mohit",
      details: "View Details"
  },
  {
    bidNo: "#122345678123",
    date: "14/02/2024",
    time: " 7hr 20min",

    vehicleDetails: "Truck, 20 ft close body , 1",
    materialWeight: "4000 Kg",
    response: "4",
    assignedStaff: "mohit",
    details: "View Details"
},{
  bidNo: "#122345678123",
  date: "14/02/2024",
  time: " 7hr 20min",

  vehicleDetails: "Truck, 20 ft close body , 1",
  materialWeight: "4000 Kg",
  response: "4",
  assignedStaff: "mohit",
  details: "View Details"
},{
  bidNo: "#122345678123",
  date: "14/02/2024",
  time: " 7hr 20min",

  vehicleDetails: "Truck, 20 ft close body , 1",
  materialWeight: "4000 Kg",
  response: "4",
  assignedStaff: "mohit",
  details: "View Details"
}

]

const TransportTable = () =>{
  const [showViewMore, setShowViewMore]=useState(false);

  const handleClick=()=>{
    setShowViewMore(!showViewMore)
  }
    return(
        <div className="main-containers">

            <div className="d-flex justify-content-between">
              <ul className="ul-container">
                <li className="m-3">Live</li>
                <li className="m-3">Results</li>
                <li className="m-3">History</li>
                <li className="m-3">

                  <label for="searchField"><CiSearch/></label>
                  <input type="search" id="searchField" name="searchField" placeholder="Search" className="search"></input></li>

              </ul>
              <div className="create">
                <p>Create <FaPlusSquare/></p>
              </div>
            </div>
                <div className="d-flex justify-content-between">
                  <div>
                    <ul className=" d-flex ul-container">
                      <li className="m-3">Live (30)</li>
                      <li className="m-3 list1" >Responded (30)</li>
                      <li className="m-3 list2" >Unresponded (30)</li>
                    </ul>
                  </div>
                  <div >
                    <ul className="d-flex ul-container">
                      <li className="m-3">
                        Bid Created
                      </li>
                      <li className="m-3">Today</li>
                      <li className="m-3">Yester day</li>
                      <li className="m-3">
                        <select>
                          <option type="date">
                           Calendar
                          </option>
                        </select>
                      </li>
                      <li className="m-3"><FaFilter color="blue"/></li>
                    </ul>
                  </div>
                </div>
            
                <table>
                    <thead className="table-head">
                        <tr>
                            <th scope="tabler"> </th>
                            
                            <th scope="tabler"> S.No.</th>
                            <th scope="tabler">Bid NUmber <br/> Created by </th>
                            <th scope="tabler">Start Date <br/>& Time </th>
                            <th scope="tabler">Bid Time <br/> Remaining</th>
                            <th scope="tabler">From city<br/> To city </th>
                            <th scope="tabler">Vehicle Type, Size <br/> Body, No.Of Vehicle </th>
                            <th scope="tabler">Material Weight <br/> (in Kg) </th>
                            <th scope="tabler">Response</th>
                            <th scope="tabler">Assigned Staff</th>
                            <th scope="tabler">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderDetails.map(each => (
                            <tr align="center" >
                                <td><FaCircle color="green"/>1</td>
                                <td></td>
                                <td>{each.bidNo}<br/><span className="extras">Sunder Yadav</span></td>
                                <td>{each.date}<br/><span className="extras">05:40 Pm</span></td>
                                <th>{each.time}</th>
                                <td>
                                  
                                    Grugaon
                                    <br/><PiArrowDownFill/>
                                    <p>Mumbai</p>
                                  
                                </td>
                                <td>{each.vehicleDetails}</td>
                                <td>{each.materialWeight}</td>
                                <td>{each.response}<br/>view results</td>
                                <td>{each.assignedStaff}<br/><span className="extras">5215001161264</span></td>
                                <td onClick={handleClick}>{each.details}</td>
                                
                                <th>{showViewMore && <ViewMore />}</th>
                            </tr>   
                            
                        ))}
                        
                    </tbody>

                    
                </table>

               
               
         </div>
        
    )
}
export default TransportTable;

