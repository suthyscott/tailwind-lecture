import React from "react"
import { FaGoogle, FaSearch , FaShoppingCart} from "react-icons/fa"

const Header = () => {
    return (
        <nav className="flex justify-between h-[8vh] items-center">
            <div className="w-3/4 flex justify-between">
                <button>
                    <FaGoogle className="text-orange-500"/>
                </button>
                <button>Phones</button>
                <button>Tablets</button>
                <button>Watches and Trackers</button>
                <button>Smart Home</button>
                <button>Accessories</button>
                <button>Subscriptions</button>
                <button>Offers</button>
            </div>
            <div className="flex w-1/4 justify-end">
                <FaSearch />
                <FaShoppingCart />
            </div>
        </nav>
    )
}

export default Header
