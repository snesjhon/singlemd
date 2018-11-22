const menus = {
  main: `
    singlemd <options>
    --input, -i ........ markdown file path (.md, .markdown)
    --output, -o ....... output path. Default 'index.html'
    --style, -s ........ css path to add in template (optional)
    --title, -t ........ add custom title (optional)
    --version, -v ...... show package version
    --help, -h ......... show help menu for a command`
}

module.exports = (args) => {
  const subCmd = args._[0] === 'help'
    ? args._[1]
    : args._[0]

  console.log(menus[subCmd] || menus.main)
}