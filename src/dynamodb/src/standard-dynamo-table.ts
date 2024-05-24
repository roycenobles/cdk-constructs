import { BillingMode, Table, TableEncryption, TableProps } from 'aws-cdk-lib/aws-dynamodb';
import { Construct } from 'constructs';
import { Stack } from 'aws-cdk-lib';

export type StandardDynamoTableProps = Omit<TableProps, 'billingMode' | 'encryption'>;

export class StandardDynamoTable extends Table {
	constructor(scope: Construct, id: string, props: StandardDynamoTableProps) {
		super(scope, id, {
			billingMode: BillingMode.PAY_PER_REQUEST,
			encryption: TableEncryption.AWS_MANAGED,
			contributorInsightsEnabled: false,
			...props,
		});

		Stack.of(scope).exportValue(this.tableArn);
		Stack.of(scope).exportValue(this.tableName);
	}
}
