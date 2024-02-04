

// import { useRef, useState, useEffect } from "react";
//     const USER_REGEX=   /^[a-zA-Z0-9][a-zA-Z0-9-_]{3,23}$/
//     const PASSWORD_REGEX=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
// const _register = () => {
 

//   const userRef = useRef();
//   const errRef = useRef();

//   const [user, setUser] = useState("");
//   const [validName, setValidName] = useState(false);
//   const [userFocus, setUserFocus] = useState(false);

//   const [password, setPassword] = useState("");
//   const [validPassword, setValidPassword] = useState(false);
//   const [passwordFocus, setPasswordFocus] = useState(false);

//   const [matchpassword, setMatchPassword] = useState("");
//   const [validMatch, setValidMatch] = useState(false);
//   const [matchFocus, setMatchFocus] = useState(false);

//   const [errMsg, setErrMsg] = useState("");
//   const [success,setSuccess] = useState(false);
 

//   useEffect(()=>{
//     userRef.current.focus()
//   },[])

//   useEffect(()=>{
//     const result=USER_REGEX.test(user);
//     console.log(result);
//     console.log(user);
//     setValidPassword(result)
    
//   },[user])

//   useEffect(()=>{
//     const result=PASSWORD_REGEX.test(password);
//     console.log(result);
//     console.log(password);
//     setValidName(result);
//     const match=password===matchpassword
//     setValidMatch=(match);
//   },[password,matchpassword])

//   useEffect(()=>{
//     setErrMsg('')
//   },[user,password,matchpassword])
// //   return <div>import * as React from "react";


//     return (<div className="Container flex bg-slate-600 text-fuchsia-400">
// hello
//     </div>
//     );
  
  
  
// };

// export default _register;


