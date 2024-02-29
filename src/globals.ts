export let active = false;

export const setter = (variable:string, value : any) => {
    switch(variable) {
        case 'active':
            active = value;
            break;
        default:
            break;
    }
}