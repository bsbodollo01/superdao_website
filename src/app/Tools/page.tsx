import React from "react";

const ToolsView = () => {
    const toolsClass =
        "hover:text-yellow-400 text-[22px] font-semibold leading-10";
    return (
        <div className="">
            <div className="relative flex flex-row justify-center items-center gap-x-10">
                <img
                    className="absolute left-72"
                    src="assets/svg/star.svg"
                    alt=""
                />
                <h1 className="text-5xl font-bold">All the tools in one app</h1>
            </div>
            <div className="flex flex-row justify-center gap-x-5 py-20">
                <h1 className={toolsClass}>NFT membership</h1>
                <h1 className={toolsClass}>Member directory</h1>
                <h1 className={toolsClass}>Treasury</h1>
                <h1 className={toolsClass}>Feed</h1>
                <h1 className={toolsClass}>Governance</h1>
                <h1 className={toolsClass}>App store</h1>
            </div>
            <div className="w-full items-center">
                <img
                    className="mx-auto"
                    src="/assets/images/superdao-app.jpg"
                    alt="alt"
                />
            </div>
            <div className="w-full flex items-center py-10">
                <button className="pl-12 pr-14 py-4 bg-yellow-400 bg-opacity-20 rounded-2xl items-center gap-3 inline-flex mx-auto">
                    <img src="/assets/svg/Frame.svg" alt="alt" />
                    <h1 className="text-yellow-400">Watch video</h1>
                </button>
            </div>
        </div>
    );
};

export default ToolsView;
