import {Service} from "./service/Service";
import {HttpResponse} from "./HttpResponse";

export class Main {
    protected service;

    constructor(service: Service) {
        this.service = service;
    }

    getProjects(nameProject: string) {
        this.service.getData().then((data: HttpResponse) => {
            console.log(data.items)
        })
            .catch(error => {
                console.log(error)
            })
    }
}

let main = new Main(new Service());
console.log(main.getProjects("angular"));



