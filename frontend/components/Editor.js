import React, { Component } from 'react'

import brace from 'brace'
import AceEditor from 'react-ace'

import 'brace/mode/javascript'
import 'brace/theme/monokai'

export default class Editor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: props.code,
            theme: 'monokai',
            mode: 'javascript',
            enableBasicAutocompletion: false,
            enableLiveAutocompletion: false,
            fontSize: 14,
            showGutter: false,
            showPrintMargin: false,
            highlightActiveLine: true,
            enableSnippets: false,
            showLineNumbers: true
        }
    }

    onLoad() {
        console.log('Editor has loaded!')
    }

    onChange(newValue) {
        this.props.dispatch({
            code: newValue,
            type: 'UPDATE_CODE'
        })
    }

    onSelectionChange(newValue, event) {

    }

    onCursorChange(newValue, event) {

    }

    onValidate(annotations) {

    }

    setTheme(e) {
        this.setState({
            theme: e.target.value
        })
    }

    setMode(e) {
        this.setState({
            mode: e.target.value
        })
    }

    setBoolean(name, value) {
        this.setState({
            [name]: value
        })
    }

    setFontSize(e) {
        this.setState({
            fontSize: parseInt(e.target.value,10)
        })
    }

    render() {
        return (
            <AceEditor
              mode={this.state.mode}
              theme={this.state.theme}
              name="mainEditor"
              onLoad={this.onLoad}
              onChange={newValue => this.onChange(newValue)}
              onSelectionChange={() => this.onSelectionChange}
              onCursorChange={() => this.onCursorChange}
              onValidate={() => this.onValidate}
              value={this.props.code}
              fontSize={this.state.fontSize}
              showPrintMargin={this.state.showPrintMargin}
              showGutter={this.state.showGutter}
              highlightActiveLine={this.state.highlightActiveLine}
              setOptions={{
                enableBasicAutocompletion: this.state.enableBasicAutocompletion,
                enableLiveAutocompletion: this.state.enableLiveAutocompletion,
                enableSnippets: this.state.enableSnippets,
                showLineNumbers: this.state.showLineNumbers,
                tabSize: 4,
            }}/>
        )
    }
}