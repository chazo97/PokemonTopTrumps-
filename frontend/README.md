# Welcome to PokeTrumps
 This is a non-profit personal project, all trademarks belong to their respective companies, all API credits go to the team that make Pokeapi, check out there work here- https://pokeapi.co/. *Gamefreak/hasbro please don't sue me* Enjoy the game 👍

# Getting the game to run
I would recommend using VSC to run the project

Create two terminals, one for the backend and one for the frontend

<ol>
 <li>As this project utilises a virtual enviroment for the backend py file, direct your terminal to the backend folder e.g (whatever folder your currently in) 

 ```
 cd backend
 ``` 
</li>
<li>Run the cmd  

``` 
source venv/Scripts/activate
```  
to activate the venv </li>
<li>Then you should see your terminal prompt change to show (venv) </li>
<li>
Once your in a virtual enviroment you should run flask (This handles our framework for the app), with the cmd

```
python app.py
```
</li>
<li>Your backend should now be running on a port, to check look at the port its running on 

```
Running on http://(your address)/api/play
```
and it should show data for the player like this example

```
{
  "player": {
    "height": 15,
    "id": 127,
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png",
    "name": "pinsir",
    "weight": 550
  }
}
```
</li>

<li> Now in your second terminal we want to be in our frontend folder 

```
cd frontend
```
<li> Well use npm to run our app, start npm using this cmd 

```
npm start
```
</li>
<li> The game should now run in your chosen browser. If you should come across a loading error, please ensure that your backend app is running in a virtual enviroment by followinf steps 2-5. 

<em><strong> Do remember to close all running programs once you're done with ctrl + c (windows) </strong></em>
</li>

</ol>




