'use server'

import Image from 'next/image'
import Board from './board';

export interface Project {
  name: string;
  image: string;
  link: string;
  repo: string;
  tags: string[];
}
export default  async function ProjectsPage() {

  const generateTopTags = (projects: Array<Project>): Array<string> => {
    return [... new Set(projects.flatMap((m) => m.tags))];
  }

  const projects: Array<Project> = [
    {
      "name": "project1",
      "image": "/websites/mics.jpg",
      "link": "",
      "repo": "https://github.com/muh5329",
      "tags": ["webgl"]
    },
    {
      "name": "project1",
      "image": "/websites/mics.jpg",
      "link": "",
      "repo": "https://github.com/muh5329",
      "tags": ["test"]
    }, {
      "name": "project1",
      "image": "/websites/mics.jpg",
      "link": "",
      "repo": "https://github.com/muh5329",
      "tags": ["math"]
    }, {
      "name": "project1",
      "image": "/websites/mics.jpg",
      "link": "",
      "repo": "https://github.com/muh5329",
      "tags": ["webgl", "design"]
    }, {
      "name": "project1",
      "image": "/websites/mics.jpg",
      "link": "",
      "repo": "https://github.com/muh5329",
      "tags": ["random", "c"]
    }, {
      "name": "project1",
      "image": "/websites/mics.jpg",
      "link": "",
      "repo": "https://github.com/muh5329",
      "tags": []
    },
  ];



  const tags: Array<string> = generateTopTags(projects);

  var projectList : Array<Project> = projects;

  return (
    <main className=" min-h-screen bg-yellow-500">
      <Board
        projectList={projectList}
        tags={tags} 
        projects={projects}      />
    </main>
  );
}
