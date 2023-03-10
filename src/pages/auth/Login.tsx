import { Logo, Title, Error, Button, SpinnerLoader, Link } from "@/components";
import { type SubmitHandler, useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { auth_schemas } from "@/schemas";
import { type z } from "zod";
import { useAuth } from "@/hooks";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  // page states
  const { login_schema } = auth_schemas;
  const navigate = useNavigate();
  type LoginSchema = z.infer<typeof login_schema>;
  const { loginMutateAsync, isLogging, isAuthenticated } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(login_schema),
  });

  // page functions
  const onSubmit: SubmitHandler<LoginSchema> = async ({ email, password }) => {
    await loginMutateAsync({ email, password });
    navigate("/");
  };

  // if there is a user then redirect to home
  if (isAuthenticated) return <Navigate to="/" replace />;

  return (
    <>
      <section className="z-0 mx-auto  flex  h-full w-full max-w-[1100px] flex-col  items-center justify-center rounded-[2rem] border  border-primary/10 sm:px-[24px]">
        {/* pos name */}
        <div className="mb-5 flex flex-col items-center">
          <Logo logoStyles="text-[3rem]" dotStyles="w-2 h-2 bg-orange" />

          <div className="text-c_yellow text-lg">
            Don’t miss what’s happening
          </div>
        </div>

        {/* the Into section */}
        <div className="mt-5 w-full px-6  sm:w-3/4 lg:w-1/2">
          <Title title="Login" titleStyles="text-lg" />

          {/* the login details */}
          <div className="mt-3">
            <form className="space-y-1 py-2" onSubmit={handleSubmit(onSubmit)}>
              <section className="flex w-full flex-col gap-4 py-3">
                <div className="relative">
                  <input
                    type="email"
                    {...register("email")}
                    className="input peer"
                    placeholder="Email"
                  />
                  <label className="inputLabel">Email</label>

                  {errors["email"] && (
                    <Error errorMessage={errors["email"].message} />
                  )}
                </div>

                <div className="relative">
                  <input
                    type="password"
                    {...register("password")}
                    className="input peer"
                    placeholder="Password"
                  />
                  <label className="inputLabel">Password</label>

                  {errors["password"] && (
                    <Error errorMessage={errors["password"].message} />
                  )}
                </div>
              </section>

              <div className="flex justify-end">
                <Button
                  title={
                    isLogging ? <SpinnerLoader color="fill-white" /> : "Login"
                  }
                  type="submit"
                  intent="primary"
                />
              </div>
            </form>
          </div>

          <div className="mt-2 flex flex-col items-center">
            <Link
              route={{ to: "/forgot-password", name: "Forgot Password?" }}
              fullWidth={false}
            />
          </div>
        </div>

        {/* the Toaster */}
        <Toaster />
      </section>
    </>
  );
};

export default Login;
