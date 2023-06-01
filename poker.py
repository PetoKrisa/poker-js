import flask
from flask import Flask, Response, redirect, render_template, send_file, request
import flask_socketio
from flask_socketio import SocketIO

app = Flask(__name__)
app.config['SECRET_KEY'] = 'kutyafasz'
io = SocketIO(app)

rooms = {}

@app.route('/favicon.ico')
def favicon():
    return send_file('./static/diamonds.png')

@app.route('/')
def index():
    return render_template('index.html')
@app.route("/room/<roomId>")
def roomRoomid(roomId):
    return render_template('index.html')

if __name__ == '__main__':
    io.run(app, '0.0.0.0', port=80, debug=True)