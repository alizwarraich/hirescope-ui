import React, { useState } from "react";
import TextField from "@mui/material/TextField";

import Eye from "@/public/icons/Eye";
import ClosedEye from "@/public/icons/ClosedEye";

interface InputProps {
    register: any;
    error: string | undefined;
    field:
        | "email"
        | "password"
        | "contact"
        | "terms"
        | "confirm"
        | "otp"
        | "evn";
    type: string;
    label?: string;
    placeholder?: string;
    passwordStrength?: number;
}

const Input: React.FC<InputProps> = ({
    register,
    error,
    field,
    type,
    label,
    placeholder,
    passwordStrength = undefined,
}) => {
    const [visible, setVisible] = useState<boolean>(false);

    if (label)
        return (
            <>
                <div className={`relative flex flex-col gap-1`}>
                    <TextField
                        error={error ? true : false}
                        id={field}
                        label={label}
                        name={field}
                        {...register}
                        placeholder={placeholder}
                        type={
                            type === "password"
                                ? visible
                                    ? "text"
                                    : "password"
                                : type
                        }
                        helperText={error}
                        variant="filled"
                    />
                    {type === "password" && (
                        <button
                            type="button"
                            className={`absolute text-gray-700 right-3 ${
                                error ? "bottom-7" : "bottom-1"
                            } rounded-full px-2 py-2 w-10 h-10`}
                            onClick={() => setVisible(!visible)}
                        >
                            {!visible ? <ClosedEye /> : <Eye />}
                        </button>
                    )}
                </div>
                {field === "password" && passwordStrength !== undefined && (
                    <p className="-mt-2 ml-3 text-sm text-gray-600 font-medium">
                        Password Strength:{" "}
                        <span
                            className={
                                passwordStrength > 3
                                    ? "text-green-600"
                                    : passwordStrength > 2
                                    ? "text-green-300"
                                    : passwordStrength > 1
                                    ? "text-yellow-600"
                                    : passwordStrength > 0
                                    ? "text-yellow-400"
                                    : "text-red-500"
                            }
                        >
                            {passwordStrength > 3
                                ? "Strong"
                                : passwordStrength > 2
                                ? "Good"
                                : passwordStrength > 1
                                ? "Fair"
                                : passwordStrength > 0
                                ? "Weak"
                                : "Not allowed"}
                        </span>
                    </p>
                )}
            </>
        );
    else
        return (
            <>
                <div className="flex items-center gap-2 mt-6">
                    <input {...register} type={type} name={field} id={field} />
                    <label htmlFor={field} className="text-gray-400 text-sm">
                        I agree with{" "}
                        <span className="text-blue-500 cursor-pointer">
                            Terms & Conditions
                        </span>
                    </label>
                </div>
                {error && (
                    <p className="text-sm text-red-500 ml-3 -mt-3">{error}</p>
                )}
            </>
        );
};

export default Input;
