import {z} from "zod";

export const RegisterSchema = z.object({
    email: z.string().email(),
    contact: z.string().length(13).regex(/^\+91\d{10}$/, {
        message: "Contact number must be in the format +91XXXXXXXXXX",
    }),
    terms: z.boolean().refine((data) => data === true, {
        message: "You must agree to the terms and conditions",
    }),
    password: z.string().min(8, {message: "Password must be at least 8 characters long"}),
    confirm: z.string().min(8, {message: "Password must be at least 8 characters long"}),
}).refine((data) => data.password === data.confirm, {
    message: "Passwords do not match",
    path: ["confirm"],
}); 

export const OTPSchema = z.object({
    otp: z.string().length(6).regex(/^\d+$/, {
        message: "OTP must be a string of 6 digits",
    }),
});

export type Register = z.infer<typeof RegisterSchema>;
export type OTP = z.infer<typeof OTPSchema>;
