import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TotalBook = ({setId}) => {
    // The useSate here manages the Books details and Deleted book details and the navigate hook is used to navigate the page to the required one
    const [books,setBooks]=useState([]);
    const[deleteData,setDeleteData]=useState([]);
    const navigate = useNavigate();
    
    // The useEffect renders the deleted data and shows the remaining books
    useEffect(()=>{
        fetchData();
    },[deleteData])
    const fetchData=async()=>{
        await axios
        .get('https://665d6207e88051d604065693.mockapi.io/api/book')
        .then((res)=>setBooks(res.data))
        .catch((error)=>console.log(error))
    }
     
    // handleDelete here handles the delete of a data
    const handleDelete=async(id)=>{
        await axios
        .delete(`https://665d6207e88051d604065693.mockapi.io/api/book/${id}`)
        .then((res)=>setDeleteData(res.data))
        .catch((error)=>console.log(error))
    }

    // handleEdit here handles the page and navigates the page to Edit book page
    const handleEdit=(id)=>{
        setId(id);
        navigate(`/editbook/${id}`)
    }
    return (
        <div>
            <div className='table-responsive'>
            <table className='table main-table table-info table-striped'>
                <thead>
                    <tr>
                        <th rowSpan={2}>ID</th>
                        <th colSpan={4}>Book Details</th>
                        <th colSpan={3}>Author Details</th>
                        <th rowSpan={2}></th>
                        <th rowSpan={2}></th>
                    </tr>
                    <tr>
                        <th>Book Titile</th>
                        <th>Author of the Book</th>
                        <th>ISBN Number</th>
                        <th>Publication Date</th>
                        <th>Author Name</th>
                        <th>Author DOB</th>
                        <th>Author Description</th>
                    </tr>
                </thead>
                <tbody>
                    {books?.map((ele,index)=>{
                        return(
                            <tr key={ele.id}>
                                <td>{ele.id}</td>
                                <td>{ele.book_title}</td>
                                <td>{ele.book_author}</td>
                                <td>{ele.book_ISBN_num}</td>
                                <td>{ele.book_publicationDate}</td>
                                <td>{ele.book_author}</td>
                                <td>{ele.book_authorDOB}</td>
                                <td>{ele.book_authorDesc}</td>
                                <td><button  onClick={()=>(handleEdit(ele.id))} className='btn btn-danger'>Edit</button></td>
                                <td><button onClick={()=>(handleDelete(ele.id))} className='btn btn-success'>Delete</button></td>
                                
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default TotalBook;