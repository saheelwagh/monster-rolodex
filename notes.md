What create-react-app gives us:
1. src folder -> write your code here
2. public -> for older browsers. build scripts tasnforms code into es5 and puts it in public
3. app.js -> logic for app
4. index.js -> script to display the app. Supplies the code to tansformer and then displays it in index.html
5. index.html -> div with id of root. All code is injected here
6. lifecycle -> diff stages when the component renders
7. functional component -> just returns html. may take props. Has no access to state or lifecycle