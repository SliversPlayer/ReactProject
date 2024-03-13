export const Categories = () => {
    const btnLink = 'hover:text-orange-400 block font-semibold inline-block py-1 text-teal-200 mr-4 mb-2 cursor-pointer'
    return (
        <>
            <a className={btnLink} href='/'>Inicio</a>                 
            <a className={btnLink} href='/category/interior'>Interior</a>
            <a className={btnLink} href='/category/exterior'>Exterior</a>
        </>
    )
}