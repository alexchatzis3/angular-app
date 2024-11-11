import { Component } from '@angular/core';
import { Person } from '../../shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-for-directive-example',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './for-directive-example.component.html',
  styleUrl: './for-directive-example.component.css'
})
export class ForDirectiveExampleComponent {
  users: Person[] = [
    {
      "givenName": "Steven",
      "surName": "Parker",
      "email": "steven.a.parker@hotmail.com",
      "age": 51,
      "address": "Le Roy"
    },
    {
      "givenName": "Patrick",
      "surName": "Henderson",
      "email": "patrick_henderson@live.com",
      "age": 62,
      "address": "Seattle"
    },
    {
      "givenName": "Michael",
      "surName": "Nelson",
      "email": "michaelallen@aol.com",
      "age": 44,
      "address": "Jesup"
    },
    {
      "givenName": "Alyssa",
      "surName": "Hernandez",
      "email": "alyssa.l.hernandez@gmail.com",
      "age": 59,
      "address": "Irving"
    },
    {
      "givenName": "Mary",
      "surName": "Powell",
      "email": "m_powell@gmail.com",
      "age": 68,
      "address": "Bishop"
    },
    {
      "givenName": "Sara",
      "surName": "Turner",
      "email": "s.turner@hotmail.com",
      "age": 64,
      "address": "Evans"
    },
    {
      "givenName": "Sebastian",
      "surName": "Richardson",
      "email": "srichardson@aol.com",
      "age": 67,
      "address": "Tyro"
    },
    {
      "givenName": "Haley",
      "surName": "Alexander",
      "email": "h.alexander@aol.com",
      "age": 42,
      "address": "Rineyville"
    },
    {
      "givenName": "Hannah",
      "surName": "Diaz",
      "email": "hannah.m.diaz@rocketmail.com",
      "age": 48,
      "address": "Toledo"
    },
    {
      "givenName": "Brandon",
      "surName": "Turner",
      "email": "brandonturner67@yahoo.com",
      "age": 54,
      "address": "Kinney"
    },
    {
      "givenName": "Taylor",
      "surName": "Powell",
      "email": "taylorsuepowell@live.com",
      "age": 29,
      "address": "Cuba"
    },
    {
      "givenName": "Nicholas",
      "surName": "Garcia",
      "email": "ngarcia24@live.com",
      "age": 50,
      "address": "Covina"
    }
  ]
}
