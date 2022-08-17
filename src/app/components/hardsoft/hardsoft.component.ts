import { Component, OnInit } from '@angular/core';
import { Hardsoft } from 'src/app/model/hardsoft';
import { HardsoftService } from 'src/app/service/hardsoft.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hardsoft',
  templateUrl: './hardsoft.component.html',
  styleUrls: ['./hardsoft.component.css']
})
export class HardsoftComponent implements OnInit {
  hardsoft: Hardsoft[] = [];

  constructor(private hardsoftS: HardsoftService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarSkill();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkill(): void {
    this.hardsoftS.lista().subscribe(
      data => {
        this.hardsoft = data;
      }
    )
  }

  delete(id?: number) {
    if (id != undefined) {
      this.hardsoftS.delete(id).subscribe(
        data => {
          this.cargarSkill();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }

}
