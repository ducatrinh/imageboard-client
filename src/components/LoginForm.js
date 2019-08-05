import * as React from 'react'

export default function LoginForm(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <label>
                Email:
                <input type="text" name="email" onChange={props.onChange} value={props.values.email} />
            </label>

            <label>
                Password:
                <input type="text" name="password" onChange={props.onChange} value={props.values.password} />
            </label>

            <button type="submit">Login</button>
        </form>)
}