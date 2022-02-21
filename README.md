# VoCoVo recruitment exercise

This codebase contains a skeletal microservices-style API for registering IoT appliances e.g set top boxes, weather stations, smart bulbs, VoCoVo "controller" etc.

## Tasks

1. Create suitable REST routes in the `appliances` service, to

   - create, read, update and delete an appliance db record
     - For simplicity, limit yourself to just two field: an ID and a Name.
   - reboot an appliance (since we have no real appliances here, we don't expect this to function, but please code everything else.)

   Please consider:

   - Any input validation you may need
   - a simple way to store the data (we don't need a full DB implementation)

1. Write unit tests to ensure all the routes you've created operate as expected
1. Modify the `docker-compose.yml` file to run both the `auth` and `appliances` services at the same time
1. Ensure that the `appliances` service can't create or update new todo items without the user being authenticated.
1. Make suitable changes to both the `auth` and `appliances` codebases so that the main listening port of each service could be more easily changed in future, without needing modifications to any javascript
1. Make any other improvements or refactorings you deem necessary to bring this codebase up to good standards of quality, dryness, DX etc

## General notes

- You are **not** expected complete all of this, please try to accomplish as much as you can in the time you have.
- Please consider code quality, structure, reusability and git practices
- You should install any NPM or Linux packages you need
