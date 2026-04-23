## Git Commits

Follow Conventional Commits specification using commitlint.

### Format

`type(scope?): subject`

### Types

- build: changes that affect the build system
- chore: maintenance tasks
- ci: changes to CI configuration
- docs: documentation changes
- feat: new feature
- fix: bug fix
- perf: performance improvements
- refactor: code change without bug fix or feature
- revert: revert a previous commit
- style: formatting, missing semi colons, etc
- test: adding or updating tests

### Examples

- `chore: run tests on travis ci`
- `fix(server): send cors headers`
- `feat(blog): add comment section`
