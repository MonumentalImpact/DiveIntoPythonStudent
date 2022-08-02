export function getUrl(resource) {
    return (window.location.origin + resource);
}

export function getMessages(user = null) {
    if (user !== null) {
        var resource = `/timeline?author=${user}`;
    } else {
        var resource = "/messages";
    }

    const url = getUrl(resource);

    return fetch(url)
        .then(response => response.json());
}