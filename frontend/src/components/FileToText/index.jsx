import React, { useEffect, useState } from "react";
import {
  Container,
  ImgDiv,
  DrawerContainer,
  MainContainer,
  NavBarContainer,
  Title,
  SideBarContentContainer,
  Button,
  ConvertedContentContainer,
} from "./style";
import FileInput from "./FileUploader/upload";
import { CustomDropdown } from "./CustomDropDown";

export const FileToText = () => {
  const [expanded, setExpanded] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [fileToConvert, setFileToConvert] = useState(null);
  const [ convertedDataAvailable , setConvertedDataAvailable ] = useState(false);
  return (
    <Container>
      <DrawerContainer expanded={expanded}>
        <NavBarContainer>
          <Title>ASR</Title>
          <ImgDiv onClick={() => setExpanded(!expanded)} expanded={expanded}>
            <img
              src="/Icons/unexpanded.png"
              alt="unexpanded"
              width={"100%"}
              height={"100%"}
            />
          </ImgDiv>
        </NavBarContainer>
        <SideBarContentContainer></SideBarContentContainer>
      </DrawerContainer>
      <MainContainer>
        <CustomDropdown onSelect={(option) => setSelectedOption(option)} />
        <FileInput selectedOption={selectedOption} setFileToConvert={setFileToConvert}/>
        { fileToConvert ? null : <br/> }
        <Button onClick={()=> setConvertedDataAvailable(true)} disabled={ fileToConvert ? false : true}>Transcribe</Button>
        {
            convertedDataAvailable ? <ConvertedContentContainer> <p>convertedDataAvailable</p> </ConvertedContentContainer> : null
        }
      </MainContainer>
    </Container>
  );
};
