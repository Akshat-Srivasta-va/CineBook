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
    // Debug logs - KEEP THESE for now
    console.log("=== protectAdmin Debug ===");
    console.log("req.auth object:", req.auth);
    

    console.log("Authorization header:", req.headers.authorization);

 const { userId } = await req.auth(); // note the parentheses

    
    console.log("userId:", userId);
    
    if (!userId) {
      return res.status(401).json({ 
        success: false, 
        message: "not authorized - no user ID" 
      });
    }

    const user = await clerkClient.users.getUser(userId);
    console.log("User metadata:", user.privateMetadata);
    console.log("User role:", user.privateMetadata?.role);

    if (user.privateMetadata?.role !== 'admin') {
      return res.status(403).json({ 
        success: false, 
        message: "not authorized - not admin role" 
      });
    }

    next(); // user is admin → continue
  } catch (error) {
    console.error("protectAdmin error:", error);
    return res.status(500).json({ 
      success: false, 
      message: "authentication error",
      error: error.message 
    });
  }
};
