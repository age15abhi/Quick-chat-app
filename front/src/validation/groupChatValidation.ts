import {z} from "zod"

export const createChatSchema = z.object({
    title:z.string().min(4 , {message:"Chat title must be 4 characters long."}).max(191 , {message:"Chat title must be less than 191 characters."}),
    passcode: z.string().min(4 , {message: "Passcode must be 4 character long."}).max(25 , {message:"Passcode must be less than 25 characters."})
}).required()

// after creating the schema we must define the type of the schema
export type createChatSchemaType = z.infer<typeof createChatSchema>;