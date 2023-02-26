![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

The Guess Who Pub Quiz Game is a knowledge based quiz game that gives the users two choices and a question. The user has the option to read the rules of the game to better understand the game. The user is given an opportunity to play the quiz against a clock to select the correct answer providing the user with two images with the name of the person.

- By Ciaran Conway
  **February 22, 2023**

# UX Design

For `Project-2` it was decided to create a quiz game that I would like to play myself. I also wanted to design something the could be marketed to a user (Pub owners) so I decided to make a simple and fun pub quiz game that rewards the user. Rather than just making a normal quiz site I wanted to add some extra aspects that I felt would make the quiz more fun and appealing to the users. I decided that because it was a pub quiz the questions would have to be simple questions for the user as alcohol might of been consumed. 

It was decided that I would use two options for the answers giving the user a 50/50 chance of getting it right making it more fun. 65% of people's brain work visually meaning they find it easier seeing images so it was decided that each question how have an image associated with it. The questions I decided to select involve sports, Irish politics and famous celebrities actors. I also wanted to add a countdown timer to create urgency also a way for the user to know how many questions left and how many they got correct.

Font
The font style that I decided to use was from google fonts Oswald and sans-serif were used.

Color
The color scheme I decided on was a dark background color a light shaded black and a bright vibrant blue color to stand out. As this is a single page game the background is constant for the entire website including for pop up modals

Images
The images on this site are used were all made to be the same size and were got from Wikipedia.

# User Stories

As a user I want to be able to play a fun game.
As a user I want to be able to see the rules for the quiz before I start
As a user I want to get a score from the quiz to mark my progress 
As a user I want to play again when I complete the quiz



To log into the Heroku toolbelt CLI:

1. Log in to your Heroku account and go to *Account Settings* in the menu under your avatar.
2. Scroll down to the *API Key* and click *Reveal*
3. Copy the key
4. In Gitpod, from the terminal, run `heroku_config`
5. Paste in your API key when asked

You can now use the `heroku` CLI program - try running `heroku apps` to confirm it works. This API key is unique and private to you so do not share it. If you accidentally make it public then you can create a new one with _Regenerate API Key_.

------

## Release History

We continually tweak and adjust this template to help give you the best experience. Here is the version history:

**September 1 2021:** Remove `PGHOSTADDR` environment variable.

**July 19 2021:** Remove `font_fix` script now that the terminal font issue is fixed.

**July 2 2021:** Remove extensions that are not available in Open VSX.

**June 30 2021:** Combined the P4 and P5 templates into one file, added the uptime script. See the FAQ at the end of this file.

**June 10 2021:** Added: `font_fix` script and alias to fix the Terminal font issue

**May 10 2021:** Added `heroku_config` script to allow Heroku API key to be stored as an environment variable.

**April 7 2021:** Upgraded the template for VS Code instead of Theia.

**October 21 2020:** Versions of the HTMLHint, Prettier, Bootstrap4 CDN and Auto Close extensions updated. The Python extension needs to stay the same version for now.

**October 08 2020:** Additional large Gitpod files (`core.mongo*` and `core.python*`) are now hidden in the Explorer, and have been added to the `.gitignore` by default.

**September 22 2020:** Gitpod occasionally creates large `core.Microsoft` files. These are now hidden in the Explorer. A `.gitignore` file has been created to make sure these files will not be committed, along with other common files.

**April 16 2020:** The template now automatically installs MySQL instead of relying on the Gitpod MySQL image. The message about a Python linter not being installed has been dealt with, and the set-up files are now hidden in the Gitpod file explorer.

**April 13 2020:** Added the _Prettier_ code beautifier extension instead of the code formatter built-in to Gitpod.

**February 2020:** The initialisation files now _do not_ auto-delete. They will remain in your project. You can safely ignore them. They just make sure that your workspace is configured correctly each time you open it. It will also prevent the Gitpod configuration popup from appearing.

**December 2019:** Added Eventyret's Bootstrap 4 extension. Type `!bscdn` in a HTML file to add the Bootstrap boilerplate. Check out the <a href="https://github.com/Eventyret/vscode-bcdn" target="_blank">README.md file at the official repo</a> for more options.

------

## FAQ about the uptime script

**Why have you added this script?**

It will help us to calculate how many running workspaces there are at any one time, which greatly helps us with cost and capacity planning. It will help us decide on the future direction of our cloud-based IDE strategy.

**How will this affect me?**

For everyday usage of Gitpod, it doesn’t have any effect at all. The script only captures the following data:

- An ID that is randomly generated each time the workspace is started.
- The current date and time
- The workspace status of “started” or “running”, which is sent every 5 minutes.

It is not possible for us or anyone else to trace the random ID back to an individual, and no personal data is being captured. It will not slow down the workspace or affect your work.

**So….?**

We want to tell you this so that we are being completely transparent about the data we collect and what we do with it.

**Can I opt out?**

Yes, you can. Since no personally identifiable information is being captured, we'd appreciate it if you let the script run; however if you are unhappy with the idea, simply run the following commands from the terminal window after creating the workspace, and this will remove the uptime script:

```
pkill uptime.sh
rm .vscode/uptime.sh
```

**Anything more?**

Yes! We'd strongly encourage you to look at the source code of the `uptime.sh` file so that you know what it's doing. As future software developers, it will be great practice to see how these shell scripts work.

---

Happy coding!
