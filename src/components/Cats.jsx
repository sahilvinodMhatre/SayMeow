import React from 'react';
import './Cats.css'
export default function Cats() {

    const newRandomImg = () => {

        let api = "https://cataas.com/cat"

        let randomVal = `?id=${Math.random() * 1000}&type=square`;
        document.getElementById('img').src = '';
        let final = api + randomVal;

        document.getElementById('img').src = final;

    }

    const catSays = () => {

        let api = "https://cataas.com/cat/says/"

        let input = document.getElementById('val').value;
        console.log(input);
        let randomVal = `?id=${Math.random() * 1000}`;
        let color = "&fontColor=white&type=square"
        let final = api + input + randomVal + color;

        document.getElementById('img').src = final;

    }

    const catGif = () => {

        let api = "https://cataas.com/cat/gif/says/"

        let input = document.getElementById('val').value;
        console.log(input);
        let randomVal = `?id=${Math.random() * 1000}`;
        let color = "&fontColor=white&type=square"
        let final = api + input + randomVal + color;

        document.getElementById('img').src = final;

    }


    return (
        <>




            
            <center style={{marginTop:"35px" }}>

           <div> <h2>SayMeow</h2> </div>

                <div style={{marginTop:"35px" }} className="container1">
                    <div className="card1">
                        <img src="" alt=" " id='img' /> <br /> <br />
                        Cat says: <input type="text" id="val" /> <br /> <br />
                        <button variant="contained" color="success" onClick={catSays} style={{ marginRight: "10px", padding: "5px", margin: "5px", backgroundColor:"green", outlineColor: "black"  }} >Generate image</button>
                        <button variant="contained" color="success" onClick={catGif} style={{ marginRight: "5px", padding: "5px", margin: "5px", backgroundColor:"green", borderColor: "black"  }} >Generate Gif</button>
                        <button variant="contained" color="success" onClick={newRandomImg} style={{ marginLeft: "10px",  padding: "5px",margin: "5px", backgroundColor:"green", borderColor: "black" }} >Random cat image</button> <br /> <br />
                    </div>
                </div>
            </center>
        </>
    )

}