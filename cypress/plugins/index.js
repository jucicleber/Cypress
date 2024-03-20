const cucumber = required('cypress-cucumber-preprocessor').default


module.exports = (on, config) => {
    on('file:preprocessor', cucumber())
}