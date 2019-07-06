let myChart = document.getElementById('populationChart').getContext('2d');

let populatinnChart = new Chart(myChart, {
    type: "bar",
    data: {
        labels: ["Warszawa", "Kraków", "Łódź", "Wrocław", "Poznań", "Gdańsk", "Szczecin", "Bydgoszcz", "Lublin", "Białystok"],
        datasets: [{
            label: "Populacja",
            data: [
                1764615, 767348, 690422, 638586, 538633, 464254, 403883, 352313, 339850, 297288						
            ],
            backgroundColor: ["red", "blue", "green", "yellow", "brown", "orange", "grey", "purple", "aqua", "gold"],
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 3,
            hoverBorderColor: "#000" 
        }],

    },
    options: {
        title: {
            display: true,
            text: "Populacja w miastach w Polsce - styczeń 2018 r.",
            fontSize: 18
        },
        legend: {
            display: true,
            position: "top",
            labels: {
                fontColor: "blue"
            }
        },
        layout: {
            padding: {
                top: 20,
                right: 0,
                bottom: 0,
                left: 0
            }
        },
        tooltips: {
            enabled: true
        }
    }
});
