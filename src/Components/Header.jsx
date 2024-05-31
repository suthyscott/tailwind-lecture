import { useState } from "react"
import { FaGoogle, FaSearch, FaShoppingCart } from "react-icons/fa"
import { MdAccountCircle } from "react-icons/md"
import { GiFullMotorcycleHelmet, GiHamburgerMenu } from "react-icons/gi"

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <>
            <nav className="flex lg:hidden h-[8vh] justify-between items-center px-5 bg-black text-orange-500">
                <GiFullMotorcycleHelmet />
                <GiHamburgerMenu onClick={() => setShowMenu(!showMenu)} />
                {showMenu && (
                    <div className="h-[92vh] w-full absolute left-0 top-[8vh] bg-black text-orange-500">
                        <div className="w-full h-[15%] flex flex-col justify-between">
                            <button>HyperSport</button>
                            <button>Naked Sport</button>
                            <button>Cruisers</button>
                        </div>
                        <div className="w-full h-[15%] flex justify-evenly items-center">
                            <FaSearch />
                            <FaShoppingCart />
                            <MdAccountCircle />
                        </div>
                    </div>
                )}
            </nav>

            <nav className="hidden lg:flex justify-between h-[8vh] items-center px-5 bg-black text-orange-500">
                <div className="w-1/4 flex justify-between">
                    <button>
                        <GiFullMotorcycleHelmet />
                    </button>
                    <button>HyperSport</button>
                    <button>Naked Sport</button>
                    <button>Cruisers</button>
                </div>
                <div className="flex w-20 justify-between">
                    <FaSearch />
                    <FaShoppingCart />
                    <MdAccountCircle />
                </div>
            </nav>
        </>
    )
}

export default Header
