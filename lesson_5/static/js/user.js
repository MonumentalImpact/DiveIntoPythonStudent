import { getMessages } from "./utils.js";

async function populateUser() {
    const messages = (await getMessages(user = user)).messages;

    if (messages.length == 0) {
        return;
    }

    const div = document.getElementById("messages");

    for (const message of messages) {
        var anchor = document.createElement("a");
        var br = document.createElement("br");
        var content = document.createTextNode((" " + message.content));

        anchor.id = message.id;
        anchor.innerText = message.author + ":";
        anchor.href = `${window.location.origin}/users/${message.author}`;

        div.appendChild(anchor);
        div.appendChild(content);
        div.appendChild(br);
    }
}

window.onload = function () {
    populateUser();
}