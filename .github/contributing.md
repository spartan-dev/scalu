# Contributing to this project

- Clone this repository
- Create a fork on your user of this respository.
- Configure your remotes, _upstream_ being the main repository and _origin_ being your fork
- When running `git remote -v` you should see something like this:

```bash
origin	git@github.com:[your-username]/scalu.git (fetch)
origin	git@github.com:[your-username]/scalu.git (push)
upstream	git@github.com:spartan-dev/scalu.git (fetch)
upstream	git@github.com:spartan-dev/scalu.git (push)
```

- You should always keep your `develop` branch up-to-date before creating your own branch.
- For each feature, create a branch with a brief name describing its functionality, ie:

```bash
$ git checkout -b hero-component
```

- Create descriptive commits, starting with an imperative verb, starting with a capitalized letter i.e.

  - Add webapp layout
  - Fix behaviour of toggle hamburguer button
  - Modify styles of footer component

- Create a pull request using the `develop` branch as the base
- Do not create unnecessary merge commits, if any conflicts are present on a pull request, use `git rebase`
- Use the PULL_REQUEST_TEMPLATE to document your Pull Requests. Include all the information, evidence or configurations needed for the reviewer to check your contribution
