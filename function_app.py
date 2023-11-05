import logging
import requests
import azure.functions as func

app = func.FunctionApp()

@app.schedule(schedule="0 * * * * *", arg_name="myTimer", run_on_startup=True,
              use_monitor=False) 
def timer_trigger(myTimer: func.TimerRequest) -> None:
    if myTimer.past_due:
        logging.info('The timer is past due!')

    # requests.post(data={"dataSource": "Cluster0", "database": "Cluster0", "collection": "races", "document": {"players":[{"id":0,"name":"Bobulous","stats":{"slippery":2.36263946855117,"kick":2.227748998998604,"friction":1.6447177844024168,"water":3.8694023200370298,"tough":4.836863717821992,"mana":1.2289482588845075,"cunning":1.781197925734042,"wit":4.727803144229228,"bribery":3.436927923217615}},{"id":1,"name":"Bobulous","stats":{"slippery":1.42204019124976,"kick":4.312106287207613,"friction":3.45709339851125,"water":2.9041944582058106,"tough":4.060695244910984,"mana":4.6135007692499155,"cunning":4.784623068922178,"wit":3.0593421882409393,"bribery":1.2183272764244357}},{"id":2,"name":"Bobulous","stats":{"slippery":2.4262694519923507,"kick":1.6640007435360893,"friction":1.7924057311610468,"water":2.732325773848827,"tough":4.815017536760793,"mana":3.5090576305772325,"cunning":1.20212762118069,"wit":3.9830284464581167,"bribery":4.33344335726825}}],"timesteps":[]}}, 
                #   url="https://eastus2.azure.data.mongodb-api.com/app/data-eetjq/endpoint/data/v1/action/insertOne", headers={"apiKey": "rS6YEkfv9oSL0xWR7eK8kUG6CpiIBN3YYQrscvsyyxC3e8pTYU13MhD0nzxnOE7Z", "Content-Type": "application/json", "Accept": "application/json"})

    logging.info('Python timer trigger function executed.')