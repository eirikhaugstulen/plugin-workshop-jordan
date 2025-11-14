export type Registry = {
    uniqueId: string;
    firstName: string;
    lastName: string;
    birthDate: string;
}
    

export const registry: Record<string, Registry> = {
    '9411202': {
        uniqueId: '9411202',
        firstName: 'Linda',
        lastName: 'Bailey',
        birthDate: '1991-05-28',
    },
    '12333': {
        uniqueId: '12333',
        firstName: 'Sara',
        lastName: 'Jørgensen',
        birthDate: '1989-01-04',
    },
    '88995': {
        uniqueId: '88995',
        firstName: 'Samantha',
        lastName: 'Gunnarson',
        birthDate: '1974-11-08'
    }
}