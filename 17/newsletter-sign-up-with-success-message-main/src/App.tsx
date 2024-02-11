import { useState } from "react";
import { Card, CardSignUp } from "./components/Card";
import { Container } from "./components/Container";
import { SignUpStatus, initialValue as defaultSignUpValue } from "./context/SignUpStatus";
import { signUp } from "./interfaces/Contexts/signUp";

function App() {

  const [signUpValues , setValuesSignUp] = useState<signUp>(defaultSignUpValue);

  return (
    <>
      <Container
        className={
          "min-h-screen min-w-screen flex flex-col justify-center items-center"
        }
        bgColor="bg-darkSlateGrey"
      >
        <SignUpStatus.Provider value={{signUpValues, setValuesSignUp}}>
          { signUpValues.sent ? (<Card></Card>) : (<CardSignUp></CardSignUp>) }
        </SignUpStatus.Provider>
      </Container>
    </>
  );
}

export default App;
