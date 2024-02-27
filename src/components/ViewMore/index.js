import { FaCircle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import { FaCalendar } from "react-icons/fa6";
import { FaBus } from "react-icons/fa";
import { HiMiniCube } from "react-icons/hi2";

import { RiContactsFill } from "react-icons/ri";
import { IoMdCall } from "react-icons/io";

import { TiArrowSortedUp } from "react-icons/ti";
import './viewmore.css'

const  ViewMore=()=>{
  return(
    <div className='main-container d-flex'>
      <div className="container1 ms-2">
        <span className="bid-heading">Bid No:</span> <span className="bid-no" >16515120650125</span> <sapn  className="name">(sunder Yadav)</sapn>
        <div className="d-flex">
        
          <div>
            <div ><FaCircle color="green"/></div>
            <span className="vertical-text">-----------------------------------------</span>
            <div><FaLocationDot color="red"/></div>
          </div>
          <div>
            <div>
              <h1 className="from-to-heading">Manesar, Gurugram, <sapn className="sub-heading">Haryana</sapn></h1>
              <span className="loading-point">Loading Point:</span><span className="address"> Ramachandra Ramniwas oil mill, <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Alwar , Rajastan</span>
            </div>
            <div>
              <h1 className="from-to-heading">Kotputli, <sapn className="sub-heading">Rajastan</sapn></h1>
              <p className="unloading-point">Uploading Point: <span className="address"> Ramachandra Ramniwas oil mill, <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Alwar , Rajastan</span></p>
            </div>
          </div>
        </div>
      </div>


      <div className="container2">
        <ul className="ul-container">
          <li className="item"><FaCalendar/> Vehicle loading date: 17/02/20024     <RiContactsFill className="right"/>  Assigned Staff:<span>Rahul Pandey</span></li>
          <li className="item"><FaBus/> Vehicle Type: <span>20 ft Truck (Close Body)</span> <span>CNG</span>  <IoMdCall className="right"/> phone number: <span> +91 332423442442</span></li>
          <li className="item"><HiMiniCube/> Material:<span>Agricultural Products</span> Weight:<span>14 Tonnes</span>   Target Price: <span>Rs 5000</span></li>
          <li className="item"><FaCalendar/> Request Date: <span>15/02/2024</span>  <FaCalendar className="ms-5"/> Expiry Date: <span>15/02/2024</span>    Number of Bider for this Bid: <span>54</span></li>

          <li className="item">Remarks: <span>Urgent delivery</span></li>
        </ul>
        <div className="text-end"> <button className="button">View Less <TiArrowSortedUp/></button></div>
        
      </div>

      
    </div>
  )
}
export default ViewMore