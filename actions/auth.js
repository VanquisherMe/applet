import { CRUD_ALERT, CRUD_CONSOLE } from './dataActions'
console.log(CRUD_ALERT)
export const toAlerta = () => ({ type: CRUD_ALERT });
export const toConsolea = () => ({type: CRUD_CONSOLE});