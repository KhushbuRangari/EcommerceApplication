import React, { useState, useEffect } from 'react'
import Layout from '../../layouts/Layout';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAuth } from '../../../context/auth';
import CategoryForm from '../../Form/CategoryForm';

import AdminMenu from '../../layouts/AdminMenu'




function CreateCategory() {
    const [categories, setCategories] = useState([]);

    const [name,setName]=useState({
        categoryName1: ""
        // categoryDescription1: ""
      });


    const [desc,setdesc]=useState({
  
        categoryDescription1: ""
      });
      const categoryDescription1=desc;
      const categoryName1= name;
    
  
    const handleSubmit = async(e)=>{ 
        e.preventDefault();
        try {
            const {data} =await axios.post(`${process.env.REACT_APP_API}category/add`,{categoryName1,categoryDescription1})
            console.log(data,'add data');
            if(data.success){
                toast("category added ")
            }
            else{
                toast.error(`data.message`)
            }
        } catch (error) {
            console.log(error);
            toast.error("Something Went Wrong With input form ")
        }

    }
    //GET aLL cATEGORY
    const getAllCategory = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API}category/allCategory`)
            // console.log(res);

            if (res.data) { setCategories(res.data.getCatData) }


        } catch (error) {
            console.log(error);
            // toast.error("error in getting category")
        }
    }
    // console.log(categories, 'category data');
    useEffect(() => {

        getAllCategory();
    }, [])


    return (
        <Layout>
            <div className="container-fluid m-3 p-3">
                <div className="row" >
                    <div className="col-md-3">
                        <AdminMenu />
                    </div>
                    <div className="col-md-9">

                        <h1>Manage category</h1>
                        <div className="p-3">
                            <CategoryForm handleSubmit={handleSubmit} name={name} setName={setName} desc={desc} setDesc={setdesc} />
                        </div>
                        <div className='w-75'>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        categories.map((cat) => {
                                            return (
                                                <>
                                                    <tr>
                                                        <td key={cat._id}>{cat.categoryName}</td>
                                                        <td>{cat.categoryDescription}</td>
                                                        <td>   <button type="button" className="btn btn-primary">Edit</button></td>
                                                    </tr>
                                                </>
                                            )
                                        })
                                    }


                                </tbody>
                            </table>


                        </div>
                    </div>


                </div>
            </div>

        </Layout>
    )
}

export default CreateCategory