import { ResourceHandler } from './resource-handler';

export class SubResourceHandler {
	private resourceName: string;

	constructor(resourceName: string) {
		this.resourceName = resourceName;
	}

	public generateFullName(name: string) {
		return this.replaceLast(this.resourceName, '-', `-${name}-`);
	}

	private replaceLast(source: string, pattern: string, replacement: string): string {
		if ((source.match(new RegExp(pattern, 'g')) || []).length < 2) {
			throw new Error(`Resource: [ ${source} ] name format is invalid.`);
		}

		const last = source.lastIndexOf(pattern);

		const prefix = source.substring(0, last);
		const suffix = source.substring(last + pattern.length);

		return `${prefix}${replacement}${suffix}`;
	}
}
