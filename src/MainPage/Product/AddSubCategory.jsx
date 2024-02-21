/* eslint-disable no-unused-vars */
/* eslint-disable no-dupe-keys */
import React, { useEffect, useState } from "react";
import Select2 from "react-select2-wrapper";
import "react-select2-wrapper/css/select2.css";
import { adminAxiosInstance } from "../../api/axios";

const options = [
    { id: 1, text: "Choose Category", text: "Choose Category" },
    { id: 2, text: "Category", text: "Category" },
];

const AddSubCategory = () => {
  const [parent_category,setParent_category]=useState("")
  const [category_name,setCategory_name]=useState("")
  const [category_code,setCategory_code]=useState("")
  const [description,setDescription]=useState("")
  const [category,setCategory]=useState([])

  async function getCategory() {
    try {
        const res = await adminAxiosInstance.get('/product/getCategory');
        if(res){
          const formattedCategories = res.data.data.map(cat => ({
            id: cat.category_name,
            text: cat.category_name,
            text:cat.category_name
      // Adjust according to your actual API response
        }));
        setCategory(formattedCategories);
        console.log(res.data.data)
        }
        
    } catch (err) {
        console.log(err);
    }
}
  useEffect(()=>{
    getCategory()
  },[])

  const onSubmit = async () => {

    let subcategoryObj={
      parent_category,category_name,category_code,
        // product_Image,
        description
    }
    try {
        const res = await adminAxiosInstance.post('/product/addsubcategory', subcategoryObj);
        console.log(res)
    } catch (err) {
        console.log(err);
        // setError(err.response.data); 
    }
};
  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>Product Add sub Category</h4>
            <h6>Create new product Category</h6>
          </div>
        </div>
        {/* /add */}
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="form-group">
                  <label>Parent Category</label>
                  <Select2
                    className="select"
                    data={category}
                    value={parent_category}
                    onSelect={(e) => setParent_category(e.params.data.id)} 
                    options={{
                      placeholder: "Select a Category",
                    }}
                  />
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="form-group">
                  <label>Category Name</label>
                  <input type="text" value={category_name} onChange={(e)=>setCategory_name(e.target.value)}/>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="form-group">
                  <label>Category Code</label>
                  <input type="text"value={category_code} onChange={(e)=>setCategory_code(e.target.value)} />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Description</label>
                  <textarea className="form-control" defaultValue={""} value={description} onChange={(e)=>setDescription(e.target.value)}/>
                </div>
              </div>
              <div className="col-lg-12">
                <button className="btn btn-submit me-2" onClick={onSubmit}>Submit</button>
                <button className="btn btn-cancel">Cancel</button>
              </div>
            </div>
          </div>
        </div>
        {/* /add */}
      </div>
    </div>
  );
};

export default AddSubCategory;
