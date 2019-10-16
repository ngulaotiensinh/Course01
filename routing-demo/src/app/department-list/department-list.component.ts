import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'

@Component({
    selector: 'app-department-list',
    template: `
    <p>
      department-list works!
    </p>
    <ul>
      <li *ngFor="let d of departments" (click)="onSelect(d)" [class.selected]="isSelected(d)">{{d.name}}</li>
    </ul>
  `,
    styles: [ ".selected{ background-color:red}" ]
})
export class DepartmentListComponent implements OnInit {
    departments = [{
        id: 1, name: "dept 1"
    }, {
        id: 2, name: "dept 2"
    }, {
        id: 3, name: "dept 3"
        }];
    public selectedId;
    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.paramMap.subscribe((params: ParamMap) => this.selectedId = params.get("id"));
    }

    onSelect(department) {
        //this.router.navigate([
        //    '/departments', department.id
        //]);
        this.router.navigate([department.id], { relativeTo: this.route });
    }

    isSelected(d) {
        return d.id == this.selectedId;
    }

}
