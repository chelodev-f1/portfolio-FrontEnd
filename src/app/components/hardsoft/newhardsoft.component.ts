import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hardsoft } from 'src/app/model/hardsoft';
import { HardsoftService } from 'src/app/service/hardsoft.service';

@Component({
  selector: 'app-newhardsoft',
  templateUrl: './newhardsoft.component.html',
  styleUrls: ['./newhardsoft.component.css']
})
export class NewhardsoftComponent implements OnInit {
  nombreS: string;
  porcentajeS: number;

  constructor(private hardsoftS: HardsoftService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const hardsoft = new Hardsoft(this.nombreS, this.porcentajeS);
    this.hardsoftS.save(hardsoft).subscribe(
      data => {
        alert("Habilidad añadida correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }

}
