
import React, { Component } from 'react'
import Categories from './Categories';
import Products from './Products';

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

                    <div className="container">
                        <div className="row">
                            {this.state.categories.map((element) => {
                                return <div className="col-md-4 my-2">

                                 <Categories catename={element.name_json.english} cateid={element.id} />

                                    {element.products.map((subdata) => {
                                        return <>

                                    <Products proname={subdata.name_json.english} proid={subdata.id} price={subdata.price} prodes={subdata.description_json.english}/>
                                        </>

                                    })}

                                </div>

                            })}
                        </div>
                    </div>
                </div>

            </div>


        )
    }
}

export default News
