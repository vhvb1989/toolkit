console.log("hello from the node app")
console.log("Reading env var AZURE_KEY_VAULT_ENDPOINT")
const value = process.env.AZURE_KEY_VAULT_ENDPOINT
console.log("Value: " + value)