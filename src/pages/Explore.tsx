import { Title } from "@/components";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks";

const Explore = () => {
  /**
   * component states
   */
  const { isAuthenticated } = useAuth();

  /**
   * ensure one cannot gain access unless authenticated
   */
  if (!isAuthenticated) return <Navigate to="/" replace />;

  return (
    <>
      <main className="flex h-full flex-col gap-6  rounded-[2rem] border py-4 px-8">
        <Title title="Explore For More" titleStyles="text-lg" />

        <section className="flex h-full items-center justify-center ">
          <p className="bg-orange px-4 py-2 text-white">Feature Coming Soon!</p>
        </section>
      </main>
    </>
  );
};

export default Explore;
