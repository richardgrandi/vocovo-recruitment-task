# VoCoVo recruitment exercise

This codebase contains a skeletal, microservices-like API for registering IoT appliances e.g set top boxes, smart bulbs, etc. There is a "front end" (a blank Create React App in the `client` directory), and a "back end" (a rudimentary Node app in the `api` directory).

**Before your interview, please ensure you have all software and dependencies installed and configured so that the back and front end are both fully running.**

You are free to do the following tasks either in your own time before the interview, or during the interview itself. The interview will be tailored to whether you've already started the task. If you have, we'll use the interview to discuss your approaches. If you're starting the tasks during the interview, we'll pair program with you.

## Tasks

### Back end

1. Create suitable REST routes in the `appliances` service, to

   - create, read, update and delete an appliance db record
   - reboot an appliance (we don't expect this to truly function, instead focus on how the API would look)

1. Write unit tests to ensure all the routes you've created operate as expected
1. Modify the `docker-compose.yml` file to run both the `auth` and `appliances` services at the same time
1. Ensure that users of the `appliances` service can't create or update appliances without the user being authenticated.
1. Make suitable changes to both the `auth` and `appliances` codebases so that the main listening port of each service could be more easily changed in future, without needing modifications to any javascript
1. Make any other improvements or refactorings you deem necessary to bring this codebase up to good standards of quality, security, dryness, DX etc

### Front end

1. This codebase contains a placedholder for an `<ApplianceList>` component. Please create this component and make it list all the appliances from the API, ensuring all suitable data properties from the API are displayed in a way helpful to the user.

1. Now add sorting to this list of appliances. The list of appliances should be sortable by every property visible.

## Scope

- You are **not** expected to complete all of the tasks either in your own time or in the interview. 
- Please consider code quality, security, structure, reusability and git practices
- You should install any packages you need
