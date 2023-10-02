


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

export interface User {
    name: string;
    username: string;
    birthday: Date;
    works: string[];
    location: Location;
    descriptions: string[];
    specializes: Specializes[];
    timeSpecializes: Omit<Specializes, "icon" | "time">[];
}