import React, {Component} from 'react';
import Gallery from './Gallery.js'

class Container extends Component {

    constructor({keyWord, apiKey}) {
        super();
        this.state = {
            loading: true,
            photosURL: [],
            noMatch: false
        };
        this.PerPage = 24;
        this.keyWord = keyWord ;
        this.apiKey = apiKey;
    }

    queryFlicker() {
         fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.apiKey}&tags=${this.keyWord}&per_page=${this.PerPage}&format=json&nojsoncallback=1`)
            .then( res => res.json() )
            .then( data => data.photos.photo )
            .then( data => data.map( infos =>
                `https://farm${infos.farm}.staticflickr.com/${infos.server}/${infos.id}_${infos.secret}.jpg` ))
            .then( data =>
                this.setState({
                    photosURL: data,
                    loading: false,
                    noMatch: data.length === 0
                })
            )
            .catch( err => console.log("Error" + err) )
    }

    componentDidMount() {
        if ( this.keyWord ) {
            this.queryFlicker();
        }
    }

    render() {

        if ( this.keyWord ) {
            return  <Gallery
                photos={this.state.photosURL}
                loading={this.state.loading}
                noMatch={this.state.noMatch} />
        } else {
            return null
        }
    }
}

export default Container;
