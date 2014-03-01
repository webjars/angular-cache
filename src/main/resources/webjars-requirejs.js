requirejs.config({
    paths: { "angular-cache": webjars.path("angular-cache", "angular-cache") },
    shim: { "angular-cache": [ "angular" ] }
});
