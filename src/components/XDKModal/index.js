import React from 'react'
import { CSSTransition } from "react-transition-group";

import './index.css'

const XDKModal = ({ isShowing, hide, closable, header, body, footer }) => (
	<>
		<CSSTransition in={ isShowing } timeout={ 300 } classNames="modal-overlay" unmountOnExit>
			<div className="modal-overlay" onClick={closable ? hide : null} />
		</CSSTransition>
		<CSSTransition in={ isShowing } timeout={ 300 } classNames="modal" unmountOnExit>
			<div className="modal-wrapper">
				<div className="modal" aria-modal aria-hidden tabIndex={ -1 } role="dialog">
					<header className="modal-header">
						{ header }
						{
							closable ? (
								<button 
									type="button" 
									className="modal-close-button" 
									data-dismiss="modal" 
									aria-label="Close" 
									onClick={ hide }
								>
									<span aria-hidden="true">&times;</span>
								</button>
							) : null
						}
					</header>
					<section className="modal-body">{ body }</section>
					<footer className="modal-footer">{ footer }</footer>
				</div>
			</div>
		</CSSTransition>
	</>
)

export default XDKModal