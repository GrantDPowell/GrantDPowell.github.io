import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button, Collapse, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ReactMarkdown from 'react-markdown'; // Use to render markdown

function GithubProjectDisplay({ categoryType, filter }) {
  const [projects, setProjects] = useState([]);
  const [expanded, setExpanded] = useState(null);
  const [readmeContent, setReadmeContent] = useState({});

  useEffect(() => {
    fetch('https://api.github.com/users/GrantDPowell/repos')
      .then(response => response.json())
      .then(data => {
        let categorizedProjects = data.map(repo => {
          const projectName = repo.name === 'GrantDPowell.github.io' ? 'This Website' : repo.name.replace(/-/g, ' ');

          return {
            id: repo.id,
            name: projectName,
            description: repo.description,
            thumbnail: `https://raw.githubusercontent.com/GrantDPowell/${repo.name}/main/Images/Thumbnail.png`,
            readmeUrl: `https://api.github.com/repos/GrantDPowell/${repo.name}/readme`,
            repoUrl: repo.html_url
          };
        });

        // If a filter is provided, filter projects by name
        if (filter) {
          categorizedProjects = categorizedProjects.filter(repo =>
            filter.includes(repo.name)
          );
        }

        // Filter based on description for games or projects
        if (categoryType === 'games') {
          categorizedProjects = categorizedProjects.filter(repo =>
            repo.description && repo.description.toLowerCase().includes('game')
          );
        } else if (categoryType === 'projects') {
          categorizedProjects = categorizedProjects.filter(repo =>
            !repo.description || !repo.description.toLowerCase().includes('game')
          );
        }

        setProjects(categorizedProjects);
      })
      .catch(error => console.error('Error fetching the repositories:', error));
  }, [categoryType, filter]);

  const handleExpandClick = (id, readmeUrl) => {
    if (expanded === id) {
      setExpanded(null);
    } else {
      setExpanded(id);

      if (!readmeContent[id]) {
        fetch(readmeUrl, {
          headers: {
            Accept: 'application/vnd.github.v3.raw'
          }
        })
          .then(response => response.text())
          .then(text => {
            // Remove images from the README
            const filteredReadme = text.replace(/!\[.*?\]\(.*?\)/g, '');
            setReadmeContent(prev => ({ ...prev, [id]: filteredReadme }));
          })
          .catch(() => {
            setReadmeContent(prev => ({ ...prev, [id]: 'Failed to load README.' }));
          });
      }
    }
  };

  return (
    <>
      {projects.map(project => (
        <Grid item xs={12} sm={6} md={4} key={project.id}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={project.thumbnail}
              alt={`${project.name} thumbnail`}
              // Fallback image handler
              onError={(e) => {
                e.target.onerror = null; // Prevent infinite loop if fallback image fails
                e.target.src = `${process.env.PUBLIC_URL}/oops.png`; // Path to the fallback image
              }}
            />
            <CardContent>
              <Typography variant="h6">{project.name}</Typography>
              <Typography variant="body2" color="textSecondary">
                {project.description || "No description available"}
              </Typography>
              <Button variant="outlined" href={project.repoUrl} target="_blank" rel="noopener noreferrer" sx={{ mt: 2 }}>
                View on GitHub
              </Button>
              <IconButton onClick={() => handleExpandClick(project.id, project.readmeUrl)}>
                {expanded === project.id ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            </CardContent>
            <Collapse in={expanded === project.id} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography variant="body2">
                  {readmeContent[project.id] ? (
                    <ReactMarkdown>{readmeContent[project.id]}</ReactMarkdown>
                  ) : (
                    'Loading README...'
                  )}
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      ))}
    </>
  );
}

export default GithubProjectDisplay;
