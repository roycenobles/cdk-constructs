import { App } from 'aws-cdk-lib';
import { ContextHandler, IConfiguration, ResourceHandler } from '../../context';

export class StandardApp extends App {
	public readonly contextHandler: ContextHandler;
	public readonly resourceHandler: ResourceHandler;

	public get config(): IConfiguration {
		return this.contextHandler.config;
	}

	constructor() {
		super();
		this.contextHandler = new ContextHandler(this);
		this.resourceHandler = new ResourceHandler(this.contextHandler.config);
	}
}
