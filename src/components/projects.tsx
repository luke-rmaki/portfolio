import React from 'react';
import styled from 'styled-components';
import { projects } from '../content/pages/projects.json';
import { SubHeading } from './Typography';

export const Projects = () => (
  <StyledProjects>
    <SubHeading>Some of my stuff:</SubHeading>
    <ul className="projects-wrapper">
      {projects.map((project) => (
        <li data-project key={project.name}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <h4>Tech:</h4>
          <ul className="bullet">
            {project.tech.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View the code
          </a>
        </li>
      ))}
    </ul>
  </StyledProjects>
);

const StyledProjects = styled.section`
  font-family: var(--font);
  h2 {
    padding: 10px;
  }

  ul.projects-wrapper {
    display: flex;
    gap: 20px;
    overflow-x: scroll;
  }

  [data-project] {
    background-color: var(--purple-dark-4);
    color: var(--white);
    padding: 20px;
    margin-bottom: 10px;
    flex: 1 0 500px;

    h3 {
      color: var(--accent);
      font-size: 1.25rem;
      padding-bottom: 10px;
    }

    p {
      line-height: 1.2rem;
    }

    h4 {
      margin-top: 20px;
      font-size: 1.2rem;
    }

    ul {
      margin-bottom: 20px;
      li {
        margin-left: 20px;
        padding: 10px 0;
      }
    }

    a {
      color: var(--accent);
      text-decoration: none;
    }
  }

  @media (min-width: 1000px) {
    h2 {
      padding: 25px;
    }
  }
`;
