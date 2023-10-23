import { Alert, Box, Button, FormHelperText, TextField, Typography, useMediaQuery } from "@mui/material";
import Navicon from "../NavIcon/Index";
import { Controller, FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import CircularProgress from '@mui/material/CircularProgress';
import axios from "axios";
import { useState } from "react";



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
    const mediaQuery1024 = useMediaQuery("(max-width: 1024px)");
    const mediaQuery768 = useMediaQuery("(max-width: 768px)");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

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
            setLoading((state) => !state);
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
                if (res.status === 200) {
                    reset();
                    setLoading((state) => !state);
                    setSuccess(res.data);

                    setTimeout(() => {
                        setSuccess("");
                    }, 3000);
                }
            }).catch((err) => {
                console.error(err);
                setError(err.message);

                setTimeout(() => {
                    setError("");
                }, 3000);
            })
        
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
                        gap: "1rem",
                        ml: mediaQuery768 ? "" :"2rem"
                    }}>
                        <Controller 
                            name="from"
                            control={control}
                            render={(inputProps) => (
                                <>
                                    <TextField
                                        name="email"
                                        variant="outlined"
                                        label="Email"
                                        placeholder="ex: mangoman@email.com"
                                        style={{
                                            width: mediaQuery1024 
                                            ? mediaQuery768
                                                ? "100%"  
                                                :"50%" 
                                            :"30%"
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

                        <Controller 
                            name="subject"
                            control={control}
                            render={(inputProps) => (
                                <>
                                    <TextField
                                        name="subject"
                                        variant="outlined"
                                        label="Assunto"
                                        placeholder="ex: Bora fazer aquele projeto!"
                                        style={{
                                            width: mediaQuery1024 
                                            ? mediaQuery768
                                                ? "100%"  
                                                :"50%" 
                                            :"30%"
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
                                        label="Mensagem"
                                        placeholder="Escreva sua mensagem"
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


                        <Button 
                            variant="outlined"  
                            onClick={handleSubmit(onSubmit)}
                            disabled={loading}
                            sx={{
                                width: "5rem"
                            }}>{loading ? (
                                <Box sx={{ display: 'flex' }}>
                                    <CircularProgress size={22}/>
                                </Box>
                            ): (
                                <>
                                    Enviar
                                </>
                            )}
                        </Button>
                        {success !== "" && (
                            <Alert severity="success">{success}</Alert>
                        )}
                        {error !== "" && (
                            <Alert severity="error">{error}</Alert>
                        )}

                    </Box>
                </FormProvider>

        </Box>

    )
}

export default Contact;