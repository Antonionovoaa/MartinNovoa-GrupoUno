import { Link } from "react-router-dom"

export default function Item({id, name, price, img}){

    return(
        <div className="flex flex-col items-center my-[10px] mx-[10px]">
            <Link to={`/products/${id}`}><img src={img} alt="Imagen Productos" /></Link>
            <div className="flex items-center">
            <Link to={`/products/${id}`} className="text-[22px] font-bold my-[15px] tracking-[2px] uppercase text-[#2d3a4b] hover:text-[rgb(19,186,89)] no-underline">{name}</Link>

            <h4 className="ml-1 text-[22px] font-bold my-[20px]">$ {price}</h4>
            </div>
        </div>
    )
}