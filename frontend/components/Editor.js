import React, { Component } from 'react'

import brace from 'brace'
import AceEditor from 'react-ace'

import 'brace/mode/javascript'
import 'brace/theme/monokai'

export default class Editor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            theme: 'monokai',
            mode: 'javascript',
            enableBasicAutocompletion: false,
            enableLiveAutocompletion: false,
            fontSize: 14,
            showGutter: false,
            showPrintMargin: false,
            highlightActiveLine: true,
            enableSnippets: false,
            showLineNumbers: true,
            liveReload: false
        }
    }

    toggleLiveReload() {
        this.setState({
            liveReload: !this.state.liveReload
        })
    }

    updatePreview() {
        this.props.dispatch({
            code: this.state.value,
            type: 'UPDATE_CODE'
        })
    }

    onLoad() {
        console.log('Editor has loaded!')
    }

    onChange(newValue) {
        this.setState({
            value: newValue
        })
        if (this.state.liveReload) {
            this.updatePreview()
        }
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
            <div>
                <AceEditor
                  mode={this.state.mode}
                  theme={this.state.theme}
                  name="mainEditor"
                  onLoad={this.onLoad}
                  onChange={newValue => this.onChange(newValue)}
                  onSelectionChange={() => this.onSelectionChange}
                  onCursorChange={() => this.onCursorChange}
                  onValidate={() => this.onValidate}
                  value={this.state.value}
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
                <button onClick={() => this.updatePreview()}>Run script</button>
                <button onClick={() => this.toggleLiveReload()}>Toggle Live Reload</button>
                <h5>Live Reloading: {this.state.liveReload.toString()}</h5>
            </div>
        )
    }
}