import React, { useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import './index.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes, faExclamationTriangle, faInfoCircle } from '@fortawesome/free-solid-svg-icons'

const XDKToast = ({ isShowing, hide, type, timeout, message }) => {

    const [ timer, setTimer ] = useState(false)

    useEffect(() => {
        return clearTimeout(hide)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const setToastType = type => {
        switch(type) {
            case 'error': return { background: 'toast-error', icon: <FontAwesomeIcon icon={ faTimes } /> }
            case 'alert': return { background: 'toast-alert', icon: <FontAwesomeIcon icon={ faExclamationTriangle } /> }
            case 'success': return { background: 'toast-success', icon: <FontAwesomeIcon icon={ faCheck } /> }
            case 'info': return { background: 'toast-info', icon: <FontAwesomeIcon icon={ faInfoCircle } /> }
            case 'loading': return {
                background: 'toast-loading',
                icon: (
                    <span className="loader">
                        <svg className="circular" viewBox="25 25 50 50">
                            <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="6" strokeMiterlimit="10"/>
                        </svg>
                    </span>
                ) // icon
            } // loading
            default: return { background: 'toast-info', icon: <FontAwesomeIcon icon={ faInfoCircle } /> }
        } // switch
    } // setToastType

    return (
        <CSSTransition
            in={isShowing}
            timeout={250}
            classNames="toast"
            onEnter={() => {
                setTimeout(hide, timeout)
                setTimer(!timer)
            }} // onEnter
            onExit={() => setTimer(!timer)}
            unmountOnExit
        >
            <div className="toast">
                <div className={ `toast-wraper ${ setToastType(type).background }` }>
                    <p>
                        { setToastType(type).icon }&nbsp;&nbsp;
                        <span className={ type === 'loading' ? 'toast-message' : '' }>{message}</span></p>
                    <button type="button" className="toast-close-button" onClick={hide}>&times;</button>
                </div>
                <CSSTransition in={timer} timeout={timeout} classNames="toast-timer">
                    <div className="toast-timer"  style={{
                        transitionProperty: 'width',
                        transitionDuration: `${timeout}ms`,
                        transitionTimingFunction: 'linear'
                    }}/>
                </CSSTransition>
            </div>
        </CSSTransition>
    ) // return
} // XDKToast

export default XDKToast
