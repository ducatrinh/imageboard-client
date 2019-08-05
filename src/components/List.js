import * as React from 'react'
import CreateFormContainer from './CreateFormContainer';
import LoginFormContainer from './LoginFormContainer';

export default function List(props) {
    const { images, user } = props

    return (
        <div>
            {!user && <LoginFormContainer />}
            {user && <CreateFormContainer />}
            {images && images.map(image => 
                <div key={image.title}>
                    <h3>{image.title}</h3>
                    <img src={image.url} alt={image.title}></img>
                </div>
            )}
        </div>
    )
}