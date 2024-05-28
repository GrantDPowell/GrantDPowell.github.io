document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM fully loaded and parsed");

    fetch('https://api.github.com/users/GrantDPowell/repos')
        .then(response => response.json())
        .then(data => {
            console.log("Repositories fetched:", data);

            const projectsList = document.getElementById('projects-list');
            data.forEach(repo => {
                const projectDiv = document.createElement('div');
                projectDiv.className = 'col-md-12 mb-4';

                const readmeUrl = `https://api.github.com/repos/GrantDPowell/${repo.name}/readme`;
                fetch(readmeUrl, {
                    headers: {
                        Accept: 'application/vnd.github.v3.raw'
                    }
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.text();
                })
                .then(readmeContent => {
                    console.log(`README fetched for ${repo.name}:`, readmeContent);

                    projectDiv.innerHTML = `
                        <div class="card">
                            <div class="card-header" id="heading${repo.id}">
                                <h5 class="mb-0">
                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse${repo.id}" aria-expanded="true" aria-controls="collapse${repo.id}">
                                        ${repo.name}
                                    </button>
                                </h5>
                            </div>
                            <div id="collapse${repo.id}" class="collapse" aria-labelledby="heading${repo.id}" data-parent="#projects-list">
                                <div class="card-body">
                                    <div id="readme-${repo.id}">${marked(readmeContent)}</div>
                                </div>
                            </div>
                        </div>
                    `;
                    projectsList.appendChild(projectDiv);
                })
                .catch(error => console.error('Error fetching the README:', error));
            });
        })
        .catch(error => console.error('Error fetching the repositories:', error));
});