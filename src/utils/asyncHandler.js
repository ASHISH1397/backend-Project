// this is the function that act aswrapper wrapper class of the connection that can be use where we needdata base


const asyncHandler=(req, res, next)=>{
    (req,res,next)=>{
        Promise.resolve().catch
        ((err)=>next(err))
    }
}

 
// export default asyncHandler;
export {asyncHandler}




// same function using try catch
// const asyncHandler=()=>{}
//          ||
// const asyncHandler=()=>{())=>{}}
//          or
// const asyncHandler=()=>async()=>{}

// const asyncHandler=(fn)=>async(req,res,next)=>{ // this is higher order function thta one function using another function just like callback function
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success:false,
//             message:err.message
//         })  
//     }
// }