# Coding Challenge

This repository is my approach to a coding challenge including React + Typescript.

## Requirements

- Create a publication display page.
- The page should have pagination and a filter by users who created these publications.
- Create also the page for creating a new publication
- Use this API to get the data: https://jsonplaceholder.typicode.com/

## Assumptions and choices

- I decided to use Axios to make the API calls because it is a very popular library and it is easy to use. I could have used react-query but the complexity of the project did not require it.
- I decided to use tailwindcss as my css framework. I find that boosts my productivity and I can focus on the logic of the application. Plus it is very easy to use and very customizable.
- I used Jest and React Testing Library to test the components. I find that it is a very good combination and well documented.
- As the API does not provide a way to create a new publication, I decided to just run a POST request to the API and display the response in an alert.

## How to run the app locally

Clone the project

```bash
  git clone https://github.com/BauTancredi/publications-display-app
```

Go to the project directory

```bash
  cd publications-display-app
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Running Tests

To run tests, run the following command

```bash
  npm run test
```
## Next steps

- Use an API that actually allows to create a new publication.
- Being able to create an own publication (We would need to be able to create a new user).
- Have the possibility to edit a publication.
- Have the possibility to delete a publication.

## License

[MIT](https://choosealicense.com/licenses/mit/)

