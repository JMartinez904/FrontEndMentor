export interface signUp {
    email: string,
    sent: boolean
}

export interface signUpBody {
    initialState: signUp | (() => signUp);
}