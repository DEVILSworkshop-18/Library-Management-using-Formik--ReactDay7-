import axios from "axios";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  // Used useState hook to store books details
  const [books, setBooks] = useState([]);

  // the useEffect Hook renders the data initially 
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get("https://665d6207e88051d604065693.mockapi.io/api/book")
      .then((res) => setBooks(res.data))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="dashnav">
        <div
          className="card mb-2"
          style={{ maxWidth: "340px", margin: "10px" }}
        >
          <div className="row">
            <div className="col-md-4">
              <i
                className="fa-solid fa-book"
                style={{
                  fontSize: "80px",
                  marginTop: "10px",
                  marginLeft: "10px",
                }}
              ></i>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Total Books</h5>
                <p className="card-text">
                  <small className="text-body-secondary">
                    {books.length}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="card mb-2"
          style={{ maxWidth: "340px", margin: "10px" }}
        >
          <div className="row">
            <div className="col-md-4">
              <i
                className="fa-solid fa-user"
                style={{
                  fontSize: "80px",
                  marginTop: "10px",
                  marginLeft: "10px",
                }}
              ></i>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Authors</h5>
                <p className="card-text"></p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    {books.length}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="card mb-2"
          style={{ maxWidth: "340px", margin: "10px" }}
        >
          <div className="row">
            <div className="col-md-4">
              <i
                className="fa-solid fa-users"
                style={{
                  fontSize: "80px",
                  marginTop: "10px",
                  marginLeft: "10px",
                }}
              ></i>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Total Users</h5>
                <p className="card-text"></p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    10 users
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="card mb-2"
          style={{ maxWidth: "340px", margin: "10px" }}
        >
          <div className="row">
            <div className="col-md-4">
            <i
                className="fa-solid fa-user"
                style={{
                  fontSize: "80px",
                  marginTop: "10px",
                  marginLeft: "10px",
                }}
              ></i>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Total Users Logged In</h5>
                <p className="card-text"></p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    4
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-2 g-5">
        <div className="col">
          <div className="card  crd">
            <h1 style={{margin:"10px"}}>Book Details</h1>
            <div className="table-responsive">
            <table className="table table-success table-striped">
              <thead>
                <tr>
                  <th>Book ID</th>
                  <th>Book Name</th>
                  <th>Author of the Book</th>
                  <th>ISBN Number</th>
                  <th>Publication Date</th>
                </tr>
              </thead>
              <tbody>
                {books?.map((ele, index) => {
                  return (
                    <tr key={ele.id}>
                      <td>{ele.book_id}</td>
                      <td>{ele.book_title}</td>
                      <td>{ele.book_author}</td>
                      <td>{ele.book_ISBN_num}</td>
                      <td>{ele.book_publicationDate}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card  crd">
            <h1 style={{margin:"10px"}}>Author Details</h1>
            <div className="table-responsive">
            <table className="table  table-success table-striped">
              <thead>
                <tr>
                  <th>Author Name</th>
                  <th>Author DOB</th>
                  <th>Author Description</th>
                </tr>
              </thead>
              <tbody>
                {books?.map((ele, index) => {
                  return (
                    <tr key={ele.id}>
                      <td>{ele.book_author}</td>
                      <td>{ele.book_authorDOB}</td>
                      <td>{ele.book_authorDesc}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
