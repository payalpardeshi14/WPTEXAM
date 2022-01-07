import {useState} from "react";
export default function App(){
  return(
    <>
    <MyComponent/>
    </>
  );
}

function MyComponent(){
  const parent="container-fluid";
  const header="row bg-secondary text-light";
  const headstyle="d-flex align-items-center p-3";
  const inputfield="row mt-2";
  const chatstyle1="alert-secondary border-secondary text-dark";
  const chatstyle2="text-end alert alert-secondary border-secondary text-dark";
  const studentname="payal pardeshi";
  const studentid="210940520056";
  const [list,setlist]=useState([]);
  const[text,settext]=useState("");

  const gettext=(e)=>{
    let newtext=e.target.value;
    settext(newtext);
  };


  const sendmsg=()=>{
    if(text !==""){
      let newlist=[...list,text];
      setlist(newlist);
    }
  };

  return(
    <div className={parent}>
      <div className={header}>
        <div className={headstyle}>
          <h1>MyChatApp</h1>
          <h5 className="m-0 ms-2">
            by{studentname}/{ studentid}
          </h5>
        </div>
      </div>
      <div className={inputfield}>
        <div>
          <input
          className="w-75 p-4"
          style={{"border-radius":"10px"}} 
          type="text"
          placeholder="let chat here....."
          onChange={gettext} 
          />
          <input
          className="p-4 ms-2"
          style={{"border-radius":"10px",width:"300px"}} 
          type="button" 
          value="SEND"
          onclick={sendmsg}
           />
        </div>
      <div>
      {list.map((item,index)=>{
        if(index%2==0){
          return (
            <div key={index} className={chatstyle1}>
              {item}
            </div>
          );
        }else{
          return (
            <div key={index} className={chatstyle2}>
              {item}
            </div>
          );
        }
      })}
      </div>
    </div>
  </div>

  );
  
}






































// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
