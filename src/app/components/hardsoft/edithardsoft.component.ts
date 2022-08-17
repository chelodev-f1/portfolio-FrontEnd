import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HardsoftService } from 'src/app/service/hardsoft.service';
import { Hardsoft } from '../../model/hardsoft';

@Component({
  selector: 'app-edithardsoft',
  templateUrl: './edithardsoft.component.html',
  styleUrls: ['./edithardsoft.component.css']
})
export class EdithardsoftComponent implements OnInit {
  hardsoft: Hardsoft = null;

  constructor(
    private hardsoftS: HardsoftService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.hardsoftS.detail(id).subscribe(
      data => {
        this.hardsoft = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.hardsoftS.update(id, this.hardsoft).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la habilidad");
        this.router.navigate(['']);
      }
    )
  }

}
