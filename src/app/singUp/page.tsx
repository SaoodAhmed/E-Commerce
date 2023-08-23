import ContextWrapper from "@/global/context";
import SignupFormComp from "../Componet01/views/Signup";

const SignUpForm=()=>{
    return (
        <ContextWrapper>
            <SignupFormComp/>
        </ContextWrapper>
    )
}
export default SignUpForm;