import { SpinnerLoader } from "@/components";

const Loading = () => {
  return (
    <div className="flex h-full flex-col gap-6  rounded-[2rem] border py-4 px-8">
      <SpinnerLoader color="fill-orange" />
    </div>
  );
};

export default Loading;
