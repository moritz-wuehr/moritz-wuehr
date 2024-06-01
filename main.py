

#import requests

#url = "https://apis.deutschebahn.com/db/apis/ris-boards/v1/public/arrivals/8500010?timeStart=2024-05-29T14%3A07%3A54.140Z&timeEnd=2024-05-29T15%3A57%3A38.866Z&includeStationGroup=true&includeMessagesDisruptions=true"

#headers = {
#    "DB-Client-Id": "df6ed5c4704419a5da56e38441dcdd62",
#    "DB-Api-Key": "5c0f29d6832f31193c822e3cafc2a087",
#    "accept": "application/vnd.de.db.ris+json"
#}

#response = requests.get(url, headers=headers)

#print(response.text)



from pyscript import display
from datetime import datetime

def function()
    now = datetime.now()
    display(now.strftime("%m/%d/%Y, %H:%M:%S"))
    print('fertig')