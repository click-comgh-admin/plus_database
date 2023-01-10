export function set_cookies($name: string, $value: string, $time = 1, $path = "/") {
    let d = new Date();
    d.setHours(d.getHours() + (3 * 1 * 1 * 1 * $time));
    let expires = "expires=" + d.toUTCString();
    // console.log(get_cookie($name))
    if (get_cookie($name) != $value) {
        document.cookie = $name + '=' + $value + "; " + expires + "; path=" + $path;
    }
}

export function set_cookies_minutes($name: string, $value: string, $time = 1, $path = "/") {
    let d = new Date();
    d.setMinutes(d.getMinutes() + ($time));
    let expires = "expires=" + d.toUTCString();
    // console.log(get_cookie($name))
    if (get_cookie($name) != $value) {
        document.cookie = $name + '=' + $value + "; " + expires + "; path=" + $path;
    }
}

export function get_cookie($name: string | any[]) {
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