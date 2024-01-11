<h1>This is our api to monitor the api endpoints health</h1>

<h2>How to run</h2>

```bash
  cp .env.example .env
  npm install
  npm run dev
```

<h1>How to change the time for requests</h1>

<span>We have to options</span>

<ul>
  <li>Change the time in the config file (Default Value Constant) (src/config/request-timeout-value.ts)</li>
  <li>Change the env value NEXT_PUBLIC_REQUEST_TIMEOUT_IN_SECONDS</li>
</ul>
