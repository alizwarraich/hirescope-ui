"use client";

import { useEffect, useState, useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import { OTP, OTPSchema } from "../../models/Register";
import { Login, LoginSchema } from "../../models/Login";

import Link from "next/link";
import Input from "../Main/Input";
import { useRouter } from "next/navigation";

const index = () => {
    const router = useRouter();

    const [stage, setStage] = useState<string>("login");
    const [loading, setLoading] = useState<boolean>(false);
    const [visible, setVisible] = useState<boolean>(false);

    const {
        reset: resetLoginForm,
        register: registerForLogin,
        handleSubmit: handleSubmitForLogin,
        formState: { errors: errorsForLogin },
    } = useForm<Login>({ resolver: zodResolver(LoginSchema) });
    const {
        reset: resetOTPForm,
        register: registerForOTP,
        handleSubmit: handleSubmitForOTP,
        formState: { errors: errorsForOTP },
    } = useForm<OTP>({ resolver: zodResolver(OTPSchema) });

    const onSubmitForLogin: SubmitHandler<Login> = async (data) => {
        const { password, ...fields } = data;

        localStorage.setItem(
            "userData",
            JSON.stringify({
                ...fields,
                otp: Math.floor(100000 + Math.random() * 900000),
            })
        );
        setLoading(true);
        setTimeout(() => {
            resetLoginForm();
            setStage("verify");
            setLoading(false);
        }, 2000);
    };

    const onSubmitForOTP: SubmitHandler<OTP> = (data) => {
        const { otp } = JSON.parse(localStorage.getItem("userData") || "{}");
        if (String(otp) === data.otp) {
            resetOTPForm();
            router.push("/dashboard");
        }
    };

    useEffect(() => {
        localStorage.removeItem("userData");
    }, []);
    return (
        <div className="mt-10 lg:mt-20 px-10 sm:px-32 xl:px-48 grid lg:grid-cols-2 gap-10 lg:gap-20 xl:gap-28">
            <div className="fixed -bottom-[78rem] -left-[18rem] w-[96rem] h-[96rem] -z-10 rounded-full bg-gray-50"></div>

            <div className="flex flex-col gap-6 md:mt-10">
                <p className="text-center text-gray-400 md:text-3xl lg:text-7xl">
                    Great to have you back!
                </p>
                <p className="hidden lg:block text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deleniti ipsum saepe, maiores magnam dolores nemo. Itaque
                    molestiae cumque id eos?
                </p>
            </div>

            {stage === "verify" ? (
                <form
                    onSubmit={handleSubmitForOTP(onSubmitForOTP)}
                    className="border-2 border-blue-600 bg-white rounded-md px-12 pt-12 pb-12 md:pb-24"
                >
                    <p className="text-gray-800 text-center text-4xl font-semibold">
                        Verify OTP
                    </p>

                    <div className="mt-10 flex flex-col gap-6">
                        <Input
                            label="OTP"
                            type="text"
                            field="otp"
                            register={{ ...registerForOTP("otp") }}
                            error={errorsForOTP?.otp?.message}
                            placeholder="123456"
                        />

                        <button
                            type="submit"
                            className="bg-blue-600 hover:opacity-90 px-4 py-[0.375rem] rounded-[0.25rem] text-white w-full"
                        >
                            Verify OTP
                        </button>
                    </div>
                </form>
            ) : (
                <form
                    onSubmit={handleSubmitForLogin(onSubmitForLogin)}
                    className="border-2 border-blue-600 bg-white rounded-md px-12 pt-12 pb-12 md:pb-24"
                >
                    <p className="text-gray-800 text-center text-4xl font-semibold">
                        Sign in
                    </p>

                    <div className="mt-10 flex flex-col gap-6">
                        <Input
                            label="EVN"
                            type="text"
                            field="evn"
                            placeholder="123456"
                            register={{ ...registerForLogin("evn") }}
                            error={errorsForLogin?.evn?.message}
                        />

                        <Input
                            label="Password"
                            type={visible ? "text" : "password"}
                            field="password"
                            placeholder="Enter at least 8+ characters"
                            register={{ ...registerForLogin("password") }}
                            error={errorsForLogin?.password?.message}
                        />

                        <div className="flex justify-between">
                            <div className="flex items-center gap-1">
                                <input
                                    {...registerForLogin}
                                    type="checkbox"
                                    name="remember"
                                    id="remember"
                                />
                                <label
                                    htmlFor="remember"
                                    className="text-gray-400 text-sm"
                                >
                                    Remember me
                                </label>
                            </div>
                            <Link
                                href="reset-password"
                                className="text-blue-600 text-sm cursor-pointer"
                            >
                                Forgot password?
                            </Link>
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-600 hover:opacity-90 px-4 py-[0.375rem] rounded-[0.25rem] text-white w-full"
                        >
                            {loading ? "Signing in..." : "Sign in"}
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default index;
