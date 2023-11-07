


export type Specializes = {
    id: number;
    icon: JSX.Element;
    time: Date;
    specialize: string;
    variante: string;
}

export type Location = {
    state: string;
    country: string;
}

export type Projects = {
    id: number;
    name: string;
    description: string;
    technologies: string[];
    links: Array<{
        id: number;
        type: string;
        link: string;
        icon: JSX.Element;
    }>
    img?: string;
}

export type ContactInfo = {
    icon: JSX.Element;
    text: string;
}

export interface User {
    name: string;
    username: string;
    email: string;
    birthday: Date;
    works: string[];
    location: Location;
    descriptions: string[];
    specializes: Specializes[];
    timeSpecializes: Omit<Specializes, "icon" | "time">[];
    worksProjects: Projects[];
    techsAll: {
        techsUseToday: string[];
        techsUtils: string[];
    };
    contactInfo: ContactInfo[];
    linksSocialMedias: Projects["links"];
    professionalArea: [AllHistory, AllHistory];

}

export type AllHistory = {
    name: string;
    dateFormated: string;
    history: HistoryWork[];
}

export type HistoryWork = {
    title: string;
    description: string;
    date: Date;
    dateFormated: string;
    date_end?: Date;
}
