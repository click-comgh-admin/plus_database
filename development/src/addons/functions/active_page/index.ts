export const ACTIVE_PAGE__ = () => {
    const $menus = document.querySelectorAll('[mm-active]');
    const $page = document.URL.substring(document.URL.lastIndexOf('/')).split('/')[1].split('?')[0];
    // console.log({ $menus });

    $menus.forEach(($menu) => {
        // console.log({ $menu });
        var thisPage = $menu.getAttribute("mm-active");
        var urls = thisPage.split('|');

        for (let u = 0; u < urls.length; u++) {
            const url = urls[u];
            // console.log({ "url": url });
            if ($page === url) {
                $menu.setAttribute('class', 'mm-active');
            }
        }
    });
}