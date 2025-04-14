import userModel from "../models/userModel.js"


//add products to user cart
const addToCart = async (req,res) =>{
    try{

        const {userId, itemId, size} = req.body

        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;

        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] += 1
            }else{
                cartData[itemId][size] =1
            }
        }else{
            cartData[itemId] = {}
            cartData[itemId][size] = 1
        }

        await userModel.findByIdAndUpdate(userId, {cartData})

        res.json({success : true, message : "Added To Cart" })

    } catch(error){
        console.log(error)
        res.json({success : false , message: error.message})
    }
}



//add products to user cart
const updateCart = async (req,res) =>{

    try {

        const {userId, itemId, size, quantity} = req.body

        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;
        
        cartData[itemId][size] = quantity

        if(cartData[itemId][size] === 0){
            delete cartData[itemId][size]
        }

        if(Object.keys(cartData[itemId]).length === 0 && cartData[itemId].constructor === Object){
            delete cartData[itemId]
        }

        await userModel.findByIdAndUpdate(userId, {cartData})
        res.json({success:true, message:"Cart Updated"})

    } catch (error) {
        console.log(error)
        res.json({success : false , message: error.message})
    }

} 



//add products to user cart
const getUserCart = async (req,res) =>{
    try{

        const {userId} = req.body

        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;

        res.json({success:true, cartData})

    }catch(error){
        console.log(error)
        res.json({success : false , message: error.message})  
    }
}




export {addToCart,getUserCart,updateCart}