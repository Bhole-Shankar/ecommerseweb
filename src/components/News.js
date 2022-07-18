
import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {


    constructor(props) {
        super(props);
        console.log("constructor");
        this.state = {
            categories: [],
            loading: true,
            page: 1,
        }
    }
    async componentDidMount() {
        const url = "https://myqa.fleksa.com/pyapi/26/menu";

        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            categories: parsedData.categories,
            loading: false,
        })
    }
    render() {
        console.log("render");
        return (
            <div>
                <div className="container my-3" style={{ margintop: "100px" }}>
                    <h3>News Headlines</h3>
                    {/* <div className="d-flex justify-content-center"> { this.state.loading && <Spinner/>}</div> */}

                    <div className="container">
                        <div className="row">
                            {this.state.categories.map((element) => {
                                return <div className="col-md-4 my-2" key={element.id}>

                                    <Newsitem name={element.name_json.english ? element.name_json.english : ""} price = {element?.[0].products.price} id={element.id ? element.id : "unknown price"} /></div>
                           
                           })}
                        </div>
                    </div>
                </div>

            </div>


        )
    }
}

export default News
