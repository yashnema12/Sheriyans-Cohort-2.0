import React, { useState } from 'react'
import Men from './components/Men';
import Women from './components/Women';

const App = () => {
        //readonly //writeonly
  // const [King, setKing] = useState('Alexander')
  // const [Queen, setQueen] = useState('Cleopatra')

  // const arr = ['yash','sarthak','nema','sharma'];
  //  const [Num, setNum] = useState(0)

 // const [marks, setmarks] = useState([45,67,89,23,56])
 
  // function graceStudent(){
  //   const newMarks = marks.map(function(elem){
  //     return elem + 5;
  //   })
  //   setmarks(newMarks)
    
  // }

 const [gender, setgender] = useState('Male')

  function changeGender(){
    if(gender == 'Male'){
      setgender('Female');
    }else{
      setgender('Male')
    }
  }
  
  return (
    <>
    {/* <div>
      <h1>{King} X {Queen}</h1>
      <button onClick={()=>{
        a++;
        console.log(a);
        setKing('Olympian');
      }}>ChangeKing</button>

      <br /><br />
      <button onClick={()=>{
        a++;
        console.log(a);
        setQueen('Nefertiti');
      }}>ChangeQueen</button> */}


      {/* <button onClick={()=>{
        console.log(Name);
        setName('Yashwant'); //this is an asynchronus function but js engine works fastly so it looks like synchronus
        console.log(Name);
      }}>Click Me!!</button> */}

        {/* <h1>{arr[Num]}</h1>

      <button onClick={()=>{
        
        if(Num<=arr.length-1){
          console.log("No more users left");
          setNum(Num + 1);
        }
      }}
      >Change User</button> */}

      {/* {marks.map(function(elem,idx){

        return <h1 key={idx} >Student {idx+1} = {elem} ({elem>33?"PASS":"FAIL"}) </h1>

      })}
      <button onClick={graceStudent}>Give Them Grace</button>

    </div> */}
   
   
   
    <div>
        <h1>{gender}</h1>
        <button onClick={changeGender}>Change Gender</button>

        {gender == 'Male'? <Men/> : <Women/>}
    </div>
   
    </>
  )
}

export default App
