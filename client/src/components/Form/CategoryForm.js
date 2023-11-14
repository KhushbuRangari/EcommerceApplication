import React from 'react'

function CategoryForm({handleSubmit, name, setName, desc, setDesc}) {

    console.log(name,desc, "***");

    
    return (
        <>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input type="text" className="form-control"
                    name="categoryName1"
                        defaultValue={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Enter New Category' />

                    <input type="text" className="form-control"
                        defaultValue={desc}
                        name="categoryDescription1"
                        onChange={(e) => setDesc(e.target.value)}
                        placeholder='Enter Description' />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </>
    )
}

export default CategoryForm