# SLAPSHOT
## *Interactive NHL Records and Stats*


### Project 1 Important Dates	Day	Date
<!-- UL -->
- Project Prompt Delivered	Friday	12/17/2020
- Project Pitches	Monday	12/21/2020
- Project Deployment	Tuesday	1/05/2021
- Project Presentations	Tuesday	1/05/2021
- Project #1: Your First Application


<!-- STEP 1: Read the Directions
Read ALL of the directions before you start. We will know... -->
<!-- STEP 2: Pitch Your Project
Before you start any actual coding, you must meet with your Squad Leader for ~10 minutes to get your app idea approved. Prepare the following materials before your meeting and put them in your README.md: -->

App Title: <!-- Strong --> _SLAPSHOT_

App Description: <!-- Strong -->_INTERACTIVE NHL STATS AND RECORDS_

API: <!-- Links --> http://statsapi.web.nhl.com/api/v1/teams/

API Snippet: <!-- Code Blocks -->
```JSON
"teams": [
        {
            "id": 3,
            "name": "New York Rangers",
            "link": "/api/v1/teams/3",
            "venue": {
                "id": 5054,
                "name": "Madison Square Garden",
                "link": "/api/v1/venues/5054",
                "city": "New York",
                "timeZone": {
                    "id": "America/New_York",
                    "offset": -5,
                    "tz": "EST"
                }
            },

```


Wireframes: <!-- LINK -->https://wireframe.cc/EPbo5G

MVP: 
<!-- UL -->

- Built with HTML, CSS, and JavaScript.
- Styled using Flexbox.
- Using Axios to make requests to NHL stats API and returning reord details on the dom.
- Implementing a responsive design using a media query/breakpoint.
- Deployed to GitHub.


Post-MVP: <!-- UL -->
- Add additional API for content.

Goals: <!-- UL -->
- Daily commits with project updates
- Continuous refinement to flow control
- Building daily upon the basic premise of the page, adding more search functionality and additional resources.

Priority Matrix: 
https://whimsical.com/W4JsfrYRoxgJ8HNvPmZVwR

<!-- A graph of your intended areas of development (Pseudocoding, Design, HTML, CSS, JavaScript, Testing, etc) plotted on an X/Y axis where X represents time to completion and Y represents priority. Use a professional tool or upload a well drawn image using an image hosting site such as Cloudinary or a similar hosting service. -->
Timeframes: 
| Task | Expected Time | Actual Time |
| ---- | ------------- | ----------- |
| HTML | 3 hrs         | xxx         |
| CSS  | 15 hrs        | xxx         |
| API  | 4 hrs        | xxx         |
| Search Bar  | 3 hrs        | xxx   |
| Search functions | 8 hrs | xxx |

<!-- Horizontal Rule -->__________________________________________________________


STEP 3: <!-- UL -->
- Make a New Repo
- Make a new personal GitHub repo for your project. DO NOT FORK THIS REPO.
- This new repo should be under your personal Github, NOT your General Assembly Github account.
- Make sure your new repo is set to "Public" and initialize it with a README.md file. This will be your project worksheet.
- Send a link for your repository to your Squad Leader.
After your have been approved, clone this new repository down to your machine.
- CD into the project directory and touch index.html, style.css and script.js files.
- Test a commit and push it to make sure everything is connected with git commit -m "My Ruby Project 1!".
- Note: Your repository should not be called project-1! Think of a name for your application, and then name your repository after your application.

STEP 4: 🔴 Build Your Project MVP — Mandatory To Pass
Your application must meet these requirements:

- Built with HTML, CSS, and JavaScript.
- Styled using Flexbox or Grid.
- Use Axios to make a request to an external data source and insert some of the retrieved data on to the DOM.
- Implement responsive design using at least one media query/breakpoint (i.e. desktop, tablet, mobile, etc).
- Fulfill the build requirements you have specified in your MVP.
- Deployed site to a hosting service like Github Pages.
Make commits to GitHub every day.
- A README.md file that contains your project worksheet, a link to your live, deployed site, and any necessary installation instructions such as npm i.


<!-- 📋 List of APIs -->
<!-- Below is a non-exhaustive list of some free APIs you can use. There are many APIs out there, however, so if you find one not on this list, feel free to use it. No matter what API you decide on, make sure you can successfully make a GET request before you commit to using it.

- Weather: https://openweathermap.org/api
- News: https://newsapi.org/
- Giphy: https://developers.giphy.com/
- Pokemon: http://pokeapi.co/
- Card Deck: https://deckofcardsapi.com/
- City of Chicago: https://data.cityofchicago.org/
- Beer: https://www.brewerydb.com/developers
- NYC Open Data: https://opendata.cityofnewyork.us/
- Rick and Morty: https://rickandmortyapi.com/documentation/#rest -->

<!-- This site lists a collection APIs as well. Take a look through their libraries and try to find one that interests you. Please note, however, that many APIs will require an authentication key, and some APIs require payment. We highly suggest using a free API for your first project dealing with one.

STEP 5: 🔵 Ideas for Post-MVP - Not Mandatory
- Look into localstorage so you can save data to the  user's browser
- Add a second API.
- Add creative use of event listeners and UI interaction.
- Add animations.
- Get input from a UX student on how to make your app have intuitive UI and design. -->

<!-- STEP 6: Technical Demonstration
All projects will be presented to the class. Your presentation should:

- Be no longer than 5 minutes in length
- Show off all features of the app
- Explain the technical details
- Explain the technical challenges
- Explain which improvements you might make

## Your presentation should NOT:

- Focus on what you didn't accomplish.
You will be sharing your project and your code. Be prepared to answer questions from the instructors and other students.

## Did you read all of the directions before starting? If so write git commit -m "My Ruby Project 1" instead of git commit -m "first commit" for your first commit. -->


<!-- Step 7: Help and Support
- Each student will be given 5 (five) tokens, redeemable at any time during regular class time (subject to instructors' schedules), for 20 minutes. Tokens cannot be transferred between students - there is no secondary market for tokens.

- Give at least a 10 minutes heads up to an instructor with the link to your project repo and a link to your issue ticket. Instructors will not be holding open office hours during project week. This is to allow you to solve issues and errors you run in to on your own and with your classmates.

Project approval sign up form

Sign up here for help with your squad lead. -->

<!-- Step 8: Grading
Hard Requirements
The following requirements must be met in order for the project to be considered complete:

The project is deployed to GitHub Pages or a custom domain
The application renders in the browser and runs without errors
The repo has a README that adequately documents the project
We do not give letter grades; it is either a pass/fail. The real benchmark is how much you grow and learn each unit.

You will receive feedback in a secret gist. The gist will be Slacked out independent of your P1 repo to keep feedback confidential.

An example of the gist can be found here: Secret Gist

If you would like more feedback than the gist, instructors will be available to meet one on one. Please feel free to reach out and schedule a time with your squad leader.

Incomplete Projects
Incomplete projects will be given an extension. An instructor will follow up with you to discuss the details of the resubmission. Note that you are allowed one extension on only one of the four projects.


PLAGIARISM
Remember. We have a zero-tolerance policy towards plagiarism. More on our plagiarism policy can be found in our course wiki's plagiarism page.
 -->





<!-- Headings
​
# Heading 1
​
## Heading 2
​
### Heading 3
​
#### Heading 4
​
##### Heading 5
​
###### Heading 6
​ -->
<!-- Italics -->
​
<!-- _This text_ is italic
​
_This text_ is italic -->
​
<!-- Strong -->
​
<!-- **This text** is italic
​
**This text** is italic -->
​
<!-- Strikethrough -->
​
<!-- ~~This text~~ is strikethrough -->
​
<!-- Horizontal Rule -->
​
<!-- ---
​
--- -->
​
<!-- Blockquote -->
​
<!-- > This is a quote -->
​
<!-- Links -->
​
<!-- [Traversy Media](http://www.traversymedia.com)
​
[Traversy Media](http://www.traversymedia.com "Traversy Media") -->
​
<!-- UL -->
​
<!-- - Item 1
- Item 2
- Item 3
  - Nested Item 1
  - Nested Item 2 -->
​
<!-- OL -->
​
<!-- 1. Item 1
1. Item 2
1. Item 3 -->
​
<!-- Inline Code Block -->
​
<!-- `<p>This is a paragraph</p>` -->
​
<!-- Images -->
​
<!-- ![Markdown Logo](https://markdown-here.com/img/icon256.png) -->
​
<!-- Github Markdown -->
​
<!-- Code Blocks -->
​
<!-- ```bash
  npm install
  npm start
```
​
```javascript
function add(num1, num2) {
  return num1 + num2;
}
```
​
```python
  def add(num1, num2):
    return num1 + num2
``` -->
​
<!-- Tables -->
​
<!-- | Task | Expected Time | Actual Time |
| ---- | ------------- | ----------- |
| HTML | 3 hrs         | xxx         |
| CSS  | 15 hrs        | xxx         |
| API  | 4 hrs        | xxx         |
| Search Bar  | 3 hrs        | xxx   | -->
​
<!-- Task List -->
​
<!-- - [x] Task 1
- [x] Task 2
- [] Task 3 -->