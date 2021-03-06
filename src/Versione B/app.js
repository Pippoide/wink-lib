import { Component } from "react";
import Card from "./card";
import Axios from "axios";

class App extends Component {
    state = {
        viewMaxBook: 5,
        ricerca: "",
        card: [],
        pageMax: 8,
        indexPage: 0,
        inputOpen : false
    }

    checkBook = (ricerca) => {
        Axios.get("https://www.googleapis.com/books/v1/volumes?q=" + ricerca + "&key=" + process.env.REACT_APP_API_KEY_BOOK + "&maxResults=40").then(response => {
            var cardNull = [];
            this.setState({ card: cardNull })
            var descrizioneCheck
            var imgCheck
            console.log(response.data.items)
            var indexMax = this.state.indexPage + this.state.viewMaxBook
            if(indexMax>40){indexMax=40}//per evitare bug a causa della lista per 15 che genera indexmax = 45
            console.log(indexMax)
            for (var i = this.state.indexPage; i < indexMax; i++) {
                if (response.data.items[i].volumeInfo.description == undefined) {
                    descrizioneCheck = "Descrizione non disponibile";
                }
                else {
                    descrizioneCheck = response.data.items[i].volumeInfo.description
                }
                if (response.data.items[i].volumeInfo.imageLinks == undefined) {
                    //.imagelink e non thumbnail - link a una foto generica nera con scitta "copertina non disponibile"
                    imgCheck = "https://books.google.it/googlebooks/images/no_cover_thumb.gif"
                }
                else{
                    imgCheck = response.data.items[i].volumeInfo.imageLinks.thumbnail
                }
                const book = {
                    id: i,
                    titolo: response.data.items[i].volumeInfo.title,
                    descrizione: descrizioneCheck,
                    img: imgCheck,
                    link: response.data.items[i].volumeInfo.infoLink
                };
                this.state.card.push(book);
                this.setState({ ricerca: ricerca })
            }
            console.log(this.state.card);
        }
        )
    }
    giveInputValue = (event) => {
        const ricerca = event.target.value;
        this.checkBook(ricerca);
    }
    setViewmax = (view) => {
        this.setState({ viewMaxBook: view });
        this.setState({ indexPage: 0 })
        var x = 40 / view;
        x = x.toFixed()
        x = parseInt(x)
        this.setState({ pageMax: x });
        this.checkBook(this.state.ricerca);
    }
    setPageIndex = (index) => {
        //-1 = commando di pagina indientro
        //-2 = commando di pagina avanti
        //viewMaxBook viente trattato in modo particolare perch?? 40 (max libri restituiti da Google API Book) / 15 = 2.6 perci?? non pu?? essere gestita in modo dinamico diversamente dalle altre pagine
        if (this.state.viewMaxBook == 15) {
            if (index == -1) {
                if (this.state.indexPage > 0) {
                    this.setState({ indexPage: (this.state.indexPage - 15) })
                }
            }
            else {
                if (index == -2) {
                    console.log(this.state.indexPage)
                    console.log(this.state.indexPage>this.state.pageMax)
                    if ((this.state.indexPage+15)>40) {
                        global.alert("non ci sono altri elementi")
                    }
                    else {
                        this.setState({ indexPage: (this.state.indexPage + 15) })
                    }
                }
                else {
                    if (index == 2) {
                        this.setState({ indexPage: 15 })
                    }
                    else {
                        if (index == 3) {
                            this.setState({ indexPage: 30 })
                        }
                        else {
                            //per index == 1
                            var startIndexView = (index * this.state.viewMaxBook)
                            if (startIndexView >= 39) {
                                startIndexView -= this.state.viewMaxBook
                            }
                            this.setState({ indexPage: startIndexView })
                        }
                    }

                }
            }
        }
        else {
            switch (index) {
                case -1:
                    var x = this.state.indexPage - this.state.viewMaxBook;
                    if (x >= 0) {
                        this.setState({ indexPage: x })
                    }
                    else {
                        global.alert("sono questi i primi risultati")
                    }
                    break;
                case -2:
                    var x = this.state.indexPage + this.state.viewMaxBook;
                    console.log(x)
                    if (x >= 39) {
                        global.alert("non ci sono altri risultati diponibili")
                    }
                    else {
                        this.setState({ indexPage: x })
                    }
                    break;
                default:
                    var startIndexView = (index * this.state.viewMaxBook)
                    if (startIndexView >= 39) {
                        startIndexView -= this.state.viewMaxBook
                    }
                    this.setState({ indexPage: startIndexView })
                    break;
            }
        }
        this.checkBook(this.state.ricerca)
    }
    openHomeSearch = (x) =>{
        this.setState({inputOpen:true})
    }
    render() {
        return (
            <div className='home position-relative d-flex flex-column flex-direction-column p-0 m-0'>
                <div className={this.state.inputOpen ? "home-nav h-50 d-flex flex-column justify-content-center align-items-center":"home-nav h-100 d-flex flex-column justify-content-center align-items-center"}>
                    <nav className="navbar navbar-light p-0">
                        <div className=" container-fluid p-0 flex-column">
                            <p className="h1 text-light fs-1 fw-bold mb-3 text-center">Cerca un libro tramite l'API di Google Book</p>
                            <div className="d-flex flex-row align-items-center pt-3">
                                <input onClick={()=>this.openHomeSearch(true)} onChange={(event) => this.giveInputValue(event)} className="home-nav-input d-flex text-center border-0 py-2 px-5 mx-2 fs-6 rounded-3" type="search" placeholder="inserisci il titolo del libro" aria-label="Search"></input>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className={this.state.inputOpen ? 'open-homesearch home-search position-absolute container-sm d-flex flex-column align-items-center':'home-search position-absolute container-sm d-flex flex-column align-items-center'} >
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
                                    <button className="h-25 w-auto rounded m-2 p-0 d-flex justify-content-center align-items-center fs-6 bg-light p-2 border-0 w-100" type="submit" onClick={() => this.setViewmax(5)}>lista da 5</button>
                                    <button className="h-25 w-auto rounded m-2 p-0 d-flex justify-content-center align-items-center fs-6 bg-light p-2 border-0 w-100" type="submit" onClick={() => this.setViewmax(10)}>lista da 10</button>
                                    <button className="h-25 w-auto rounded m-2 p-0 d-flex justify-content-center align-items-center fs-6 bg-light p-2 border-0 w-100" type="submit" onClick={() => this.setViewmax(15)}>lista da 15</button>
                                    <button className="h-25 w-auto rounded m-2 p-0 d-flex justify-content-center align-items-center fs-6 bg-light p-2 border-0 w-100" type="submit" onClick={() => this.setViewmax(20)}>lista da 20</button>
                                </div>
                            </div>
                        </div>
                        <div className='home-search-page py-2'>
                            <nav aria-label="Page navigation example" className='d-flex justify-content-center align-items-center'>
                                <ul className="pagination">
                                    <li className="page-item">
                                        <a className="page-link" onClick={(index) => this.setPageIndex(-1)} aria-label="Previous">
                                            <span aria-hidden="true" className='text-black'>&laquo;</span>
                                        </a>
                                    </li>
                                    <li className="page-item"><a className="page-link text-black" onClick={(index) => this.setPageIndex(0)}>1</a></li>
                                    <li className="page-item"><a className="page-link text-black" onClick={(index) => this.setPageIndex(2)}>2</a></li>
                                    <li className="page-item"><a className="page-link text-black" onClick={(index) => this.setPageIndex(this.state.pageMax)}>ultima pagina</a></li>
                                    <li className="page-item">
                                        <a className="page-link" onClick={(index) => this.setPageIndex(-2)} aria-label="Next">
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