import * as path from 'path';
import { App, Stack } from 'aws-cdk-lib';
import { StandardNodeFunction } from './standard-node-function';
import { Template } from 'aws-cdk-lib/assertions';

describe('StandardNodeFunction', () => {
	it('Has appropriate default configuration.', () => {
		const app = new App();
		const stack = new Stack(app, 'stack');

		// instantiate a lambda
		new StandardNodeFunction(stack, 'function', {
			functionName: 'test-function',
			entry: path.join(__dirname, '../mocks/node-handler.ts'),
		});

		// read the stack into a test template
		const template = Template.fromStack(stack);

		// verify default configuration
		template.hasResourceProperties('AWS::Lambda::Function', {
			FunctionName: 'test-function',
			Architectures: ['arm64'],
			Handler: 'index.handler',
			MemorySize: 1024,
			Runtime: 'nodejs18.x',
			Timeout: 30,
		});
	});
});
