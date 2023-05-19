import { execSync } from 'child_process';

function findPackageInfo(
  packageName: string,
  pnpmLsJson: Array<Record<string, unknown>>,
) {
  const result = pnpmLsJson.find(({ name }) => name === packageName);

  if (result) return result;

  return null;
}

const excludeExample = './examples/**';

function main() {
  const packageName = process.env.PACKAGE_NAME || '@julo-ui/react';
  const packageVersion = process.env.PACKAGE_VERSION || '0.0.1-alpha.1';

  // exit if package name is empty
  if (!packageName) {
    console.error('❗️- Package name not found');
    process.exit(1);
  }

  const pnpmLsOutput = execSync(
    `pnpm list -r --depth 1 --filter '!${excludeExample}'  --json`,
  ).toString();
  const pnpmLsJson = JSON.parse(pnpmLsOutput);

  const packageInfo = findPackageInfo(packageName, pnpmLsJson);

  // exit if package name not found
  if (!packageInfo) {
    console.error(`❗️- Package "${packageName}" not found`);
    process.exit(1);
  }

  if (packageVersion !== packageInfo.version) {
    console.error(
      `❗️- Version ${packageVersion} is not valid with "${packageName}" version which is ${packageInfo.version}`,
    );
    process.exit(1);
  }

  // eslint-disable-next-line no-console
  console.log('✅ - Passed');
}

main();
