import {Component} from 'react'

export const Message = (props) => {
    return (
        <>
            <h1>{props.text}</h1>
        </>
    )
}

export class MessageClass extends Component {
    render () {
        return (
            <>
                <h1>{this.props.text}</h1>
            </>
        )
    }
}