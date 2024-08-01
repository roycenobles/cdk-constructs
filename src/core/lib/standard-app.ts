import { App } from 'aws-cdk-lib';
import { ContextHandler, IConfiguration, ResourceHandler } from '../../context';
import { IAppScope } from './app-scope';

export class StandardApp extends App implements IAppScope {
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
