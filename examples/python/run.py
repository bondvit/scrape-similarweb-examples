"""
similarweb-scraper — Python example.

    pip install apify-client
    export APIFY_TOKEN=...        # https://console.apify.com/account/integrations
    python run.py

Docs: https://apify.com/bovi/similarweb-scraper
"""
import os
from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])

run_input = {   'domains': ['airbnb.com', 'github.com', 'nytimes.com'],
    'proxyConfiguration': {'useApifyProxy': True, 'apifyProxyGroups': ['RESIDENTIAL']},
    'maxConcurrency': 3}

run = client.actor("bovi/similarweb-scraper").call(run_input=run_input)

for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
