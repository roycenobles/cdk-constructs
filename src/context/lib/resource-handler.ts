import { IConfiguration } from './context-handler';
import { ScopedResourceHandler } from './scoped-resource-handler';

export interface IResourceHandler {
	generateFullName(name: string): string;
}

export class ResourceHandler implements IResourceHandler {
	private app: string;
	private stage: string;

	constructor(config: IConfiguration) {
		this.app = config.app;
		this.stage = config.env.stage;
	}

	public generateFullName(name: string): string {
		return `${this.app}-${name}-${this.stage}`;
	}

	public scope(resourceName: string) {
		return new ScopedResourceHandler(this.stage, resourceName);
	}
}
