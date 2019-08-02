import * as React from 'react'

export default function CreateForm(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <label>
                Url:
                <input type="text" name="url" onChange={props.onChange} value={props.values.url} />
            </label>

            <label>
                Title:
                <input type="text" name="title" onChange={props.onChange} value={props.values.title} />
            </label>

            <button type="submit">Add</button>
        </form>)
}