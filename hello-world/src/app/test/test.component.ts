import { Component, OnInit } from '@angular/core';

@Component({
    selector: '[app-test]',
    template: `im line template
      <h2>welcome {{name}}</h2>
      <h2>{{2+2}}</h2>
      <h2>{{greatUser()}}</h2>
      <h2>{{siteUrl}}</h2>
      <input [id]="myId" type="text" value="123" />
      <h2 [style.color]="'green'">Style bindng</h2>
      <h2 [ngStyle]="titleStyle">Style bindng</h2>
    `,
    styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
    private name = "Someone";
    public myId = "testId";
    public siteUrl = window.location.href;

    public hightlightColor = "cyan";

    public titleStyle = {
        color: "blue",
        "font-weight":"bold"
    }

    constructor() { }

    ngOnInit() {
    }
    greatUser() {
        return "hello " + this.name;
    }
}
