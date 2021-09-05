import AT from './actionTypes';
import API from '../../helpers/api';

// const setLoading = payload => ({
//     type: AT.SET_LOADING,
//     payload,
// });

// const setError = payload => ({
//     type: AT.SET_ERROR,
//     payload,
// });
// const setLanguage = payload => ({
//     type: AT.SET_LANGUAGE,
//     payload,
// });
const setHeader = payload => ({
    type: AT.SET_HEADER,
    payload,
});

// const testFunction = data => {
//     return async dispatch => {
//         dispatch(setLoading(true));
//         const result = await API.testFunction(data, error => dispatch(setError(error)));
//         result &&
//             dispatch({
//                 type: AT.TEST_CONSTANT,
//                 payload: result,
//             });
//         dispatch(setLoading(false));
//     };
// };

const AC = {
    testFunction,
};

export default AC;
