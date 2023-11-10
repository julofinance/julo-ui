Thanks for showing interest to contribute to JULO UI 💖, you rock!

When it comes to open source, there are different ways you can contribute, all
of which are valuable. Here's a few guidelines that should help you as you
prepare your contribution.

## Setup the Project

The following steps will get you up and running to contribute to JULO UI:

1. Fork the repo (click the <kbd>Fork</kbd> button at the top right of
   [this page](https://github.com/julofinance/julo-ui))

2. Clone your fork locally

```sh
git clone https://github.com/<your_github_username>/julo-ui.git
cd julo-ui
```

3. Setup all the dependencies and packages by running `pnpm install`. This
   command will install dependencies.

## Development

To improve our development process, we've set up tooling and systems. JULO UI
uses a monorepo structure and we treat each component as an independent package
that can be consumed in isolation.

### Tooling

- [PNPM](https://pnpm.io/) to manage packages and dependencies
- [Tsup](https://tsup.egoist.dev/) to bundle packages
- [Storybook](https://storybook.js.org/) for rapid UI component development and
  testing
- [Testing Library](https://testing-library.com/) for testing components and
  hooks
- [Changeset](https://github.com/atlassian/changesets) for changes
  documentation, changelog generation, and release management.

### Commands

**`pnpm install`**: bootstraps the entire project, symlinks all dependencies for
cross-component development and builds all components.

**`pnpm storybook`**: starts storybook server and loads stories in files that
end with `.stories.tsx`.

**`pnpm build`**: run build for all component packages.

**`pnpm test`**: run test for all component packages.

**`pnpm release`**: publish changed packages.

## Think you found a bug?

Please conform to the issue template and provide a clear path to reproduction
with a code example. The best way to show a bug is by sending a CodeSandbox
link.

## Proposing new or changed API?

Please provide thoughtful comments and some sample API code. Proposals that
don't line up with our roadmap or don't have a thoughtful explanation will be
closed.

## Making a Pull Request?

Pull requests need to be reviewed by at least one of the contributors.

### Commit Convention

Before you create a Pull Request, please check whether your commits comply with
the commit conventions used in this repository.

When you create a commit we kindly ask you to follow the convention
`category(scope or module): message` in your commit message while using one of
the following categories:

- `feat / feature`: all changes that introduce completely new code or new
  features
- `fix`: changes that fix a bug (ideally you will additionally reference an
  issue if present)
- `refactor`: any code related change that is not a fix nor a feature
- `docs`: changing existing or creating new documentation (i.e. README, docs for
  usage of a lib or cli usage)
- `build`: all changes regarding the build of the software, changes to
  dependencies or the addition of new dependencies
- `test`: all changes regarding tests (adding new tests or changing existing
  ones)
- `ci`: all changes regarding the configuration of continuous integration (i.e.
  github actions, ci system)
- `chore`: all changes to the repository that do not fit into any of the above
  categories

If you are interested in the detailed specification you can visit
https://www.conventionalcommits.org/ or check out the
[Angular Commit Message Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).

### Steps to PR

1. Fork of the julo-ui repository and clone your fork

2. Create a new branch out of the `master` branch. We follow the convention
   `[type/scope]`. For example `fix/sliders` or `docs/menu-typo`. `type`
   can be either `docs`, `fix`, `feat`, `build`, or any other conventional
   commit type. `scope` is just a short id that describes the scope of work.

3. Make and commit your changes following the
   [commit convention](https://github.com/julofinance/julo-ui/blob/main/CONTRIBUTING.md#commit-convention).
   As you develop, you can run `pnpm --filter <package_name> build` and
   `pnpm test` to make sure everything works as expected.

4. You need to make sure your branch is up to date by running `git fetch origin master` and `git rebase origin/master`.
   Please make sure there is no conflict in your branch and fix the conflict carefully.
5. Open PR and put the title `[component-name]-v[component-version]` if you are adding new components. Put the title `[commit convention]: [changes]` if you are fixing bugs or adding documentation

> If you made minor changes like CI config, prettier, etc, you can run
> `pnpm changeset add --empty` to generate an empty changeset file to document
> your changes.

### Tests

All commits that fix bugs or add features need a test.

> **Dear JULO team:** Please do not merge code without tests

## License

By contributing your code to the julofinance GitHub repository, you agree to
license your contribution under the MIT license.
