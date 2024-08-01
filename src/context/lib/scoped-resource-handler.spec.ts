import { ScopedResourceHandler } from './scoped-resource-handler';

describe('ScopedResourceHandler', () => {
	it('should generate full name with the provided name', () => {
		const handler = new ScopedResourceHandler('stage', 'app-resource-stage');
		const name = handler.generateFullName('sub');

		expect(name).toBe('app-resource-sub-stage');
	});

	it('should handle deeply nested resources', () => {
		const handler = new ScopedResourceHandler('stage', 'app-resource-sub1-sub2-stage');
		const name = handler.generateFullName('sub3');

		expect(name).toBe('app-resource-sub1-sub2-sub3-stage');
	});

	it('should handle hyphenated stage names', () => {
		const handler = new ScopedResourceHandler('stage-2', 'app-resource-sub1-sub2-stage-2');
		const name = handler.generateFullName('sub3');

		expect(name).toBe('app-resource-sub1-sub2-sub3-stage-2');
	});

	it('should fail on invalid format', () => {
		const handler = new ScopedResourceHandler('stage', 'app');
		let message = undefined;

		try {
			handler.generateFullName('sub');
			message = 'No error thrown';
		} catch (e: unknown) {
			message = (e as Error).message;
		}

		expect(message).toBe('Name format is invalid: "app".');
	});

	it('should fail on invalid stage', () => {
		const handler = new ScopedResourceHandler('stage2', 'app-resource-stage');
		let message = undefined;

		try {
			handler.generateFullName('sub');
			message = 'No error thrown';
		} catch (e: unknown) {
			message = (e as Error).message;
		}

		expect(message).toBe('Name format is invalid: "app-resource-stage".');
	});
});
