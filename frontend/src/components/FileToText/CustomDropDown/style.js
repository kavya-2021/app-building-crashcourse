import styled from "styled-components";

export const DropDownContainer = styled.div`
  width: 15rem;
  height: 3rem;
  border: 0.5px solid #eceaea;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem 0 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 0.1rem;
  box-shadow: ${(props) =>
    props.isOpen ? "none" : "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"};
  border-radius: 8px;
  border-bottom-left-radius: ${(props) => (props.isOpen ? "0px" : "8px")};
  border-bottom-right-radius: ${(props) => (props.isOpen ? "0px" : "8px")};
  cursor: pointer;
`;

export const OptionsContainer = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  width: 15rem;
  border: 0.5px solid #eceaea;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  & > div {
    height: 50%;
  }
`;

export const Options = styled.div`
  font-size: 1.2rem;
  text-align: left;
  padding: 0.5rem 1.2rem;
  border-left: ${(props) => (props.isSelected ? "3px solid black" : "none")};

  &:hover {
    background-color: #eceaea;
  }
`;

export const DisplayContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > img {
    width: 12px;
    height: 12px;
    transform: rotate(${(props) => (props.isOpen ? "180deg" : "0deg")});
    transition: transform 0.5s ease-in-out;
  }
`;
