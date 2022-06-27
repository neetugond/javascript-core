import React, { useEffect, useState} from 'react'
import axios from 'axios';
// use mainly for api call useeffect
const UseEffectHook = () => {
    const [fake, setFake] = useState([]);

    useEffect(() => {
    //  console.log("hello world")   
    getData()
        
    },[])
    const getData = () => {
        axios.get("https://fakestoreapi.com/products").then((response) => {
            // console.log(response.data)
            setFake([...response.data])
            console.log([response.data])
            
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <>
            <h1>use Effect hook data rendering</h1>
            <div>
                {fake.map((el, id) => (
                    <div key={id}>
                     <img src={el.image} alt="" srcset="" width={200} />
                    <h2>{el.title}</h2>
                    </div>

                    )
                )}
            </div>
        </>
  )
}

export default UseEffectHook