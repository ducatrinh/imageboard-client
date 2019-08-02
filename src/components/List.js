import * as React from 'react'
import CreateFormContainer from './CreateFormContainer';

export default function List(props) {
    const { images } = props

    return (
        <div>
            {!images && 'Loading images...'}
            {images && <CreateFormContainer />}
            {images && images.map(image => 
                <div key={image.title}>
                    <h3>{image.title}</h3>
                    <img src={image.url} alt={image.title}></img>
                </div>
            )}
        </div>
    )
}