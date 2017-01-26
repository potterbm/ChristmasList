# ChristmasList

A collaborative Christmas list app written in React Native.

## Development

Development should take place on your own feature branch, for obvious reasons.

The `master` branch will require a PR to commit to.

### Running the frontend

The fronted can be started with the following commands:
```bash
# Install react-native CLI
yarn global add react-native-cli

# Yarn install
cd frontend
yarn install

# Run the IOS simulator
react-native run-ios # or: react-native run-android
```

### Running the backend

The backend can be started with the following command:
```bash
cd backend

yarn start
```

Once started, the GraphQL API can be eplored at `http://localhost:8080/graphiql` using [GraphiQL](https://github.com/graphql/graphiql).
