import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdOutlineLogin } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthProvider";
import { RefreshContext } from "../../contexts/RefreshProvider";
import sendPayLoad from "../../Utilities/AuthToken";

const SignIn = () => {
  const { userLogin, socialSignIn, passwordReset, setLoading } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { refresh, setRefresh } = useContext(RefreshContext);

  const from = location.state?.from?.pathname || "/";

  // ** Google

  const googleProvider = new GoogleAuthProvider();
  const googleHandler = () => {
    const loginGoogle = async () => {
      try {
        const result = await socialSignIn(googleProvider);
        toast.success("User logged in");
        // ** token
        const currentUser = {
          email: result?.user?.email,
        };

        sendPayLoad(currentUser);
        setRefresh(!refresh);
        navigate(from, { replace: true });
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    loginGoogle();
  };

  // ** gitHub

  const githubProvider = new GithubAuthProvider();

  const githubHandler = () => {
    const loginGithub = async () => {
      try {
        const result = await socialSignIn(githubProvider);
        toast.success("User logged in");
        // ** token
        const currentUser = {
          email: result?.user?.email,
        };

        console.log(currentUser);

        sendPayLoad(currentUser);
        navigate(from, { replace: true });
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    loginGithub();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password, name);

    // ** create user

    const emailPassLogIn = async () => {
      try {
        const result = await userLogin(email, password);
        console.log(result.user);
        // ** token
        const currentUser = {
          email: result?.user?.email,
        };

        // ** Sending the payload to generate JWT
        sendPayLoad(currentUser);
        toast.success("User logged in");
        navigate(from, { replace: true });
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    emailPassLogIn();
  };

  // ** handleEmail

  const handleEmail = (event) => {
    const emailOutput = event.target.value;

    if (/^\S+@\S+\.\S+$/.test(emailOutput)) {
      setEmail(emailOutput);
    } else {
      setEmail("");
    }
  };

  // ** passwordResetHandler

  const passwordResetHandler = (event) => {
    if (email) {
      const resetPass = async () => {
        try {
          await passwordReset(email);
          toast.success(`Password reset email has been sent to ${email}`);
        } catch (error) {
          toast.error(error.message);
        }
      };
      resetPass();
    } else {
      toast.error("Please provide a valid email in the email field");
    }
  };

  const passwordShowHandler = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center  items-center pt-40">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-700  text-gray-300">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign in</h1>
          <p className="text-sm text-gray-400">
            Sign in to access your account
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                onBlur={handleEmail}
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex  items-center">
                {showPassword ? (
                  <input
                    type="text"
                    name="password"
                    id="password"
                    placeholder="*******"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:border-gray-900 text-gray-900"
                  />
                ) : (
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="*******"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:border-gray-900 text-gray-900"
                  />
                )}
                {showPassword ? (
                  <FaEyeSlash
                    className="text-slate-900"
                    onClick={passwordShowHandler}
                    style={{ marginLeft: "-30px" }}
                  />
                ) : (
                  <FaEye
                    className="text-slate-900"
                    onClick={passwordShowHandler}
                    style={{ marginLeft: "-30px" }}
                  />
                )}
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full px-8 py-3 flex justify-center items-center font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100"
            >
              <MdOutlineLogin className="mr-2" />
              Sign in
            </button>
          </div>
        </form>
        <div className="space-y-1">
          <button
            onClick={passwordResetHandler}
            className="text-xs hover:underline text-gray-400"
          >
            Forgot password?
          </button>
        </div>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={googleHandler}
            aria-label="Log in with Google"
            className="p-3 rounded-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>

          <button
            onClick={githubHandler}
            aria-label="Log in with GitHub"
            className="p-3 rounded-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
            </svg>
          </button>
        </div>
        <p className="px-6 text-sm text-center text-gray-400">
          Don't have an account yet?{" "}
          <Link to="/signup" className="hover:underline text-gray-50">
            Sign up
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignIn;
