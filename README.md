![Website on 4 different devices](/readMe_images/amIresponsive.jpg "Responsive Design")

The Guess Who Pub Quiz Game is a knowledge based quiz game that gives the users two choices and a question. The user has the option to read the rules of the game to better understand the game. The user is given an opportunity to play the quiz against a clock to select the correct answer providing the user with two images with the name of the person.

The website live <a href="https://conwayc1987.github.io/Portfolio-2/" target="_blank">click here</a> for a look.

- By Ciaran Conway 
  **February 22, 2023**
  
- - - -
# UX Design

For `Project-2` it was decided to create a quiz game that I would like to play myself. I also wanted to design something the could be marketed to a user (Pub owners) so I decided to make a simple and fun pub quiz game that rewards the user. Rather than just making a normal quiz site I wanted to add some extra aspects that I felt would make the quiz more fun and appealing to the users. I decided that because it was a pub quiz the questions would have to be simple questions for the user as alcohol might of been consumed.

For the website design I felt like I could manipulate the DOM to create a single page quiz game app which is what I have done. From using display properties effectively I was able to reduce a three page site down to one and create a better user experience.

Read more : <details>
           <summary>The Game</summary>
           <p>It was decided that I would use two options for the answers giving the user a 50/50 chance of getting it right making it more fun. 65% of people's brain work visually meaning they find it easier seeing images so it was decided that each question how have an image associated with it. The questions I decided to select involve sports, Irish politics and famous celebrities actors. I also wanted to add a countdown timer to create urgency also a way for the user to know how many questions left and how many they got correct.</p>
           <summary>Font style</summary>
           <p>The font style that I decided to use was from google fonts Oswald and sans-serif were used.</p>
           <summary>Colors Used</summary>
           <p>The color scheme I decided on was a dark background color a light shaded black and a bright vibrant blue color to stand out. As this is a single page game the background is constant for the entire website including for pop up modals.</p>
           <summary>Images</summary>
           <p>The images on this site are used were all made to be the same size and were got from Wikipedia.</p>
         </details>
# Wireframes
Phone design click here (created using https://www.figma.com/): <details>
           <summary>First Page and Game Area</summary>
           ![Landing page design layout](/readMe_images/firstWireframe.png "First page of the website")   
           ![Landing page design layout](/readMe_images/2rdpage.jpg "First page of the website")
         </details>

Desktop design: <details>
           <summary>First Page and Game Area</summary>
           ![Landing page design layout](/readMe_images/desktopDesign.png "First page of the website")   
           ![Game page design layout](/readMe_images/gamePlayDesktopDesign.png "Game page of the website")
         </details>

# User Stories

- As a user I want to be able to play a fun game.
- As a user I want to be able to see the rules for the quiz before I start.
- As a user I want to get a score from the quiz to mark my progress. 
- As a user I want to play again when I complete the quiz

# Features
Features used include: <details>
           <summary>Favicon</summary>
           ![Website Favicon](/readMe_images/madelogo.png "The favicon made for the website")    
           <summary>The favicon design</summary>
           <p>Designed by myself and added to make the website look a lot more professional.This will provide an image in the the tabs header to allow the user to easily identify the website if they have multiple tabs open. The favicon was made at https://www.freelogodesign.org/</p>
         </details>

Header: <details>
           <summary>Navbar</summary>
           ![Website Navbar](/readMe_images/navbar.jpg "The website's navbar")    
           <summary>The navbar design</summary>
           <p>Navbar was kept very simple as it was only an one page website. A small home icon button was used so the user would always have a way of getting back to the home page</p>
           <p>The game title clearly tells the user that its a quiz</p>
         </details>

Rules Page: <details>
           <summary>Rules Modal</summary>
           ![Website Rules pop out](/readMe_images/modalRules.jpg "The quiz rules")
           <p>The modal idea was taken from w3schools and changed to suit the website. The rules were kept short and simple because it is a pub quiz.</p>    
           <summary>The image used</summary>
           <p>The image used for the rules page is meant to funny it is men on strike because of prohibition. This is an attempt to introduce some fun to the experience.</p>
         </details>

Game Area: <details>
           <summary>The Game Page</summary>
           ![Website game area](/readMe_images/gameArea.jpg "The game area")
           <p>The websites game area, simple design using the same colour scheme throughout the website. The images stack on top of eachother in a smaller screen size.</p>    
           <summary>The timer, progress circles and time gauge. </summary>
           ![Website game top area](/readMe_images/gameTop.jpg "The game area with timer")
           <p>The user is given a clock that gives the user 10 seconds to answer, when the time gets to 7 seconds the clock starts to flash red warning the user. When the 10 seconds runs out the next question will appear and the question will be marked incorrect. If the used clicks an answer then the clock will reset. The idea for the time gauge and progress circles part of the website was taken from https://www.youtube.com/watch?v=49pYIMygIcU and changed to suit the project.</p>
         </details>

The results modal: <details>
           <summary>Results Modal</summary>
           ![Website results area](/readMe_images/modalResults.jpg "The game result modal")
           <p>The results modal is in the same design of the rules modal and the idea was taken from w3schools.</p>    
         </details>

The footer: <details>
           <summary>Footer</summary>
           ![Website results area](/readMe_images/footer.jpg "The game result modal")
           <p>The footer is a simple design and centered on the screen. I choose a github icon from https://www.w3schools.com/icons/tryit.asp?filename=tryicons_fa-github. The icon is a link to my github repositories for any user that might be interested in future projects.</p>    
         </details>

# Testing
Lighthouse report for the home page showing all high results.
![Lighthouse Report](/readMe_images/1stPgLightH.jpg "The website first page lighthouse report")

Lighthouse report for the rules page showing all high results.
![Lighthouse Report](/readMe_images/2rdpageLighthouse.jpg "The website second page lighthouse report")

Lighthouse report for the game area showing all high results.
![Lighthouse Report](/readMe_images/gameTimeLighthouse.jpg "The website game area lighthouse report") 

w3validator report for the website showing no errors.
![W3Validator report](/readMe_images/w3validatorReport.jpg "The w3validator html report")

w3validator report for the website showing no errors.
![jigsawReport](/readMe_images/w3vCSSreport.jpg "The jigsaw css report") 

jsHint report for the website showing no warnings.
![jsHint report](/readMe_images/jshintReport.jpg "The jsHint report") 

## Responsiveness

All pages were tested to ensure responsiveness on screen sizes from 320px and above by using dev tools. This included opening the site in browser right clicking and selecting inspect. The screen was then dragged in and out to ensure reponsiveness was to 320px. All pages were fully responsive when tested and passed.

| Test Number | Test                   | Result   
| ----------- | ---------------------- | --------------------------------------------------------- |
| `Test1`     | Click first button     | `Rules page opens`                                        |
| `Test2`     | Click rules button     | `Rules modal opens`                                       |
| `Test3`     | Click play button      | `Game starts`                                             |
| `Test4`     | Click close button     | `Rules modal closes`                                      |
| `Test5`     | Click home button      | `Open home page`                                          |
| `Test6`     | Click option names     | `Option goes to check answer function, then next question`|
| `Test7`     | Click try again button | `Game reloads and score reset`                            |
| `Test8`     | Click home page button | `Returns to home page`                                    |

# Features left to implement

- Add a highest score tracker for each pub. 
- Add a time feature that times how long it takes to complete the quiz and link it to highest scores. 
- Have a username option for leaderboard for each pub.
- Have quiz based on difficulty, easy, medium and hard.
- Track leaderboard's of all pubs to have a top 15 scores tables quiz, with a big price.
- Have an update question array every week and then used them for a get random question when enough question is put into the array. 

# Bugs and Unfixed Bugs

## Fixed

## Unfixed

# Technology Used

- Favicon.io
  - Was used for the website tab to make the website look more professional, favicon file was created at https://favicon.io/favicon-converter/.

- Font Awesome
  - Used for the home icon.

- HTML
  - HTML was used to structure the website.

- CSS
  - CSS was used for all the styling of the website and for media queries for a responsive design on all devices.

- Javascript
  - Javascript was the core of this website and without it the website isn't functional. It is used to navigate the website and makes game play possible.

- Figma
  - https://www.figma.com/ was used for all the wirefame designs.

- Cloudconvert
 - https://cloudconvert.com/webp-converter was used to turn the images to webp.

 # Deployment

## Version Control

## Deployment to Github Pages

# Acknowledgements and Credits

The love running video a lot of code from and the slides from the course were used. W3schools a lot of code ideas on how to make little things better. Mentor Gareth Mcgirr who helped with the project from the concept and troubleshooting he made the project a lot less stressful.

I found a few video's on youtube that were major factor in the project sucess.
- https://www.youtube.com/watch?v=yJN5PLo3EZo for how to use images.
- https://www.youtube.com/watch?v=49pYIMygIcU for the progess circles and time gauge.
- Navbar home icon is from font awesome.
- The zoom effect on the first two images is from the love running project.
- The code to center the buttons is from w3schools.
- The code to make the timer flash is from http://jsfiddle.net/Dzk2h/2/
- The code for the modal pop up is from w3schools.



