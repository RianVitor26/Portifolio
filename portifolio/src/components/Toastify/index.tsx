import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container } from "./styles";
import { useState } from 'react'

export const Toastify = () => {
  const notify = () =>
    toast("What's Up ! 🚀", {
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
      {displayToastify ? (
        <button onClick={notify}>
          Greet Rian <img src="hand.png" alt="hands" />
        </button>
      ) : null}
      <ToastContainer limit={1} />
    </Container>
  );
};
