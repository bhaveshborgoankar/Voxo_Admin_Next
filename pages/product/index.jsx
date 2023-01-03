import React from 'react';
import ProductContain from '../../Components/Product/Form';

const AllProduct = () => {
  return (
    <h1>All Product</h1>
    // <div className='container-fluid'>
    //   <div className='row'>
    //     <div className='col-12'>
    //       <div className='row'>
    //         <div className='col-sm-8 m-auto'>
    //           <div className='card'>
    //             <div className='card-body'>
    //               <div className='card-header-2'>
    //                 <h5>Product Information</h5>
    //               </div>

    //               <form className='theme-form theme-form-2 mega-form'>
    //                 <div className='mb-4 row align-items-center'>
    //                   <label className='form-label-title col-sm-3 mb-0'>Product Name</label>
    //                   <div className='col-sm-9'>
    //                     <input className='form-control' type='text' placeholder='Product Name' />
    //                   </div>
    //                 </div>
    //                 <div className='mb-4 row align-items-center'>
    //                   <label className='col-sm-3 col-form-label form-label-title'>Product Image</label>
    //                   <div className='col-sm-9'>
    //                     <input className='form-control form-choose' type='file' id='formFile' multiple />
    //                   </div>
    //                 </div>

    //                 <div className='mb-4 row align-items-center'>
    //                   <label className='col-sm-3 col-form-label form-label-title'>Product Type</label>
    //                   <div className='col-sm-9'>
    //                     <select className='js-example-basic-single w-100' name='state'>
    //                       <option disabled>Static Menu</option>
    //                       <option>Simple</option>
    //                       <option>Classified</option>
    //                     </select>
    //                   </div>
    //                 </div>

    //                 <div className='mb-4 row align-items-center'>
    //                   <label className='col-sm-3 col-form-label form-label-title'>Category</label>
    //                   <div className='col-sm-9'>
    //                     <select className='js-example-basic-single w-100' name='state'>
    //                       <option disabled>Category Menu</option>
    //                       <option>Electronics</option>
    //                       <option>TV & Appliances</option>
    //                       <option>Home & Furniture</option>
    //                       <option>Another</option>
    //                       <option>Baby & Kids</option>
    //                       <option>Health, Beauty & Perfumes</option>
    //                       <option>Uncategorized</option>
    //                     </select>
    //                   </div>
    //                 </div>

    //                 <div className='mb-4 row align-items-center'>
    //                   <label className='col-sm-3 col-form-label form-label-title'>Brand</label>
    //                   <div className='col-sm-9'>
    //                     <select className='js-example-basic-single w-100'>
    //                       <option disabled>Brand Menu</option>
    //                       <option value='puma'>Puma</option>
    //                       <option value='hrx'>HRX</option>
    //                       <option value='roadster'>Roadster</option>
    //                       <option value='zara'>Zara</option>
    //                     </select>
    //                   </div>
    //                 </div>

    //                 <div className='mb-4 row align-items-center'>
    //                   <label className='col-sm-3 col-form-label form-label-title'>Tags</label>
    //                   <div className='col-sm-9'>
    //                     <div className='bs-example'>
    //                       <input type='text' className='form-control' placeholder='Enter Tags' id='#inputTag' data-role='tagsinput' />
    //                     </div>
    //                   </div>
    //                 </div>

    //                 <div className='mb-4 row align-items-center'>
    //                   <label className='col-sm-3 col-form-label form-label-title'>Description</label>
    //                   <div className='col-sm-9'>
    //                     <div className='bs-example'>
    //                       <input type='text' className='form-control' placeholder='Enter Description' />
    //                     </div>
    //                   </div>
    //                 </div>
    //               </form>
    //             </div>
    //           </div>

    //           <div className='card'>
    //             <div className='card-body'>
    //               <div className='card-header-2'>
    //                 <h5>Product variations</h5>
    //               </div>

    //               <form className='theme-form theme-form-2 mega-form'>
    //                 <div className='mb-4 row align-items-center'>
    //                   <label className='form-label-title col-sm-3 mb-0'>Option Name</label>
    //                   <div className='col-sm-9'>
    //                     <select className='js-example-basic-single w-100' name='state'>
    //                       <option>Color</option>
    //                       <option>Size</option>
    //                       <option>Material</option>
    //                       <option>Style</option>
    //                     </select>
    //                   </div>
    //                 </div>

    //                 <div className='row align-items-center'>
    //                   <label className='col-sm-3 col-form-label form-label-title'>Option Value</label>
    //                   <div className='col-sm-9'>
    //                     <div className='bs-example'>
    //                       <input type='text' className='form-control' placeholder='Type tag & hit enter' id='#inputTag' data-role='tagsinput' />
    //                     </div>
    //                   </div>
    //                 </div>
    //               </form>

    //               <a href='#' className='add-option'>
    //                 <i className='ri-add-line me-2'></i> Add Another Option
    //               </a>
    //             </div>
    //           </div>

    //           <div className='card'>
    //             <div className='card-body'>
    //               <div className='card-header-2'>
    //                 <h5>Product Price</h5>
    //               </div>

    //               <form className='theme-form theme-form-2 mega-form'>
    //                 <div className='mb-4 row align-items-center'>
    //                   <label className='col-sm-3 form-label-title'>price</label>
    //                   <div className='col-sm-9'>
    //                     <input className='form-control' type='number' placeholder='0' />
    //                   </div>
    //                 </div>
    //                 <div className='mb-4 row align-items-center'>
    //                   <label className='col-sm-3 form-label-title'>Compare at price</label>
    //                   <div className='col-sm-9'>
    //                     <input className='form-control' type='number' placeholder='0' />
    //                   </div>
    //                 </div>
    //                 <div className='mb-4 row align-items-center'>
    //                   <label className='col-sm-3 form-label-title'>Cost per item</label>
    //                   <div className='col-sm-5'>
    //                     <input className='form-control' type='number' placeholder='0' />
    //                   </div>
    //                   <div className='col-sm-2'>
    //                     <label>Margin:</label>
    //                     <span>25%</span>
    //                   </div>
    //                   <div className='col-sm-2'>
    //                     <label>Profit:</label>
    //                     <span>$5</span>
    //                   </div>
    //                 </div>
    //               </form>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default AllProduct;
