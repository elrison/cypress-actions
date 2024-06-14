const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Ijc4ZjU4OWJjLTAwMzMtNDEzMy1hYTUwLWIxNjlkMTg5YmZiYi0xNzE4MzczMTcyMDk3IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiMWI0OThiMTUtMmIwYS00Yjk4LTgxODUtY2MzMjU5MjNkNGMxIiwidHlwZSI6InQifQ.kQAl_o-FeDlraSemJJaJaLLTAB-Qkaogwy2LEqCVGsU'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: 'TOKEN',
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
