import { translations } from "../i18n/translations";

export const calcularDiferencaEntreDatas = (data1: Date, data2: Date = new Date(), language: 'pt' | 'en') => {
    data1 = data1 instanceof Date ? data1 : new Date(data1);
    data2 = data2 instanceof Date ? data2 : new Date(data2);

    const diferencaEmMilissegundos = data2.getTime() - data1.getTime();
    const milissegundosPorDia = 1000 * 60 * 60 * 24;
    const milissegundosPorMes = milissegundosPorDia * 30.44;
    const milissegundosPorAno = milissegundosPorDia * 365.25;

    const anos = Math.floor(diferencaEmMilissegundos / milissegundosPorAno);
    const meses = Math.floor((diferencaEmMilissegundos % milissegundosPorAno) / milissegundosPorMes);

    const anosStr = anos === 1 ? translations[language]['others']['year'] : translations[language]['others']['years'];
    const mesesStr = meses === 1 ? translations[language]['others']['month'] : translations[language]['others']['months'];

    if (anos === 0) {
        if (meses === 0) {
            return translations[language]['others']['minusThanAMonth'];
        } else if (meses === 1) {
            return `1 ${mesesStr}`;
        } else {
            return `${meses} ${mesesStr}`;
        }
        } else if (anos === 1) {
        if (meses === 0) {
            return `1 ${translations[language]['others']['year']}`;
        } else if (meses === 1) {
            return `1 ${translations[language]['others']['year']} e 1 ${translations[language]['others']['month']}`;
        } else {
            return `1 ${translations[language]['others']['year']} e ${meses} ${mesesStr}`;
        }
        } else {
        if (meses === 0) {
            return `${anos} ${anosStr}`;
        } else if (meses === 1) {
            return `${anos} ${anosStr} e 1 ${mesesStr}`;
        } else {
            return `${anos} ${anosStr} e ${meses} ${mesesStr}`;
        }
    }
}

export const calcYears = (dateOne: Date, dateThwo: Date) => {
    const nascimento = new Date(dateOne);
    const atual = dateThwo ? new Date(dateThwo) : new Date();

    let year = atual.getFullYear() - nascimento.getFullYear();
    const months = atual.getMonth() - nascimento.getMonth();
    const days = atual.getDate() - nascimento.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
        year--;
    }

    return year;
}