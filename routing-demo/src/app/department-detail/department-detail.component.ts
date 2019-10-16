import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
    selector: 'app-department-detail',
    template: `
<p>
  <button (click)="overview()">Overview</button>
  <button (click)="contact()">contact</button>
</p>
  <router-outlet></router-outlet>
    <p>
      department-detail works! {{id}}
    </p>
<a (click)="prev()">prev</a>
<a (click)="next()">next</a>
<br/>
<a (click)="gtd()">back</a>
  `,
    styles: []
})
export class DepartmentDetailComponent implements OnInit {
    id: string;
    constructor(private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        ///this.id = this.route.snapshot.paramMap.get("id")
        this.route.paramMap.subscribe((params: ParamMap) => this.id = params.get("id"));
    }
    overview() {
        this.router.navigate(['overview'], { relativeTo: this.route });
    }
    contact() {
        this.router.navigate(['contact'], { relativeTo: this.route });
    }
    prev() {
        let prevId = parseInt(this.id) - 1;
        if (prevId < 0) return;
       //this.router.navigate(["/departments", prevId]);
        this.router.navigate(["/departments", prevId]);
    }

    next() {
        let nextId = parseInt(this.id) + 1;
        this.router.navigate(["/departments", nextId]);
    }
    gtd() {
        let nextId = this.id ? this.id : null;
        this.router.navigate(['../', {
            id: nextId
        }]);

    }
}
