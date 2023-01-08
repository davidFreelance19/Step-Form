import React from 'react'
export async function action({ request }) {
  console.log("desde summary");
  return redirect("/");
}
const Summary = () => {
  return (
    <div>Summary</div>
  )
}

export default Summary