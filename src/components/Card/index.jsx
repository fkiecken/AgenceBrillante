import PropTypes from 'prop-types'
import React from 'react'
import {styles} from './style'
import { Component } from 'react'

class Card extends Component {

  constructor(props) {
    super(props)
    this.state = {
      freelanceIsFavorite: false,
    }
  }

  addToFavorite = () => {
    if(this.state.freelanceIsFavorite === false) {
      this.setState({ freelanceIsFavorite: true})
    } else {
      if(this.state.freelanceIsFavorite === true) {
        this.setState({freelanceIsFavorite: false})
      }
    }
  }

  render() {

    const {label, picture, title} = this.props

    return (
      <styles.ButtonCard onClick={() => this.addToFavorite()}>
      <styles.ContainerCard>
        <br />
        <styles.CardLabel>{label}</styles.CardLabel>
        <br />
        <styles.ImageCard src={picture} alt="freelance" />
        <br />
        <br />
        <span data-testid="testTitle">
          {this.state.freelanceIsFavorite === true ? '⭐ ' + title + ' ⭐' : title}
        </span>
      </styles.ContainerCard>
    </styles.ButtonCard>
    )

  }

}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}

Card.defaultProps = {
  title: 'Mon titre par défaut',
  label: 'Mon label par défaut',
  picture: '../../assets/img/pitre.png',
}

export default Card
