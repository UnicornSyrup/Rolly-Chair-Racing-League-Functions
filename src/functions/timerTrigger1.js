const { app } = require('@azure/functions');

app.timer('timerTrigger1', {
    schedule: '0 */5 * * * *',
    handler: (myTimer, context) => {

        const Http = new XMLHttpRequest();
        const url='https://eastus2.azure.data.mongodb-api.com/app/data-eetjq/endpoint/simulate';
        Http.open("GET", url, true);

        Http.setRequestHeader("apiKey", process.env.MONGO_API_KEY);
        Http.setRequestHeader("Content-Type", "application/json");
        Http.setRequestHeader("Accept", "application/json");
        
        Http.onerror = (e) => {context.log(e);}


        Http.send();

        context.log('Timer function processed request.');
    }
});
