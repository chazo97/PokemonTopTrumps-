from flask import Flask, jsonify, request
import requests
import random
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def get_random_pokemon():
    pokemon_id = random.randint(1, 151)
    response = requests.get(f"https://pokeapi.co/api/v2/pokemon/{pokemon_id}")
    data = response.json()

    return {
        'name': data['name'],
        'id': data['id'],
        'height': data['height'],
        'weight': data['weight'],
        'image': data['sprites']['front_default']
    }

@app.route('/api/player')
def get_player():
    player_pokemon = get_random_pokemon()
    return jsonify({'player': player_pokemon})

@app.route('/api/compare', methods=['POST'])
def compare_stats():
    player = request.json['player']
    stat = request.json['stat']
    opponent = get_random_pokemon()

    player_value = player[stat]
    opponent_value = opponent[stat]

    if player_value > opponent_value:
        result = "win"
    elif player_value < opponent_value:
        result = "lose"
    else:
        result = "draw"

    return jsonify({
        'opponent': opponent,
        'result': result
    })

@app.route('/api/play')
def play_again():
    player_pokemon = get_random_pokemon()
    return jsonify({'player': player_pokemon})

if __name__ == '__main__':
    app.run(debug=True)
