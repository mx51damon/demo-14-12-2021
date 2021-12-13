## Quick demo for Error Boundary & Feature Flag component (14/12/2021)

- This App is just for demo only (Examples are utilized for explanation purpose)
- If you have any questions, please contact me directly

### How to start?

```js
npm i && npm run serve // run with static server

// or

npm i && npm start // run locally
```

### About error boundary

- It is a error handling concept for React component layer [Answer for `what`]
- For avoid getting page crash on UI, especially during the page rendering or when user interacts with our UI [Answer for `why`]
- Able to collect error information and display the fallback UI
- `componentDidCatch` is a good life cycle method to log the error information or update error tracker state when error detected

### About feature flag

- It is a software development technique, which allows to control feature availability [Answer for `what`]
- When we need to test some features in certain environment (eg: `dev environment`) or for certain type of users (eg: `admin`) [Answer for `why`]
- Good for release process, especially when feature is not confident to be released, we can hold the feature and before decision has been made (Simple explanation: `ship features safely`)
- Sometimes, we might consider <a href="https://www.split.io/blog/feature-flags-as-a-service/" target="_blank">feature flag as a service</a>, for example, we might consider to use it for A/B testing?
