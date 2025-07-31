from flask import Flask, redirect
from dotenv import load_dotenv
from .routes import bp as home_bp

app = Flask(__name__)
load_dotenv()
app.register_blueprint(home_bp)

if __name__ == '__main__':
    app.run(debug=True)