import styled from "@emotion/styled";
const Formulario = styled.section`
  width: 90%;
  border-radius: 10px;
  position: absolute;
  left: 5%;
  top: -8%;
  background-color: white;
  height: 65%;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  @media (min-width: 1025px) {
    position: unset;
    padding: 0;
    width: 100%;
    justify-content: unset;
  }
`;
const SectionFormulario = ({children}) => {
  return (
    <Formulario>{children}</Formulario>
  )
}

export default SectionFormulario