require('dotenv').config();
const shell = require('shelljs');

const command = `pact-broker record-deployment --pacticipant=MoviesAPI --version=1.0.0 --environment production --broker-base-url=${process.env.PACT_BROKER_BASE_URL} --broker-token=${process.env.PACT_BROKER_TOKEN}`;

shell.exec(command);