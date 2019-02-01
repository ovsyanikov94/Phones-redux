export const LOAD_PHONES = 'LOAD_PHONES';

export const LOAD_PHONES_ACTION = {
    type: LOAD_PHONES,
    payload: null
};


/*
 * action creators
 */

export function LoadPhonesActionCreator( phones ){
    LOAD_PHONES_ACTION.payload = phones;
    return LOAD_PHONES_ACTION;
}