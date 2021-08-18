// create your App component here
import React, { useState, useEffect } from "react"

function App(){
    const [image, setImage] = useState()
    const fetchAPI="https://dog.ceo/api/breeds/image/random"
    useEffect(() => {
        fetch(fetchAPI)
        .then(r => r.json())
        .then(data => setImage(data.image))
    },[])

    return(
        {image ? <p>Looading...</p> : <img src={image} alt="A Random Dog"/>}
    )
}

export default App;