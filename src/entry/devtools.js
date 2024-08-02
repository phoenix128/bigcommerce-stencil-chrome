import isProduction from "../is-production";

if (isProduction) {
    chrome.devtools.panels.create(
        "BigCommerce Stencil",
        null,
        "public/panel.html",
        function (panel) {},
    );
}
