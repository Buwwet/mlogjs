# Helper methods

## getBuilding

Allows you to get a reference to a building linked to the processor by its name.

```js
const turret = getBuilding("cyclone1");
// ...
```

## getVar

Allows you to access symbols that are not available through the [namespaces](/namespaces).

```js
const building = getBuilding("container1");
let customSymbol = getVar("@awesome-mod-symbol");

let value = sensor(customSymbol, building);

// do somthing after
```

## concat

Allows you to concatenate a series of constant strings.

```js
const programVersion = "2";
const programName = "special-program";
const fullName = concat(programName, "-v", programVersion);

// ...
```
