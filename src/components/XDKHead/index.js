import React from 'react';
import Helmet from 'react-helmet'

const XDKHead = ({ title, description, robots, keywords, image }) => {
    return (
        <Helmet>
            {/* Configurações básicas */}
            <title>Anhanguera Taubaté - { title }</title>

            {/* Configurações básicas dos mecanismos de busca */}
            <meta name="description" content={ description } />
            <meta name="robots" content={ robots } />{/* index, follow */}
            <meta name="keywords" content={ keywords } />
            <meta name="image" content={ image } />

            {/* Configurações do Schema.org para o Google */}
            <meta itemProp="name" content={`Anhanguera Taubaté - ${ title }`} />
            <meta itemProp="description" content={ description } />
            <meta itemProp="image" content={ image } />

            {/* Configurações de compatibilidade com o Open Graph social media (Facebook, Instagram, etc) */}
            <meta property="og:url" content={ document.location.href } />
            <meta property="og:title" content={ title } />
            <meta property="og:description" content={ description } />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="pt-br" />
            <meta property="og:image:secure_url" content={ image } />
            <meta property="og:image" content={ image } />
            <meta name="fb:admins" content="anhanguerataubate" />

            {/* Configuração de compatibilidade com o Twitter social media */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:description" content={ description } />
            <meta name="twitter:title" content={ title } />
            <meta name="twitter:site" content="@anhanguerataubate" />
            <meta name="twitter:image" content={ image } />
            <meta name="twitter:creator" content="@anhanguerataubate" />

            {/* Configuração para dispositivos móveis */}
            <meta name="theme-color" content="#313131" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="mobile-web-app-capable" content="yes" />
            <link rel="manifest" href="" />

            {/* Ícones do site */}
            <link rel="apple-touch-icon-precomposed" sizes="180x180" href="" />
            <link rel="icon" type="image/png" sizes="32x32" href="" />
            <link rel="icon" type="image/png" sizes="16x16" href="" />
            <link rel="shortcut icon" href="" />
        </Helmet>
    ) // return
} // XDKHead

export default XDKHead