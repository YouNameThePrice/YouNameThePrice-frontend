# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Kurulum
1. Clone the project to your local machine. <br>
```git clone https://github.com/YouNameThePrice/YouNameThePrice-frontend.git```

2. Go to project folder <br>
```cd YouNameThePrice-frontend```

3. Open the project in VSCode <br> 
```code .```

4. Install dependencies <br>
```npm install```

5. Start the project on your local <br>
```npm start```
### Route Table

Below you can find the route table of the project. This table contains each path and its corresponding pages.

| Path                  | Page             |
|-----------------------|--------------------|
| /login                | Login              |
| /register             | Register           |
| /                     | Home (products)    |
| /:category            | Home (products)    |
| /:category/:subcategory | Home  (products) |
| /:category/:subcategory/:title | ProductDetail |
| /profile              | ProfileDetail      |
| /favorite             | Favorite           |
| /cart                 | Cart               |