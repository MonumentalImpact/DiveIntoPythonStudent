import json

import flask

app = flask.Flask(__name__)


def get_greeting(name):
    # TODO: Implement greeting read
    raise NotImplementedError


def add_greeting(greetings):
    # TODO: Implement greeting write
    raise NotImplementedError


@app.get("/greeting")
def get_greeting():
    # TODO: Implement GET /greeting
    pass


@app.post("/greetings")
def greetings():
    # TODO: Implement POST /greetings
    pass


if __name__ == "__main__":
    app.run("localhost", 8080)
