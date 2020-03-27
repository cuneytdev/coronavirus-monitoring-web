import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '@app/services.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private service: ServicesService) {}

  async ngOnInit() {
    const country = this.activatedRoute.snapshot.paramMap.get('country');
    const countryDetail = await this.service.getHistoryByParticularCountry(country);
    console.log(countryDetail);
  }
}
