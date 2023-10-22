import { Box, Button, FormHelperText, TextField, Typography } from "@mui/material";
import Navicon from "../NavIcon/Index";
import { Controller, FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import GenericInput from "./GenericInput";
import axios from "axios";



type DataMail = {
    from: string;
    subject: string;
    text: string;
}

const mailOptions = yup.object().shape({
    from: yup.string().required("Campo obrigatório").email("Email inválido"),
    subject: yup.string().required("Campo obrigatório"),
    text: yup.string().required("Campo obrigatório")
})

function Contact() {
    const methods = useForm({
        resolver: yupResolver(mailOptions),
        defaultValues: {
            from: "",
            subject: "",
            text: "",
        }
    });
    const { handleSubmit, control, reset} = methods;
    
    const onSubmit = async (data: DataMail) => {
        try {
            const formResponse = {
                destinatario: data.from,
                assunto: data.subject,
                corpo: data.text
            }
            await axios.post(`${process.env.API_URL}/enviar-email`, formResponse, {
                headers: {
                    'Content-Type': 'application/json',
                    "mode": "no-cors"
                },
            }).then((res) => {
                if (res.status === 200) reset();
                console.log(res.data);
            })
            console.log(data)
        } catch(err) {
            console.error(err)
        }
    }
    return (
        <Box
            id="contact"
            sx={{
                width: "100%",
                p: "0px 260px",
            }}>
                <Box 
                    mt={"100px"}
                    mb={6}
                    className="blockAbout">
                        <Navicon 
                            subTitle='Contatos'/>
                        <Typography
                            className='montserratBold'
                            variant='h3'>
                                Vamos conversar!
                        </Typography>
                </Box>
                <FormProvider {...methods}>
                    <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem"
                    }}>
                        <Controller 
                            name="from"
                            control={control}
                            render={(inputProps) => (
                                <>
                                    <GenericInput 
                                        type="email"
                                        name="email"
                                        style={{
                                            width: "30%"
                                        }}
                                        placeholder="Email"
                                        value={inputProps.field.value}
                                        onChange={(e) => {
                                            inputProps.field.onChange(e.target.value);
                                        }}
                                        />
                                    {inputProps.fieldState.error && (
                                        <FormHelperText error={inputProps.fieldState.error && true}>
                                            {inputProps.fieldState.error.message + ""}
                                        </FormHelperText>
                                    )}
                                </>
                            )}/>

                        <Controller 
                            name="subject"
                            control={control}
                            render={(inputProps) => (
                                <>
                                    <GenericInput 
                                        name="subject"
                                        style={{
                                            width: "30%"
                                        }}
                                        placeholder="Assunto"
                                        value={inputProps.field.value}
                                        onChange={(e) => {
                                            inputProps.field.onChange(e.target.value);
                                        }}
                                        />
                                    {inputProps.fieldState.error && (
                                        <FormHelperText error={inputProps.fieldState.error && true}>
                                            {inputProps.fieldState.error.message + ""}
                                        </FormHelperText>
                                    )}
                                </>
                            )}/>

                        <Controller 
                            name="text"
                            control={control}
                            render={(inputProps) => (
                                <>
                                    <TextField
                                        multiline
                                        fullWidth
                                        rows={5}
                                        name="text"
                                        variant="outlined"
                                        label="Texto"
                                        placeholder="Texto"
                                        style={{
                                            width: '100%',
                                            minHeight: '150px',
                                        }}
                                        value={inputProps.field.value}
                                        onChange={(e) => {
                                            inputProps.field.onChange(e.target.value);
                                        }}
                                        />
                                    
                                    {inputProps.fieldState.error && (
                                        <FormHelperText error={inputProps.fieldState.error && true}>
                                            {inputProps.fieldState.error.message + ""}
                                        </FormHelperText>
                                    )}
                                </>
                            )}/>


                        <Button variant="outlined" onClick={handleSubmit(onSubmit)}>Enviar</Button>
                    </Box>
                </FormProvider>

        </Box>

    )
}

export default Contact;