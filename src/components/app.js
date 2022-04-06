import { Component } from "react";
//import Card from "./card";
import Axios from "axios";
import React, { useState } from 'react';

function App() {
    //https://www.youtube.com/watch?v=cLohXdSPLEM
    const [libStato, SetLibStato] = useState(false); //false = chiuse->aperto | true = aperto->chiuso

    //apertura della ricerca
    function ActionLib() {
        // console.log(libStato)
        const lib = document.getElementsByClassName("box-lib")
        if (libStato) {
            lib[0].style.animation = "CloseLib 1s 1 ease-out forwards";
            SetLibStato(false)
            //ora lib è chiuso
            document.getElementById("arrow-ft").style.animation = "UpDirection 1s 1  ease-out forwards";
        }
        else {
            lib[0].style.animation = "OpenLib 1s 1 ease-out forwards";
            SetLibStato(true)
            //ora lib è aperto
            document.getElementById("arrow-ft").style.animation = "BottomDirection 1s 1  ease-out forwards";
        }
    }

    return (
        <div className=" position-relative w-100 d-flex flex-column align-items-center bg-image text-white vh-100">
            <div className="d-flex flex-column justify-content-center align-items-center w-75 p-6" style={{ height: "80vh" }}>
                <h1 className="fs-1 mont text-center">CERCA IL LIBRO ADATTO A TE</h1>
                <div className="d-flex max flex-column justify-content-center align-items-center mt-3">
                    <input type="text" className="input-search rounded-pill d-flex text-center border-0 py-2 px-5 mx-2 fs-6" placeholder="Inserisci il titolo"></input>
                </div>
            </div>
            <div className="box-lib position-absolute position-relative d-flex flex-column justify-content-center align-items-center w-100">
                <div onClick={() => ActionLib()} className="box-lib-button rounded-pill d-flex justify-content-center align-items- position-relative">
                    <svg id="arrow-ft" xmlns="http://www.w3.org/2000/svg" width="20" height="25" viewBox="0 0 37.536 21.895">
                        <path id="angle-down-solid" d="M18.772,181.9a3.115,3.115,0,0,1-2.211-.916L.921,165.339a3.128,3.128,0,1,1,4.423-4.423l13.427,13.433,13.43-13.43a3.128,3.128,0,0,1,4.423,4.423L20.986,180.981A3.119,3.119,0,0,1,18.772,181.9Z" transform="translate(37.541 181.895) rotate(180)" opacity="0.5" />
                    </svg>
                </div>
                <div className="box-lib-circle d-flex justify-content-center align-items-center">
                    <div className="w-100 h-100 d-flex justify-content-between align-items-center flex-column">
                        <div className="block-book row row-cols-1 row-cols-md-2 w-100 m-0 p-0">
                            <div className="cursor-pointer col d-flex flex-row align-items-center justify-content-center">
                                <img className="h-75 rounded" src="https://books.google.it/googlebooks/images/no_cover_thumb.gif"></img>
                                <div className="d-flex justify-content-start flex-column mx-2 h-75 text-black">
                                    <h1 className="mont fs-3">titolo</h1>
                                    <p className="truncate-row ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quis quas est dolor ratione, corrupti ex omnis reprehenderit perferendis, laborum repudiandae officiis. Quas voluptas ea repellendus ipsa sunt, quo voluptatum.
                                    </p>
                                </div>
                            </div>
                            <div className="cursor-pointer col d-flex flex-row align-items-center justify-content-center">
                                <img className="h-75 rounded" src="https://books.google.it/googlebooks/images/no_cover_thumb.gif"></img>
                                <div className="d-flex justify-content-start flex-column mx-2 h-75 text-black">
                                    <h1 className="mont fs-3">titolo</h1>
                                    <p className="truncate-row ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quis quas est dolor ratione, corrupti ex omnis reprehenderit perferendis, laborum repudiandae officiis. Quas voluptas ea repellendus ipsa sunt, quo voluptatum.
                                    </p>
                                </div>
                            </div>
                            <div className="cursor-pointer col d-flex flex-row align-items-center justify-content-center">
                                <img className="h-75 rounded" src="https://books.google.it/googlebooks/images/no_cover_thumb.gif"></img>
                                <div className="d-flex justify-content-start flex-column mx-2 h-75 text-black">
                                    <h1 className="mont fs-3">titolo</h1>
                                    <p className="truncate-row ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quis quas est dolor ratione, corrupti ex omnis reprehenderit perferendis, laborum repudiandae officiis. Quas voluptas ea repellendus ipsa sunt, quo voluptatum.
                                    </p>
                                </div>
                            </div>
                            <div className="cursor-pointer col d-flex flex-row align-items-center justify-content-center">
                                <img className="h-75 rounded" src="https://books.google.it/googlebooks/images/no_cover_thumb.gif"></img>
                                <div className="d-flex justify-content-start flex-column mx-2 h-75 text-black">
                                    <h1 className="mont fs-3">titolo</h1>
                                    <p className="truncate-row ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quis quas est dolor ratione, corrupti ex omnis reprehenderit perferendis, laborum repudiandae officiis. Quas voluptas ea repellendus ipsa sunt, quo voluptatum.
                                    </p>
                                </div>
                            </div>
                            <div className="cursor-pointer col d-flex flex-row align-items-center justify-content-center">
                                <img className="h-75 rounded" src="https://books.google.it/googlebooks/images/no_cover_thumb.gif"></img>
                                <div className="d-flex justify-content-start flex-column mx-2 h-75 text-black">
                                    <h1 className="mont fs-3">titolo</h1>
                                    <p className="truncate-row ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quis quas est dolor ratione, corrupti ex omnis reprehenderit perferendis, laborum repudiandae officiis. Quas voluptas ea repellendus ipsa sunt, quo voluptatum.
                                    </p>
                                </div>
                            </div>
                            <div className="cursor-pointer col d-flex justify-content-center align-items-center text-black ">
                                <p className="block-card mont w-100 h-75 fs-5  d-flex justify-content-center align-items-center ">mostra altri 5 elementi (max 20)</p>
                            </div>
                        </div>
                        <div className="d-flex w-50 justify-content-between align-items-center text-black">
                         <a className="page-button rounded py-1 px-2 mont" href="">&laquo;</a>
                         <a className="page-button rounded py-1 px-2 mont" href="">1</a>
                         <a className="page-button rounded py-1 px-2 mont" href="">2</a>
                         <a className="page-button rounded py-1 px-2 mont" href="">3</a>
                         <a className="page-button rounded py-1 px-2 mont" href="">&raquo;</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default App