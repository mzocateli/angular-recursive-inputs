import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IProp } from '../IProp.type';

@Component({
  selector: 'app-token-form',
  templateUrl: './token-form.component.html',
  styleUrls: ['./token-form.component.scss']
})
export class TokenFormComponent implements OnInit {

  tokensForm: FormGroup;

  objeto = {
    color: {
      blue: {
        '0100': '#000022',
        '0200': '#000044',
        '0300': '#000066',
        '0400': '#000088',
        '0500': '#0000AA',
        '0600': '#0000CC',
        '0700': '#0000EE',
        '0800': '#0000FF'
      }
    },
    size: {
      margin: {
        small: '0.2',
        medium: '0.5',
        large: '1',
        large_x: '2'
      },
      border: {
        small: '0.05',
        medium: '1.2',
        large: '2'
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
    this.tokensForm = this.criaGrupos(this.objeto);
  }

  criaGrupos(prop: IProp): FormGroup{
    const props = Object.entries(prop).map(
      ([key, value]) => [
        key, typeof value === 'string' ? new FormControl(value) : this.criaGrupos(value)
      ]
    );
    return new FormGroup(Object.fromEntries(props));
  }

}
