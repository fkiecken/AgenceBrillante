import styledComponents from "styled-components"

const ContainerResult = styledComponents.div`
width: 60%;
height: auto;
margin: auto;
margin-top: 60px;
border: 1px solid;
border-color: #e9e9e9;
border-radius: 30px;
background-color: #fcfcfc;
text-align: center;
`

const ContainerTitle = styledComponents.div`
width: 50%;
margin: 0 auto;
margin-top: 60px;
`

const NeededCompetences = styledComponents.span`
color: #a0cecb;
font-size: 24px;
`

const TitleH2 = styledComponents.span`
color: black;
font-size: 24px;
`

const ButtonChooseFreelance = styledComponents.button`
width: 300px;
height: 25px;
background-color: #a0cecb;
border-radius: 30px;
border: none;
color: white;
margin: 40px;
cursor:pointer;
`

const ContainerCompetenceDescription = styledComponents.div`
width: 80%;
height: auto;
margin: 0 auto;
`

const TitleDescription = styledComponents.h2`
color: #a0cecb;
`

function Result() {
    return (
        <ContainerResult>
            <ContainerTitle>
                <TitleH2>Les compétences dont vous avez besoin : </TitleH2><NeededCompetences>UX Design, Frontend, Backend</NeededCompetences>
                <ButtonChooseFreelance>Choisir quelqu'un possédant ses compétences !</ButtonChooseFreelance>
            </ContainerTitle>
            <ContainerCompetenceDescription>
                <TitleDescription>UX Design</TitleDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia nec risus eu fringilla. Phasellus dapibus nunc metus, eget lobortis nisi porta in. In felis tellus, condimentum eget commodo in, finibus id dui. Sed congue enim sed magna rhoncus, eget venenatis nunc pellentesque. Integer a odio congue, faucibus nunc sed, blandit elit. Nam sed quam sed libero mollis consectetur et eget lectus. Proin rutrum ante nec ex pharetra, sed eleifend mauris eleifend.
                <TitleDescription>Frontend</TitleDescription>
                Mauris eget iaculis nisl. Proin sit amet nunc volutpat, fermentum nibh in, iaculis felis. Ut sit amet urna diam. Quisque ornare mauris libero, vitae lobortis ex pellentesque in. Vivamus vulputate viverra pulvinar. Praesent ultricies lacus id ex rhoncus, in eleifend eros commodo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum pharetra diam ut nunc accumsan elementum.
                <TitleDescription>Backend</TitleDescription>
                Ut sagittis sodales interdum. Aliquam tincidunt, dui id ullamcorper blandit, sem nunc auctor libero, non laoreet ex magna id ipsum. Vivamus accumsan ipsum in aliquet vestibulum. Etiam hendrerit dignissim augue ac condimentum. Donec efficitur pulvinar fermentum. Vivamus gravida lacinia ex sit amet blandit. Vestibulum in dictum leo, vitae sollicitudin arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus.
            </ContainerCompetenceDescription>
            <br/><br/>
        </ContainerResult>
    )
}

export default Result