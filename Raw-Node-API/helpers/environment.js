/*
 * Title: Environments
 * Description: Handle all Environment related things
 * Author: Hasib Abdullah Sarker
 * Date: 24/06/23
 */


//dependencies


//module scaffolding
const environments={};

environments.staging={
    port:3000,
    envName:'staging',
    secretKey: 'habhsdbhasbd'
}

environments.production={
    port:5000,
    envName:'production',
    secretKey: 'uryeurye'

}


//determin which environment was passed
const currentEnvironment=typeof(process.env.NODE_ENV)=='string'?process.env.NODE_ENV: 'staging';


//export corresponding environment
const environmentToExport=typeof(environments[currentEnvironment])=='object'?environments[currentEnvironment]:environments.staging;


module.exports=environmentToExport;

