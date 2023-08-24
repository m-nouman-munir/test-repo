"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Config", {
    enumerable: true,
    get: function() {
        return Config;
    }
});
let DBConfig = class DBConfig {
};
(()=>{
    DBConfig.NAME = "testdb";
})();
(()=>{
    DBConfig.HOST = "localhost";
})();
(()=>{
    DBConfig.PORT = 27017;
})();
(()=>{
    DBConfig.URL = `mongodb://${DBConfig.HOST}:${DBConfig.PORT}/${DBConfig.NAME}?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false`;
})();
let Config = class Config {
};
(()=>{
    Config.DB_CONFIG = DBConfig;
})();
