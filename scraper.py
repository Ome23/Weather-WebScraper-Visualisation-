import requests
from bs4 import BeautifulSoup
import json

# User-Agent string to mimic a browser request
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537"
}

# URL for BBC Weather for London
url = "https://www.bbc.co.uk/weather/2643743"

# Fetching the webpage
response = requests.get(url, headers=headers)
soup = BeautifulSoup(response.text, 'html.parser')

try:
    # Scraping temperature 
    temperature = soup.find("span", {"class": "wr-value--temperature--c"}).text
    title = soup.find("div", {"class": "wr-day__weather-type-description wr-js-day-content-weather-type-description wr-day__content__weather-type-description--opaque"}).text
except AttributeError:
    temperature = "Not found"
    title = "Not found"

# Saving the scraped data as JSON
weather_data = {
    "temperature": temperature,
    "title": title
}

# Save to a JSON file
with open("weather_data.json", "w") as f:
    json.dump(weather_data, f)
