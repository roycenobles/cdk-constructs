import { SubResourceHandler } from './sub-resource-handler';

describe('SubResourceHandler', () => {
	it('should generate full name with the provided name', () => {
		const handler = new SubResourceHandler('app-resource-stage');
		const name = handler.generateFullName('sub');

		expect(name).toBe('app-resource-sub-stage');
	});

	it('should handle deeply nested resources', () => {
		const handler = new SubResourceHandler('app-resource-sub1-sub2-stage');
		const name = handler.generateFullName('sub3');

		expect(name).toBe('app-resource-sub1-sub2-sub3-stage');
	});

	it('should fail on invalid format', () => {
		const handler = new SubResourceHandler('app');
		let message = undefined;

		try {
			handler.generateFullName('sub');
			message = 'No error thrown';
		} catch (e: unknown) {
			message = (e as Error).message;
		}

		expect(message).toBe('Resource: [ app ] name format is invalid.');
	});
});
