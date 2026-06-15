# Scrape Similarweb — examples

Runnable examples for the **[SimilarWeb Traffic & Rank Scraper | from $4.90/1K](https://apify.com/bovi/similarweb-scraper)** on Apify.

Extract website traffic data from SimilarWeb: global rank, category rank, monthly visits, bounce rate, pages/visit, traffic sources breakdown, and top countries. Clean JSON output via the undocumented SimilarWeb data API — no SimilarWeb account required.

## What you get per record
`avg_visit_duration_sec` · `bounce_rate` · `category` · `category_rank` · `category_rank_name` · `country_rank` · `country_rank_cc` · `domain` · `error` · `estimated_monthly_visits` · `global_rank` · `is_small` · `monthly_visits_avg` · `pages_per_visit` · `scraped_at` · `top_countries` · `traffic_sources`

## Quickstart
1. Get your Apify token: <https://console.apify.com/account/integrations>
2. Run a language example below. Both call the actor and print the results.

| Example | File |
|---|---|
| Python (`apify-client`) | [`examples/python/run.py`](examples/python/run.py) |
| JavaScript (`apify-client`) | [`examples/javascript/run.js`](examples/javascript/run.js) |
| Sample output (real records) | [`examples/sample_output.json`](examples/sample_output.json) |

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
