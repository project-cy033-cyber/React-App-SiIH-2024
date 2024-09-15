import requests
from bs4 import BeautifulSoup
import re
import pandas as pd

def scrape_website(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    # Extract relevant information
    # This is a simplified example and would need to be customized for each source
    incidents = soup.find_all('div', class_='incident')
    data = []
    for incident in incidents:
        title = incident.find('h2').text
        description = incident.find('p').text
        date = incident.find('span', class_='date').text
        data.append({'title': title, 'description': description, 'date': date})
    return pd.DataFrame(data)

def collect_data_from_sources(sources):
    all_data = pd.DataFrame()
    for source in sources:
        data = scrape_website(source)
        all_data = pd.concat([all_data, data])
    return all_data

# Example usage
sources = ['https://example1.com', 'https://example2.com']
incident_data = collect_data_from_sources(sources)
