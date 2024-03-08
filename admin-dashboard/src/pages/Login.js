import React, { useRef, useState } from "react";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/auth.service";
import { withRouter } from "../common/with-router.js";
import Title from "../components/Title/Tilte.js";
import Input from "../components/Input/Input.js";
import Presentation from "../assets/presentation.png";
import Footer from "../Templates/Footer.js";
import Button from "../components/Button/Button.js";
import { LanguageListbox } from "../components/LanguageListbox/LanguageListbox.js";
import Logo from "../components/Logo/Logo.js";
import { useNavigate } from "react-router-dom";
import { EmailIcon, KeyIcon } from "../utils/icons.js";

const Login = (props) => {
  const form = useRef();
  const checkBtn = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const onChangeEmail = (e) => {
    const email = e.target.value;

    if (email) {
      setEmail(email);
      setEmailError("");
    } else {
      setEmail("");
      setEmailError("Email is required");
    }
  };

  const onChangePassword = (e) => {
    const password = e.target.value;

    if (password) {
      setPassword(password);
      setPasswordError("");
    } else {
      setPassword("");
      setPasswordError("Password is required");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    if (!email) {
      setLoading(false);
      setEmailError("Email is required");
      return;
    }

    if (!password) {
      setLoading(false);
      setPasswordError("Password is required");
      return;
    }

    form.current.validateAll();

    if (
      checkBtn.current.context &&
      checkBtn.current.context._errors &&
      checkBtn.current.context._errors.length === 0
    ) {
      AuthService.login(email, password).then(
        () => {
          setEmailError("");
          setPasswordError("");
          navigate("/");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="relative py-12 bg-gray-800 max-h-full h-full items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 xl:max-w-8xl items-center h-full justify-center ">
          <div className="my-10">
            <div className="flex items-center justify-center">
            <Logo big col />

            </div>
          </div>
          <div className="flex flex-wrap flex-col xl:flex-row -mx-4 ">
            <div className="flex-shrink max-w-full px-4 w-full xl:w-2/5">
              <div className="max-w-full w-full px-2 sm:px-12 lg:pr-20 mb-12 lg:mb-0">
                <div className="relative">
                  <div className="p-6 sm:py-8 sm:px-12 rounded-lg bg-white shadow-xl">
                    <div className="flex justify-between">
                      <Title tag="h2">Login</Title>
                      <div className="">
                        <LanguageListbox />
                      </div>
                    </div>
                    <Form
                      className="mt-8 space-y-6"
                      onSubmit={handleLogin}
                      ref={form}
                    >
                      <input type="hidden" name="remember" value="true" />
                      <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                          <Input
                            icon={EmailIcon}
                            label="Email"
                            id="email"
                            name="email"
                            type="text"
                            autoComplete="off"
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            value={email}
                            onChange={onChangeEmail}
                          />
                        </div>
                        {emailError && (
                          <div
                            className="mt-3 text-center text-sm text-red-600"
                            role="alert"
                          >
                            {emailError}
                          </div>
                        )}
                        <div>
                          <Input
                            icon={KeyIcon}
                            label="Password"
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="off"
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            value={password}
                            onChange={onChangePassword}
                          />
                        </div>
                        {passwordError && (
                          <div
                            className="mt-3 text-center text-sm text-red-600"
                            role="alert"
                          >
                            {passwordError}
                          </div>
                        )}
                      </div>

                      {message && (
                        <div className="mt-3 text-center text-sm text-red-600">
                          {message}
                        </div>
                      )}

                      <div>
                        <Button
                          type="login"
                          disabled={loading}
                          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          {loading && (
                            <span className="spinner-border spinner-border-sm"></span>
                          )}
                          Login
                        </Button>
                      </div>
                      <CheckButton style={{ display: "none" }} ref={checkBtn} />
                    </Form>
                    <span className="flex items-center justify-center my-4">
                      Or
                    </span>
                    <div className="flex justify-center">
                      <Button>Zaloguj kontem Microsoft Office 365</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-shrink max-w-full px-4 w-full xl:w-3/5">
              <div className="text-center mt-6 xl:mt-0">
                <img className="h-full w-full" src={Presentation} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default withRouter(Login);
