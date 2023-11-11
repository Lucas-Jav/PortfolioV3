import { Alert, Box, Button, FormHelperText, Snackbar, TextField, Typography, useMediaQuery } from "@mui/material";
import Navicon from "../NavIcon/Index";
import { Controller, FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import CircularProgress from '@mui/material/CircularProgress';
import axios from "axios";
import { useState } from "react";
import { ContactInfo, User } from "../../types";


type DataMail = {
    from: string;
    subject: string;
    text: string;
    name: string;
    lastName: string;
}

const mailOptions = yup.object().shape({
    from: yup.string().required("Campo obrigatório").email("Email inválido"),
    subject: yup.string().required("Campo obrigatório"),
    text: yup.string().required("Campo obrigatório"),
    name: yup.string().required("Campo obrigatório"),
    lastName: yup.string().required("Campo obrigatório")
})

interface ContactProps {
    contactInfo: ContactInfo[];
    linksSocialMedia: User["linksSocialMedias"];
}

function Contact({
    contactInfo,
    linksSocialMedia
} : ContactProps) {
    const mediaQuery768 = useMediaQuery("(max-width: 768px)");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const methods = useForm({
        resolver: yupResolver(mailOptions),
        defaultValues: {
            from: "",
            subject: "",
            text: "",
            name: "",
            lastName: ""
        }
    });
    const { handleSubmit, control, reset} = methods;

    
    const onSubmit = async (data: DataMail) => {
        try {
            setLoading((state) => !state);
            const formResponse = {
                destinatario: data.from,
                assunto: data.subject,
                corpo: 
`Nome: ${data.name} ${data.lastName};

${data.text}
`
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
                    setOpenSnackbar((state) => !state);

                    setTimeout(() => {
                        setSuccess("");
                    }, 6000);
                }
            }).catch((err) => {
                console.error(err);
                setError(err.message);
                setOpenSnackbar((state) => !state);

                setTimeout(() => {
                    setError("");
                }, 6000);
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
                mb: "150px"
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
                            gap: "5rem",
                            flexDirection: mediaQuery768 ? "column-reverse" : "row"
                        }}>
                        <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                            ml: mediaQuery768 ? "" :"2rem",
                            flex: 1
                        }}>
                            <Typography
                                fontWeight={500}
                                className='montserratBold'
                                >
                                Contate-me por aqui
                            </Typography>

                            <Box 
                                display="flex"
                                justifyContent="space-between">
                                <Controller 
                                    name="name"
                                    control={control}
                                    render={(inputProps) => (
                                        <>
                                            <TextField
                                                name="name"
                                                variant="outlined"
                                                label="Nome"
                                                placeholder="Escreva seu nome"
                                                style={{
                                                    width: "49%"
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
                                    name="lastName"
                                    control={control}
                                    render={(inputProps) => (
                                        <>
                                            <TextField
                                                name="lastName"
                                                variant="outlined"
                                                label="Sobrenome"
                                                placeholder="Escreva seu sobrenome"
                                                style={{
                                                    width: "49%"
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
                            </Box>

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
                                                width: "100%"
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
                                                width: "100%"
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

                            {openSnackbar && (
                                <Snackbar
                                    open={openSnackbar}
                                    autoHideDuration={6000}
                                    onClose={() => setOpenSnackbar((state) => !state)}
                                    >
                                    <Alert severity={success ? "success": "error"}>{success ? success: error}</Alert>
                                </Snackbar>
                            )}
                        </Box>
                        <Box sx={{
                            p: 4,
                            border: "2px solid rgba(0, 0, 0, 0.23)",
                            borderRadius: "1rem",
                            flex: 1,
                            "&:hover": {
                                border: "2px solid #FFD0D0"
                            }
                        }}>
                            <Box>
                                <Typography fontFamily="Montserrat" fontWeight={600} fontSize="1.1rem">
                                    Informações de contato
                                </Typography>
                                <Typography fontSize=".9rem" mt={2} color="#54595F">
                                    Se você apreciou o meu trabalho e está buscando um profissional comprometido e apaixonado para colaborar em projetos inovadores, 
                                    estou à disposição para discutir como posso contribuir para o seu próximo desafio. Com anos de experiência no desenvolvimento de 
                                    soluções criativas e eficazes, estou pronto para ajudá-lo a atingir seus objetivos.
                                </Typography>
                            </Box>
                            <Box>
                                {contactInfo.map((objt, index) => (
                                    <Box
                                        key={index}
                                        mt={2}
                                        display="flex"
                                        flexDirection="row">
                                        {objt.icon}
                                        <Typography
                                            ml={1}
                                            fontSize={16} color="#54595F">
                                            {objt.text}
                                        </Typography>
                                    </Box>
                                ))}

                                {linksSocialMedia.map((link) => (
                                    <Box
                                    key={link.id}
                                    mt={2}
                                    display="flex"
                                    flexDirection="row">
                                    {link.icon}
                                    <a href={link.link} target="_blank">
                                        <Typography
                                            ml={1}
                                            fontSize={16} color="#54595F">
                                            {link.type}
                                        </Typography>
                                    </a>
                                </Box>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </FormProvider>

        </Box>

    )
}

export default Contact;