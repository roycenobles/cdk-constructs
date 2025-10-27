# cdk-constructs

CDK Constructs for use in AWS projects.

## Installation

```bash
npm install @roycenobles/cdk-constructs
```

## Constructs

### Core (`@roycenobles/cdk-constructs/core`)

- **`StandardApp`** - Extended CDK App with built-in context and resource handling
- **`StandardStack`** - Extended CDK Stack with access to app-level context and resource handlers
- **`IAppScope`** - Interface providing access to context and resource handlers

### Context (`@roycenobles/cdk-constructs/context`)

- **`ContextHandler`** - Loads and manages application configuration from CDK context
- **`ResourceHandler`** - Generates standardized resource names with app and stage prefixes
- **`IConfiguration`** - Configuration interface for app name and environment settings
- **`IEnvironment`** - Environment interface for account, region, and stage

### Lambda (`@roycenobles/cdk-constructs/lambda`)

- **`StandardNodeFunction`** - Preconfigured Node.js Lambda function with:
  - Node.js 20.x runtime
  - ARM64 architecture
  - 1GB memory, 30s timeout
  - 1-week log retention
  - Minified bundles with external AWS SDK modules

### DynamoDB (`@roycenobles/cdk-constructs/dynamodb`)

- **`StandardDynamoTable`** - Preconfigured DynamoDB table with:
  - Pay-per-request billing
  - AWS-managed encryption
  - Contributor insights disabled
  - Auto-exported table ARN and name

### S3 (`@roycenobles/cdk-constructs/s3`)

- **`StandardBucket`** - Preconfigured S3 bucket with:
  - Bucket owner enforced ownership
  - All public access blocked
  - S3-managed encryption

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**This software is provided for personal use without warranty of any kind.** Use at your own risk.
