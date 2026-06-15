# Scrape Similarweb — examples

Runnable examples for the **[SimilarWeb Traffic & Rank Scraper | from $4.90/1K](https://apify.com/bovi/similarweb-scraper)** on Apify.

Extract website traffic data from SimilarWeb: global rank, category rank, monthly visits, bounce rate, pages/visit, traffic sources breakdown, and top countries. Clean JSON output via the undocumented SimilarWeb data API — no SimilarWeb account required.

## What you get per record
see the actor's output schema on the Store page

## Quickstart
1. Get your Apify token: <https://console.apify.com/account/integrations>
2. Run a language example below. Both call the actor and print the results.

| Example | File |
|---|---|
| Python (`apify-client`) | [`examples/python/run.py`](examples/python/run.py) |
| JavaScript (`apify-client`) | [`examples/javascript/run.js`](examples/javascript/run.js) |

## Example input
```json
{
  "domains": [
    "airbnb.com",
    "github.com",
    "nytimes.com"
  ],
  "proxyConfiguration": {
    "useApifyProxy": true,
    "apifyProxyGroups": [
      "RESIDENTIAL"
    ]
  },
  "maxConcurrency": 3
}
```

## Links
- **Actor on Apify Store:** <https://apify.com/bovi/similarweb-scraper>
- **Apify client docs:** [Python](https://docs.apify.com/api/client/python/) · [JavaScript](https://docs.apify.com/api/client/js/)

---
_MIT-licensed examples. The actor runs on the caller's Apify account (you pay platform compute + per-result)._
