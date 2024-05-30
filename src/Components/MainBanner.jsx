import React from "react"

const MainBanner = () => {
    return (
        <main className="flex justify-between items-center h-[80vh] p-12 bg-[#f8f9fa]">
            <div>
                <h3>Fitbit Ace LTE</h3>
                <h1>Play is calling.</h1>
                <p>
                    Your kids are always in reach with the first-of-its-kind
                    smartwatch designed to make movement fun.
                </p>
                <p>
                    Get 50% off an annual Fitbit Ace Pass data plan,§ plus an
                    Ace Band on us.
                </p>
                <button>Pre-order</button>
            </div>

            <div className="flex justify-between h-full w-1/2">
                <div className="bg-red-500 w-1/4 h-full rounded-lg"></div>
                <div className="h-full w-1/2 ">
                    <div className="bg-orange-300 w-1/2 h-1/2 rounded-lg"></div>
                    <div className="bg-blue-300 w-1/2 h-1/2 rounded-lg"></div>
                </div>
            </div>
        </main>
    )
}

export default MainBanner
