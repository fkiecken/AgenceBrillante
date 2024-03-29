import Card from '.'
import { render, screen, fireEvent } from '@testing-library/react'

describe('Card Component', () => {
  test('Should render without crash', async () => {
    render(<Card />)
  })
  test('Card uses his image', () => {
    render(<Card src={Card.defaultProps.picture} />)
    const imageCard = screen.getByRole('img')
    expect(imageCard).toHaveAttribute('src', '../../assets/img/pitre.png')
  })
  test('Card uses his titleProps', () => {
    const title = 'Mon freelance de qualité supérieur'
    render(<Card title={title} />)
    const titleCard = screen.getByTestId('testTitle')
    expect(titleCard.textContent).toBe(title)
  })
  test('Title change when we add it on favorite', () => {
    render(<Card />)
    const title = '⭐ Mon titre par défaut ⭐'
    const button = screen.getByRole('button')
    fireEvent.click(button)
    const titleCard = screen.getByTestId('testTitle')
    expect(titleCard.textContent).toBe(title)
  })
})
