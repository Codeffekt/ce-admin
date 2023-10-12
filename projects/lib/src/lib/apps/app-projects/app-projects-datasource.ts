/* import { Observable, of } from "rxjs";
import { Project, DbArrayRes, FormQuery } from "@codeffekt/ce-core-data";
import { map } from "rxjs/operators";
import { AppRunnerService } from "../../services/app-runner.service";
import { FormQueryDatasource } from "@codeffekt/ce-core";

export class AppProjectsDataSource extends FormQueryDatasource<Project, Project> {

    constructor(
        private appRunnerService: AppRunnerService
    ) {
        super();
    }

    protected queryDb(query: FormQuery): Observable<DbArrayRes<Project>> {

        const offset = query.offset;
        const limit = query.limit;        

        return of(this.appRunnerService.getCurrentProjects()).pipe(
            map(projects => ({
                elts: this.sliceProjects(projects, offset, limit),
                limit: query.limit || 0,
                offset: query.offset || 0,
                total: projects.length
            }))
        );
    }

    protected wrap(form: Project, res?: DbArrayRes<Project>): Project {
        return form;
    }  
    
    private sliceProjects(projects: Project[], offset?: number, pageSize?: number): Project[] {

        if (offset === undefined || pageSize === undefined) {
            return projects;
        }

        const slicedProjects = projects.slice(offset, offset + pageSize);
        return slicedProjects;
    }
} */