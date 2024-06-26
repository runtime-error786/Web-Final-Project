import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';
import { Inter } from "next/font/google";
import { Play } from "next/font/google";
const inter = Play({ subsets: ["latin"], weight: "400" });
import { useDispatch, useSelector } from 'react-redux';
import { usePathname, useRouter } from 'next/navigation';
import { Auth_direct } from "@/Redux/Action";
import axios from 'axios';
import Profile from "../profile/page";
import Profpic from "../Others/Imgcomp";

const Nav = () => {
    let dispatch = useDispatch();
    const route = useRouter();

    let Signout = async () => {
        try {
            const response = await axios.get(`http://localhost:2001/signout`, {
                withCredentials: true
            });
            console.log("hello in signout admin")
            await dispatch(Auth_direct("Guest"));
            route.push("/signin");
            console.log("Sign out call")
        }
        catch (e) {
            console.log("error")
        }
    }

    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#2c3e50" }}>
            <div className="container">
                <div className="d-flex w-100 justify-content-between align-items-center">
                    <Link href="/" className='navbar-brand' style={{ fontWeight: "bolder", color: "white", fontSize: "30px" }}>
                        E-Mart
                    </Link>
                    <div className="d-flex align-items-center">
                        <Link className="nav-link" href="/admin/profile" style={{ color: "white", marginLeft: "20px" }}>
                            <Profpic></Profpic>
                        </Link>

                        <Link className="nav-link" onClick={() => { Signout(); }} href="" style={{ fontSize: "larger", color: "white", marginLeft: "20px", textDecoration: "none" }}>
                            SignOut
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
