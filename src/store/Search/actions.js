export const SEARCH_PHONES = 'SEARCH_PHONES';

export const SEARCH_PHONES_ACTION = {
    type: SEARCH_PHONES,
    payload: null
};

export function searchPhonesActionCreator( phones ) {

    SEARCH_PHONES_ACTION.payload = phones;
    return SEARCH_PHONES_ACTION;

}//searchPhonesActionCreator