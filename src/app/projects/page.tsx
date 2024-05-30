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



export default  async function ProjectsPage() {

  function Loading() {
    return <h2> Loading...</h2>;
  }

  const generateTopTags = (projects: Array<Project>): Array<string> => {
    return [... new Set(projects.flatMap((m) => m.tags))];
  }
  var  projectsDb : Array<Project> = []
  try{ 
    projectsDb = await api.projects.getAllProjects();
  } catch (e){
    console.log(e)
  }
  

  const tags: Array<string> = generateTopTags(projectsDb);

  const projectList : Array<Project> = projectsDb;

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
