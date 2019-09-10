'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('            Tubagus Hendro Pramono'),
  handle: chalk.white('spyndutz'),
  work: chalk.white('Back-end Engineer | Software Developer'),
  opensource: chalk.white('Bachelor Degree of Information Systems'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('spyndutz'),
  // npm: chalk.gray('https://npmjs.com/') + chalk.red('~bnb'),
  github: chalk.gray('https://github.com/') + chalk.green('spyndutz'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('tubagus-hendro-p'),
  // web: chalk.cyan('https://bnb.im'),
  email: chalk.white('hendropramono14@gmail.com'),

  labelWork: chalk.white.bold('   Interest:'),
  labelOpenSource: chalk.white.bold('     Status:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  // labelnpm: chalk.white.bold('        npm:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  // labelWeb: chalk.white.bold('        Web:'),
  labelEmail: chalk.white.bold('      Email:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const opensourcing = `${data.labelOpenSource}  ${data.opensource}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
// const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
// const webing = `${data.labelWeb}  ${data.web}`
const emailing = `${data.labelEmail}  ${data.email}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               opensourcing + newline + // data.labelWork + data.work
               working + newline + newline + newline + // data.labelOpenSource + data.opensource
               twittering + newline + // data.labelTwitter + data.twitter
              //  npming + newline + // data.labelnpm + data.npm
               githubing + newline + // data.labelGitHub + data.github
               linkedining + newline + newline + // data.labelLinkedIn + data.linkedin
              //  webing + newline + newline + // data.labelWeb + data.web
               emailing // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
