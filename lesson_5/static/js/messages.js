import { getUrl, getMessages } from './utils.js';
// I hate Javascript

async function messageSendCallback() {
    const content = document.getElementById("message-content");
    const nickname = document.getElementById("nickname");
    const url = getUrl("/messages");

    await fetch(url, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({ author: nickname.value, content: content.value })
    }).then(content.value = "").then(populateMessages())
}

async function populateMessages() {
    const messages = (await getMessages()).messages;

    if (messages.length == 0) {
        return;
    }

    const div = document.getElementById("messages");
    div.textContent = "";

    for (const message of messages) {
        const anchor = document.createElement("a");
        const br = document.createElement("br");
        const content = document.createTextNode((" " + message.content));

        anchor.id = message.id;
        anchor.innerText = message.author + ":";
        anchor.href = `${window.location.origin}/users/${message.author}`;

        div.appendChild(anchor);
        div.appendChild(content);
        div.appendChild(br);
    }
}

window.onload = function() {
    populateMessages();
    document.getElementById("message-button").addEventListener("click", messageSendCallback);
}