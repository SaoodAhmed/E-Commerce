
import ContextWrapper from "@/global/context"
import SignInForm from "../Componet01/views/loginForm"

const SignIn = () => {
    return (
        <ContextWrapper>
            <SignInForm />
        </ContextWrapper>
    )
}

export default SignIn