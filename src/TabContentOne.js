
import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import pic from "./images/tab-1-pic.png";
import { generateMedia } from "styled-media-query";
import "./tab2style.css"
function TabContentOne() {
  return (
    <TabOneContainer>
      <TabOneContent>
        <span>
          If you decide Cineflix isn't for you - no problem. No commitment.
          Cancel online anytime. <br />
        </span>
        <Image className = "mobile" src={pic}></Image>
      </TabOneContent>
    </TabOneContainer>
  );
}

export default TabContentOne;

const customMedia = generateMedia({
  lgDesktop: "1350px",
  mdDesktop: "1150px",
  tablet: "960px",
  smTablet: "740px",
});

const TabOneContainer = styled.div`
  padding: 0 5rem !important;
  ${customMedia.lessThan("tablet")`
      padding: 0rem !important; 
    `}

`;

const TabOneContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  align-items: center;
  font-size: 2rem;
  padding: 2.5rem;
  ${customMedia.lessThan("tablet")`
    font-size: 1.5rem;
  padding: 2rem;
    grid-template-columns: repeat(1, 1fr);
    `}
`;
const Image = styled.img`
  width: 31.875rem;
  ${customMedia.lessThan("tablet")`
     width: 20.875rem;
  `}
`;