import { IConfiguration } from './context-handler';

export class ResourceHandler {
	private app: string;
	private stage: string;

	constructor(config: IConfiguration) {
		this.app = config.app;
		this.stage = config.env.stage;
	}

	public generateFullName(name: string) {
		return `${this.app}-${name}-${this.stage}`;
	}
}
