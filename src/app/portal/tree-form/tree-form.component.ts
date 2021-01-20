import { Component, OnInit, Input } from '@angular/core';
import { IProp } from '../IProp.type';

@Component({
  selector: 'app-tree-form',
  templateUrl: './tree-form.component.html',
  styleUrls: ['./tree-form.component.scss']
})
export class TreeFormComponent implements OnInit {

  @Input() treeData: IProp;

  constructor() { }

  ngOnInit(): void {
  }

  isString(variable): boolean { return typeof variable === 'string'; }

}
