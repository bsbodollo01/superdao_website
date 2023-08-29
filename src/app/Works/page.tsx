import React from "react";

const WorksView = () => {
    const shitCoins = [
        { img: "/assets/svg/ETH.svg", name: "Ethereum" },
        { img: "/assets/svg/matic.svg", name: "Polygon" },
        { img: "/assets/svg/gnosis.svg", name: "Gnosis" },
        { img: "/assets/svg/snapshot.svg", name: "Snapshot" },
        { img: "/assets/svg/vector.svg", name: "Vector" },
        { img: "/assets/svg/opensea.svg", name: "OpenSea" },
    ];
    return (
        <div className="w-full space-y-10">
            <div className="relative flex flex-row justify-center items-center gap-x-10">
                <h1 className="text-5xl font-bold">Works with</h1>
                <img
                    className="absolute right-96"
                    src="assets/svg/star.svg"
                    alt=""
                />
            </div>
            <div className="flex flex-row justify-center gap-x-5">
                {shitCoins.map((coin) => {
                    return (
                        <div>
                            <div className="w-40 h-40 px-[29px] py-2.5 bg-gray-900 rounded-[40px] border border-slate-800 justify-center items-center inline-flex">
                                <img src={coin.img} alt="" />
                            </div>
                            <h1 className="text-center text-neutral-200 text-[22px] font-semibold leading-10">
                                {coin.name}
                            </h1>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default WorksView;
