// https://intuit.udemy.com/course/react-redux/learn/lecture/12531298#overview
// import React from "react";
// import axios from 'axios';
// import SearchBar from "./SearchBar";

// class App extends React.Component{
//     onSearchSubmit(term){
//         console.log(term)
//         axios.get('https://api.unsplash.com/search/photos', {
//             params: {query: term},
//             headers:{
//                 Authorization: 'Client-ID 7NYSVOrf4o1J2GYyi_BMT1y7-kx81JPBn94PkNcUkXM'            
//             }
//         }).then((response)=>{
//             console.log(response);

//         });
//     }

//     render() {
//         return (
//             <div className='ui container' style={{ marginTop: '10px'}}>
//                 <SearchBar onSubmit={this.onSearchSubmit} />
//             </div>
//         );
//     }
// }

// export default App;

import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  async onSearchSubmit(term) {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization:
          'Client-ID 7NYSVOrf4o1J2GYyi_BMT1y7-kx81JPBn94PkNcUkXM',
      },
    });

    console.log(response.data.results);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;