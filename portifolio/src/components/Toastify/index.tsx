import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container } from './styles'
import { useRef } from 'react'


export const Toastify = () =>  {
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
  
  const toastifyContainer = useRef()
  const removeToastify = () => {
    toastifyContainer.current.style.display = 'none'
  }

  return (
    <Container onClick={removeToastify}>
      <button ref={toastifyContainer} onClick={notify}>
        Greet Rian 👋
      </button>
      <ToastContainer />
    </Container>
  );
}
