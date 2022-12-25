import React, { useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Form } from "reactstrap";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { Email, Forgotyourpassword, LogIn, Logins, Password, Pleasefillthename } from "../../Constant";
import { LoginAPI } from "../../Constant/APIRoutes";
import UserContext from "../../Helper/UserContext";
import request from "../../Utils/APIService";
import FloatingInput from "../CommonComponents/FloatingInput";
import FormInput from "../CommonComponents/FormInput";
import SubmintButton from "../CommonComponents/SubmitButton";
const LoginForm = () => {
    const [isLoader, setIsLoader] = useState(false)
    const router = useRouter();
    const { setActive } = useContext(UserContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const loginAuth = async (data) => {
        setIsLoader(true)
        const LoginData = {
            email: data.Email,
            password: data.Password,
        };
        var Res = await request({ url: LoginAPI, method: 'POST', data: LoginData });
        if (Res?.status == 200) {
            setIsLoader(false)
            Cookies.set('uat', Res?.data?.token);
            setActive({ status: false });
            router.push('/');
        } else {
            setActive({ status: true, title: Res?.data?.msg })
            setIsLoader(false)
        };
    };
    return (
        <Form onSubmit={handleSubmit(loginAuth)}>
            <div className='login-title mb-5'>
                <h2>{Logins}</h2>
            </div>
            <FloatingInput title={Email}>
                <FormInput className="form-control" name='Email' placeholder='Email' type='email' register={{ ...register('Email', { required: true }) }} errors={errors.Email} />
            </FloatingInput>
            <div className='valid-feedback'>{Pleasefillthename}</div>
            <FloatingInput title={Password}>
                <FormInput className="form-control" name='Password' placeholder='Password' type='password' register={{ ...register('Password', { required: true }) }} errors={errors.Password} />
            </FloatingInput>
            <Link href={`/auth/forgot_password`} className='pass-forgot'>
                {Forgotyourpassword}
            </Link>
            <SubmintButton title={LogIn} isLoader={isLoader} />
        </Form>
    )
}
export default LoginForm