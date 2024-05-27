from flask import Flask, jsonify, request
from flask_cors import CORS
from werkzeug.utils import secure_filename
from supabase import create_client, Client
from dotenv import load_dotenv
import os

load_dotenv()

url: str = os.environ.get("SUPABASE_URL")
key: str = os.environ.get("SUPABASE_KEY")
supabase: Client = create_client(url, key)

app = Flask(__name__)
cors = CORS(app, origins='*')

@app.route('/submit', methods=['POST'])
def submit():
    file = request.files['file']
    f = file.read()
    
    
    
    # filename = secure_filename(file.filename)
    # file.save(os.path.join('audios', filename))
    supabase.storage.from_("audio").upload(file=f, path=file.filename, file_options={"content-type": "audio/mpeg"})
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