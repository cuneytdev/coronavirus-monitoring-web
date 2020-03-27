import { Component, OnInit } from '@angular/core';
import { ServicesService } from '@app/services.service';
import { Cases, CountriesStat } from '@app/models/cases';
import { WorldTotal } from '@app/models/worldTotal';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  countries: CountriesStat[];
  worldTotal: WorldTotal;
  lastUpdatedAt: any;
  highestRate = 0;
  constructor(private service: ServicesService, private router: Router) {}
  async ngOnInit() {
    this.worldTotal = await this.service.getWorldTotalStatus();
    const cases: Cases = await this.service.getCases();
    this.lastUpdatedAt = moment(cases.statistic_taken_at, 'YYYY-MM-DD HH:mm:ss').format('DD.MM.YYYY HH:mm:ss');
    const data: any[] = [];
    cases.countries_stat.forEach(countryElement => {
      const country = {
        name: countryElement.country_name,
        value: Number(countryElement.deaths.replace(',', '')),
        cases: Number(countryElement.cases.replace(',', ''))
      };

      this.highestRate = this.highestRate < country.value ? country.value : this.highestRate;
      data.push(country);
    });
    this.countries = data;
  }

  onSelect(country: any) {
    this.router.navigate([`statistics/${country.name.toLowerCase()}`]);
  }

  applyStyles(value: number) {
    const colorRate = value / this.highestRate;
    const color = this.percentageToHsl(colorRate, 80, 25);
    const rate = (value * 100) / this.highestRate;
    const result = { width: `${rate}%`, background: color };
    return result;
  }
  percentageToHsl(percentage: any, hue0: any, hue1: any) {
    const hue = percentage * (hue1 - hue0) + hue0;
    return 'hsl(' + hue + ', 100%, 50%)';
  }
}
