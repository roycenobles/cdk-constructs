import { Architecture, Runtime } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import { Duration } from 'aws-cdk-lib';
import { NodejsFunction, NodejsFunctionProps } from 'aws-cdk-lib/aws-lambda-nodejs';
import { RetentionDays } from 'aws-cdk-lib/aws-logs';

type StandardNodeFunctionProps = Omit<NodejsFunctionProps, 'runtime'>;

export class StandardNodeFunction extends NodejsFunction {
	constructor(scope: Construct, id: string, props: StandardNodeFunctionProps) {
		super(scope, id, {
			runtime: Runtime.NODEJS_18_X,
			architecture: Architecture.ARM_64,
			logRetention: RetentionDays.ONE_WEEK,
			memorySize: 1024,
			timeout: Duration.seconds(30),
			bundling: {
				minify: true,
				externalModules: ['@aws-sdk/*', 'aws-lambda'],
				...props.bundling,
			},
			...props,
		});
	}
}
