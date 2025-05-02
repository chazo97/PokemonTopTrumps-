#our libaries we need to use
import random
import requests

#use a function for random pokemon number picker, aka: pickapokemon
def pickapokemon():
    #use randint (picks a random interger), to pick number from 1 to 151
    pokemon_id = random.randint(1, 151)
    #pull api from the url, and use pokemon_id to pick a random number at the end of url adress
    url = 'https://pokeapi.co/api/v2/pokemon/{}/'.format(pokemon_id)
    response = requests.get(url)
    pokemon = response.json()
    #creates a dictionary for the randomly picked pokemon
    #first part is name for each element of dictionary
    #secondly, we're pulling from the repsonse of the api, so the 'pokemon =' variable
    #thirdly, we're pulling out that information from the list provided in the api e.g. ['name'] would = squirtle
    picked_pokemon = {
        'name': pokemon['name'],
        'id': pokemon['id'],
        'height': pokemon['height'],
        'weight': pokemon['weight'],
    }
    #we need to return the function pikaapokemon, a function always needs a return
    return picked_pokemon

#we'll use our pickapokemon function to pull a random pokemon for each player
players_pokemon = pickapokemon()
opponents_pokemon = pickapokemon()
#now we tell the player what pokemon they have vs thier opponent
print('Your pokemon is {}'.format(players_pokemon['name']))
print('Garys pokemon is {}'.format(opponents_pokemon['name']))
#we pull on the dictionary that has been created to each players list
#we ask the user what stat they want to compare
which_stat = input('Which stat do you choose? id, height or weight')
#the chosen stat is then compared to the corresponding list in the dictionary of {picked_pokemon}
player = players_pokemon[which_stat]
opponent = opponents_pokemon[which_stat]
#compare the player's and opponent's Pokemon on the chosen stat to decide who wins
if player > opponent:
    print('winner')
elif player < opponent:
    print('loser')
else:
    print('draw')
