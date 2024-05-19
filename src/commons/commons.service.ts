import { ConfigModuleOptions } from "@nestjs/config";

export function configModuleOptions(): ConfigModuleOptions {
    return process.env.NODE_ENV == "development" ?  
    {envFilePath: '.development.env'}: 
    {envFilePath: '.env'};
  }