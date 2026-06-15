/**
 * similarweb-scraper — JavaScript example.
 *
 *   npm install apify-client
 *   export APIFY_TOKEN=...        # https://console.apify.com/account/integrations
 *   node run.js
 *
 * Docs: https://apify.com/bovi/similarweb-scraper
 */
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });

const input = {
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
};

const run = await client.actor('bovi/similarweb-scraper').call(input);
const { items } = await client.dataset(run.defaultDatasetId).listItems();
for (const item of items) console.log(item);
