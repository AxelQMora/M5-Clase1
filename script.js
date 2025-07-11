document.addEventListener('DOMContentLoaded', function () {
    const orderInput = document.getElementById("new-order-container");
    const button = document.getElementById("add-order");
    const ordersList = document.getElementById("orders-list");

    // Function to generate random ID
    function generateID() {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let id = '';
        for (let i = 0; i < 5; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            id += chars[randomIndex];
        }
        return id;
    }

    // When the button is clicked
    button.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent form submission

        const orderText = orderInput.value.trim();
        if (orderText === '') return; // Do nothing if input is empty

        // Create order container
        const orderDiv = document.createElement('div');
        orderDiv.classList.add('order-container');

        // Create order ID heading
        const orderID = document.createElement('h2');
        orderID.textContent = `ID: ${generateID()}`;

        // Create paragraph with order text
        const orderContent = document.createElement('p');
        orderContent.textContent = orderText;

        // Append to orderDiv
        orderDiv.appendChild(orderID);
        orderDiv.appendChild(orderContent);

        // Add to page
        ordersList.appendChild(orderDiv);

        // Clear input
        orderInput.value = '';

        //Status box
        let statusBox = document.createElement('div');
        statusBox.classList.add('status-box');
        statusBox.textContent = "Ordered";
        orderDiv.appendChild(statusBox);
        statusBox.style.backgroundColor = 'var(--ordered)';

        /////////Timer

        //Random integer function
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        //Random time function
        function randomTime() {
            return (getRandomInt(5, 15)) * 1000;
        }

        //Preparing function
        function preparing() {
            //Preparing
            statusBox.textContent = "Preparing";
            statusBox.style.backgroundColor = 'var(--preparing)';
        }

        //Ready function
        function ready() {
            statusBox.textContent = "Ready";
            statusBox.style.backgroundColor = 'var(--ready)';
        }

        async function timing() {
            //Time cascade
            setTimeout(() => {
                preparing();
                setTimeout(() => {
                    ready();
                }, randomTime());

            }, randomTime());
        }

        timing();

    });
});