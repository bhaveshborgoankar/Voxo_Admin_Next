import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Form } from "reactstrap";
import { Confirm, Password } from "../../../Constant";
import { UpdatePasswordAPI } from "../../../Constant/APIRoutes";
import UserContext from "../../../Helper/UserContext";
import request from "../../../Utils/APIService";
import DivideInput from "../../CommonComponents/DivideInput";
import FloatingInput from "../../CommonComponents/FloatingInput";
import SubmitButton from "../../CommonComponents/SubmitButton";
const UpdatePasswordContain = () => {
    const router = useRouter();
    const { setActive } = useContext(UserContext);
    const [isLoader, setIsLoader] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const UpdatePasswordData = async (passwordValue) => {
        setIsLoader(true);
        if (passwordValue?.password === passwordValue?.confirm_password) {
            const updatedData = {
                password: passwordValue?.password,
                confirm_password: passwordValue?.confirm_password,
                email: Cookies.get('fpemail'),
                otp: Cookies.get('vo'),
            };
            const Res = await request({ url: UpdatePasswordAPI, method: 'POST', data: updatedData });

            if (Res.status === 200) {
                setIsLoader(false);
                Cookies.remove('fpemail'), Cookies.remove('vo'), setActive({ status: false });
                router.push('/auth/login');
            } else {
                setIsLoader(false);
                setActive({ status: true, title: Res?.data?.msg });
            }
        } else {
            setIsLoader(false);
            setActive({ status: true, title: 'Password not match!' });
        }
    };
    return (
        <Form onSubmit={handleSubmit(UpdatePasswordData)}>
            <FloatingInput title={Password}>
                <DivideInput inputtype='input' className='form-control' type='password' name='password' register={{ ...register('password', { required: true, minLength: 8 }) }} placeholder='Enter password' errors={errors.password} minnumber={8} />
            </FloatingInput>
            <FloatingInput title={Password}>
                <DivideInput inputtype='input' className='form-control' type='password' name='confirm_password' register={{ ...register('confirm_password', { required: true, minLength: 8 }) }} placeholder='Enter Confirm Password' minnumber={8} errors={errors.confirm_password} />
            </FloatingInput>
            <SubmitButton title={Confirm} isLoader={isLoader} />
        </Form>
    )
}
export default UpdatePasswordContain