import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container } from './styles'

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
  

  return (
    <Container>
      <button onClick={notify}>Greet Rian 👋</button>
      <ToastContainer />
    </Container>
  );
}
