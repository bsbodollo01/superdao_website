import React from "react";

const HomeView = () => {
    return (
        <main className="w-full h-[70vh] flex flex-col items-center justify-center text-center">
            <div className="space-y-10">
                <h1 className="text-7xl font-bold leading-[82px] tracking-wide">
                    The easiest way <br /> to start a DAO
                </h1>
                <p className="text-center text-white text-2xl font-thin leading-[46px]">
                    An all-in-one platform to start, manage and grow <br /> a
                    decentralized autonomous organization
                </p>
                <button className="text-black bg-primary-color py-3 px-7 rounded-lg font-bold">
                    Get started
                </button>
            </div>
        </main>
    );
};

export default HomeView;
