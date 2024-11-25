import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../reusable/useAuth";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Logo from "../../ui/Logo";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";

const VerifyCodeForm = () => {
  const { handleSubmit, register, formState } = useForm();
  const { errors } = formState;
  const { mutate: verifyCode, isPending } = useAuth(
    "verifyResetCode",
    "POST",
    "verify-code",
    "Valid verification Code"
  );

  function onSubmit(data) {
    verifyCode({ resetCode: data.reset });
  }

  return (
    <div className="mt-48 p-4">
      <div className="flex flex-col items-center justify-center text-center">
        <Logo />
        <h1 className="text-3xl  font-bold my-10 ">Reset your password</h1>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)} className="max-w-3xl mx-auto">
        <FormRow
          label="Enter your verification code:"
          errors={errors?.reset?.message}
          className="relative z-0 w-full my-10 group"
        >
          <Input
            register={register}
            validationRules={{
              required: "*This filed is required",
              pattern: {
                value: /^[0-9]{5,6}$/,
                message: "*Please provide a valid verification code",
              },
            }}
            type="text"
            name="reset"
            id="reset"
            className="block pt-5 px-2 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
            placeholder=" "
            autoComplete="reset"
            isPending={false}
          />
        </FormRow>
        <div className="flex items-center justify-center gap-5 sm:gap-0 sm:justify-between flex-wrap">
          <Button
            type="submit"
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xl w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            {isPending ? <Spinner /> : "Verify"}
          </Button>
          <div>
            <Link
              className="inline-block border-b-2 border-dashed transition duration-150 hover:text-[--color-green-800]"
              to="/login"
            >
              Login
            </Link>
            <span className="mx-4">OR</span>
            <Link
              className="inline-block border-b-2 border-dashed transition duration-150 hover:text-[--color-green-800]"
              to="/signup"
            >
              Register
            </Link>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default VerifyCodeForm;
