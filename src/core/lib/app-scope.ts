import { ContextHandler, ResourceHandler } from '../../context';
import { IConstruct } from 'constructs';

export interface IAppScope extends IConstruct {
	readonly contextHandler: ContextHandler;
	readonly resourceHandler: ResourceHandler;
}
