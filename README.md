# Budget App 💵

A personal budget tracking system for expense and income
Live Link: https://budget-planner-linh.netlify.app

## MVP 🎯

Create an app that user can input their category, expense and the app will calculate the remaining budget and display with chart in terms of percentage of each categories.

### Stretch Goal ✨✨

Implement google sign in so each user can save have their own information in firebase

### System Design/Component Design 🗄
Implement Model View Controller System

#### Models 📞
Model System will be responsible for interacting with Firebase real time data backend to create, update and get data. Also, functions are created in Model View creating can be invoked later in Views Model for better organization purpose of separating write and read path.

#### Views 👀
Views System will be responsible for displaying and rendering data from Firebase as well as receiving user input/interaction and sending user input directly to Model System.

### Citation: 
Use third party library to create calendar 🗓
https://blog.logrocket.com/react-calendar-tutorial-build-customize-calendar/

