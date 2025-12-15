import { Alert, Box, Button, FormHelperText, Snackbar, TextField, Typography, useMediaQuery } from "@mui/material";
import Navicon from "../NavIcon/Index";
import { Controller, FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import CircularProgress from '@mui/material/CircularProgress';
import axios from "axios";
import { useState } from "react";
import { ContactInfo, User } from "../../types";
import { useLanguage } from "../../i18n/LanguageContext";
import { translations } from "../../i18n/translations";


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

    const { language } = useLanguage();

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
                data-aos="fade-up"
                data-aos-duration={`1100`}
                    mt={"100px"}
                    mb={6}
                    className="blockAbout">
                        <Navicon 
                            subTitle={translations[language]['contact']['contacts']}/>
                        <Typography
                            className='montserratBold'
                            variant='h3'>
                                {translations[language]['contact']['letsTalk']}
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
                        data-aos="fade-up"
                        data-aos-duration={`1300`}
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
                                {translations[language]['contact']['contactMeHere']}
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
                                                label={translations[language]['contact']['name']}
                                                placeholder={translations[language]['contact']['writeYourName']}
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
                                                label={translations[language]['contact']['lastName']}
                                                placeholder={translations[language]['contact']['writeYourLastName']}
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
                                            label={translations[language]['contact']['email']}
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
                                            label={translations[language]['contact']['subject']}
                                            placeholder={'ex: Bora fazer aquele projeto!'}
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
                                            label={translations[language]['contact']['message']}
                                            placeholder={translations[language]['contact']['writeYourMessage']}
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
                                        {translations[language]['contact']['send']}
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

                        <Box 
                        data-aos="fade-up"
                        data-aos-duration={`1700`}
                        sx={{
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
                                    {translations[language]['contact']['contactInformation']}
                                </Typography>
                                <Typography fontSize=".9rem" mt={2} color="#54595F">
                                    {translations[language]['contact']['contactInformationText']}
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