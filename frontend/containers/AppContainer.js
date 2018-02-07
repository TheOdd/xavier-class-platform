import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Main from '../components/Main'
import RenderedPreview from '../components/RenderedPreview'
import Editor from '../components/Editor'

const AppContainer = ({ flipSwitch, code, dispatch }) => (
    <div>
        <Main />
        <Editor dispatch={dispatch} />
        <RenderedPreview code={code} flipSwitch={flipSwitch} />
    </div>
)

AppContainer.propTypes = {
    code: PropTypes.string,
    flipSwitch: PropTypes.bool
}

const mapStateToProps = state => ({
    code: state.code,
    flipSwitch: state.flipSwitch
})

const mapDispatchToProps = dispatch => ({
    dispatch: dispatch
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer)