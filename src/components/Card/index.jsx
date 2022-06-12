import PropTypes from 'prop-types'
import React from 'react'
import styledComponents from 'styled-components'

const CardLabel = styledComponents.span`
    font-weight: bold;
`

const ImageCard = styledComponents.img`
    width: 100px;
    height: 100px;
`

const ContainerCard = styledComponents.div`
    width: 150px;
    height: 220px;
    background-color: rgb(233, 233, 233);
    margin: 10px;
    border-radius: 15px;
    text-align: center;
    font-family: Arial;
    &:hover {
        cursor: pointer;
        -webkit-box-shadow: 2px 2px 18px -9px #e2e3e9; 
        box-shadow: 2px 2px 10px #e2e3e9;
    }
`


function Card({ label, title, picture}) {
    return (
        <ContainerCard>
            <br/><CardLabel>{ label }</CardLabel><br/><br/>
            <ImageCard src={picture} alt="freelance"/><br/><br/>
            <span>{ title }</span>
        </ContainerCard>
    )
}

Card.propTypes = {
    label : PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
}

Card.defaultProps = {
    title: 'Mon titre par défaut',
    label: 'Mon label par défaut',
    picture : '../../assets/img/pitre.png'
}

export default Card