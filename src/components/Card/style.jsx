import styledComponents from 'styled-components'

const CardLabel = styledComponents.div`
    font-weight: bold;
    height: 30px;
`
const ImageCard = styledComponents.img`
    width: 100px;
    height: 100px;
    border-radius: 50% 20% / 10% 40%;
`
const ContainerCard = styledComponents.div`
    color: #ffffff;
    width: 150px;
    height: 220px;
    background-color: #a0cecb;
    box-shadow: inset 0 0 0 0 #7c6d51;
    margin: 10px;
    border-radius: 15px;
    text-align: center;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    transition: color 0.3s ease-in-out, box-shadow 3s ease-in-out;
    text-align: center;
    &:hover {
        cursor: pointer;
        font-size: 14px;
        font-family: Arial, Helvetica, sans-serif;
        box-shadow: inset 400px 0 0 0 #7c6d51;
        color: white;
    }
`
const ButtonCard = styledComponents.button`
border: none;
background: none;
`

export const styles = {
    ButtonCard: ButtonCard,
    ContainerCard: ContainerCard,
    ImageCard: ImageCard,
    CardLabel: CardLabel
}