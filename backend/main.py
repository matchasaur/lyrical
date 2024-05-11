from flask import Flask, jsonify, request
from flask_cors import CORS
from werkzeug.utils import secure_filename
import os

app = Flask(__name__)
cors = CORS(app, origins='*')

@app.route('/submit', methods=['POST'])
def submit():
    file = request.files['file']
    if file:
        filename = secure_filename(file.filename)
        file.save(os.path.join('audios', filename))
        return 'File uploaded successfully', 200

@app.route('/hello', methods=['GET'])
def hello():
    return jsonify(
        {
            'hello' : 'world!'
        }
    )

if __name__ == '__main__':
    app.run(debug=True, port=8080)