import { Form, redirect, useActionData } from "react-router-dom";
import Formulario from "../components/Formulario";
import Buttons from "../components/Buttons";

export async function action({ request }) {
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);
  const email = formData.get("email");
  const errores = {};
  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );

  if (datos.nombre === "") {
    errores.nombre = "Name can't be blank";
  }
  if (datos.email === "") {
    errores.email = "Email can't be blank";
  } else if (!regex.test(email)) {
    errores.emailError = "Is not valid Email";
  }
  if (datos.telefono === "") {
    errores.telefono = "Phone can't be blank";
  } else if (isNaN(Number(datos.telefono)) || datos.telefono.length < 8) {
    errores.telefonoError = "Is not valid Phone Number";
  }
  if (Object.keys(errores).length) {
    return errores;
  }

  return redirect("/plan");
}
const Index = () => {
  const errores = useActionData();
  return (
    <>
      <Form method="post">
        <Formulario errores={errores} />
        <Buttons />
      </Form>
    </>
  );
};

export default Index;
