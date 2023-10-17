 // Function to fetch and display data as a table
            async function fetchData() {
                try {
                    const response = await fetch('/getMeas');
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }

                    const data = await response.json();

                    //const dataTable = document.getElementById('data-table');
                    //const dataBody = document.getElementById('data-body');
                    //dataBody.innerHTML = ''; // Clear existing data

                    data.forEach(item => {
                        const temperature = item.temperature;
                        const temperatureF = (temperature * 9/5) + 32;
                        const temperatureText = temperature + " \u00B0C | " + temperatureF + " \u00B0F";
                        document.getElementById('temperatureText').innerHTML = temperatureText;
                        const humidity = item.humidity;
                        const humidityText = humidity + "%";
                        document.getElementById('humidityText').innerHTML = humidityText;
                        const co2 = item.co2;
                        const co2Text = co2 + " ppm";
                        document.getElementById('co2Text').innerHTML = co2 + "ppm";

                        const act1 = item.act1Status;

                        const act1Text = "Actuator 1 Status: " + act1;
                        document.getElementById('act1Text').innerHTML = act1Text;


                    });
                } catch (error) {
                    console.error('Error:', error);
                }
            }

            // Call the fetchData function initially and every 10 seconds
            fetchData(); // Initial call
            setInterval(fetchData, 10000); // Refresh every 10 seconds




	document.addEventListener("DOMContentLoaded", function () {
            const checkboxes = document.querySelectorAll('input[type="checkbox"]');
            const sendRequestButton = document.getElementById("sendRequestButton");

            sendRequestButton.addEventListener("click", function () {
                const data = {
                    actuator1Set: checkboxes[0].checked,
                    actuator2Set: checkboxes[1].checked,
                    actuator3Set: checkboxes[2].checked,
                };

                // Send the POST request to /setComm
                fetch('/setComm', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then(response => {
                    if (response.ok) {
                        alert("POST request sent successfully!");
                    } else {
                        alert("Failed to send POST request.");
                    }
                })
                .catch(error => {
                    console.error("Error:", error);
                });
            });
        });
