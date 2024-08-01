import { IResourceHandler } from './resource-handler';

/**
 * Utility class to generate full names for resources that are scoped to a parent resource.
 * For example, a Lambda function that is scoped to an API Gateway stage.
 */
export class ScopedResourceHandler implements IResourceHandler {
	private readonly parentName: string;
	private readonly suffix: string;
	private readonly stage: string;

	constructor(stage: string, parentName: string) {
		this.parentName = parentName;
		this.suffix = `-${stage}`;
		this.stage = stage;
	}

	public generateFullName(name: string): string {
		if (!this.isValidName(this.parentName)) {
			throw new Error(`Name format is invalid: "${this.parentName}".`);
		}

		const index = this.parentName.lastIndexOf(this.suffix);
		const prefix = this.parentName.substring(0, index);

		return `${prefix}-${name}-${this.stage}`;
	}

	private isValidName(name: string): boolean {
		// name must contain but not start with the suffix
		return name.indexOf(this.suffix) > 0;
	}
}
