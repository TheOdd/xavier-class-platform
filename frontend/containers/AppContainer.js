import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Main from '../components/Main'
import RenderedPreview from '../components/RenderedPreview'
import Editor from '../components/Editor'

const AppContainer = ({ code, dispatch }) => (
    <div>
        <Main code={code} />
        <Editor dispatch={dispatch} code={code}/>
        <RenderedPreview />
    </div>
)

AppContainer.propTypes = {
    code: PropTypes.string
}

const mapStateToProps = state => ({
    code: state.code
})

const mapDispatchToProps = dispatch => ({
    dispatch: dispatch
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer)