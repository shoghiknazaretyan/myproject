import logo from './logo.svg';
import './App.css';
import MyButton from './components/MyButton'
import MyForm from './components/MyForm';
import {useEffect, useState} from 'react';
import LoginForm from './components/LoginForm'





// function App(){

//   let con = false;
//   const onSave = (text)=>{
//     alert(text)
//   }

//   const onClose =(text)=>{
//     alert(text)
//   }


//   return (
//     <>
//       <div>
//          <p>React</p>
//       </div>
//     <MyButton title ={'Save'} handleClick={onSave} test={true}/>
//     <MyButton title ={'Close'} handleClick={onClose} test={false}/>
//     </>
//   )
// }

// export default App;


// function App(){
//   const arr = ['a', 'b','c', 'd'];

//   return (
//     <>
//       <div>
//         <p>React js</p>
//       </div>
//       {
//         arr.map((item, index)=><p key={index.toString()}>{item}</p>)
//       }
//     </>
//   )

// }

// export default App



// // function App(){
// //   let [arr, setArr]=useState([1,2,3,4]);
  
// //   function changeArr(){
// //     setArr([...arr, arr.at(-1)+1])
// //   }

// //    useEffect((()=>{

// //    })

// //   return(
// //     <>
// //        <div>
// //         <button onClick={changeArr}>+</button>
// //         {arr.map((item, index)=><p key={index.toString()} style={{color:item%10?'black':'red'}}  
// //         >{item}</p>) }  
// //        </div>
// //     </>
// //   )
// // }

// export default App


// function App(){
//     let [countApp, setCount] = useState(12);
//     let changeCount = ()=>{
//       setCount(countApp+1)
//     }
//     let changeCount1 = ()=>{
//       setCount(countApp-1)
//     }
//     return(
//       <>
//          <div>
//           <Counter count={countApp}/>
//           <MyButton title={'+'} test={true} handleClick={changeCount}/>
//           <MyButton title={'-'} test={true} handleClick={changeCount1}/>
//          </div>
      
//       </>
//     )
// }


// export default App


// /////////sxal ban
// const RegistrationForm = () => {
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [remember, setRemember] = useState("");

// const changeStorage=()=>{
//   localStorage.setItem = ('email', JSON.stringify(email));
//   localStorage.setItem = ('password', JSON.stringify(password));
// }

//   const handleSubmit = (event) => {
//     event.preventDefault();

    
//     if (fullName && email && password && confirmPassword && password === confirmPassword) {
//       console.log("Form submitted!");
//     } else {
//       console.log("Form validation failed!");
//     }
//   };

//   const handleFullNameChange = (event) => {
//     setFullName(event.target.value);
//   };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleConfirmPasswordChange = (event) => {
//     setConfirmPassword(event.target.value);
//   };

//   const handleChange = (event)=>{
//     setRemember(event.target.value)
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>
//           Full Name:
//           <input type="text" value={fullName} onChange={handleFullNameChange} />
//         </label>
//       </div>
//       <div>
//         <label>
//           Email:
//           <input type="email" value={email} onChange={handleEmailChange} />
//         </label>
//       </div>
//       <div>
//         <label>
//           Password:
//           <input type="password" value={password} onChange={handlePasswordChange} />
//         </label>
//       </div>
//       <div>
//         <label>
//           Confirm Password:
//           <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
//         </label>
//       </div>
    
//       <div>
//           <input type="checkbox" name="agreement" onChange={handleChange}/>
//       </div>
//       <div>
//         <button type="submit" onClick={changeStorage}>Submit</button>
//       </div>
//     </form>
//   );
// };

// export default Registrat


//////////////////useEffect
// function App(){
//   const [count, setCount] = useState(0);

//   const changeCount = ()=>{
//     setCount(count+1)
//   }
 
//   return(
//     <div>
//       {count<=10 ? <MyButton title={'+'} handleClick={changeCount} count={count}/> : null}
//       <p>{count}</p>
//     </div>
//   )
// }

// export default App



/*function App(){
    const [formvalues, setFormValues] = useState({email: '', password: '', remember: false})
    const [isLogedin,setIsLogedin] = useState(false);

    const onChange = (event)=>{
      if(event.target.name === 'remember'){
        setFormValues({...formvalues, [event.target.name]: event.target.checked})
      }else{
        setFormValues({...formvalues, [event.target.name]: event.target.value})
      }
    }

    const handleLogin = (event)=>{
      event.preventDefault();
      if(formvalues.Values.remember){
        localStorage.setItem('userData', JSON.stringify(formValues))
      }else{
        sessionStorage.setItem('userData', JSON.stringify(formValues))
      }
    setIsLogedin(true)
 }

 const logout = ()=>{
  localStorage.clear();
  sessionStorage.clear();
  setIslogedin(false)
 }
 useEffect (()=>{
  const userData = localStorage.getItem("userDate") || sessionStorage.getItem("userDate");
  if(userData){
    setIsLogedin(true)
  }
 },[])


return  (
  <div>
  {isLogedin?
  <div>
    <p>test</p>
    <button onClick={logout}>Logout</button>
  </div>
  :<LoginForm
  onChange={onChange}
  handleLogin={handleLogin}
  />
  }
  </div>
)
}*/
 function App(){
  const [githubUser,setGithubUser] = useState([]);

  useEffect(()=>{
    fetch("https://api.github.com/users").then(response => response.json()).then(date => {
      setGithubUser(date)
    })
  },[])

  return (
    <div>
      {
        githubUser.map(item => <div key={item.id}>
          <p>{item.id}</p>
          <img src = {item.avatar_url}/>
        </div>)
      }
    </div>
  )
 }
export default App