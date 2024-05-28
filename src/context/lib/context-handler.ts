import { App } from 'aws-cdk-lib';

export interface IEnvironment {
	account: string;
	region: string;
	stage: string;
}

export interface IConfiguration {
	app: string;
	env: IEnvironment;
}

export class ContextHandler {
	public readonly config: IConfiguration;

	constructor(app: App) {
		this.config = this.loadProperties(app, process.env['stage'] as string);
	}

	private loadProperties(app: App, stage: string): IConfiguration {
		const json = app.node.tryGetContext('config');
		const name = json['app'] as string;

		if (!name) {
			throw Error('Application name was not loaded from configuration.');
		}

		const env = (json['env'] as IEnvironment[]).find(env => env.stage === stage);

		if (!env) {
			throw Error(`Application configuration was not loaded for stage: ${stage}`);
		}

		return {
			app: name,
			env: { ...env },
		};
	}
}
