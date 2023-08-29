import React from "react";

const ProjectView = () => {
    const DAOtypes = [
        "investment DAO",
        "Startup DAO",
        "Service DAO",
        "Community DAO",
        "Impact DAO",
        "DeFi DAO",
    ];
    return (
        <div className="w-full text-center my-auto space-y-10">
            <div className="relative flex flex-row justify-center items-center gap-x-10">
                <img
                    className="absolute left-72"
                    src="assets/svg/star.svg"
                    alt=""
                />
                <h1 className="text-5xl font-bold">Ready for every project</h1>
            </div>
            <div className="grid grid-cols-4 gap-x-3 w-[40vw] mx-auto text-center">
                {DAOtypes.map((types) => {
                    return (
                        <button className="w-full rounded-full bg-secondary-color text-blue-300 px-7 py-3 my-3">
                            {types}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default ProjectView;
