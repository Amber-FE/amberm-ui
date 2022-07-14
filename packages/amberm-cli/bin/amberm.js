#!/usr/bin/env node
/* eslint-disable import/extensions */

import { readFile } from 'fs/promises'

// eslint-disable-next-line import/no-extraneous-dependencies
import { Command } from 'commander'

import { dev } from '../src/commands/dev.js'
import { build } from '../src/commands/build.js'

const { version } = JSON.parse(await readFile(new URL('../package.json', import.meta.url)))

const program = new Command()

program.version(version)

program
  .command('dev')
  .description('Run dev server')
  .action(async () => {
    dev()
  })

program
  .command('build')
  .description('Run build')
  .action(async () => {
    build()
  })

program.parse()
