import flask

app = flask.Flask(__name__, template_folder="static/html")


@app.get("/")
def index():
    return flask.send_from_directory("static/html", "index.html")


@app.get("/users/<user>")
def get_user(user):
    return flask.render_template("user.html", user=user)
