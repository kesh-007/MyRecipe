import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { ref , getDownloadURL , uploadBytesResumable } from "firebase/storage";
import {db, storage} from './FireBase/firebase'

function App() {
  const array=[
    {
    id:1,
    name:'Check Name',
    description:"THis is a new food",
    made:'oil,masala',
    cusine:'Indian',
    image:"https://cdn-icons-png.flaticon.com/512/3565/3565418.png",
    createddate:'25/02/23',
    modifiedDate : '26/02/23'
  },
  {
    id:2,
    name:'Check Name2',
    description:"THis is a new food",
    made:'oil,masala2',
    cusine:'Indian',
    image:"https://cdn-icons-png.flaticon.com/512/3565/3565418.png",
    createddate:'25/02/23',
    modifiedDate : '26/02/23'
  },
]
  const [upload,setUpload] = useState(false)
  return (
    <div>
      <style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap');
</style>

      <div style={{margin:'0.5rem'}}>
        <a href=''>
      <p style={{color:'red',fontSize:'2rem',fontFamily:'poppins'}}>MYRecipe</p></a>
      <hr/> 
      <input placeholder='Search for recipe'  style={{height:'3rem',width:'28rem',alignItems:'center',textAlign:'center',marginLeft:'30rem',borderRadius:'1rem'}}/>
      
      {
  array.map((post)=>(
    <div>
      <div style={{marginLeft:'15rem',margin:'3rem',background:'gray',height:'20rem',width:'59em',borderRadius:'3rem',display:'flex',flexDirection:'row'}}>
        <img src={post.image} style={{height:'10rem',width:'10rem',float:'left',marginTop:'4rem',marginLeft:'1rem'}}/>
        <div style={{float:'right',marginLeft:'5rem',fontFamily:'poppins'}}>
          <p>{post.id}</p>
          <p>{post.name}</p>
          <p>{post.description}</p>
          <p>{post.made}</p>
          <p>{post.cusine}</p>
          <p style={{marginLeft:'28rem'}}>{post.createddate}</p>
          <p style={{marginLeft:'28rem'}}>{post.modifiedDate}</p>
          <button style={{marginLeft:'32rem'}}>EDIT</button>

        </div>
        
      </div>

      </div>
  ))
}

      <div style={{marginLeft:'15rem',margin:'3rem',background:'gray',height:'20rem',width:'59em',borderRadius:'3rem',display:'flex',flexDirection:'row'}}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToBEG2hz0Nv_golk7i3vLzj2LzYrvqFWZawg&usqp=CAU" style={{height:'10rem',width:'10rem',float:'left',marginTop:'4rem',marginLeft:'1rem'}}/>
        <div style={{float:'right',marginLeft:'5rem',fontFamily:'poppins'}}>
          <p>1</p>
          <p>Biryani</p>
          <p>a mixed rice dish originating among the Muslims of the Indian subcontinent. It is made with Indian spices, rice,</p>
          <p>Ingridents:Meat,rice,masala,curd</p>
          <p>Indian</p>
          <p style={{marginLeft:'28rem'}}>CREATED: 24/02/23</p>
          <p style={{marginLeft:'28rem'}}>MODIFIED: 26/02/23</p>
          <button style={{marginLeft:'32rem'}}>EDIT</button>

        </div>
        
      </div>

      </div>
      <hr/>
      <div style={{marginLeft:'15rem',margin:'3rem',background:'gray',height:'20rem',width:'59em',borderRadius:'3rem',display:'flex',flexDirection:'row'}}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-vMxF6hewTDy5zeQmyVgh3aVRVNPVx3pbeAm-M_0f&s" style={{height:'10rem',width:'10rem',float:'left',marginTop:'4rem',marginLeft:'1rem'}}/>
        <div style={{float:'right',marginLeft:'5rem',fontFamily:'poppins'}}>
          <p>2</p>
          <p>Noodles</p>
          <p>A maida made dish which is origianted from China</p>
          <p>Ingridents:raw noodles,oil,masala,vegtables,(meat)</p>

          <p>Chinese</p>
          <p style={{marginLeft:'28rem'}}>CREATED: 22/02/23</p>
          <p style={{marginLeft:'28rem'}}>MODIFIED: 24/02/23</p>
          <button style={{marginLeft:'32rem'}}>EDIT</button>

        </div>
        
      </div>
      <hr/>
      <div style={{marginLeft:'15rem',margin:'3rem',background:'gray',height:'20rem',width:'59em',borderRadius:'3rem',display:'flex',flexDirection:'row'}}>
        <img src="data:image/jpeg;base64,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" style={{height:'10rem',width:'10rem',float:'left',marginTop:'4rem',marginLeft:'1rem'}}/>
        <div style={{float:'right',marginLeft:'5rem',fontFamily:'poppins'}}>
          <p>3</p>
          <p>Fried Rice</p>
          <p>a mixed rice dish originating among the China . It is made with Chinese spices, rice,</p>
          <p>Ingridents:Meat,rice,oils,soya sauce,red sauce</p>

          <p>Chinese</p>
          <p style={{marginLeft:'28rem'}}>CREATED: 20/02/23</p>
          <p style={{marginLeft:'28rem'}}>MODIFIED: 25/02/23</p>
          <button style={{marginLeft:'32rem'}}>EDIT</button>

        </div>
        
      </div>
      <hr/>
      <div style={{marginLeft:'15rem',fontFamily:'poppins'}}>
        <p><b>Upload Your Recipe</b></p>
        <p>Choose the Image</p>
        <input type='file' accept='image/*' />
        <p>Type the Name</p>
        <input placeholder='Name'/>
        <p>Type the description</p>
        <input placeholder='Description'/>
        <p>Type the Ingridents</p>
        <input placeholder='Ingridients'/>
        <p>Type the Cusine</p>
        <input placeholder='Cusine'/>
        <button onClick={()=>{console.log("Button Clicked")}}style={{marginLeft:"3rem",marginBottom:'5rem'}}>Submit</button>
        
       




      </div>

  

  

    </div>
  );
}



export default App;
