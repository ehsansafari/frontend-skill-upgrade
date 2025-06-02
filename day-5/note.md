# Day 5 1404/03/12

- versions in packages.json

- [chatgpt history](https://chatgpt.com/share/683d4e19-87b0-8007-9a87-9939f3edc3fc)

# note

```json
{
  "dependencies": {
    "react": "^18.2.0", // allows 18.x.x but not 19
    "lodash": "~4.17.21", // allows 4.17.x but not 4.18
    "express": "4.x", // allows any 4.x.x version
    "axios": ">=0.21.1", // allows version 0.21.1 and higher
    "some-lib": "1.0.0 - 2.0.0", // allows versions between 1.0.0 and 2.0.0
    "dev-lib": "_", // any version
    "old-lib": "<1.0.0", // any version less than 1.0.0
    "beta-lib": "2.0.0-beta.3" // exact pre-release version
  }
}
```

```json
// For example, these are all valid:
{
  "dependencies": {
    "foo": "1.0.0 - 2.9999.9999",
    "bar": ">=1.0.2 <2.1.2",
    "baz": ">1.0.2 <=2.3.4",
    "boo": "2.0.1",
    "qux": "<1.0.0 || >=2.3.1 <2.4.5 || >=2.5.2 <3.0.0",
    "asd": "http://npmjs.com/example.tar.gz",
    "til": "~1.2",
    "elf": "~1.2.3",
    "two": "2.x",
    "thr": "3.3.x",
    "lat": "latest",
    "dyl": "file:../dyl",
    "kpg": "npm:pkg@1.0.0"
  }
}
```

"react": "^19.1.0", // ^19.x.x
"react": "~19.1.0", // ^19.1.x
"react": "19.1.0", // 19.1.0
"react": "\_", // 100.4.05

# research urls

- https://semver.org/lang/fa/
- https://docs.npmjs.com/cli/v11/configuring-npm/package-json
