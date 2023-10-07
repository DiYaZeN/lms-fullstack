import SideBar from "./_components/sidebar";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="h-full">
        {/* sidebar */}
        <div className="hidden md:flex h-full w-56 flex-col inset-y-0 z-50">
          <SideBar />
        </div>

        {children}
      </div>
    </>
  );
};

export default DashBoardLayout;
