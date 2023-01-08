import React from "react";
import styled from "@emotion/styled";
import SectionFormulario from "./SectionFormulario";

const Heading = styled.section`
  font-size: 1.7rem;
  font-weight: 700;
  color: hsl(213, 96%, 18%);
  margin-bottom: 1.5rem;
  @media (min-width: 1025px) {
    font-size: 2rem;
  }
`;
const Info = styled.section`
  margin-bottom: 1.5rem;
  color: hsl(231, 11%, 63%);
`;
const Input = styled.input`
  margin-top: 10px;
  display: block;
  width: 100%;
  padding: 0.75rem;
  border: 1px solid hsl(231, 11%, 63%);
  border-radius: 8px;
`;
const Container = styled.div`
  margin-bottom: 1.5rem;
  width: 100%;
`;
const ContainerAlert = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Error = styled.p`
  font-weight: 700;
  color: hsl(354, 84%, 57%);
`
const Formulario = ({ errores }) => {
  return (
    <SectionFormulario>
      <Heading>Personal info</Heading>
      <Info>Please provide your name, email address, and phone number</Info>

      <Container >
        <ContainerAlert>
          <label htmlFor="nombre">Name</label>
          {errores?.nombre ? <Error>{errores.nombre}</Error> : ""}
        </ContainerAlert>
        <Input
          id="nombre"
          type="text"
          placeholder="Nombre del Cliente"
          name="nombre"
          className={`${errores?.nombre ? "error" : ''}`}
        ></Input>
      </Container>

      <Container >
        <ContainerAlert>
          <label htmlFor="email">Email address</label>
          {errores?.email ? <Error>{errores.email}</Error> : errores?.emailError ? <Error>{errores.emailError}</Error> : '' }
        </ContainerAlert>
        <Input
          id="email"
          type="email"
          placeholder="Email del Cliente"
          name="email"
          className={`${errores?.email || errores?.emailError ? "error" : ''}`}
        ></Input>
      </Container>

      <Container >
        <ContainerAlert>
          <label htmlFor="telefono">Phone number</label>
          {errores?.telefono ? <Error>{errores.telefono}</Error> : errores?.telefonoError ? <Error>{errores.telefonoError}</Error> : '' }
        </ContainerAlert>
        <Input
          id="telefono"
          type="tel"
          placeholder="Teléfono del Cliente"
          name="telefono"
          className={`${errores?.telefono || errores?.telefonoError ? "error" : '' }`}
        ></Input>
      </Container>

    </SectionFormulario>
  );
};

export default Formulario;
