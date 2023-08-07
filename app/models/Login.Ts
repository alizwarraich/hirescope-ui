import {z} from "zod";

export const LoginSchema = z.object({
    evn: z.string().length(6).regex(/^\d+$/, {
        message: "EVN must contain exactly 6 digits",
    }),
    password: z.string().min(8, {message: "Password must be at least 8 characters long"}),
});

export type Login = z.infer<typeof LoginSchema>;
