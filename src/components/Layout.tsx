import {
  DeletePostConfirmation,
  Modal,
  Sidebar,
  TopHeader,
} from "@/components";
import { AppRoutes } from "@/routers";
import { Toaster } from "react-hot-toast";
import { useAuth } from "@/hooks";
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const Layout = () => {
  /**
   * component states
   */
  const showSidebar = useSelector((state: any) => state.app.client.showSidebar);
  const { isAuthenticated } = useAuth();
  const showDeletePostConfirmationModal = useSelector(
    (state: any) => state.app.client.showDeletePostConfirmationModal
  );

  // if (!isAuthenticated) return <WelcomePage />;

  return (
    <BrowserRouter>
      <section className="relative mx-auto flex w-full max-w-[1200px]  sm:px-[20px]">
        {/* the Toaster */}
        <Toaster />

        {/* the sidebar */}
        <div
          className={`absolute bg-[#f6f2fd] duration-300 sm:left-0   ${
            showSidebar ? "left-0" : "-left-[100%]"
          } ${!isAuthenticated && "hidden"}`}
        >
          <Sidebar />
        </div>

        {/* the rest of the body */}
        <div
          className={`h-screen max-w-[1200px] flex-1 overflow-x-scroll p-2 duration-300 scrollbar-hide  ${
            !isAuthenticated ? "sm:ml-[0px]" : "sm:ml-[250px]"
          }`}
        >
          <TopHeader />

          <div className="mt-5 h-[47rem]  xs:h-[39rem]">
            <AppRoutes />
          </div>
        </div>

        <Modal
          component={<DeletePostConfirmation />}
          modalState={showDeletePostConfirmationModal}
          modalStyles="w-[90vw] h-[13.5rem] duration-300"
        />
      </section>
    </BrowserRouter>
  );
};

export default Layout;
