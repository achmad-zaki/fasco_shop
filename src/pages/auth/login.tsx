import { Link } from "react-router-dom"

// images
import GoogleSvg from "../../assets/icons/google.svg"
import EmailSvg from "../../assets/icons/email.svg"
import ImageLogin from "../../assets/images/image-login.webp"

// components
import ButtonSosmedComponent from "../../components/button/ButtonSosmed"
import FormInputComponent from "../../components/form/Input"
import ButtonComponent from "../../components/button/Button"

export default function LoginPage() {
    return (
        <div className="p-6 lg:p-10 min-h-screen flex-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full">

                <div className="hidden lg:block">
                    <img src={ImageLogin} alt="Image Login" className="object-cover h-full overflow-hidden" />
                </div>

                <div className="p-8 lg:p-20 flex flex-col border lg:border-l-0 border-custom-gray rounded-[30px] lg:rounded-l-none">
                    <h1 className="font-volkhov text-[#484848] text-4xl">FASCO</h1>
                    <div className="mt-8">
                        <h5 className="font-volkhov text-black text-lg">Sign In To FASCO</h5>
                        <div className="flex flex-col xl:flex-row gap-4 mt-5">
                            <ButtonSosmedComponent icon={GoogleSvg} title="Sign up with Google" />
                            <ButtonSosmedComponent icon={EmailSvg} title="Sign up with Email" />
                        </div>
                        <div className="flex-center gap-3 my-5">
                            <div className="w-7 h-[5px] bg-[#838383]" />
                            <div className="font-bold text-[#838383] text-xl tracking-widest">OR</div>
                            <div className="w-7 h-[5px] bg-[#838383]" />
                        </div>
                        <form>
                            <FormInputComponent
                                type="email"
                                name="email"
                                label="Email"
                            />
                            <FormInputComponent
                                type="password"
                                name="password"
                                label="Password"
                            />
                            <div className="mt-6">
                                <ButtonComponent title="Sign In" className="btn-primary w-full" type="submit" />
                                <ButtonComponent title="Register Now" className="btn-outline-blue w-full mt-4" type="submit" />
                            </div>
                        </form>
                        <Link to="/" className="block text-right mt-4 font-bold text-custom-blue text-sm">Forget Password?</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
