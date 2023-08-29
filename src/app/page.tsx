import DesignView from "./Design/page";
import HelpView from "./Help/page";
import HomeView from "./Home/page";
import NavBarView from "./NavigationBar/page";
import ProjectView from "./Projects/page";
import ToolsView from "./Tools/page";
import WorksView from "./Works/page";

export default function Home() {
    const loading = true;

    return (
        //bg-gradient-to-r from-indigo-800 via-violet-700 to-purple-700
        <div className="w-full h-full bg-[#0A1117] bg-cover bg-no-repeat bg-center text-white ">
            {loading ? (
                <div className="w-[80vw] h-full items-center mx-auto space-y-20">
                    <NavBarView />
                    <HomeView />
                    <ProjectView />
                    <DesignView />
                    <ToolsView />
                    <WorksView />
                    <HelpView />
                </div>
            ) : (
                <div className="w-full h-screen">
                    <div className="flex gap-8 items-center justify-center">
                        <span className="text-white font-display md:text-7xl">
                            Loading
                        </span>
                        <svg
                            className="animate-spin -ml-1 mr-3 h-16 w-16 text-secondary fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="current"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25 fill-current text-secondary-300"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                                fill="current"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                        </svg>
                    </div>
                </div>
            )}
        </div>
    );
}
