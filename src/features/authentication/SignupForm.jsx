import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../reusable/useAuth";
import Button from "../../ui/Button";
import Logo from "../../ui/Logo";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";

const SignupForm = () => {
  const { handleSubmit, register, formState, getValues } = useForm();
  const { errors } = formState;

  const { mutate: signup, isPending } = useAuth(
    "signup",
    "POST",
    "signup",
    "Account successfully created!"
  );
  function onSubmit(data) {
    console.log(data);
    signup(data);
  }

  return (
    <div className="mt-20 p-4">
      <div className="flex flex-col items-center justify-center text-center">
        <Logo />
        <h1 className="text-7xl text-[--color-green-600] font-bold my-10 ">
          Register Now
        </h1>
      </div>
      <Form className="max-w-3xl mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <FormRow
          className="relative z-0 w-full mb-12 group"
          label="Name:"
          errors={errors?.name?.message}
        >
          <Input
            register={register}
            validationRules={{
              required: "This filed is required!",
            }}
            type="text"
            name="name"
            id="name"
            className="block pt-5 px-2 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
            placeholder=" "
            isPending={isPending}
          />
        </FormRow>

        <FormRow
          className="relative z-0 w-full mb-12 group"
          label="Email:"
          errors={errors?.email?.message}
        >
          <Input
            register={register}
            validationRules={{
              required: "This filed is required!",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please provide a valid email address",
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
          className="relative z-0 w-full mb-12 group"
          label="Password:"
          errors={errors?.password?.message}
        >
          <Input
            register={register}
            validationRules={{
              required: "This filed is required!",
              minLength: {
                value: 6,
                message: "Your password must be at least 6 characters",
              },
            }}
            type="password"
            name="password"
            id="password"
            className="block pt-5 px-2 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
            placeholder=" "
            autoComplete="new-password"
            isPending={isPending}
          />
        </FormRow>

        <FormRow
          className="relative z-0 w-full mb-12 group"
          label="rePassword:"
          errors={errors?.rePassword?.message}
        >
          <Input
            register={register}
            validationRules={{
              required: "This filed is required!",
              minLength: {
                value: 6,
                message: "Your password must be at least 6 characters",
              },
              validate: (value) =>
                value === getValues().password ||
                "Please make sure your passwords match",
            }}
            type="password"
            name="rePassword"
            id="rePassword"
            autoComplete="new-password"
            className="block pt-5 px-2 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
            placeholder=" "
            isPending={isPending}
          />
        </FormRow>

        <FormRow
          className="relative z-0 w-full mb-12 group"
          label="Phone:"
          errors={errors?.phone?.message}
        >
          <Input
            register={register}
            validationRules={{
              required: "This filed is required!",
              pattern: {
                value: /^(\+?2(0|1)[0-9]{10}|01[0-9]{9})$/,

                message: "Please enter a valid Egyptian phone number",
              },
            }}
            type="tel"
            name="phone"
            id="phone"
            className="block pt-5 px-2 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
            placeholder=" "
            isPending={isPending}
          />
        </FormRow>

        <div className="flex items-center justify-center gap-5 sm:gap-0 sm:justify-between  flex-wrap">
          <Button
            isPending={isPending}
            type="submit"
            className="flex items-center justify-center text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 text-2xl"
          >
            {isPending ? <Spinner /> : "Submit"}
          </Button>
          <span>
            Already have an account?{" "}
            <Link
              className="inline-block border-b-2 border-dashed transition duration-150 hover:text-[--color-green-800]"
              to="/login"
            >
              Login
            </Link>
          </span>
        </div>
      </Form>
    </div>
  );
};

export default SignupForm;
