function get_cookie($name) {
    $name = $name + "=";
    let decode = decodeURIComponent(document.cookie);
    let ca = decode.split(";");
    // console.log({ "decode": decode, "ca": ca });
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf($name) == 0) {
            return c.substring($name.length, c.length);
        }
    }
    return "";
}

const U_L_I = 'pdb-client-user';
const getUserLoginInfoCookie = () => {
    // console.log({ "get_cookie(U_L_I)": get_cookie(U_L_I) });
    const rawCookie = get_cookie(U_L_I);
    if (rawCookie === "") {
        return null;
    } else {
        return rawCookie;
    }
}
const userLoginInfo = getUserLoginInfoCookie();
if (userLoginInfo === null) {
    window.location.href = "/login";
}