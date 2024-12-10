import {BarLoader} from 'react-spinners'
export default function Loading(){
    return(
        <div className="container mx-auto flex justify-center items-center h-[50vh]">
            <BarLoader color="#13BA59" height={10} width={200} />
        </div>
    )
}