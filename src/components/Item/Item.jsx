import {Link} from 'react-router-dom';
import useBag from '../../store/useBag.jsx';

export default function Item({id, name, price, img}){
    const addToCart = useBag(state => state.addToCart);
    return(
        <div className="flex flex-col items-center my-[10px] mx-[10px]">
            <Link to={`/products/${id}`}><img src={img} alt="Imagen Productos" /></Link>
            <div> {/* className="flex items-center"*/}
                <Link to={`/products/${id}`}
                      className="ml-7 text-[20px] font-bold uppercase text-[#2d3a4b] hover:text-[rgb(19,186,89)] no-underline ">{name}</Link>

                <h4 className="-mt-1 ml-10 text-[20px] font-bold my-[15px]">$ {price}</h4>
                <button
                    onClick={() => addToCart({id, name, price, img})}
                    className="items-center bg-blue-500 text-white px-3 py-1 mt-2 rounded hover:bg-blue-700"
                >
                     Agregar al Carrito
                </button>
            </div>
        </div>
    );
}