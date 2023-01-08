import { useActionData, Form, redirect } from "react-router-dom"
import SectionFormulario from "../components/SectionFormulario"
import Buttons from "../components/Buttons"
export function action(){
  return redirect("/customs");
}
const Plan = () => {
  return (
    <>
      <Form method="post">
        <SectionFormulario>
          <h2>Hola</h2>
        </SectionFormulario>
        <Buttons />
      </Form>
    </>
  )
}

export default Plan