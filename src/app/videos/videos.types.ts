export interface Video {
    id: string;
    title: string;
    author: string;
    viewDetails: View[];
}

export interface View {
    age: number;
    region: string;
    date: string;
}

export interface Filter {
    region: string;
    ageGroupTeens: boolean;
    ageGroupYoungAdults: boolean;
    ageGroupAdults: boolean;
    ageGroupSeniors: boolean;
}
