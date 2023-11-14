const inventoryModel = require('../models/inventory.model');

 
const AllInventory = async (req,res)=>{
    try {
        let allInventory = await inventoryModel.find();
        if (!allInventory) {
            return res.status(401).json({
                message: 'Data is not there',
                productData
            })
        }
        res.status(201).json({
            message: "Found Data",
            productData
        })

    } catch (error) {
        console.log(error,"Inventory All error");
    }
}

const inventoryAdd = async (req,res)=>{
    try {
        const{ product,quantity}= req.body;
        console.log("hello");
        console.log(req.body);
        const addinventoryData = new inventoryModel({
            product:product,
            quantity:quantity,
            // dateAdded:dateAdded
        })
    
        const saveData = await addinventoryData.save();
        if (!saveData) {
            return res.status(404).json({
                message: "Product not updated"
    
            })
        }
        res.status(201).json({
            message: "Saved Data",
            saveData
        })
    } catch (error) {
        console.log(error);
    }

}

 const updateinventory = async (req,res)=>{
    const{id}=req.params;
    const {qty}=req.body;

    console.log(id,qty);
    try {
        const updatedData = await inventoryModel.findByIdAndUpdate({_id:id},{quantity:qty},{
            new:true
        });
        if(!updatedData){
            res.status(404).json({
                message:"Inventory qunatity not updated"
            })
        }

        res.status(200).json({
            message:"Inventory Quantity Updted",
            updatedData
        })

    } catch (error) {
        console.log(error);
        res.status(404).json({
            message:`Something went wrong ${error.message}`
        })
    }
 }

 const deleteinventory = async (req,res)=>{
    const{id}=req.params;
    try {
        const deleteData = await inventoryModel.findById({_id:id})
        if(!deleteData){
            res.status(404).json({
                message:'Not deleted'
            })
        }

        res.status(200).json({
            message:"deleted",
            deleteData
        })
    } catch (error) {

        console.log(error);
        res.status(404).json({
            message:`Something went wrong ${error.message}`
        })
    }


 }
 const getinventoryDetailById = async (req,res)=>{
    const{id}=req.query;
    try {
        
        const getDataById = await inventoryModel.findById({_id:id});
        if(!getDataById){
            res.status(404).json({
                message:"no data found with this id"
            })
        }
        res.status(200).json({
            message:"success",
            getDataById
        })

    } catch (error) {
        console.log(error);
        res.status(404).json({
            message:`Something went wrong ${error.message}`
        })
    }

 }

// ,updateinventory,deleteinventory,getinventoryDetailById
module.exports ={AllInventory,inventoryAdd,updateinventory,deleteinventory,getinventoryDetailById};