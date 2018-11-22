<div align="center">

<h1>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve" width="40px" height="40px" alt="Save MD by Liliane Lass Erbe from the Noun Project"><path d="M35.837,67.833h-4.631V51.896h6.231l2.207,7.952c0.029,0.108,0.087,0.355,0.173,0.741c0.087,0.386,0.21,0.918,0.368,1.596  c0.101-0.534,0.195-1.001,0.281-1.401c0.087-0.4,0.162-0.701,0.228-0.903l2.261-7.984h6.221v15.937h-4.63l0.043-7.844  c0-0.476,0.002-0.939,0.006-1.391c0.003-0.45,0.009-0.917,0.016-1.4c-0.173,0.822-0.382,1.72-0.627,2.693l-0.033,0.141l-1.969,7.801  h-3.57l-1.99-7.627c-0.094-0.347-0.188-0.743-0.281-1.19s-0.217-1.053-0.368-1.817c0.021,0.686,0.038,1.272,0.049,1.764  c0.011,0.49,0.017,0.883,0.017,1.179V67.833z M54.422,67.833V51.896h6.188c1.572,0,2.742,0.07,3.511,0.211  c0.768,0.142,1.437,0.374,2.007,0.698c1.104,0.649,1.933,1.562,2.488,2.737s0.833,2.622,0.833,4.338c0,1.804-0.345,3.32-1.033,4.55  s-1.704,2.144-3.046,2.742c-0.519,0.238-1.17,0.408-1.952,0.509c-0.783,0.101-2.036,0.151-3.76,0.151H54.422z M59.539,63.798h1.374  c1.276,0,2.162-0.285,2.656-0.855c0.494-0.569,0.741-1.59,0.741-3.062c0-1.435-0.253-2.452-0.758-3.051s-1.363-0.897-2.574-0.897  h-1.439V63.798z M85.249,2.083h-6.916H21.332H7.533c-2.205,0-4,1.795-4,4v34.854v37.89v15.09c0,2.205,1.795,4,4,4h84.931  c2.205,0,4-1.795,4-4v-15.09v-37.89V14.593L85.249,2.083z M59.999,21.166h4.416c1.381,0,2.5-1.245,2.5-2.782V5.083h8.418v19.166  c0,0.552-0.449,1-1,1H33.462V5.083h24.037v13.301C57.499,19.921,58.618,21.166,59.999,21.166z M30.462,5.083v20.166h-5.13  c-0.553,0-1-0.448-1-1V5.083H30.462z M6.533,43.938h86.931v31.89H6.533V43.938z M93.464,93.917c0,0.551-0.449,1-1,1H7.533  c-0.551,0-1-0.449-1-1v-15.09h86.931V93.917z M6.533,40.938V6.083c0-0.551,0.449-1,1-1h13.799v19.166c0,2.206,1.793,4,4,4h49.001  c2.205,0,4-1.794,4-4V5.083h5.576l9.555,10.657v25.197H6.533z"/></svg>
  <br/>
  SingleMD
</h1>

<p>
  Make a website with just a single Markdown file
  <br>
  <small><em>Just worry about your content, not your environment.</em></small>
</p>
</div>

### Install

```
npm install singlemd
```

### Usage

This command reads `README.md` and writes the converted html into `index.html`

```
singlemd --input ./README.md --output index.html
```

If you want to add an optional css file. The contents will be appended to the `<head>` in a `<style>` tag. 

```
singlemd --input ./README.md --output index.html --style ./style.css
```

### Options
```
singlemd <options>
--input, -i ........ markdown file path (.md, .markdown)
--output, -o ....... output path. Default 'index.html'
--style, -s ........ css path to add in template (optional)
--title, -t ........ add custom title (optional)
--version, -v ...... show package version
--help, -h ......... show help menu for a command
```

---

### Usage with Gitlab Pages

Because this CLI can output a single html file, you can use Gitlab's CI integration to output a simple Gitlab page by adding the following `.gitlab-ci.yml`

```
image: node:8.12.0 

pages:
  cache:
    paths:
    - node_modules/

  script:
  - npm install singlemd -g
  - singlemd -i README.md -o index.html -s style.css
  artifacts:
    paths:
    - index.html
  only:
    - master
```

### Motivation
* Although there are [many](https://jekyllrb.com/), [many](https://www.gatsbyjs.org/), [many](https://gohugo.io/), solutions to create a static website, I've found that the
overall setup, development, deployment cycle is cumbersome. Almost to the point that by the time I 
end up setting everything thing up I'm losing sight of why I started trying to write a blog in the first place.

* I just wanted a simple way to output a markdown the way I saw it rendered in a README file. 
  Why can't that just be my website. 


### Other Options
* [Github Pages](https://pages.github.com/)
  * Github does allow you upload a markdown page and deploy that to its own website. It's not configurable.
    You're stuck with Jekyll Themes, and having to override any of their boilerplate css. 
* [ShowdownJS](https://github.com/showdownjs/showdown)
  * The biggest inspiration for writing this package, however they don't provide a full website output.
  * The showdownjs CLI provides a way to convert your files from markdown, however they output solely
    the html content, but nothing surrounding it. So adding a GFM or any custom styles is not possible. 