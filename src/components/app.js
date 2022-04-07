import { Component, useEffect } from "react";

import Card from "./card";
import Axios from "axios";
import React, { useState } from 'react';


function App() {
    //https://www.youtube.com/watch?v=cLohXdSPLEM
    const [libStato, SetLibStato] = useState(false); //false = chiuse->aperto | true = aperto->chiuso
    const [libriLista, SetLibriLista] = useState([{}])
    const [indiceLista, SetIndiceLista] = useState(0)
    const [bloccoLista, SetBloccoLista] = useState(5)
    const [paginazione, SetPaginazione] = useState(1)
    const [direzioneBlocco, SetDirezioneBlocco] = useState(true) //true = aumenta il blocco di libri | false = diminuisce il blocco di libri
    const [maxRisultatiLibri, SetMaxRisultatiLibri] = useState(5)
    //apertura della lista di libri della ricerca
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

    function SearchBook(ricerca) {
        console.log(ricerca)
        Axios.get("https://www.googleapis.com/books/v1/volumes?q=" + ricerca + "&key=" + process.env.REACT_APP_API_KEY_BOOK + "&startIndex=" + indiceLista + "&maxResults=" + maxRisultatiLibri).then(response => {
            var descrizione;
            var imgBook;
            var libriListaTemporanea = [];
            for (var i = 0; i < bloccoLista; i++) {
                if (response.data.items[i].volumeInfo.description == undefined) {
                    descrizione = "Descrizione non disponibile";
                }
                else {
                    descrizione = response.data.items[i].volumeInfo.description
                }
                if (response.data.items[i].volumeInfo.imageLinks == undefined) {
                    //.imagelink e non thumbnail - link a una foto generica nera con scitta "copertina non disponibile"
                    imgBook = "https://books.google.it/googlebooks/images/no_cover_thumb.gif"
                }
                else {
                    imgBook = response.data.items[i].volumeInfo.imageLinks.thumbnail
                }
                var book = {
                    id: i,
                    titolo: response.data.items[i].volumeInfo.title,
                    descrizione: descrizione,
                    img: imgBook,
                    link: response.data.items[i].volumeInfo.infoLink
                };
                libriListaTemporanea.push(book)
            }
            SetLibriLista(libriListaTemporanea)
            PageButtonIndex()
        }
        )
    }

    function PageButtonIndex(){
        const pageButton = document.getElementsByClassName("page-button")
        for (var i = 0; i < pageButton.length; i++) {
            pageButton[i].style.opacity = "0.5"
        }
        pageButton[paginazione].style.opacity = "1"
    }

    function BloccoLista() {
        if (direzioneBlocco) {
            const blocco = bloccoLista + 5;
            SetBloccoLista(blocco);
            if (blocco == 20) {
                SetDirezioneBlocco(false)
            }
        }
        else {//ha raggiunto i 20 e deve diminuire
            const blocco = bloccoLista - 5;
            SetBloccoLista(blocco);
            if (blocco == 5) {
                SetDirezioneBlocco(true)
            }
        }
    }
    //al cambiamento del blocco c'p l'aggiornamento della libreria
    useEffect(() => {
        IndexLimitSearch()
        const input = document.getElementsByClassName("input-search");
        var ricerca = input[0].value;
        PageButtonIndex()
        SearchBook(ricerca)
       
    }, [bloccoLista])

    function Paginazione(action) {
        var maxPage
        if (bloccoLista == 15) {
            maxPage = 3; //Math.floor(returna 2 e non 3)
        }
        else {
            maxPage = 40 / bloccoLista
        }
        switch (action) {
            //true -> andare avanti
            case true:
                if (paginazione + 1 <= maxPage) {
                    SetPaginazione((paginazione + 1))
                }
                else {
                    global.alert("Ultimi risultati")
                }
                break;
            //false -> andare indietro
            case false:
                if (paginazione - 1 > 0) {
                    SetPaginazione((paginazione - 1))
                }
                else {
                    global.alert("Questi sono i primi risultati")
                }
                break;
            case 1:
                SetPaginazione(1)
                break;
            case 2:
                SetPaginazione(2)
                break
            case 3:
                if (bloccoLista == 20) {
                    SetPaginazione(2)
                }
                else {
                    SetPaginazione(3)

                }
                break;
        }
    }

    useEffect(() => {
        IndexLimitSearch()
    }, [paginazione])

    function IndexLimitSearch() {
        if ((bloccoLista * paginazione) > 40 && bloccoLista == 20) {
            SetPaginazione(2)
        }
        var maxResults = bloccoLista * paginazione
        if (maxResults > 40) {
            maxResults = 40
        }
        var index = ((bloccoLista * paginazione) - bloccoLista)
        if (index > 25) {
            index = 25
        }
        SetIndiceLista(index)
        SetMaxRisultatiLibri(maxResults)
    }
    /*
    function MaxResultsSearch() {
        var maxResults = bloccoLista * paginazione
        console.log(maxResults + " - " + paginazione + "." + bloccoLista)
        if (maxResults > 40) {
            maxResults = 40
        }
        SetMaxRisultatiLibri(maxResults)
        return (maxResults)
    }
    */

    useEffect(() => {
        const input = document.getElementsByClassName("input-search");
        var ricerca = input[0].value;
        SearchBook(ricerca)
    }, [maxRisultatiLibri])

    return (
        <div className=" position-relative w-100 d-flex flex-column align-items-center bg-image text-white vh-100">
            <div className="d-flex flex-column justify-content-center align-items-center w-75 p-6" style={{ height: "80vh" }}>
                <h1 className="fs-1 mont text-center">CERCA IL LIBRO ADATTO A TE</h1>
                <div className="d-flex max flex-column justify-content-center align-items-center mt-3">
                    <input onChange={(event) => SearchBook(event.target.value)} type="text" className="input-search rounded-pill d-flex text-center border-0 py-2 px-5 mx-2 fs-6" placeholder="Inserisci il titolo"></input>
                </div>
            </div>
            <div className="box-lib position-absolute position-relative d-flex flex-column justify-content-center align-items-center w-100">
                <div onClick={() => ActionLib()} className="box-lib-button rounded-pill d-flex justify-content-center align-items- position-relative">
                    <img src=".././image/arrow.svg"></img>
                </div>
                <div className="box-lib-circle d-flex justify-content-center align-items-center">
                    <div className="w-100 h-100 d-flex justify-content-between align-items-center flex-column">
                        <div className="block-book row row-cols-1 row-cols-md-2 w-100 m-0 p-0">
                            {
                                libriLista.length >= 5 ?
                                    libriLista.map((libriLista) =>
                                        <Card key={libriLista.id}
                                            titolo={libriLista.titolo}
                                            descrizione={libriLista.descrizione}
                                            img={libriLista.img}
                                            link={libriLista.link}
                                        ></Card>
                                    ) : ""
                            }
                            <div className="min-height-30 cursor-pointer col d-flex justify-content-center align-items-center text-black ">
                                <p onClick={() => BloccoLista()} className="block-card mont w-100 h-75 fs-5 p-1 d-flex justify-content-center align-items-center text-center ">{direzioneBlocco ? "+" : "-"}5 elementi (max 20 | blocco {bloccoLista})</p>
                            </div>
                        </div>
                        <div className="d-flex w-50 justify-content-between align-items-center text-black">
                            <a onClick={() => Paginazione(false)} className="page-button rounded py-1 px-2 cursor-pointer mont" >&laquo;</a>
                            <a onClick={() => Paginazione(1)} className="page-button rounded py-1 px-2 mont cursor-pointer " >1</a>
                            <a onClick={() => Paginazione(2)} className="page-button rounded py-1 px-2 mont cursor-pointer " >2</a>
                            <a onClick={() => Paginazione(3)} className="page-button rounded py-1 px-2 mont cursor-pointer " >3</a>
                            <a onClick={() => Paginazione(true)} className="page-button rounded py-1 px-2 mont cursor-pointer" >&raquo;</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default App;