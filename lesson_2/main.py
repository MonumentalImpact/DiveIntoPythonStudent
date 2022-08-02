import flask


app = flask.Flask(__name__)


@app.get("/hello")
def hello():
    # TODO: Implement Hello <name>
    pass


app.run("localhost", 8080)
