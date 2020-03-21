// import React, { useState } from "react";
// import { connect } from "react-redux";
// import { editBook } from "../store/actions/book/typesBook";


// const Edit = ({props}) => {
//   const [book, setBook] = useState({
//     tite: "",
//     pageCount: "",
//     publishedDate: "",
//     status: "",
//     authors: ""
//   });

//   const fieldChangeHandler = ({ target }) => {
//     setBook({
//       ...book,
//       [target.name]: target.value
//     });
//   };

//   const submit =  e => {
//     e.preventDefault();
//     props.editBook(book);
//   };
//   return (
//     <div className="container">
//       <div className="row justify-content-center">
//         <div className="col-lg-7">
//           <div className="card shadow-lg border-0 rounded-lg mt-5">
//             <div className="card-header">
//               <h3 className="text-center font-weight-light my-4">
//                 Edit Book
//               </h3>
//             </div>
//             <div className="card-body">
//               <form>
//                 <div className="form-group">
//                   <label className="small mb-1">
//                    Title
//                   </label>
//                   <input
//                     onChange={fieldChangeHandler}
//                     className="form-control py-4"
//                     name="title"
//                     type="text"
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label className="small mb-1">
//                   PageCount
//                   </label>
//                   <input
//                     onChange={fieldChangeHandler}
//                     className="form-control py-4"
//                     name="pageCount"
//                     type="text"
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label className="small mb-1">
//                   PublishedDate
//                   </label>
//                   <input
//                     onChange={fieldChangeHandler}
//                     className="form-control py-4"
//                     name="publishedDate"
//                     type="text"
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label className="small mb-1">
//                   Status
//                   </label>
//                   <input
//                     onChange={fieldChangeHandler}
//                     className="form-control py-4"
//                     name="status"
//                     type="text"
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label className="small mb-1">
//                   Authors
//                   </label>
//                   <input
//                     onChange={fieldChangeHandler}
//                     className="form-control py-4"
//                     name="authors"
//                     type="password"
//                   />
//                 </div>
//                 <div className="form-group mt-4 mb-0">
//                   <button
//                     className="btn btn-primary btn-block"
//                     type="submit"
//                     onClick={submit}
//                   >
//                     Create Account
//                   </button>
//                 </div>
//               </form>
//             </div>
//             <div className="card-footer text-center">
//               <div className="small">
//                 <a href="register.html">Have an account? Go to login</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const mapStateToProps = state => ({
//     book: state.book
//   });

// const mapDispatchToProps = (dispatch) => {
//   return {
//     edit: book => {
//       dispatch(editBook(book));
//     }
//   };
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Edit);
