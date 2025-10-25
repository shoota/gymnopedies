# Gymnopedies

## Development Setup

### run once on your computer

```
brew install mkcert
mkcert -install
```

```sh
mkcert localhost
npm run dev:proxy
```

## Release Procedure

### Steps

1. **Pull request to Bump up package.json version, and merge it.**

   ```json
     "version": "1.0.0",
   ```

2. **push git tag on main branch**

   ```sh
   git tag v1.0.0
   git push origin v1.0.0
   ```

3. **Open new release**

- open [releases](https://github.com/shoota/gymnopedies/releases) in browser
- publish release with pushed git tag

4. **Run npm publish actions**

- run publish GitHub Actions automatically

https://github.com/shoota/gymnopedies/actions/workflows/publish.yml
