import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import JWTdecode from 'jwt-decode'
import { logout, getToken } from '../../services/auth'

import XDKMenu from '../XDKMenu'

import Aluno from '../../design/svg/aluno.svg'

import './index.css'

const XDKGrid = ({
	pageTitle, gridTemplate,
	header, headerClass,
	nav, navClass,
	main, mainClass,
	footer, footerClass,
}) => {
	const handleKeyDown = (event) => {
		if (event.keyCode === 13) {
			logout()
		} // if
	} // handleKeyDown

	// eslint-disable-next-line no-return-assign
	return (
		<main className={gridTemplate || 'grid-template'}>
			<header className={`grid-header flex${headerClass}`}>
				{ header || (
					<header className="main-header">
						<h1>{pageTitle}</h1>
					</header>
				)}
			</header>
			<nav className={`grid-nav flex column nowrap ${navClass}`}>
				{nav || (
					<>
						<img
							src={Aluno}
							alt="Avatar"
							className="nav-avatar-image"
						/>
						<p className="nav-user-name">
							{ JWTdecode(getToken()).usrName || 'Usuário' }
						</p>
						<ul className="nav-menu">
							<Link to="/inicio">
								<li>
									<FontAwesomeIcon icon={faHome} />
									&nbsp;Início
								</li>
							</Link>
							<li style={{ opacity: '0.4', pointerEvents: 'none' }}>
								<FontAwesomeIcon icon={faCog} />
								&nbsp;Configurações
							</li>
							<li onClick={() => logout()} onKeyDown={handleKeyDown}>
								<FontAwesomeIcon icon={faSignOutAlt} />
								&nbsp;Sair
							</li>
						</ul>
					</>
				)}
			</nav>
			<main className={`grid-main flex  ${mainClass || ''}`}>
				{ main || <></> }
			</main>
			<footer className={`grid-footer flex ${footerClass}`}>
				{ footer || (
					<>
						<div className="footer" />
						<XDKMenu />
					</>
				)}
			</footer>
		</main>
	) // return
} // XDKGrid

XDKGrid.defaultProps = {
	pageTitle: (<></>),
	gridTemplate: '',
	header: '',
	headerClass: '',
	nav: '',
	navClass: '',
	main: '',
	mainClass: '',
	footer: '',
	footerClass: '',
}

XDKGrid.propTypes = {
	pageTitle: PropTypes.node,
	gridTemplate: PropTypes.string,
	header: PropTypes.node,
	headerClass: PropTypes.string,
	nav: PropTypes.node,
	navClass: PropTypes.string,
	main: PropTypes.node,
	mainClass: PropTypes.string,
	footer: PropTypes.node,
	footerClass: PropTypes.string,
}

export default XDKGrid
