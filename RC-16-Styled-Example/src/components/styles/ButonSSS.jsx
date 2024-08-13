import styled from "styled-components";

const ButonSSS = styled.button`
  background-color: ${({ fatih }) => (fatih ? "#a62440" : "white")};
  color: ${({ rengin }) => rengin || "white"};
  border: 1px solid #a62440;
  border-radius: 5px;
  padding: 1rem 1.2rem;
  font-size: 1.1rem;
  margin: 2rem 0.5rem;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
    transform: scale(0.95);
  }
`;

export const DetayButton = styled(ButonSSS)`
  border-left: 3px solid blue;
  border-radius: 20px 0;
  color: tomato;
  background-color: white;
`;

export default ButonSSS;
