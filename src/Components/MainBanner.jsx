import React from "react"

const MainBanner = () => {
    return (
        <main className="flex flex-col lg:flex-row justify-end items-center w-full lg:h-[92vh] text-orange-500 rounded-lg">
            <div className="flex flex-col items-center justify-center w-full h-[35vh] lg:w-3/4 lg:h-full bg-slate-600">
                <h1 className="text-4xl lg:text-5xl">Experience the Thrill.</h1>
                <p className="text-lg mt-10">
                    Ride fast. Ride Hard. Ride Safe.
                </p>
            </div>

            <img
                className="lg:h-full"
                src="https://images.unsplash.com/photo-1558981285-6f0c94958bb6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
        </main>
    )
}

export default MainBanner
