import React from 'react';
import Photo from './Photo.js'

const Gallery = ({photos, loading, noMatch}) => {
    return (
        <div className="photo-container">
            <h6>
                { 
                    loading
                        ? 'Loading...'
                        : noMatch
                            ? 'No Match !'
                            : 'Your searched results...'
                }
            </h6>
            <ul>
                {
                    photos.map( (url, kiyana) => <Photo src={url} key={kiyana}/> )
                }
            </ul>
        </div>
    )
}

export default Gallery;
