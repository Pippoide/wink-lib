import React from 'react';
import ReactDOM from 'react-dom';
//
import './style/index.css';
//
import Card from './components/card';
import img from './image/libreria.jpg';
//
import reportWebVitals from './reportWebVitals';
//tutti gli svg sono presi da FontAwesome
//ho provato a implementare l'api di Fontawesome
//ma non ci sono riuscito perciò ho optato per le path svg

ReactDOM.render(
    <React.StrictMode>
        <div className='home d-flex flex-column p-0 m-0'>
            <div className="home-nav d-flex flex-column justify-content-center align-items-center">
                <nav className="navbar navbar-light p-0">
                    <div className=" container-fluid p-3 flex-column">
                        <p className="h1 text-light fs-1 fw-bold mb-3">Cerca il tuo libro ideale</p>
                        <form className="d-flex flex-row align-items-center pt-3">
                            <input className="home-nav-input d-flex text-center border-0 py-2 px-5 mx-2 fs-6 rounded-pill" type="search" placeholder="cerca il titolo del libro" aria-label="Search"></input>
                            <button className="d-flex justify-content-center bi bi-search fw-bold fs-5 bg-light p-2 rounded-circle border-0" type="submit"></button>
                        </form>
                    </div>
                </nav>
            </div>
            <div className="home-search container-sm d-flex flex-column align-items-center">
                <div className="home-search-box rounded-top d-flex flex-column justify-content-between">
                    <div className='row row-cols-1 row-cols-md-3 m-0 px-5 pt-5 container-sm'>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
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

    </React.StrictMode >,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
