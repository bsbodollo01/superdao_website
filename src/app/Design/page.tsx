import React from "react";

const DesignView = () => {
    const designClass =
        "text-center text-neutral-200 text-[54px] font-bold leading-[64px] text-main-text-color hover:text-[#23C9DE]";
    return (
        <div className="text-center space-y-10">
            <h1 className="text-center text-neutral-200 text-[54px] font-bold leading-[80px]">
                Designed for the full journey
            </h1>
            <div>
                <h1 className={designClass}>Organisation design</h1>
                <h1 className={designClass}>Smart contract development</h1>
                <h1 className={designClass}>Fundraising</h1>
                <h1 className={designClass}>Launch marketing</h1>
                <h1 className={designClass}>Member onboarding</h1>
                <h1 className={designClass}>Contributor management</h1>
                <h1 className={designClass}>DAO operations</h1>
            </div>
        </div>
    );
};

export default DesignView;
