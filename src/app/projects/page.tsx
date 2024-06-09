'use server'

import { Suspense } from 'react';
import Board from './board';
import { api } from "~/trpc/server";

export interface Project {
  id?: number;
  name: string | null;
  image: string | null;
  link: string | null;
  repo: string | null;
  tags: string[];
  createdById?: string | null;
  createdAt?: Date | null;
  updatedAt?: Date | null;
}



export default async function ProjectsPage() {

  function Loading() {
    return <h2> Loading...</h2>;
  }

  const generateTopTags = (projects: Array<Project>): Array<string> => {
    return [... new Set(projects.flatMap((m) => m.tags))];
  }

  let projectsDb: Array<Project> = []


  projectsDb = await api.projects.getAllProjects();
  // projectsDb = [
  //   {
  //     "name": "project1",
  //     "image": "/websites/mics.jpg",
  //     "link": "",
  //     "repo": "https://github.com/muh5329",
  //     "tags": ["webgl"]
  //   },
  //   {
  //     "name": "project1",
  //     "image": "/websites/mics.jpg",
  //     "link": "",
  //     "repo": "https://github.com/muh5329",
  //     "tags": ["test"]
  //   }, {
  //     "name": "project1",
  //     "image": "/websites/mics.jpg",
  //     "link": "",
  //     "repo": "https://github.com/muh5329",
  //     "tags": ["math"]
  //   }, {
  //     "name": "project1",
  //     "image": "/websites/mics.jpg",
  //     "link": "",
  //     "repo": "https://github.com/muh5329",
  //     "tags": ["webgl", "design"]
  //   }, {
  //     "name": "project1",
  //     "image": "/websites/mics.jpg",
  //     "link": "",
  //     "repo": "https://github.com/muh5329",
  //     "tags": ["random", "c"]
  //   }, {
  //     "name": "project1",
  //     "image": "/websites/mics.jpg",
  //     "link": "",
  //     "repo": "https://github.com/muh5329",
  //     "tags": ["randdfsdom", "cfgd","randoms2rds", "cvsfs", "fgqklqw", "wqjk2rj"]
  //   },
  // ];

  const tags: Array<string> = generateTopTags(projectsDb);
  const projectList: Array<Project> = projectsDb;

  return (
    <main className=" min-h-screen bg-yellow-500">
      <Suspense fallback={<Loading />}>
        <Board
          projectList={projectList}
          tags={tags}
          projects={projectsDb}

        />
      </Suspense>

    </main>
  );
}
