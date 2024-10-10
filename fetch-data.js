async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');


    try {
        const response = await fetch(apiUrl);
        const users = await response.json();

        dataContainer.innerHTML = '';

        const userList = document.createElement('ul');

        users.forEach(user => {
            const listItem = document.createElement('li'); // Create <li> element
            listItem.textContent = user.name; // Set the text content to the user's name
            userList.appendChild(listItem); // Append <li> to userList
        });
        dataContainer.appendChild(userList);
    } catch (error) {
        // Error Handling
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}
document.addEventListener('DOMContentLoaded', fetchUserData)
