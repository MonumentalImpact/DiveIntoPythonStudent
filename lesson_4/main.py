import flask
import pymongo

app = flask.Flask(__name__)
database = pymongo.MongoClient("localhost", 27017).lesson


@app.get("/greeting")
def get_greeting():
    # TODO: Implement GET /greeting
    pass


@app.post("/greetings")
def add_greeting():
    # TODO: Implement POST /greetings
    pass


if __name__ == "__main__":
    app.run("localhost", 8080)
