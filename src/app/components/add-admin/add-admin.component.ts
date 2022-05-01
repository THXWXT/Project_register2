import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  Registrations = [
    {
      Subject:'Mathematics1',
      ID:6204062630521,
      Day:'Monday',
      Time:'9.00-12.00',
      Credit:3,
      Room:'-',
      Select:'Select'
    },
    {
      Subject:'Mathematics2',
      ID:6204062630599,
      Day:'Sunday',
      Time:'13.00-16.00',
      Credit:3,
      Room:'-',
      Select:'Select'
    },
    {
      Subject:'Mathematics3',
      ID:6204062630512,
      Day:'Turesday',
      Time:'17.00-20.00',
      Credit:3,
      Room:'-',
      Select:'Select'
    },
  ];
    
    Termlist = [
      {name: 'Semester1', code: 'Term1'},
      {name: 'Semester2', code: 'Term2'},
      
    ];
    
    
    
    
  
    constructor() { }
  
    ngOnInit(): void {
    }
  
}
