import Navbar from "./_components/navbar";
import SideBar from "./_components/sidebar";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="h-full">
        {/* navbar */}
        <div className="h-[80px] md:pl-56 w-full fixed inset-y-0">
          <Navbar />
        </div>
        {/* sidebar */}
        <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
          <SideBar />
        </div>
        <main className="md:pl-56 h-full"> {children}</main>
      </div>
    </>
  );
};

export default DashBoardLayout;
