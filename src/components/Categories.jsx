import { Link } from "react-router-dom"

export const Categories = () => {
    const btnLink = 'hover:text-orange-400 block font-semibold inline-block py-1 text-teal-200 mr-4 mb-2 cursor-pointer'
    return (
        <>   
            <Link className={btnLink} to='/'>Inicio</Link>         
            <Link className={btnLink} to='/category/interior'>Interior</Link>     
            <Link className={btnLink} to='/category/exterior'>Exterior</Link>     
        </>
    )
}