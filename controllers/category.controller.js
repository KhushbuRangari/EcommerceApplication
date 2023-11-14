const categoryAddModel = require('../models/categoryAdd.model');

const categoryAdd =async(req, res)=> {

    try {

        const {categoryName1,categoryDescription1} = req.body;

        // console.log(req.body);
 
        const categoryAdd = new categoryAddModel({
            categoryName:categoryName1,
            categoryDescription:categoryDescription1
        })

        const sendCategoryData = await categoryAdd.save();

        if(!sendCategoryData){
            res.status(404).json({
                message:"Category Not added"
            }) 
        }
        res.status(201).json({
            success:true,
            message: "Data added successfully",
            sendCategoryData
        })

    } catch (error) {

        console.log(error, "Category Data not Added");
        res.status(404).json({
            message:`Something went wrong ${error.message}`
        })
    }

}

const getcategoryData = async (req,res)=>{
    try {
        
        const getCatData = await categoryAddModel.find();

        console.log(getCatData);
        if(!getCatData){
            res.status(404).json({
                message:"Categories not found"
            })
        }
        res.status(200).json({
            message:"success",
            getCatData
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:`Something went wrong ${error.message}`
        })
    }
}


const updateCategory = async (req,res)=>{
    const{id}=req.params;
    const {categoryName1}=req.body;

    console.log(id,categoryName1);
    try {
        const updatedData = await categoryAddModel.findByIdAndUpdate({_id:id},{categoryName:categoryName1},{
            new:true
        });
        if(!updatedData){
            res.status(404).json({
                message:"Category Name not updated"
            })
        }

        res.status(200).json({
            message:"Category Name Updted",
            updatedData
        })

    } catch (error) {
        console.log(error);
        res.status(404).json({
            message:`Something went wrong ${error.message}`
        })
    }
}

const deleteCategory = async(req,res)=>{
    const{id}=req.params;
    try {
        const deleteData = await categoryAddModel.findById({_id:id})
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

const getcategoryDataById = async (req,res)=>{
    const{id}=req.query;
    try {
        
        const getCatDataById = await categoryAddModel.findById({_id:id});
        if(!getCatDataById){
            res.status(404).json({
                message:"no data found with this id"
            })
        }
        res.status(200).json({
            message:"success",
            getCatDataById
        })

    } catch (error) {
        console.log(error);
        res.status(404).json({
            message:`Something went wrong ${error.message}`
        })
    }
}


module.exports ={categoryAdd,getcategoryData,updateCategory,deleteCategory,getcategoryDataById};