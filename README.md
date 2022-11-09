# VoCoVo recruitment exercise

This codebase contains a skeletal, microservices-like app for registering IoT appliances (e.g set top boxes, smart bulbs) with a database. There is a "front end" (a blank Create React App in the `client` directory), and a "back end" (a rudimentary Node app in the `api` directory).

# Developer notes
I have amended the docker setup so that it will run all three applications. If you navigate to `/api` and run `docker compose up`, it should build and spin up the Appliances API on [localhost:8081](http://localhost:8081), the auth api on [localhost:3006](http://localhost:3006) and the front end client on [localhost:3000](http://localhost:3000).

This included writing a Dockerfile for the client subdirectory.

I did not complete all of the tasks, notably missing out on sorting the appliances (I assumed some simple ES6 sorting on the front end would be fine, but didn't get around to it) and writing unit tests.

The front-end is very barebones, but given this role's focus on backend, I tried to focus as much of my time as possible on that aspect of the work. One frustrating thing I spent some time trying to solve was that our 'data' would always refresh so it wasn't pleasant to delete and amend the data contained within, so I used the NodeCache package to cache it for five minutes.

In all, I spent closer to 2.5 hours of focused time on this.

## Scope

- You should attempt to complete as much as you can in **no more than 2 hours**.
- 100% completion is **not** a requirement (but how much you complete and to what quality, will be evaluated).
- Your solution should be runnable by our staff, when reviewing your work
- Your solutions should consider all engineering practices e.g security, structure, maintainability, performance, usability etc.
- You can install any packages you need
- All of the code is fair-game for any changes you deem necessary.

## Installation

Check out this repo, then run the following in the `client` and `api/appliances` folders:

```bash
npm i
npm run start
```

## Delivery of your solutions

Please submit a PR to this repo which includes your solutions.

## Tasks

1. Create suitable REST routes in the `appliances` service, to

   - create, read, update and delete values in the appliance "db".
   - reboot an appliance (we don't expect this to function, instead focus on how the API would look)

1. Write unit tests for at least one route
1. In the front end, add functionality to the `<ApplianceList>` component to make it list all the appliances from the API, ensuring all suitable data properties from the API are displayed in a way helpful to the user.
1. Style the `<ApplianceList>` with CSS to give it appropriate information architecture and clarity
1. Add sorting to any part of the list of appliances.

1. Start the `auth` service and ensure that users of the `appliances` service can't create or update appliances without the user being authenticated using the `auth` service.

1. Modify the `docker-compose.yml` file to run both the `auth` and `appliances` services at the same time, removing the need to run `npm run start` for the `api` services individually.
