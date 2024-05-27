document.addEventListener('DOMContentLoaded', function () {
    fetch('https://api.github.com/users/GrantDPowell/repos')
        .then(response => response.json())
        .then(data => {
            const projectsList = document.getElementById('projects-list');
            projectsList.innerHTML = ''; // Clear existing content
            data.forEach(repo => {
                const projectDiv = document.createElement('div');
                projectDiv.className = 'col-md-4';
                projectDiv.innerHTML = `
                    <div class="card mb-4">
                        <div class="card-body">
                            <h5 class="card-title">${repo.name}</h5>
                            <p class="card-text">${repo.description}</p>
                            <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">View on GitHub</a>
                        </div>
                    </div>
                `;
                projectsList.appendChild(projectDiv);
            });
        })
        .catch(error => console.error('Error fetching the repositories:', error));
});