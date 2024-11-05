import './Header.css';
import Navbar from "../Navbar/Navbar.jsx";
export default function Header() {
    const Logo = '../public/Images/Logo2.jpg';
    return (
        <section className="Header">
        <div className=" container mx-auto max-w-[1170px]">
            <div className="flex h-[130px] items-center justify-between">
                <div><img src={Logo} alt="Logo Principal" /></div>
                <div><Navbar /></div>
            </div>
        </div>
        </section>
    );
}

