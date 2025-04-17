from flask import Flask, jsonify
import psutil

app = Flask(__name__)

@app.route('/api/cpu')
def cpu_info():
    return jsonify({
        'cpu': psutil.cpu_percent(interval=0.5),
        'ram': psutil.virtual_memory().percent
    })

@app.route('/')
def index():
    return "CPU Monitor API running. Go to /api/cpu for JSON data."

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5050)
