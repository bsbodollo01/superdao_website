import React from "react";

const HeaderView = () => {
    const textClass = "text-lg font-light hover:text-primary-color";
    return (
        <header className="sticky top-0 w-[70vw] py-5 z-20 flex items-center justify-between mx-auto px-5 bg-none drop-shadow-lg backdrop-blur-lg">
            <div className="flex gap-x-5 items-center">
                <img src="/assets/svg/logo.svg" alt="" />
            </div>
            <div className="flex gap-x-14 items-center">
                <h1 className={textClass}>Product</h1>
                <h1 className={textClass}>Use cases</h1>
                <h1 className={textClass}>Learn</h1>
                <h1 className={textClass}>About</h1>
                <h1 className={textClass}>Jobs</h1>
            </div>
            <button className=" bg-secondary-color px-7 py-2 text-base rounded-lg">
                Login
            </button>
        </header>
    );
};

export default HeaderView;
