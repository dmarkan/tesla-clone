import React from 'react';
import styledComponents from 'styled-components';
import Section from './Section';

function Home() {
  return (
      <Container>
    <Section  //props
      title = "Model S"
      description = "Order Online for Touchless Delivery"
      backgroundImg = "model-s.jpg"
      leftBtnText = "Custom Order"
      rightBtnText = "Existing Inventory"
    />
    <Section
      title = "Model Y"
      description = "Order Online for Touchless Delivery"
      backgroundImg = "model-y.jpg"
      leftBtnText = "Custom Order"
      rightBtnText = "Existing Inventory"
    />
    <Section
      title = "Model 3"
      description = "Order Online for Touchless Delivery"
      backgroundImg = "model-3.jpg"
      leftBtnText = "Custom Order"
      rightBtnText = "Existing Inventory"
    />
     <Section
      title = "Model X"
      description = "Order Online for Touchless Delivery"
      backgroundImg = "model-x.jpg"
      leftBtnText = "Custom Order"
      rightBtnText = "Existing Inventory"
    />
    </Container>
  )
}

export default Home;

const Container = styledComponents.div`
    height: 100vh;
`