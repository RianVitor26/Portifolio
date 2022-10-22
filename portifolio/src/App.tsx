import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { lightTheme, darkTheme } from "../styles/Themes";
import { Container } from "../styles/Themes";
import { GlobalStyle } from './../styles/Global';

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Container>
        HELLOOO
        <button onClick={toggleTheme}>CHANGE THEME</button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
