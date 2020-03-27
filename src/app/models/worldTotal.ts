export interface WorldTotal {
  total_cases: string;
  total_deaths: string;
  total_recovered: string;
  new_cases: string;
  new_deaths: string;
  statistic_taken_at: Date;
}

export class ConvertWorldTotal {
  public static toWorldTotal(json: string): WorldTotal {
    return JSON.parse(json);
  }

  public static worldTotalToJson(value: WorldTotal): string {
    return JSON.stringify(value);
  }
}
