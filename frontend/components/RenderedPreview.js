import React, { Component } from 'react'
import renderHTML from 'react-render-html'
import uuidv1 from 'uuid/v1'

const htmlTemplate = `
    <h1>Test</h1>
`

const oldLog = console.log

export default class RenderedPreview extends Component {
    constructor(props) {
        super(props)
        const newState = []
        try {
            console.log = function (msg) {
                newState.push(msg)
            }.bind(this)
            eval(props.code)
        } catch (err) {
            console.log = function (msg) {
                newState.push(msg)
            }.bind(this)
            console.log(err)
        } finally {
            this.state = {
                logMessages: newState
            }
            console.log = oldLog
        }
    }

    componentWillReceiveProps(nextProps) {
        const newState = []
        try {
            console.log = function (msg) {
                newState.push(msg)
            }.bind(this)
            eval(nextProps.code)
        } catch (err) {
            console.log = function (msg) {
                newState.push(msg)
            }.bind(this)
            console.log(err)
        } finally {
            this.setState({
                logMessages: newState
            })
            console.log = oldLog
        }
    }

    render() {
        return (
            <div id="preview">
                <ul>
                    {this.state.logMessages.map(msg => (
                        <li key={uuidv1()}>{msg}</li>
                    ))}
                </ul>
            </div>
        )
    }
}