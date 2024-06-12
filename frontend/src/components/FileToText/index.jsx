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
  const [ convertedDataAvailable , setConvertedDataAvailable ] = useState({
     status : false,
     data : {}
  });

  const handleTranscribe = async()=>{
    try{
      if (fileToConvert) {
        let payload = new FormData();
        payload.append("file", fileToConvert);
  
        const response = await fetch("http://0.0.0.0:9000/asr/transcribe", {
          method: "POST",
          body: payload,
        });
        let res = await response.json();
        setConvertedDataAvailable({
          status : true,
          data : res
        });
      }
    }catch(e){
      console.log("ERROR is", e)
    }
  };

  useEffect(()=>{
    if(!fileToConvert) setConvertedDataAvailable({
      status : false,
      data : {}
    });
  },[fileToConvert])

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
        <Button onClick={()=> {
            handleTranscribe();
           }} disabled={ fileToConvert ? false : true}>Transcribe</Button>
        {
            convertedDataAvailable.status ? <ConvertedContentContainer> <p>{convertedDataAvailable.data.transcription}</p> </ConvertedContentContainer> : null
        }
      </MainContainer>
    </Container>
  );
};
