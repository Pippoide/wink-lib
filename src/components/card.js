import { Component } from "react";
import img from '../image/libreria.jpg';

class Card extends Component {

    render() {
        return (
            <div className="col p-4">
            <a className="card text-black text-decoration-none" target="_blank" href={this.props.link}>
                <img src={this.props.img} className="card-img-top" alt="..."></img>
                <div className="card-body rounded-pill">
                    <h5 className="card-title text-capitalize">{this.props.titolo}</h5>
                    <p className="word-break card-text">
                        {this.props.descrizione}
                    </p>
                </div>
            </a>  
        </div>
        );
    }
}
export default Card