import React from "react";

const HelpView = () => {
    const people = [
        "/assets/images/human1.png",
        "/assets/images/human2.png",
        "/assets/images/human3.png",
        "/assets/images/human4.png",
        "/assets/images/human5.png",
    ];
    return (
        <div className="space-y-20">
            <h1 className="text-center text-neutral-200 text-[54px] font-bold leading-[80px]">
                Help at every step
            </h1>
            <div className="flex flex-row gap-x-5 justify-center">
                {people.map((person) => {
                    return (
                        <img
                            className="w-36 h-36 object-contain rounded-3xl"
                            src={person}
                            alt=""
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default HelpView;
