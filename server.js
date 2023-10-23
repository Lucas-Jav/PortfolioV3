/* eslint-disable no-undef */
import cors from "cors";
import env from "dotenv";
import express from 'express';
import { createTransport } from 'nodemailer';
import pkg from "body-parser";
const { urlencoded, json } = pkg;
env.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(urlencoded({ extended: false }));
app.use(json());
app.use(cors())

// Configurar o Nodemailer com suas credenciais de e-mail
const transporter = createTransport({
    service: 'Gmail', // Ou use um servidor SMTP personalizado
    secure: true,
    auth: {
        user: process.env.USER,
        pass: process.env.PASS,
    },
});

// Rota para enviar e-mail
app.post('/enviar-email', (req, res) => {
    const { destinatario, assunto, corpo } = req.body;

    const mailOptions = {
        from: destinatario,
        to: 'lucasrazebra@gmail.com',
        subject: `[PORTFOLIO] ${assunto}`,
        text: `
        De ${destinatario} para Lucas Oliveira
        
        ${corpo}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Erro no envio do e-mail:', error);
            res.status(500).send('Erro no envio do e-mail.');
        } else {
            console.log('E-mail enviado com sucesso:', info.response);
            res.send('E-mail enviado com sucesso.');
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});