from time import time
from os import urandom

import flask
import pymongo

from app import app

database = pymongo.MongoClient("localhost", 27017).lesson


@app.get("/message")
def get_message():
    # TODO: Implement GET /message
    pass


@app.get("/messages")
def get_messages():
    # TODO: Implement GET /messages
    pass


@app.post("/messages")
def create_message():
    # TODO: Implement POST /messages
    pass


@app.get("/timeline")
def get_timeline():
    # TODO: Implement GET /timeline
    pass


if __name__ == "__main__":
    app.run("0.0.0.0", 8080)
