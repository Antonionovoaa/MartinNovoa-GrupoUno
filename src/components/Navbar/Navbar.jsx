import {Link} from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa6";
export default function Navbar() {
    return (
        <nav>
            <ul className="flex">
                <li className="mx-[15px] text-[14px] font-normal leading-[20px] uppercase  transition duration-300 ease-linear hover:outline-0 hover:no-underline hover:bg-none">
                    <Link to="/"
                          className="text-[rgb(0,0,0)] hover:text-[rgb(19,186,89)] no-underline font-bold">Inicio</Link>
                </li>
                <li className="mx-[15px] text-[14px] font-normal leading-[20px] uppercase text-[rgb(45,58,75)] transition duration-300 ease-linear hover:text-[rgb(255,225,21)] hover:outline-0 hover:no-underline hover:bg-none">
                    <Link to="/products"
                          className="text-[rgb(0,0,0)] hover:text-[rgb(19,186,89)] no-underline font-bold">Productos</Link>

                </li>
                <li className="mx-[15px] text-[14px] font-normal leading-[20px] uppercase text-[rgb(45,58,75)] transition duration-300 ease-linear hover:text-[rgb(255,225,21)] hover:outline-0 hover:no-underline hover:bg-none">
                    <Link to="/Category/calzado"
                          className="text-[rgb(0,0,0)] hover:text-[rgb(19,186,89)] no-underline font-bold">Calzado</Link>
                </li>
                <li className="mx-[15px] text-[14px] font-normal leading-[20px] uppercase text-[rgb(45,58,75)] transition duration-300 ease-linear hover:text-[rgb(255,225,21)] hover:outline-0 hover:no-underline hover:bg-none">
                    <Link to="/Category/chaleco"
                          className="text-[rgb(0,0,0)] hover:text-[rgb(19,186,89)] no-underline font-bold">Chaleco</Link>
                </li>
                <li className="mx-[15px] text-[14px] font-normal leading-[20px] uppercase text-[rgb(45,58,75)] transition duration-300 ease-linear hover:text-[rgb(255,225,21)] hover:outline-0 hover:no-underline hover:bg-none">
                    <Link to="/Category/mates"
                          className="text-[rgb(0,0,0)] hover:text-[rgb(19,186,89)] no-underline font-bold">Mates</Link>
                </li>
                <li className="mx-[15px] text-[14px] font-normal leading-[20px] uppercase text-[rgb(45,58,75)] transition duration-300 ease-linear hover:text-[rgb(255,225,21)] hover:outline-0 hover:no-underline hover:bg-none ">
                    <Link to="/contact"
                          className="text-[rgb(0,0,0)] hover:text-[rgb(19,186,89)] no-underline font-bold ">Contact</Link>
                </li>
                <li className="mx-[20px] text-[14px] font-normal leading-[20px] uppercase text-[rgb(45,58,75)] transition duration-300 ease-linear hover:text-[rgb(255,225,21)] hover:outline-0 hover:no-underline hover:bg-none">
                    <Link to="/cart"
                          className="text-[rgb(0,0,0)] hover:text-[rgb(19,186,89)] no-underline font-bold"><FaCartPlus
                        className="w-5 h-5"/></Link>
                </li>
            </ul>
        </nav>
    );
}