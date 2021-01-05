# SLAPSHOT
## *Interactive NHL Team Information*


### Project 1 Important Dates	Day	Date
<!-- UL -->
- Project Prompt Delivered	Friday	12/17/2020  Completed
- Project Pitches	Monday	12/21/2020  Completed
- Project Deployment	Tuesday	1/05/2021 Completed
- Project Presentations	Tuesday	1/05/2021
- Project #1: Your First Application


<!-- STEP 1: Read the Directions
Read ALL of the directions before you start. We will know... -->
<!-- STEP 2: Pitch Your Project
Before you start any actual coding, you must meet with your Squad Leader for ~10 minutes to get your app idea approved. Prepare the following materials before your meeting and put them in your README.md: -->

App Title: <!-- Strong --> _SLAPSHOT_

App Description: <!-- Strong -->_INTERACTIVE NHL TEAM INFO_

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

Code Snipet:
```JS
//populating the dropdown, team names are appended to the list

  selectTeam.forEach((team) => {
    let teamOption = document.createElement('option')
    teamOption.innerHTML = `
    <h2>${team.name}</h2>`
    teamOption.value = team.id
    select.append(teamOption)
  })
  teamSelectSection.append(select)
}
```

MVP: 
<!-- UL -->

- Built and styled with HTML, CSS, Flexbox and JavaScript.
- Using Axios to make requests to the NHL API and returning record details on the DOM.
- Implementing a responsive design using a media query/breakpoint.
- Deployed to GitHub.


Post-MVP: <!-- UL -->
- Add additional API for content.
- Add additonal functionality for team rosters and stats.

Goals: <!-- UL -->
- Daily commits with project updates
- Continuous refinement to flow control
- Building daily upon the basic premise of the page, adding more search functionality and additional resources.

Priority Matrix: 

https://whimsical.com/W4JsfrYRoxgJ8HNvPmZVwR

A graph of your intended areas of development (Pseudocoding, Design, HTML, CSS, JavaScript, Testing, etc) plotted on an X/Y axis where X represents time to completion and Y represents priority. Use a professional tool or upload a well drawn image using an image hosting site such as Cloudinary or a similar hosting service.


TimeOnTask: 
| Task | Expected Time | Actual Time |
| ---- | ------------- | ----------- |
| HTML | 3 hrs         | 3hrs         |
| CSS  | 5 hrs        | 5hrs         |
| API  | 4 hrs        | 8hrs         |
| Search Bar  | 3 hrs        | 3hrs   |
| Search functions | 8 hrs | 16hrs |

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



STEP 6: Technical Demonstration
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


Step 7: Help and Support
- Each student will be given 5 (five) tokens, redeemable at any time during regular class time (subject to instructors' schedules), for 20 minutes. Tokens cannot be transferred between students - there is no secondary market for tokens.

- Give at least a 10 minutes heads up to an instructor with the link to your project repo and a link to your issue ticket. Instructors will not be holding open office hours during project week. This is to allow you to solve issues and errors you run in to on your own and with your classmates.

Project approval sign up form

Sign up here for help with your squad lead. -->

Step 8: Grading
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





