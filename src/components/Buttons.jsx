import styled from "@emotion/styled";

const Step = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  position: absolute;
  bottom: 0;
  height: 90px;
  width: 100%;
  padding: 0 5%;
  @media (min-width: 1025px) {
    position: unset;
    height: unset;
    padding: 0;
  }
`;
const NextStep = styled.input`
  padding: 1rem;
  background-color:hsl(243, 100%, 62%);
  color: white;
  font-weight: 500;
  border-radius: 10px;
  border: none;
  text-transform: capitalize;
  :hover {
    cursor: pointer;
    transition: background 0.2s ease;
    background-color:  hsl(213, 96%, 18%);
  }
  @media (min-width: 1025px) {
    padding: 1rem 2rem;
    font-size: 17px;
  }
`;

const Buttons = () => {
  return (
    <Step>
      <div></div>
      <NextStep type="submit" value="next step"></NextStep>
    </Step>
  );
};

export default Buttons;
