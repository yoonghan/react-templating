# Mocked project template
Created a mock web templates for customer. What's different is that this project is able to
be run on local machine without a webserver.

## Usage
1. Run npm install
2. The commands are

```
\\For development
npm run dev

\\For exporting into HTML pages for view
\\ Change variable OVERRIDE_URL=true in components/Consts.tsx, to enable this to work on local machine without host.
\\ Change variable OVERRIDE_URL=false in components/Consts.tsx, if it's for web hosting.
npm run export

\\For storyboard usages
npm run storybook

\\For hosting
npm run build
npm run start
```

3. The browsing url is http://localhost:8001.
4. There is a file components/Consts.tsx, change this variable OVERRIDE_URL for adjustment to run on local. If all works correctly this can be ommitted.

## Development
1. Use customized <Link> rather than react/next in so that the local generated links are correctly referred.
2. Make sure components/Navigator.tsx pages are defined correctly so the pages can flow correctly.
