// import { clerkClient } from "@clerk/express";

// export const protectAdmin = async (req, res, next)=>{
//     try {
//         const { userId } = req.auth();

//         const user = await clerkClient.users.getUser(userId)

//         if(user.privateMetadata.role !== 'admin') {
//            return res.json({success: false, message: "not authorized"}) 
//         }
//         next();
//     } catch (error) {
//         return res.json({ success: false, message: "not authorized" }); 
// }
// }



import { clerkClient } from "@clerk/express";

export const protectAdmin = async (req, res, next) => {
  try {
    const { userId } = req.auth(); // get the signed-in user's ID

    if (!userId) {
      return res.json({ success: false, message: "not authorized" });
    }

    const user = await clerkClient.users.getUser(userId);

    if (user.privateMetadata.role !== 'admin') {
      return res.json({ success: false, message: "not authorized" });
    }

    next(); // user is admin → continue
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "not authorized" });
  }
};
