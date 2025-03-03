import { clerkClient } from '@clerk/express'

//update role to educator
export const updateRoleToEducator = async (req,res) =>{
    try {

        const userId = req.auth?.userId;  

        if (!userId) {
            return res.status(400).json({ success: false, message: "User ID is missing. Authentication required." });
        }

        await clerkClient.users.updateUserMetadata(userId, {
            publicMetadata:{
                role: 'educator',
            }
        })

        res.json({success: true, message: 'You can publish a course now'})
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}