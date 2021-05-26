import "./App.css";
import EnrolementForm from "./components/EnrolementForm";
import FormikContainer from "./components/FormikContainer";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <LoginForm />
        {/* <RegistrationForm /> */}
        {/* <EnrolementForm /> */}
        {/* <FormikContainer /> */}
      </div>
    </ChakraProvider>
  );
}

export default App;
