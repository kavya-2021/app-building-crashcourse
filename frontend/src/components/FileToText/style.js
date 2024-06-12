import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  height: calc(100vh - 50px);
`;

export const DrawerContainer = styled.div`
  width: ${(props) => (props.expanded ? "22.5%" : "12%")};
  background-color: #eceaea;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 1rem;
  transition: width 0.5s ease-in-out;
`;

export const MainContainer = styled.div`
  width: 100%;
  padding: 2rem;
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const NavBarContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
`;

export const SideBarContentContainer = styled.div`
  width: 95%;
  height: 90%;
  border: 1px solid grey;
  border-radius: 5px;
  margin-bottom: 2rem;
`;

export const ImgDiv = styled.div`
  width: 3rem;
  height: 3rem;
  cursor: pointer;

  img {
    transform: rotate(${(props) => (props.expanded ? "180deg" : "0deg")});
    transition: transform 0.5s ease-in-out;
  }
`;

export const Title = styled.p`
  font-size: 2.5rem;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  letter-spacing: 0.5rem;
`;

export const Button = styled.button`
  width: 22.5rem;
  height: 3rem;
  border: 0.5px solid #eceaea;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.5rem 0 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 0.1rem;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;  
  border-radius: 8px;
  cursor: pointer;
  background-color: #fff;
`;

export const ConvertedContentContainer = styled.div`
   width : 40rem;
   height : max-content;
   max-height: 30rem;
   border-radius: 10px;
   border: 1px solid black;
   padding : 2rem;
   font-size : 1rem;
   margin-top : 4rem;
   overflow-y : scroll;
`;
