import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from'yup'
const EditBook = ({id}) => {
    // The Navigate hook is used to navigate to the books page after the book is created
    const navigate = useNavigate();

    // This editData useState hook sends the value as initial values to the formik
    const [editData,setEditData]=useState({
        book_id:'',
        book_title:'',
        book_author:'',
        book_ISBN_num:'',
        book_publicationDate:'',
        book_authorDOB:'',
        book_authorDesc:'',
    })

    // The useEffect hook here renders the value hwich need to be edited
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData=async()=>{
        await axios
        .get(`https://665d6207e88051d604065693.mockapi.io/api/book/${id}`)
        .then((res)=>setEditData(res.data))
        .catch((error)=>console.log(error));
    }

    // This useEffect hook renders the data which is need to be edited by usiing id and makes editable
      useEffect(()=>{
        formik.setValues(editData)
      },[editData])

      //    This validationSchema is used in formik 
      const validationSchema = Yup.object().shape({
        book_id:Yup.string().matches(/^[0-9]+$/,'Invalid ID format').required('Id Should not be empty'),
        book_title:Yup.string().required('Title Should not be empty'),
        book_author:Yup.string().required('Author Should not be empty'),
        book_ISBN_num:Yup.string().matches(/^(?:ISBN(?:-10)?:?●)?(?=[-0-9X●]{13}$|[0-9X]{10}$)[0-9]{1,5}[-●]?(?:[0-9]+[-●]?){2}[0-9X]$/,'ISBN conditions are not met').required('ISBN Number Should not be empty'),
        book_publicationDate:Yup.string().matches(/^(?:(0[1-9]|1[012])[\/.](0[1-9]|[12][0-9]|3[01])[\/.](18|19|20)[0-9]{2})$/,'InValid Publication date , Format is MM/DD/YYYY').required('Publication Should not be empty and the Format is MM/DD/YYYY'),
        book_authorDOB:Yup.string().matches(/^(?:(0[1-9]|1[012])[\/.](0[1-9]|[12][0-9]|3[01])[\/.](18|19|20)[0-9]{2})$/,'InValid Author DOB date , format is MM/DD/YYYY').required('Authors DOB Should not be empty and the Format is MM/DD/YYYY'),
        book_authorDesc:Yup.string().required('book_authorDesc Should not be empty'),
      })

      //   The Formik Validates the form and renders the data to the api
      const formik = useFormik({
        initialValues:{
            book_id:'',
        book_title:'',
        book_author:'',
        book_ISBN_num:'',
        book_publicationDate:'',
        book_authorDOB:'',
        book_authorDesc:'',
        },
        validationSchema,
        onSubmit:async(values)=>{
            await axios
          .put(
            `https://665d6207e88051d604065693.mockapi.io/api/book/${id}`,
            values
          )
          .then((res) => (res.data))
          .catch((error) => console.log(error));
          alert('Book details updated SuccessFully')
        navigate("/books");
        }
      })
    return (
        <div className='text-center'>
           <form className="p-2 fs-4 fw-bold" onSubmit={formik.handleSubmit}>
            <div className='table-responsive'>
                <table className='table table-borderless'>
                    <tbody>
                        <tr>
                            <td className='col-4'>ID:
                            <div className='text-danger'>{formik.errors.book_id}</div></td>
                            <td><input type="text" name='book_id' value={formik.values.book_id} onChange={formik.handleChange}/></td>
                        </tr>
                        <tr>
                            <td className='col-4'>Book Titile:<div className='text-danger'>{formik.errors.book_title}</div>
                            </td>
                           
                            <td><input type="text" name='book_title' value={formik.values.book_title} onChange={formik.handleChange}/></td>
                        </tr>
                        <tr>
                            <td className='col-4'>Author of the Book:<div className='text-danger'>{formik.errors.book_author}</div></td>
                            
                            <td><input type="text" name='book_author' value={formik.values.book_author} onChange={formik.handleChange}/></td>
                        </tr>
                        <tr>
                            <td className='col-4'>ISBN Number: <div className='text-danger'>{formik.errors.book_ISBN_num}</div></td>
                           
                            <td><input type="text" name='book_ISBN_num' value={formik.values.book_ISBN_num} onChange={formik.handleChange}/></td>
                        </tr>
                        <tr>
                            <td className='col-4'>Publication Date:<div className='text-danger'>{formik.errors.book_publicationDate}</div></td>
                            
                            <td><input type="text" name='book_publicationDate' value={formik.values.book_publicationDate} onChange={formik.handleChange}/></td>
                        </tr>
                        <tr>
                            <td className='col-4'>Author DOB: <div className='text-danger'>{formik.errors.book_authorDOB}</div></td>
                           
                            <td><input type="text" name='book_authorDOB' value={formik.values.book_authorDOB} onChange={formik.handleChange}/></td>
                        </tr>
                        <tr>
                            <td className='col-4'>Author Description:<div className='text-danger'>{formik.errors.book_authorDesc}</div></td>
                            
                            <td><input type="text" name='book_authorDesc' value={formik.values.book_authorDesc} onChange={formik.handleChange}/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button className="btn btn-success btn-lg fs-3 rounded-3" type="submit">
            Update
          </button>
           </form>
        </div>
    );
};

export default EditBook;