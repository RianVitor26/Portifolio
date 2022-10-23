import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container } from "./styles";
import { useState } from 'react'

export const Toastify = () => {
  const notify = () =>
    toast("What's Up ! Welcome to my portifolio 🚀", {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  
  const [displayToastify, setDisplayToastify] = useState(true)

  const hiddenToastify = () => {
    setDisplayToastify(false)
  }

  return (
    <Container onClick={hiddenToastify}>
      {displayToastify ? <button onClick={notify}>Greet Rian 👋</button> : null}
      <ToastContainer limit={1} />
    </Container>
  );
};
