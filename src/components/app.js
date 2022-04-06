import { Component } from "react";
//import Card from "./card";
import Axios from "axios";

function App() {
    return (
        <div className=" position-relative w-100 d-flex flex-column align-items-center bg-image text-white vh-100">
            <div className="d-flex flex-column justify-content-center align-items-center w-75 p-6" style={{ height: "80vh" }}>
                <h1 className="fs-1 mont text-center">CERCA IL LIBRO ADATTO A TE</h1>
                <div className="d-flex max flex-column justify-content-center align-items-center mt-3">
                    <input type="text" className="input-search rounded-pill d-flex text-center border-0 py-2 px-5 mx-2 fs-6" placeholder="Inserisci il titolo"></input>
                </div>
            </div>
            <div className="box-lib position-absolute position-relative d-flex flex-column justify-content-center align-items-center w-100">
                <div className="box-lib-button rounded-pill d-flex justify-content-center align-items- position-relative ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" viewBox="0 0 37.536 21.895">
                        <path id="angle-down-solid" d="M18.772,181.9a3.115,3.115,0,0,1-2.211-.916L.921,165.339a3.128,3.128,0,1,1,4.423-4.423l13.427,13.433,13.43-13.43a3.128,3.128,0,0,1,4.423,4.423L20.986,180.981A3.119,3.119,0,0,1,18.772,181.9Z" transform="translate(37.541 181.895) rotate(180)" opacity="0.5" />
                    </svg>
                </div>
                <div className="box-lib-circle d-flex ">

                </div>
            </div>
        </div>
    );
}
export default App