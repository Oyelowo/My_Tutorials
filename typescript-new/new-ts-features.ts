type IPhone = {
    model: string;
    id: number;
    simType: string;
}

const newPhone: IPhone = {
    model: "X",
    id: 2,
    simType: "Elisa"
}

type OtherKeys = Exclude<keyof IPhone, "simType">

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

type IPod = Pick<IPhone, OtherKeys>

type IPod2 = Omit<IPhone, "simType">


const newIPod: IPod2 = {
    model: "Q",
    id: 454
}
