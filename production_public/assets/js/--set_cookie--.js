function __set_cookies__($name, $value, $time = 1) {
    var d = new Date();
    d.setHours(d.getHours() + (3 * 1 * 1 * 1 * $time));
    var expires = "expires=" + d.toUTCString();
    console.log(__get_cookie__($name))
    if (__get_cookie__($name) != $value) {
        document.cookie = $name + '=' + $value + "; expires=" + "expires=" + expires;
        location.reload();
    }
}

function __get_cookie__($name) {
    $name = $name + "=";
    var decode = decodeURIComponent(document.cookie);
    var ca = decode.split(";");
    console.log({ "decode": decode, "ca": ca });
    for (let i = 0; i < ca.length; i++) {
        c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf($name) == 0) {
            return c.substring($name.length, c.length);
        }
    }
    return "";
}