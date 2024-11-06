require('dotenv').config();
const shell = require('shelljs');

const command = `pact-broker can-i-deploy --pacticipant=WebConsumer --version=1.0.9 --to-environment production --broker-base-url=${process.env.PACT_BROKER_BASE_URL} --broker-token=${process.env.PACT_BROKER_TOKEN}`;

shell.exec(command);