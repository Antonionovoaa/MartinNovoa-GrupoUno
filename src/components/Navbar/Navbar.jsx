import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
        <nav>
            <ul className="flex">
                <li className="mx-[15px] text-[14px] font-normal leading-[20px] uppercase  transition duration-300 ease-linear hover:outline-0 hover:no-underline hover:bg-none">
                    <Link to="/" className="text-[rgb(0,0,0)] hover:text-[rgb(19,186,89)] no-underline font-bold">Home</Link>
                </li>
                <li className="mx-[15px] text-[14px] font-normal leading-[20px] uppercase text-[rgb(45,58,75)] transition duration-300 ease-linear hover:text-[rgb(255,225,21)] hover:outline-0 hover:no-underline hover:bg-none">
                    <Link to="/products" className="text-[rgb(0,0,0)] hover:text-[rgb(19,186,89)] no-underline font-bold">productos</Link>

                </li>
                <li className="mx-[15px] text-[14px] font-normal leading-[20px] uppercase text-[rgb(45,58,75)] transition duration-300 ease-linear hover:text-[rgb(255,225,21)] hover:outline-0 hover:no-underline hover:bg-none">
                    <a href="/category/calzado" className="text-[rgb(0,0,0)] hover:text-[rgb(19,186,89)] no-underline font-bold">calzado</a>
                </li>
                <li className="mx-[15px] text-[14px] font-normal leading-[20px] uppercase text-[rgb(45,58,75)] transition duration-300 ease-linear hover:text-[rgb(255,225,21)] hover:outline-0 hover:no-underline hover:bg-none">
                    <a href="/category/chaleco" className="text-[rgb(0,0,0)] hover:text-[rgb(19,186,89)] no-underline font-bold">Chaleco</a>
                </li>
                <li className="mx-[15px] text-[14px] font-normal leading-[20px] uppercase text-[rgb(45,58,75)] transition duration-300 ease-linear hover:text-[rgb(255,225,21)] hover:outline-0 hover:no-underline hover:bg-none">
                    <Link to="/about" className="text-[rgb(0,0,0)] hover:text-[rgb(19,186,89)] no-underline font-bold">About</Link>
                </li>
                <li className="mx-[15px] text-[14px] font-normal leading-[20px] uppercase text-[rgb(45,58,75)] transition duration-300 ease-linear hover:text-[rgb(255,225,21)] hover:outline-0 hover:no-underline hover:bg-none">
                    <Link to="/contact" className="text-[rgb(0,0,0)] hover:text-[rgb(19,186,89)] no-underline font-bold">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}