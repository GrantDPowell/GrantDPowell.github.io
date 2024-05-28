document.addEventListener('DOMContentLoaded', function () {
    fetch('https://api.github.com/users/GrantDPowell/repos')
        .then(response => response.json())
        .then(data => {
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
                .then(response => response.text())
                .then(readmeContent => {
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