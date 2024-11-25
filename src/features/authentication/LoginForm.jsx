import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../reusable/useAuth";
import Logo from "../../ui/Logo";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Spinner from "../../ui/Spinner";

const LoginForm = () => {
  const { handleSubmit, register, formState } = useForm();
  const { errors } = formState;

  const { mutate: login, isPending } = useAuth(
    "signin",
    "POST",
    "login",
    "Login successfully"
  );

  function onSubmit(data) {
    login(data);
  }

  return (
    <div className="mt-20 p-4">
      <div className="flex flex-col items-center justify-center text-center">
        <Logo />
        <h1 className="text-7xl font-semibold my-10 text-[--color-green-600] ">
          Login Now
        </h1>
      </div>
      <Form className="max-w-3xl mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <FormRow
          label="Email:"
          errors={errors?.email?.message}
          className="relative z-0 w-full mb-12 group"
        >
          <Input
            register={register}
            validationRules={{
              required: "*This filed is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "*Please provide a valid email address",
              },
            }}
            type="email"
            name="email"
            id="email"
            className="block pt-5 px-2 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
            placeholder=" "
            autoComplete="email"
            isPending={isPending}
          />
        </FormRow>

        <FormRow
          label="Password:"
          errors={errors?.password?.message}
          className="relative z-0 w-full mb-12 group"
        >
          <Input
            register={register}
            validationRules={{
              required: "*This filed is required",
              minLength: {
                value: 6,
                message: "*Your password must be at least 6 characters",
              },
            }}
            type="password"
            name="password"
            id="password"
            className="block pt-5 px-2 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
            placeholder=" "
            autoComplete="password"
            isPending={isPending}
          />
        </FormRow>

        <div className="flex items-center justify-center gap-5 sm:gap-0 sm:justify-between  flex-wrap">
          <Button
            disabled={isPending}
            className=" flex items-center justify-center text-2xl text-center w-1/3 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg  w-full sm:w-auto px-5 py-2.5  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            {isPending ? <Spinner /> : "Login"}
          </Button>
          <span>
            Don't have an account?{" "}
            <Link
              className="inline-block border-b-2 border-dashed transition duration-150 hover:text-[--color-green-800]"
              to="/signup"
            >
              Register
            </Link>
          </span>
        </div>
        <div className="mt-5 text-center sm:text-left">
          <Link
            to="/forget-password"
            className="inline-block border-b-2 border-dashed transition duration-150 hover:text-[--color-green-800]"
          >
            Forget password ?
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;
