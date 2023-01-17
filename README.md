#  cy-factoriall

###  Prerequisites
- Node v16.15.1

###  Install dependencies
> `npm install --save-dev`

### Open Cypress
> `npx cypress open`

### Run tests using command line
> `npx cypress run`

## Notes

#### Bugs (will fail some test cases)
- Link for Terms and Condition is pointing to Privacy page and vice versa.
- Entering `negative numbers` as input value will result in 500 Internal Server Error instead of the correct value.
- Entering values greater than `991` will result in 500 Internal Server Error instead of Infinity.