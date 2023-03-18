import styled from "styled-components";

const StyledButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 7px;
  font-size: x-large;
  background: var(--primary-main);
  color: var(--primary-contrast-text);

  &:hover {
    background: var(--primary-light);
  }

  &:active {
    background: var(--primary-dark);
  }
`;

export default StyledButton;
