const webhook = "https://discord.com/api/webhooks/1527623592282427493/nUS4nkeHR5uSj57e1AS5sxGWtrbI2G4FC-3Llpb1_GCza-kj_QulPkqIHA5RL0Eoc_vo";

document.getElementById("reportForm").addEventListener("submit", async function(e){

    e.preventDefault();

    const data = {
        embeds: [{
            title: "New 3T Report Submitted",
            color: 3447003,
            fields: [
                {
                    name: " Vehicle Plate",
                    value: document.getElementById("plate").value,
                    inline: true
                },
                {
                    name: " Location",
                    value: document.getElementById("location").value,
                    inline: true
                },
                {
                    name: " Time",
                    value: document.getElementById("time").value,
                    inline: true
                },
                {
                    name: " Callsign",
                    value: document.getElementById("callsign").value,
                    inline: true
                }
            ],
            footer:{
                text:"Tauranga, New Zealand Roleplay"
            }
        }]
    };

    await fetch(webhook,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    });

    alert("✅ Report sent!");

    document.getElementById("reportForm").reset();

});