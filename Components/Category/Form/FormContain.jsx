import { useRouter } from "next/router";
import React from "react";
import { Phone } from "react-feather";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Col, Form, Label, Row } from "reactstrap";
import { Btn } from "../../../AbstractElements";
import { Image, Name, Submit } from "../../../Constant";
import { createCategoryAPI, updateCategoryAPI } from "../../../Constant/APIRoutes";
import request from "../../../Utils/APIService";
import ErrorHandle from "../../CommonComponents/ErrorHandle";
const FormCategory = ({ data }) => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            Name: data?.name ?? ''
        }
    });

    const addNewCategory = async (formData) => {

        let form_Data = new FormData();
        form_Data.append('name', formData.Name);
        form_Data.append('image', formData.Image[0]);

        if (formData) {
            const Res = await request({ url: createCategoryAPI, method: 'POST', data: form_Data, headers: { 'content-type': 'multipart/form-data' }, });
            if (Res.status == 200) {
                toast.success('Category Added');
                reset();
                router.push('/category');
            } else {
                toast.warning('Someting went wrong');
            }
        }
    };

    const UpdateCategoryForm = async (formData) => {
        let form_Data = new FormData();
        form_Data.append('name', formData.Name);
        formData.Image && form_Data.append('image', formData.Image[0]);

        if (formData) {
            const Res = await request({ url: `${updateCategoryAPI}${data?._id}`, method: 'PUT', data: form_Data, headers: { 'content-type': 'multipart/form-data' }, });
            if (Res.status == 200) {
                toast.success('Category Added');
                reset();
                router.push('/category');
            } else {
                toast.warning('Someting went wrong');
            }
        }
    }
    return (
        <Form className='theme-form theme-form-2 mega-form' onSubmit={handleSubmit(data ? UpdateCategoryForm : addNewCategory)}>
            <Row>
                <Row className='mb-4 align-items-center'>
                    <Label className='form-label-title col-lg-2 col-md-3 mb-0'>{Name}</Label>
                    <Col md='9' lg='10'>
                        <input className='form-control' type='text' name='Name' {...register('Name', { required: true })} />
                        <ErrorHandle errors={errors.Name} message={'Name is required'} />
                    </Col>
                </Row>
                <Row className='mb-4 align-items-center'>
                    <Label className='form-label-title col-lg-2 col-md-3 mb-0'>{Image}</Label>
                    <Col md='9' lg='10'>
                        <input className='form-control' type='file' name='Image' {...register('Image', { required: true })} />
                    </Col>
                </Row>
                <Btn attrBtn={{ className: 'btn-theme theme-bg-color mt-3 d-inline-block w-auto', type: 'submit' }}>{Submit}</Btn>
            </Row>
        </Form >
    )
}
export default FormCategory