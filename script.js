document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM fully loaded and parsed");

    fetch('https://api.github.com/users/GrantDPowell/repos')
        .then(response => response.json())
        .then(data => {
            console.log("Repositories fetched:", data);

            const projectsList = document.getElementById('projects-list');
            data.forEach(repo => {
                const projectName = repo.name === 'GrantDPowell.github.io' ? 'This Website' : repo.name;
                const projectDiv = document.createElement('div');
                projectDiv.className = 'col-md-12 mb-4';

                projectDiv.innerHTML = `
                    <div class="card">
                        <div class="card-header" id="heading${repo.id}">
                            <h5 class="mb-0">
                                <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse${repo.id}" aria-expanded="true" aria-controls="collapse${repo.id}">
                                    ${projectName}
                                </button>
                            </h5>
                        </div>
                        <div id="collapse${repo.id}" class="collapse" aria-labelledby="heading${repo.id}" data-parent="#projects-list">
                            <div class="card-body readme-content" id="readme-${repo.id}">
                                <p>Loading README...</p>
                            </div>
                        </div>
                    </div>
                `;
                projectsList.appendChild(projectDiv);

                // Fetch README file
                const readmeUrl = `https://api.github.com/repos/GrantDPowell/${repo.name}/readme`;
                console.log(`Fetching README from: ${readmeUrl}`);

                fetch(readmeUrl, {
                    headers: {
                        Accept: 'application/vnd.github.v3.raw'
                    }
                })
                .then(response => {
                    console.log(`Response for ${repo.name}:`, response);
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.text();
                })
                .then(readmeContent => {
                    console.log(`README fetched for ${repo.name}:`, readmeContent);

                    // Convert relative image URLs to absolute
                    const baseURL = `https://raw.githubusercontent.com/GrantDPowell/${repo.name}/main/`;
                    const readmeWithAbsoluteURLs = readmeContent.replace(/!\[([^\]]*)\]\((?!http)([^)]*)\)/g, (match, alt, src) => {
                        return `![${alt}](${baseURL}${src})`;
                    });

                    document.getElementById(`readme-${repo.id}`).innerHTML = marked.parse(readmeWithAbsoluteURLs);
                })
                .catch(error => {
                    console.error(`Error fetching the README for ${repo.name}:`, error);
                    document.getElementById(`readme-${repo.id}`).innerHTML = '<p>Failed to load README.</p>';
                });
            });
        })
        .catch(error => console.error('Error fetching the repositories:', error));
});