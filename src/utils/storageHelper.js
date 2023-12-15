export const getAuthToken = () => {
    const authStr = localStorage.getItem("LOGGED_IN_DATA");
    if(authStr) {
        const authJSON = JSON.parse(authStr);
        return authJSON.Authorization;
    }
    return null;
}

export const getUserAuthToken = () => {
    const authStr = localStorage.getItem("AUTH_DATA");
    if(authStr) {
        const authJSON = JSON.parse(authStr);
        return authJSON.Authorization;
    }
    return null;
}



export const thousands_separators = (num) =>
{
    if(num){
        let numberString = num.toString();
        // if(numberString.indexOf('.') == -1){
        //     numberString = numberString+'.0';
        // }
        const num_parts = numberString.split(".");
        num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return num_parts[0];
    }
    return '0';

}

export const gotoLogin = () => {
    localStorage.clear();
    window.location.replace('/');
}
