import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLaptop, faMobile, faDesktop, faStopwatch, faTv, faKeyboard, faShop
} from "@fortawesome/free-solid-svg-icons";
import { BsSmartwatch } from "react-icons/bs";
// import "../../admin/Navbar/Style.css"
import "./nav.css"
import "./Style.css"
let Navitem = () => {
    return (
        <>
        <div className="nab1 mb-4 d-flex justify-content-between align-items-center">
            <div className="container mt-4 s1">
                <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-lg-1 col-md-1 text-center">
                        <Link className="nav-link a1" href="/customer/all"><FontAwesomeIcon icon={faShop}></FontAwesomeIcon> All</Link>
                    </div>
                    <div className="col-lg-1 col-md-1 text-center">
                        <Link className="nav-link a1" href="/customer/laptop"><FontAwesomeIcon icon={faLaptop}></FontAwesomeIcon> Laptop</Link>
                    </div>
                    <div className="col-lg-1 col-md-1 text-center">
                        <Link className="nav-link a1" href="/customer/mobile"><FontAwesomeIcon icon={faMobile}></FontAwesomeIcon> Phone</Link>
                    </div>
                    <div className="col-lg-1 col-md-1 text-center">
                        <Link className="nav-link a1" href="/customer/desktop">        <FontAwesomeIcon icon={faDesktop}></FontAwesomeIcon>  Desktop
                        </Link>
                    </div>
                    <div className="col-lg-1 col-md-1 text-center">
                        <Link className="nav-link a1" href="/customer/watch"><BsSmartwatch /> Watch</Link>
                    </div>
                    <div className="col-lg-1 col-md-1 text-center">
                        <Link className="nav-link a1" href="/customer/tv"><FontAwesomeIcon icon={faTv}></FontAwesomeIcon> Tv</Link>
                    </div>
                    <div className="col-lg-2 col-md-1 text-center">
                        <Link className="nav-link a1" href="/customer/other"><FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon> Others</Link>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Navitem;
