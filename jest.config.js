/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	moduleNameMapper: {
		'aws-cdk-lib/aws-lambda-nodejs': 'cdk-lambda-nodejs-mock',
	},
};
