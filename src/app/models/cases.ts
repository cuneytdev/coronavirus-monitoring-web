export interface Cases {
  countries_stat: CountriesStat[];
  statistic_taken_at: Date;
}

export interface CountriesStat {
  country_name: string;
  cases: string;
  deaths: string;
  region: string;
  total_recovered: string;
  new_deaths: string;
  new_cases: string;
  serious_critical: string;
  active_cases: string;
  total_cases_per_1m_population: string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toCases(json: string): Cases {
    return JSON.parse(json);
  }

  public static casesToJson(value: Object): string {
    return JSON.stringify(value);
  }
}
