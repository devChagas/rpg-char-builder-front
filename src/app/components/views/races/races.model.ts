export interface Pages {
    content: Races[];
    empty: boolean;
    first: boolean;
    last: boolean;
    number: number;
    numberOfElements: number;
    pageable: string;
    size: number;
    sort: Sort[];
    totalElements: number;
    totalPages: number;
}

export interface Sort {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
}

export interface Races{
    id?: String;
    raceName: String;
    hpDice: String;
}
export interface hpDice{
    value: String;
    viewValue: String;
}