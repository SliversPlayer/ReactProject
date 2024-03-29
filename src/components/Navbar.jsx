import { CartWidget } from "./CartWidget"
import { Categories } from "./Categories"


export const Navbar = () => {
    return (
        <div>
            <header className="text-gray-600 body-font bg-black">
            <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-2 md:mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <span className="ml-3 text-xl font-semibold text-fuchsia-500">Ter</span>
                <span className="ml-0 text-xl font-semibold text-purple-400">raF</span>
                <span className="ml-0 text-xl font-semibold text-cyan-400">lora</span>
                </a>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <Categories />
                </nav>
                <CartWidget />
            </div>
            </header>
        </div>
    )
}
export default Navbar;