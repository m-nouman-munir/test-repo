class DBConfig {
  private static readonly NAME: string = "testdb";
  private static readonly HOST: string = "localhost";
  private static readonly PORT: number = 27017;
  static readonly URL: string = `mongodb://${this.HOST}:${this.PORT}/${this.NAME}?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false`;
}
export class Config {
  static readonly DB_CONFIG = DBConfig;
}
