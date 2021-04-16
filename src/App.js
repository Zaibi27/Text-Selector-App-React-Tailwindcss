import logo from './logo.svg';
import './App.css';
// import "./styles/styling.css" ;
function App() {
  let selectArea, theButton , dialogBox , textArea  ;
  const myArray =[];
  let uid , selectedText , addedText ; 


const loggerFunction = (e) => {
  selectArea =  document.querySelectorAll(".select-content");
  theButton = document.querySelector(".button");  
 setTimeout(() => {  //settimeout set to zero so the selected text is deselected if the user again clicks on it

    const text = window.getSelection().toString().trim(); //get the selected text using the getSelection method
  // console.log(text) ;
    
      if(text.length > 0){
        theButton.style.display = "block" ;
      
      const x = e.clientX ; //x coordinates of the pointer where the mouseup event was triggered
      const y = e.clientY ; // y coordinates of the pointer where the mouseup event was triggered
        
  
        theButton.style.left = `${x}px` ;
        theButton.style.top = `${y-30}px` ;
        
       
  
    }
  },0)
}

const deselectFunction = (e) =>{
  theButton = document.querySelector(".button");
  dialogBox = document.querySelector(".dialog-box") ;
  if(getComputedStyle(theButton).display === "block" && e.target.nodeName !=="BUTTON" 
  && e.target.nodeName !== "TEXTAREA"){
  theButton.style.display = "none" ;
  dialogBox.style.display = "none" ;
  document.getElementById('myTextArea').value = ""
  window.getSelection().empty() ;
}
}

  const handleClick = (e) => {
    const text = window.getSelection().toString().trim();
    dialogBox = document.querySelector(".dialog-box") ;
    dialogBox.style.display = "flex" ;
    theButton.style.outline = "none"
    const x = e.clientX ;
    const y = e.clientY ;
    dialogBox.style.left = `${x - 20}px` ;
    dialogBox.style.top = `${y+35}px` ;

    uid = new Date() ;
    selectedText = text

  }

 const handleTextAreaClick = () => {
    addedText = document.getElementById('myTextArea').value

    let obj = {
      uid: uid ,
      selectedText: selectedText ,
      addedText: addedText
    }
    myArray.push(obj) ;
    theButton.style.display = "none" ;
    dialogBox.style.display = "none" ;
    document.getElementById('myTextArea').value = "" ;
    window.getSelection().empty() ;
    console.log(myArray) ;
  }


  return (
    <div className="flex justify-center w-auto bg-img" >

    <div className="App container w-screen mt-20" onMouseDown={deselectFunction}>
      <h1 className="text-6xl text-center text-gray-200 font-semibold select-none">
        Select the text below to check the functionality
      </h1>
      <p className="select-content text-gray-100 text-justify text-2xl mt-20 mx-32 font-medium" onMouseUp={loggerFunction}> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
           dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
           nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
            deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
            deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
            deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
         </p>
         <button 
         className="button text-5xl absolute hidden top-0 left-0 rounded-full w-14 pb-2  text-white border-none  hover:outline-none
         bg-gradient-to-r from-[#f56565] via-[#e55278] to-[#d53f8c]
         hover:bg-gradient-to-b hover:from-[#f56565] hover:via-[#e55278] hover:to-[#d53f8c]
         xl:transition xl:duration-150 xl:transform xl:hover:scale-110
         "
          onClick={handleClick} >+</button>

      <div className="dialog-box flex flex-col   p-4 rounded-md 
      bg-gradient-to-r from-[#256561] via-[#168c76] to-[#3eb489]
      absolute left-0 top-0 items-center shadow-2xl
      hidden space-y-7" id="dialog-box">
      <textarea className="rounded-md p-2 bg-gray-100 text-[#256561] font-semibold text-xl
       xl:transition xl:duration-150 xl:transform xl:hover:scale-105
       border-none outline-none
      " id="myTextArea" cols="34" rows="5" placeholder="Enter text here..."></textarea> 
      <button 
      className="rounded-xl 
      bg-gradient-to-r from-[#ff5e00] to-[#ffa200] shadow-2xl shadow-inner
       text-gray-100 font-bold w-[50%] py-3 px-4 hover:bg-gradient-to-r hover:from-[#62D28F] hover:to-[#62D28F]
       xl:transition xl:duration-150 xl:transform xl:hover:scale-110
       border-none hover:outline-none
       "  onClick={handleTextAreaClick}>Add Text</button>
     
    </div>

    </div>
    </div>
  );
}

export default App;
