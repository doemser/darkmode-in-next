import styled from "styled-components";

const StyledButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 7px;
  font-size: x-large;
  background: ${(props) => props.theme.primary.main};
  color: ${(props) => props.theme.primary.contrast};

  &:hover {
    background: ${(props) => props.theme.primary.light};
  }

  &:active {
    background: ${(props) => props.theme.primary.dark};
  }

  &:disabled {
    background: lightgrey;
    color: grey;
  }
`;

export default StyledButton;
