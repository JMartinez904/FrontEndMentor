import { createContext } from "react";
import { signUp } from "../interfaces/Contexts/signUp";

export const initialValue :  signUp = {email : "", sent : false}

export const SignUpStatus = createContext(null);

