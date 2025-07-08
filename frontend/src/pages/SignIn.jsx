import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
export function SignIn(){
    return(
        <>
        <div className="bg-slate-300 h-screen flex justify-center items-center">
            <div className="bg-white w-max h-max text-center rounded-lg">
                <Heading label="Sign In"/>
                <SubHeading label="Enter your credentials to access your account" />
                <InputBox label="Email" placeholder="johndoe@example.com"/>
                <InputBox label="Password" placeholder="******"/>
                <Button label="Sign In"/>
                <BottomWarning label="Don't have an account?" buttonText="Sign Up" to="/signup"/>
            </div>
        </div>
        </>
    )
}