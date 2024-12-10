import { Link } from "react-router-dom";
import ItemList from "../ItemList/ItemList";


export default function HomePage() {
    const imgBanner = '../public/images/fondo3.jpg';
    return (
        <div>
            <div
                className="h-[900px] w-[100vw] bg-cover bg-center"
                style={{ backgroundImage: `url(${imgBanner})` }}
            >
                <div className="container mx-auto max-w-[1170px] flex flex-col h-[700px] justify-center">
                    <h2 className="text-[#ffffff] font-bold text-[100px] leading-[85px] uppercase">
                        Entre
                    </h2>
                    <h2 className="text-[#ffffff] font-bold text-[150px] leading-[85px] uppercase">Brujos</h2>


                </div>
            </div>
            <div className="container mx-auto max-w-[1170px] my-[50px]">
                <ItemList />

            </div>
        </div>
    );
}