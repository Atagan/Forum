# Title:
North to South Forum Project

# Description:
This project simulates a forum where a user can find thread's of information and read the posts in each thread. The user can also create a post.
When the user is creating a post, first the title will be checked and compared with the published posts' titles and 
if there already a post with that title, the user must to change to a different one and check again.
Once the title is accepted, the user can choose between three categories and write the body of the post.
The body of the post will be checked as well to be sure that any banned word is included, because in that case, the user must change the text.
Once the body text is approved, the user can decide if the post will be public or private and then submit the post, which will be added in the thread.

#Install and run the project
In order to install and run the project, you have to clone the repository and open Visual Studio Code. Then install the npm in the terminal with the command:
npm install ; and then start the npm with the command: npm start. Next step is to initiate the servers with the command: mvn spring-boot:run

#How to use the project
The user will find a collapsed table with the different threads. They must click on the left arrow in order to open each thread and they can read the different posts.
In order to add a new post, the user has to click on the right icon inside of a thread and a pop-out window will open and they can add their post from there.

#Credits
Team Members: Laura Ramos Martínez(Laura.Ramos@solera.com) and Sara Herbello Ubeira (Sara.Herbello@solera.com)
