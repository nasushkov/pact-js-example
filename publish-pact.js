require('dotenv').config();
const shell = require('shelljs');

const command = `pact-broker publish ./pacts --consumer-app-version=1.0.9 --broker-base-url=${process.env.PACT_BROKER_BASE_URL} --broker-token=${process.env.PACT_BROKER_TOKEN} --branch=feat1`;

shell.exec(command);