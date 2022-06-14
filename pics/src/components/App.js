import React from "react";
import axios from 'axios';
import SearchBar from "./SearchBar";

class App extends React.Component{
    onSearchSubmit(term){
        console.log(term)
        axios.get('https://api.unsplash.com/search/photos', {
            params: {query: term},
            headers:{
                Authorization: 'Client-ID 7NYSVOrf4o1J2GYyi_BMT1y7-kx81JPBn94PkNcUkXM'            
            }
        }).then((response)=>{
            console.log(response);

        });
    }

    render() {
        return (
            <div className='ui container' style={{ marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
}

export default App;