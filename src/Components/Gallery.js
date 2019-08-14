import React from 'react';
import Photo from './Photo.js'

const Gallery = ({photos, loading, noMatch}) => {
    return (
        <div className="photo-container">
            <h2>
                { 
                    loading
                        ? 'Loading...'
                        : noMatch
                            ? 'No Match !'
                            : <h6>Your searched results...</h6>
                }
            </h2>
            <ul>
                {
                    photos.map( (url, kiyana) => <Photo src={url} key={kiyana}/> )
                }
            </ul>
        </div>
    )
}

export default Gallery;
