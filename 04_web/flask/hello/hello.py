from flask import *

app = Flask(__name__)

@app.route("/flask")
def hello():
    return "hello flask"

# webpage

@app.route("/user/<username>")
def user(username):
    return render_template("profile.html", name=username)

# json format api

@app.route("/people/<age>/<name>")
def people(age, name):
    users = {
        name:age,
        "Mandu":[
        {"age":35},
        {"email":"kmd@gmail.com"}
        ]
    }
    return jsonify(users)
app.run()
