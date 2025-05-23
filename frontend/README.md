# Welcome to PokeTrumps
 *This is a non-profit personal project, all trademarks belong to their respective companies, gamefreak/hasbro please don't sue me*

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





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
