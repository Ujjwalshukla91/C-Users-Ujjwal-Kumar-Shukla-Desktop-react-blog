import React,{useEffect,useState} from 'react';
function Contact(){

    const  [name,setName]=useState("Manoj")
    const  [age,setAge]=useState(29)
    useEffect(()=>{
        console.log("hello from Hook");
    },[age])

    return(
        <div>
            <h2>Contact us page</h2>
            <h2>name: {name}</h2>
            <h2>Age: {age}</h2>
            <button onClick={()=>setAge(33)}>updat Age</button>
            <button onClick={()=>setName("Manoj Shukla")}>updatename</button>
            <div className="compo">
                <div className="percent">

                </div>
                <div class="product">

                </div>
            </div>
        </div>
         
        
    )
}

export default Contact;