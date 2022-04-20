import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Nationalite } from 'src/app/shared/Models/Nationalite';
import { NationaliteService } from 'src/app/shared/services/Nationalite/nationalite.service';

@Component({
  selector: 'app-nationalite',
  templateUrl: './nationalite.component.html',
  styleUrls: ['./nationalite.component.css'],
})
export class NationaliteComponent implements OnInit {
  constructor(
    private nationatileService: NationaliteService,
    private router: Router
  ) {}

  nationalites: Nationalite[] = [];
  ngOnInit(): void {
    this.nationatileService.getAll().subscribe((data) => {
      this.nationalites = data;
    });
  }

  prepareModification(id: number) {
    console.log('/admin/addUpdateNationalite/' + id);
    this.router.navigate['/admin/addUpdateNationalite/' + id];
  }

  delete(id: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer')) {
      this.nationatileService.delete(id).subscribe((data) => {
        let index = this.nationalites.findIndex((e) => e.id === id);
        this.nationalites.splice(index, 1);
        console.log(data);
      });
    }
  }
}
