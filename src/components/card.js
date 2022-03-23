import { Component } from "react";
import img from '../image/libreria.jpg';

class Card extends Component {

    render() {
        return (
            <div className="col p-4">
            <div className="card">
                <img src={img} className="card-img-top" alt="..."></img>
                <div className="card-body rounded-pill">
                    <h5 className="card-title text-capitalize">titolo</h5>
                    <p className="word-break card-text">
                        Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Doloribus temporibus
                    </p>
                </div>
            </div>  
        </div>
        );
    }
}
export default Card