const { app } = require('@azure/functions');

app.timer('timerTrigger1', {
    schedule: '0 */5 * * * *',
    handler: (myTimer, context) => {
        // const MAX_PLAYERS = 3;

        // players = [];

        // timesteps = [];

        // for (i = 0; i < MAX_PLAYERS; i++) {
        //     let playerTemplate = {
        //         "id": i,
        //         "name": "Bobulous",
        //         "stats": {
        //             "slippery": 1 + Math.random() * 4,
        //             "kick": 1 + Math.random() * 4,
        //             "friction": 1 + Math.random() * 4,
        //             "water": 1 + Math.random() * 4,
        //             "tough": 1 + Math.random() * 4,
        //             "mana": 1 + Math.random() * 4,
        //             "cunning": 1 + Math.random() * 4,
        //             "wit": 1 + Math.random() * 4,
        //             "bribery": 1 + Math.random() * 4,
        //         }
        //     };
        //     players.push(playerTemplate);
        // }
        
        // function baseMovement(stats) {
        //     move = 3;
        //     move = move * Math.random()
        //     speedAvg = (stats.slippery + stats.kick + stats.friction) / 3;
        //     move += speedAvg;
        //     return move;
        // }
        
        
        // function movement(stats) {
        //     let movement = baseMovement(stats);
        //     let message = "";
        //     // crash
        //     if (Math.random() < ((5 - stats.wit) / 5))
        //     {
        //         console.log("crash")
        //         message = "crash";
        //         movement = 0;
        //     } 
        //     // pass
        //     else if (Math.random() < (stats.cunning / 5) * 0.1)
        //     {
        //         console.log("pass")
        //         message = "pass";
        //         movement += 2;
        //     }
        //     // out of water
        //     else if (Math.random() < ((5 - stats.water) / 5) * 0.1)
        //     {
        //         console.log("water")
        //         message = "water";
        //         movement = 0;
        //     }
        //     // injury
        //     else if (Math.random() < ((5 - stats.tough) / 5) * 0.1)
        //     {
        //         console.log("injury")
        //         message = "injury";
        //         movement = 0;
        //     }
        
        
        //     return [movement, message];
        // }
                
        // for (t = 0; t < 100; t++)
        // {
        //     let step = {"messages": [], "positions": []};
        //     for (i = 0; i < MAX_PLAYERS; i++)
        //     {
        //         let resp = movement(players[i]["stats"]);
        //         if (resp[1] != "") {
        //             step["messages"].push(resp[1]);
        //         }
        //         step["positions"].push(resp[0]);
        //     }
        // }

        const Http = new XMLHttpRequest();
        const url='https://eastus2.azure.data.mongodb-api.com/app/data-eetjq/endpoint/simulate';
        Http.open("GET", url, true);

        Http.setRequestHeader("apiKey", process.env.MONGO_API_KEY);
        Http.setRequestHeader("Content-Type", "application/json");
        Http.setRequestHeader("Accept", "application/json");
        
        Http.send();

        context.log('Timer function processed request.');
    }
});
