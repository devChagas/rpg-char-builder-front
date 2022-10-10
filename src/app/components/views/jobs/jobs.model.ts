export interface Pages {
    content: Jobs[];
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

export interface Jobs{
    id?: String;
    jobName: String;
    combatType: String;
}