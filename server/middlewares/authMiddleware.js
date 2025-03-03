import { clerkClient } from "@clerk/express";

//Middleware ( Protect Educator Routes )
export const protectEducator = async (req,res,next)=>{
    try {
        const userId = req.auth.userId
        const response = await  clerkClient.users.getUser(userId)

        if(response.publicMetadata.role !== 'educator'){
            return res.json({succes:false ,message: 'Unauthorized Access'})
        }

        next()

    } catch (error) {
        res.json({succes:false ,message: error.message})
    }
}