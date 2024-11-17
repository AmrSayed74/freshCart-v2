// import { useMutation } from "@tanstack/react-query";
// import { useNavigate } from "react-router-dom";
// import { AUTH } from "./request";
// import toast from "react-hot-toast";

// const useAuth = (endpoint, method, successMessage, actionType) => {
//   console.log(
//     `endpoint:${endpoint}, method:${method}, successMessage:${successMessage}, actionType:${actionType}`
//   );
//   const navigate = useNavigate();
//   const { mutate, isPending } = useMutation({
//     mutationFn: (values) => AUTH(fetch, endpoint, method, values),
//     onSuccess: (data) => {
//       console.log(data);
//       if (data.statusMsg === "success") {
//         if (actionType === "  ") return navigate("/login");

//         if (actionType === "login") {
//           console.log("yes");
//           localStorage.setItem("userToken", data.token);
//           navigate("/home");
//         }
//         if (actionType === "verify-code") navigate("/verify-code");
//       }

//       toast.success(data.message ? data.message : successMessage);
//       // toast.success(data.message || successMessage);
//     },
//     onError: (error) => {
//       toast.error(error.message);
//     },
//   });

//   return { mutate, isPending };
// };

// export default useAuth;

// useAuth.js
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { AUTH } from "./request";
import toast from "react-hot-toast";

const useAuth = (endpoint, method, actionType, successMessage) => {
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationFn: (values) => AUTH(fetch, endpoint, method, values),

    onSuccess: (data) => {
      console.log(data);
      console.log(data.message);
      if (data.message || data.status) {
        if (actionType === "signup") {
          navigate("/login");
        } else if (actionType === "login") {
          localStorage.setItem("userToken", data.token);
          navigate("/home");
        } else if (actionType === "forgetPassword") {
          navigate("/verify-code");
        } else if (actionType === "verify-code") {
          navigate("/reset-password");
        }

        toast.success(data.message ? data.message : successMessage);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { mutate, isPending };
};

export default useAuth;

// email:reusable@gmail.com
// password: 123456

// import { useMutation } from "react-query";
// import { useNavigate } from "react-router-dom";
// import { AUTH } from "./request";

// const useAuth = () => {
//   const navigate = useNavigate();

//   const mutation = useMutation(({ method, endpoint, values, token }) =>
//     AUTH(fetch, endpoint, method, values, token)
//   );

//   const handleLogin = async (email, password) => {
//     try {
//       const response = await mutation.mutateAsync({
//         url: "/login",
//         method: "POST",
//         data: { email, password },
//       });

//       if (response.token) {
//         localStorage.setItem("userToken", response.token);
//         navigate("/dashboard");
//       } else {
//         throw new Error("Login failed");
//       }
//     } catch (error) {
//       console.error("Login Error:", error.message);
//     }
//   };

//   return {
//     handleLogin,
//     isLoading: mutation.isLoading,
//     isError: mutation.isError,
//   };
// };
// export default useAuth;
