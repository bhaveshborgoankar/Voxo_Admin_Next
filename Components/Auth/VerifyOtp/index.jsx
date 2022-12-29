import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Form } from "reactstrap";
import { OTP, Verify } from "../../../Constant";
import { VerifyOTPAPI } from "../../../Constant/APIRoutes";
import UserContext from "../../../Helper/UserContext";
import request from "../../../Utils/APIService";
import DivideInput from "../../CommonComponents/DivideInput";
import FloatingInput from "../../CommonComponents/FloatingInput";
import SubmitButton from "../../CommonComponents/SubmitButton";
const VerifyOtpContain = () => {
    const { setActive } = useContext(UserContext);
    const [isLoader, setIsLoader] = useState(false);
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onOtpSubmit = async (formData) => {
        setIsLoader(true);
        const updateData = {
            email: Cookies.get("fpemail"),
            otp: formData.otp,
        };
        const Res = await request({
            url: VerifyOTPAPI,
            method: "POST",
            data: updateData,
        });
        if (Res.status === 200) {
            setIsLoader(false);
            setActive({ status: false });
            Cookies.set("vo", formData.otp);
            router.push("/auth/update_password");
        } else {
            setIsLoader(false);
            setActive({ status: true, title: Res?.data?.msg });
        }
    };
    return (
        <Form onSubmit={handleSubmit(onOtpSubmit)}>
            <FloatingInput title={OTP}>
                <DivideInput
                    inputtype="input"
                    className="form-control"
                    type="number"
                    name="otp"
                    errors={errors.otp}
                    register={{ ...register("otp", { required: true }) }}
                    placeholder="Enter OTP"
                />
            </FloatingInput>
            <SubmitButton title={Verify} isLoader={isLoader} />
        </Form>
    );
};
export default VerifyOtpContain;
