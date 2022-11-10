import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdAppRegistration, MdClose } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthProvider";
import sendPayLoad from "../../Utilities/AuthToken";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  // ** AuthContext
  const { createUser, socialSignIn, profileUpdater, setLoading } =
    useContext(AuthContext);
  // ** event handlers
  const emailHandler = (event) => {
    const emailOutput = event.target.value;
    if (/^\S+@\S+\.\S+$/.test(emailOutput)) {
      setEmail(emailOutput);
      setError("");
    } else {
      setError("Please provide a valid email");
    }
  };

  const handlePassword = (event) => {
    const passwordOutput = event.target.value;

    if (!/(?=.*?[A-Z])/.test(passwordOutput)) {
      setPasswordError("At least one upper case");
    } else if (!/(?=.*?[a-z])/.test(passwordOutput)) {
      setPasswordError("At least one lower case English letter");
    } else if (!/(?=.*?[0-9])/.test(passwordOutput)) {
      setPasswordError("At least one digit");
    } else if (!/(?=.*?[#?!@$%^&*-])/.test(passwordOutput)) {
      setPasswordError("At least one special character");
    } else if (passwordOutput.length < 6) {
      setPasswordError("At least six characters");
    } else {
      setPasswordError("");
      setPassword(passwordOutput);
    }
  };

  // ** Overall Submit handler
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const confirm = form.confirm.value;
    const firstName = form.firstname.value;
    const lastName = form.lastname.value;
    const photoURL = form.photoURL.value;

    const profileInfo = {
      displayName: `${firstName} ${lastName}`,
      photoURL,
    };

    if (!(password === confirm)) {
      toast.error(`Password didn't match or wrong password`);
      return;
    }

    // ** Email and password SignUp

    // ** create user

    const emailPassUser = async () => {
      try {
        const result = await createUser(email, password);
        console.log(result.user);
        profileUpdater(profileInfo)
          .then(() => {
            console.log("profile updated");
            setLoading(false);
          })
          .catch((error) => toast.error(error.message));
        // ** token
        const currentUser = {
          email: result?.user?.email,
        };

        console.log(currentUser);

        sendPayLoad(currentUser);
        navigate(from, { replace: true });
        form.reset();
        toast.success("User logged in", {
          position: "top-center",
          autoClose: 500,
        });
      } catch (error) {
        toast.error(error.message, {
          position: "top-right",
          autoClose: 500,
        });
      } finally {
        setLoading(false);
      }
    };
    emailPassUser();
  };
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

        console.log(currentUser);

        sendPayLoad(currentUser);
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

  const passwordShowHandler = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center  p-5">
      <div className="flex flex-col max-w-lg p-6 rounded-md sm:p-10 bg-gray-700 text-gray-200">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
          <p className="text-sm text-gray-400">Create a new account</p>
        </div>
        <form
          onSubmit={handleSubmit}
          noValidate=""
          action=""
          className="space-y-5 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="text" className="block mb-2 text-sm">
                First Name
              </label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="Enter Your First Name Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="text" className="block mb-2 text-sm">
                Last Name
              </label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Enter Your Last Name Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="text" className="block mb-2 text-sm">
                Photo Url*
              </label>
              <input
                required
                type="text"
                name="photoURL"
                id="photoURL"
                placeholder="Provide your photo url"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
                <span>*</span>
              </label>
              <input
                required
                onChange={emailHandler}
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
              {error && (
                <small className="flex items-center text-red-600">
                  <MdClose />
                  {error}
                </small>
              )}
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                  <span>*</span>
                </label>
              </div>
              <div className="flex  items-center">
                {showPassword ? (
                  <input
                    onChange={handlePassword}
                    type="text"
                    name="password"
                    id="password"
                    placeholder="*******"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:border-gray-900 text-gray-900"
                  />
                ) : (
                  <input
                    onChange={handlePassword}
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
              {passwordError && (
                <small className="flex items-center text-red-600">
                  <MdClose />
                  {passwordError}
                </small>
              )}
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Confirm Password
                  <span>*</span>
                </label>
              </div>
              <input
                type="password"
                name="confirm"
                id="confirm"
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:border-gray-900 text-gray-900"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 flex justify-center items-center py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-500 hover:text-white text-gray-100"
              >
                <MdAppRegistration className="mr-2" />
                Sign Up
              </button>
            </div>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Signup with social accounts
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
          Already have an account yet?{" "}
          <Link to="/signin" className="hover:underline text-gray-100">
            Sign In
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignUp;
