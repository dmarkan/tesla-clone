import React from 'react';
import styledComponents from 'styled-components';
import Fade from 'react-reveal/Fade';

function Section({title, description, leftBtnText, rightBtnText, backgroundImg}) { //props
  return (
    <Wrap bgImage = {backgroundImg}>
    <Fade bottom>
    <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
    </ItemText>
    </Fade>
    <Buttons>
    <Fade bottom>
    <ButtonGroup>
        <LeftButton>
            {leftBtnText}
        </LeftButton>
        { rightBtnText && <RightButton>
            {rightBtnText}
        </RightButton> }
    </ButtonGroup>
    </Fade>
    <DownArrow src="images/down-arrow.svg" />
    </Buttons>
        </Wrap>
  )
}

export default Section;

const Wrap = styledComponents.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/images/${props.bgImage}")`}  //ubacujemo props
`

const ItemText = styledComponents.div`
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup = styledComponents.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const LeftButton = styledComponents.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`

const RightButton = styledComponents(LeftButton)`
    background-color: #fff;
    opacity: 0.65;
    color: #000;
`

const DownArrow = styledComponents.img`
    height: 40px;
    animation: animateDown infinite 1.5s;
    overflow-x: hidden;
`

const Buttons = styledComponents.div`

`