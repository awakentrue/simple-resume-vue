![mockup](src/assets/mockup.png)

# simple-resume-vue

Simple universal responsive resume based on Vue.

## Features
* [x] Multi-language support
* [x] Language switcher
* [x] Simple resume data format in *.yaml
* [x] Responsive layout (mobile | tablet | desktop)
* [x] Printer-friendly

## Quick Start
1. Fork/clone this repository.
```
 git clone https://github.com/awakentrue/simple-resume-vue.git 
```
2. Install [Node.js](https://nodejs.org/en/) version 8.9 or above (v.10+ recommended).

3. Install dependencies.
```
npm install
```
4. Customize your resume in the `resume/` directory: add or edit *.yaml file. If there is a need to add or remove supported language, edit `src/api/resumeService.js`.
5. Serve with hot reload.
```
npm run serve
```
6. Build for production.
```
npm run build
```