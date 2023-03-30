import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const PrivateRoute = (props) => {
    const { Component, roles , ...rest  } = props;
    console.log("roles....",roles);
    const nav = useNavigate();

    const aa = JSON.parse(localStorage.getItem('role'));
    const bb = roles.includes(JSON.parse(localStorage.getItem('role')));

    console.log("aa  ...",aa);
    console.log("bb  ...",bb);

    const isAuthenticated = aa && bb ;
    console.log("isAuthenticated.....",isAuthenticated);

    useEffect(() => {
        let login = localStorage.getItem('token');
        if (!login) {
            nav('/');
        }
    });
    return (
        <div>
        {/*  <Component /> */}
      {
            isAuthenticated ? <Component /> : ""        }
            
        </div>
    )
}

export default PrivateRoute;



// import React, { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom';

// function PrivateRoute(props) {
//     const {Component} =props;
//     const nav = useNavigate();

//     useEffect(()=>{
//         let login = localStorage.getItem("user");
//         console.log("login privateRout==",login);
//         if(!login)
//         {
//             nav('/login');
//         }

//     },[]);
//   return (
//     <div>
//       <Component />
//     </div>
//   )
// }

// export default PrivateRoute




// import React from 'react';
// import { Link, Route, } from 'react-router-dom';
// import { isAuthenticated } from '../hooks/AuthService';
// import PropTypes from 'prop-types';
// // import { isLogin } from '../middleware/auth';

// const PrivateRoute = ({ component: Component, ...rest }) => (
//     // Show the component only when the user is logged in
//     // Otherwise, redirect the user to /signin page
//     console.log("PrivateRoute==",isAuthenticated),
//     // <Route {...rest} render={props => (isAuthenticated() ? <Component {...props} /> : <Link to="/" />)} />
//     <Route
//     {...rest}
//     component={(props) =>
//       isAuthenticated ? <Component {...props} /> : <Link to='/' />
//     }
//   />
// )
// PrivateRoute.propTypes = {
//     isLogged: PropTypes.bool.isRequired,
//     component: PropTypes.func.isRequired,
//   };
// export default PrivateRoute