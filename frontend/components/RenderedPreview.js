import React, { Component } from 'react'
import renderHTML from 'react-render-html'

const htmlTemplate = `
    <h1>Test</h1>
`

export default class RenderedPreview extends Component {
    constructor(props) {
        super(props)
        try {
            eval(props.code)
        } catch (err) {
            
        }
    }

    componentWillReceiveProps(nextProps) {
        try {
            eval(nextProps.code)
            this.forceUpdate()
        } catch (err) {

        }
    }

    render() {
        return (
            <div id="preview">
                {renderHTML(htmlTemplate)}
            </div>
        )
    }
}