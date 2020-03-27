export interface CountryDetail {
  country: string;
  stat_by_country: StatByCountry[];
}

export interface StatByCountry {
  id: string;
  country_name: string;
  total_cases: string;
  new_cases: string;
  active_cases: string;
  total_deaths: string;
  new_deaths: string;
  total_recovered: string;
  serious_critical: string;
  region: null;
  total_cases_per1m: string;
  record_date: Date;
}

// Converts JSON strings to/from your types
export class ConvertCountryDetail {
  public static toCountryDetail(json: string): CountryDetail {
    return JSON.parse(json);
  }

  public static countryDetailToJson(value: CountryDetail): string {
    return JSON.stringify(value);
  }
}
