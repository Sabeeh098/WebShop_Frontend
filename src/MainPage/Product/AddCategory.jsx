import React, {  useState } from 'react'
import { Upload } from '../../EntryFile/imagePath';
import { adminAxiosInstance } from '../../api/axios';

const AddCategory = () => {
    const [category_name,setCategory_name]=useState("");
    const [category_code,setCategory_code]=useState("")
    const [description,setDescription]=useState("")

    // const [error, setError] = useState('');

    const onSubmit = async () => {

        let categoryObj={
            category_name,
            category_code,
            description
        }
        try {
            const res = await adminAxiosInstance.post('/product/addcategory', categoryObj);
            console.log(res)
        } catch (err) {
            console.log(err);
            // setError(err.response.data); 
        }
    };

    return (
        <>
            <div className="page-wrapper">
                <div className="content">
                    <div className="page-header">
                        <div className="page-title">
                            <h4>Product Add Category</h4>
                            <h6>Create new product Category</h6>
                        </div>
                    </div>
                    {/* /add */}
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label>Category Name</label>
                                        <input type="text" value={category_name} onChange={(e)=>setCategory_name(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label>Category Code</label>
                                        <input type="text"  value={category_code} onChange={(e)=>setCategory_code(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Description</label>
                                        <textarea className="form-control" defaultValue={""}  value={description} onChange={(e)=>setDescription(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label> Product Image</label>
                                        <div className="image-upload">
                                            <input type="file" />
                                            <div className="image-uploads">
                                                <img src={Upload} alt="img" />
                                                <h4>Drag and drop a file to upload</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <button className="btn btn-submit me-2" onClick={onSubmit}>
                                        Submit
                                    </button>
                                    <button  className="btn btn-cancel">
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /add */}
                </div>
            </div>

        </>
    )
}

export default AddCategory;