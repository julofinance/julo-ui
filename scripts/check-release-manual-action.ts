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
  const packageName = process.env.PACKAGE_NAME;
  const packageVersion = process.env.PACKAGE_VERSION;

  // exit if package name or package version is empty
  if (!packageName || !packageVersion) {
    console.error('❗️- Package name & Package version is missing from env');
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
      `❗️- Version ${packageVersion} is not match with "${packageName}" version which is ${packageInfo.version}`,
    );
    process.exit(1);
  }

  // eslint-disable-next-line no-console
  console.log('✅ - Passed');
}

main();
