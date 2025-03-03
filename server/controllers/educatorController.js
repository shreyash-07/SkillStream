import { clerkClient } from '@clerk/express'
import Course from '../models/Course.models.js'
import { v2 as cloudinary } from 'cloudinary'

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

//Add new course
export const addCourse = async (req,res)=> {
    try {
        const { courseData } = req.body
        const imageFile = req.file
        const eduactorId = req.auth.userId

        if(!imageFile){
            return res.json({ success:false, message: 'Thumbnail Not Attached'})
        }

        const parsedCourseData = await JSON.parse(courseData)
        parsedCourseData.educator = eduactorId
        const newCourse = await Course.create(parsedCourseData)
        const imageUpload = await cloudinary.uploader.upload(imageFile.path)
        newCourse.courseThumbnail = imageUpload.secure_url
        await newCourse.save()

        res.json({ success:true, message: 'Course Added'})

    } catch (error) {
        res.json({ success:false, message: error.message })
    }
}

