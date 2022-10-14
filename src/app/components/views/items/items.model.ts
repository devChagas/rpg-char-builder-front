export interface Pages {
    content: Items[];
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

export interface Items{
    id?: String;
    itemName: String;
    itemType: String;
    requiredLevel: String,
    damage: String;
}
export interface itemType{
    value: String;
    viewValue: String;
}