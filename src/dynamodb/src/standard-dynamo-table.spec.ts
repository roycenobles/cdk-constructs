import { App, Stack } from 'aws-cdk-lib';
import { AttributeType } from 'aws-cdk-lib/aws-dynamodb';
import { StandardDynamoTable } from './standard-dynamo-table';
import { Template } from 'aws-cdk-lib/assertions';

describe('StandardDynamoTable', () => {
	it('Has appropriate default configuration', () => {
		const app = new App();
		const stack = new Stack(app, 'stack');

		// instantiate a table in the stack
		new StandardDynamoTable(stack, 'test', {
			partitionKey: {
				name: 'pk',
				type: AttributeType.STRING,
			},
		});

		// read the stack into a test template
		const template = Template.fromStack(stack);

		template.hasResourceProperties('AWS::DynamoDB::Table', {
			BillingMode: 'PAY_PER_REQUEST',
			ContributorInsightsSpecification: {
				Enabled: false,
			},
			KeySchema: [
				{
					AttributeName: 'pk',
					KeyType: 'HASH',
				},
			],
			SSESpecification: { SSEEnabled: true },
		});
	});
});
