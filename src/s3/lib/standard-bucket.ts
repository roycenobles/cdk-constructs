import { BlockPublicAccess, Bucket, BucketEncryption, BucketProps, ObjectOwnership } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

type StandardBucketProps = Omit<BucketProps, 'objectOwnership' | 'blockPublicAccess' | 'encryption'>;

export class StandardBucket extends Bucket {
	constructor(scope: Construct, id: string, props: StandardBucketProps) {
		super(scope, id, {
			objectOwnership: ObjectOwnership.BUCKET_OWNER_ENFORCED,
			blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
			encryption: BucketEncryption.S3_MANAGED,
			objectLockEnabled: false, // just default
			...props,
		});
	}
}
