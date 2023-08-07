"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import {
    Register,
    RegisterSchema,
    OTP,
    OTPSchema,
} from "../../models/Register";

import CrossIcon from "@/public/icons/CrossIcon";
import BackgroundImage from "@/public/images/BG1.jpg";
import Input from "../Main/Input";

const index = () => {
    const router = useRouter();

    const [loading, setLoading] = useState<boolean>(false);
    const [stage, setStage] = useState<string>("register");

    const {
        reset: resetSignupForm,
        register: registerForSignup,
        handleSubmit: handleSubmitForSignup,
        formState: { errors: errorsForSignup },
    } = useForm<Register>({ resolver: zodResolver(RegisterSchema) });
    const {
        reset: resetOTPForm,
        register: registerForOTP,
        handleSubmit: handleSubmitForOTP,
        formState: { errors: errorsForOTP },
    } = useForm<OTP>({ resolver: zodResolver(OTPSchema) });

    const onSubmitForSignup: SubmitHandler<Register> = (data) => {
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
            resetSignupForm();
            setStage("verify");
            setLoading(false);
        }, 2000);
    };

    const onSubmitForOTP: SubmitHandler<OTP> = (data) => {
        const { otp } = JSON.parse(localStorage.getItem("userData") || "{}");
        if (String(otp) === data.otp) {
            localStorage.removeItem("userData");
            resetOTPForm();
            router.push("/dashboard");
        }
    };

    const [passwordStrength, setPasswordStrength] = useState<number>(0);

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const password = e.target.value;
        setPasswordStrength(getPasswordStrength(password));
    };

    const getPasswordStrength = (password: string) => {
        let strength = 0;
        if (password.length >= 8) {
            strength++;
        } else return strength;
        if (/(?=.*\d)(?=.*[a-zA-Z])/.test(password)) {
            strength++;
        }
        if (/(?=.*\W)/.test(password)) {
            strength++;
        }
        if (password.length >= 12) {
            strength++;
        }
        return strength;
    };

    useEffect(() => {
        localStorage.removeItem("userData");
    }, []);

    if (stage === "register")
        return (
            <div
                className="flex min-h-screen items-center justify-center"
                style={{
                    backgroundImage: `url(${BackgroundImage.src})`,
                    backgroundSize: "96rem",
                    backgroundPosition: "top",
                }}
            >
                <form
                    onSubmit={handleSubmitForSignup(onSubmitForSignup)}
                    className="relative md:min-w-[32rem] bg-white px-16 md:px-20 mx-10 my-10 py-8 flex flex-col gap-3"
                >
                    <button className="absolute -right-4 -top-4 bg-[#F3F4F6] rounded-full px-2 py-2 w-10 h-10">
                        <CrossIcon />
                    </button>
                    <p className="text-center text-4xl font-bold">Welcome.</p>
                    <p className="text-center text-gray-400">
                        Create an account
                    </p>

                    <div className="flex flex-col gap-4 mt-6 w-full">
                        <Input
                            register={{ ...registerForSignup("email") }}
                            error={errorsForSignup.email?.message}
                            field="email"
                            type="email"
                            label="Email"
                            placeholder="Enter your email"
                        />

                        <Input
                            register={{ ...registerForSignup("contact") }}
                            error={errorsForSignup.contact?.message}
                            field="contact"
                            type="text"
                            label="Phone number"
                            placeholder="+91XXXXXXXXXX"
                        />

                        <Input
                            register={{
                                ...registerForSignup("password", {
                                    onChange: (e) => {
                                        handlePasswordChange(e);
                                    },
                                }),
                            }}
                            error={errorsForSignup.password?.message}
                            field="password"
                            type="password"
                            label="Password"
                            placeholder="Enter at least 8+ characters"
                            passwordStrength={passwordStrength}
                        />

                        <Input
                            register={{ ...registerForSignup("confirm") }}
                            error={errorsForSignup.confirm?.message}
                            field="confirm"
                            type="password"
                            label="Re enter Password"
                            placeholder="Enter at least 8+ characters"
                        />
                    </div>

                    <Input
                        register={{ ...registerForSignup("terms") }}
                        error={errorsForSignup.terms?.message}
                        field="terms"
                        type="checkbox"
                    />

                    <button
                        type="submit"
                        className="bg-blue-500 hover:opacity-90 px-4 py-2 rounded-[0.25rem] text-white"
                    >
                        {loading ? "Signing up..." : "Sign up"}
                    </button>

                    <div className="flex justify-center mt-2">
                        <p className="text-gray-400 text-sm">
                            Already have an account?{" "}
                            <Link href="/login" className="text-blue-500">
                                Sign in
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        );
    else if (stage === "verify")
        return (
            <div
                className="flex w-screen h-screen items-center justify-center"
                style={{
                    backgroundImage: `url(${BackgroundImage.src})`,
                    backgroundSize: "96rem",
                    backgroundPosition: "top",
                }}
            >
                <form
                    onSubmit={handleSubmitForOTP(onSubmitForOTP)}
                    className="relative min-w-[32rem] bg-white px-20 py-8 flex flex-col gap-3"
                >
                    <button className="absolute -right-4 -top-4 bg-[#F3F4F6] rounded-full px-2 py-2 w-10 h-10">
                        <CrossIcon />
                    </button>
                    <p className="text-center text-4xl font-bold">Welcome.</p>
                    <p className="text-center text-gray-400">
                        Create an account
                    </p>

                    <div className="flex flex-col gap-4 mt-6">
                        <Input
                            register={{ ...registerForOTP("otp") }}
                            error={errorsForOTP.otp?.message}
                            field="otp"
                            type="text"
                            label="Enter OTP"
                            placeholder="Provide 6 digit OTP"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 hover:opacity-90 px-4 py-2 rounded-[0.25rem] text-white"
                    >
                        Proceed
                    </button>

                    <div className="flex justify-center mt-2">
                        <p className="text-gray-400 text-sm">
                            Entered wrong email?
                            <button
                                onClick={() => {
                                    localStorage.removeItem("userData");
                                    resetOTPForm();
                                    setStage("register");
                                }}
                                type="button"
                                className="text-blue-500"
                            >
                                Go back
                            </button>
                        </p>
                    </div>
                </form>
            </div>
        );
};

export default index;
