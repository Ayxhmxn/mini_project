import exp from "constants";
import { ScanFace, Sidebar, StepForward } from "lucide-react";

type props = {
    children: React.ReactNode;
};

const MainLayout = ({ children, }: Props) => {
    return (
        <>
            <MobileHeader />
            <Sidebar className="hidden lg:flex" />
            <main className="lg:pl-[256px] h-full pt-[50px]  lg:pt-0">
                <div className="bg-red-500 h-full">
                    {children}
                </div>
            </main>
        </>
    );
};

export default MainLayout;