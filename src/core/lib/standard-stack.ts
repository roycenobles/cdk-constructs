import { Construct } from 'constructs';
import { ContextHandler, IConfiguration, ResourceHandler } from '../../context';
import { Stack } from 'aws-cdk-lib';
import { StandardApp } from './standard-app';

export class StandardStack extends Stack {
	public readonly contextHandler: ContextHandler;
	public readonly resourceHandler: ResourceHandler;

	constructor(scope: Construct, id: string, props: IConfiguration) {
		super(scope, id, props);

		const app = scope.node.root as StandardApp;

		this.contextHandler = app.contextHandler;
		this.resourceHandler = app.resourceHandler;
	}
}
