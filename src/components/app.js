import { Component } from "react";
import Card from "./card";
import Axios from "axios";
//https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key={process.env.API_KEY_BOOK}
//https://www.youtube.com/watch?v=LGcgChoD_qY&t=570s
class App extends Component {
    state = {
        libreria: { nBook: 100, pages: 5 },
        card: [
            {id:1, titolo: "prova0", descrizione: "lorem-ipsum asdadads", img: "https://tse2.mm.bing.net/th?id=OIP.kUjnic5X18CUa1s6_BHTvgHaGL&w=690&c=7&pid=Api&p=0", link: "https://youtube.com" },
            {id:2, titolo: "prova1", descrizione: "lorem-ipsum asdadads", img: "https://tse2.mm.bing.net/th?id=OIP.kUjnic5X18CUa1s6_BHTvgHaGL&w=690&c=7&pid=Api&p=0", link: "https://youtube.com" },
            {id:3, titolo: "prova2", descrizione: "lorem-ipsum asdadads", img: "https://tse2.mm.bing.net/th?id=OIP.kUjnic5X18CUa1s6_BHTvgHaGL&w=690&c=7&pid=Api&p=0", link: "https://youtube.com" },
            {id:4, titolo: "prova3", descrizione: "lorem-ipsum asdadads", img: "https://tse2.mm.bing.net/th?id=OIP.kUjnic5X18CUa1s6_BHTvgHaGL&w=690&c=7&pid=Api&p=0", link: "https://youtube.com" },
            {id:5, titolo: "prova4", descrizione: "lorem-ipsum asdadads", img: "https://tse2.mm.bing.net/th?id=OIP.kUjnic5X18CUa1s6_BHTvgHaGL&w=690&c=7&pid=Api&p=0", link: "https://youtube.com" },
        ]
    }

    checkBook = () =>{

        Axios.get("https://www.googleapis.com/books/v1/volumes?q=mela&key=apikey").then(data =>{
            console.log(data.items);
        })
    }

    render() {
        return (
            <div className='home d-flex flex-column p-0 m-0'>
                <div className="home-nav d-flex flex-column justify-content-center align-items-center">
                    <nav className="navbar navbar-light p-0">
                        <div className=" container-fluid p-0 flex-column">
                            <p className="h1 text-light fs-1 fw-bold mb-3 text-center">{process.env.REACT_APP_API_KEY_BOOK}Cerca un libro tramite l'API di Google Book</p>
                            <form onChange={this.checkBook} className="d-flex flex-row align-items-center pt-3">
                                <input className="home-nav-input d-flex text-center border-0 py-2 px-5 mx-2 fs-6 rounded-pill" type="search" placeholder="cerca il titolo del libro" aria-label="Search"></input>
                                <button className="d-flex justify-content-center bi bi-search fw-bold fs-5 bg-light p-2 rounded-circle border-0" type="submit"></button>
                            </form>
                        </div>
                    </nav>
                </div>
                <div className="home-search container-sm d-flex flex-column align-items-center">
                    <div className="home-search-box rounded-top d-flex flex-column justify-content-between">
                        <div className='row row-cols-1 row-cols-md-3 m-0 px-5 pt-5 container-sm'>
                            {
                                this.state.card.map((card) =>
                                    <Card key={card.id} 
                                        titolo={card.titolo}
                                        descrizione={card.descrizione}
                                        img={card.img}
                                        link={card.link}
                                        />
                                )
                            }
                            <div className="col p-4">
                                <div className="card flex-column d-flex justify-content-between aling-items-center h-100">
                                    <button className="h-25 w-auto rounded m-2 p-0 d-flex justify-content-center align-items-center fs-5 bg-light p-2 border-0 w-100" type="submit">lista da 5</button>
                                    <button className="h-25 w-auto rounded m-2 p-0 d-flex justify-content-center align-items-center fs-5 bg-light p-2 border-0 w-100" type="submit">lista da 10</button>
                                    <button className="h-25 w-auto rounded m-2 p-0 d-flex justify-content-center align-items-center fs-5 bg-light p-2 border-0 w-100" type="submit">lista da 15</button>
                                    <button className="h-25 w-auto rounded m-2 p-0 d-flex justify-content-center align-items-center fs-5 bg-light p-2 border-0 w-100" type="submit">lista da 20</button>
                                </div>
                            </div>
                        </div>
                        <div className='home-search-page py-2'>
                            <nav aria-label="Page navigation example" className='d-flex justify-content-center align-items-center'>
                                <ul className="pagination">
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true" className='text-black'>&laquo;</span>
                                        </a>
                                    </li>
                                    <li className="page-item"><a className="page-link text-black" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link text-black" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link text-black" href="#">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true" className='text-black'>&raquo;</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App