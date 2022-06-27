import React, {useEffect, useState} from "react";



function App() {
    const [image, setImage] = useState([])
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((resp) => resp.json())
        .then((data) => { 
            setImage(data.message)
            setIsLoaded(true)
        });
    }, [])
    

    return (
        <div>
           {isLoaded ? <img src={image} alt="A Random Dog"/> : <p>Loading...</p>}
        </div>
    )
}


export default App