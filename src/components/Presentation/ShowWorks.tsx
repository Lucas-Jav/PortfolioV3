import { Typography } from "@mui/material";
import { useState, useEffect } from "react";

interface ShowWorksProps {
    works: string[];
}

function ShowWorks({ works }: ShowWorksProps) {
    const [currentWorkIndex, setCurrentWorkIndex] = useState(0);
    const [currentWork, setCurrentWork] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const typingSpeed = 100;
    const pauseDuration = 1000;

    useEffect(() => {
        const workToType = works[currentWorkIndex];
        if (!isDeleting) {
            // Digitação
            if (currentWork.length < workToType.length) {
                const timer = setTimeout(() => {
                    const nextWork = workToType.slice(0, currentWork.length + 1);
                    setCurrentWork(nextWork);
                }, typingSpeed);

                return () => clearTimeout(timer);
            } else {
                // Após terminar de digitar, aguarde antes de apagar
                const timer = setTimeout(() => {
                    setIsDeleting(true);
                }, pauseDuration);
                return () => clearTimeout(timer);
            }
        } else {
            // Apagar
            if (currentWork.length > 0) {
                const timer = setTimeout(() => {
                    const nextWork = workToType.slice(0, currentWork.length - 1);
                    setCurrentWork(nextWork);
                }, typingSpeed);

                return () => clearTimeout(timer);
            } else {
                // Após terminar de apagar, aguarde antes de ir para o próximo trabalho
                const timer = setTimeout(() => {
                    setIsDeleting(false);
                    setCurrentWorkIndex((currentWorkIndex + 1) % works.length);
                }, pauseDuration);
                return () => clearTimeout(timer);
            }
        }
    }, [currentWork, currentWorkIndex, works, isDeleting]);

    return (
        <Typography 
            variant="h5"
            data-aos="fade-up"
            data-aos-duration="6000"
            sx={{
                height: 10,
                textAlign: "center",
                color: "#FFD0D0",
                fontFamily: 'Tourney',
                textShadow: "0px 4px 4px rgba(255, 208, 208, 0.20)"
            }}
            >
                {currentWork}
            </Typography>
    )
}

export default ShowWorks;
