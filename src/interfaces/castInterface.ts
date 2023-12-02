export interface ICast {
    adult: boolean,
    gender: number
    id: number
    known_for_department: string
    name: string
    original_name: string
    popularity: number
    profile_path: string
    cast_id: number
    character: string
    credit_id: string
    order: number
}

export interface ICrew {
    adult: false,
    gender: number
    id: number
    known_for_department: string
    name: string
    original_name: string,
    popularity: number
    profile_path: string
    credit_id: string
    department: string
    job: string
}

export interface ICredits {
    id: number
    cast: ICast[]
    crew: ICrew[]
}