# Steps to reproduce issue
- Clone the repo and run app using `expo run:android` command from root directory.

- If app is installed on android simulator you must see app crashing with error : 
```
RangeError: Property storage exceeds 196607 properties
```

- In App.js change the `useNativeDriver:false` from `useNativeDriver:true` and verify app doesn't crash.

- Also, try changing `TIMECONST` variable to `2000000` with `useNativeDriver:true` and it should work properly.

- You can also change the `jsEngine` to `jsc` from `hermes` in `app.json` to verify nothing crashes with jsc engine and it is related to hermes only.