import { Component, OnInit } from '@angular/core';
import { PrototypeService } from 'app/prototype/shared/prototype.service';
import { Prototype } from 'app/prototype/shared/prototype.model';

@Component({
  selector: 'app-prototype',
  templateUrl: './prototype.component.html',
  styleUrls: ['./prototype.component.css']
})
export class PrototypeComponent implements OnInit {
  title = 'proto works!';
  data: Array<Prototype>;

  constructor(private prototypeService: PrototypeService) { }

  ngOnInit() {
    this.prototypeService.getMessages().subscribe(messages => {
      this.data = messages;
    });
  }

}