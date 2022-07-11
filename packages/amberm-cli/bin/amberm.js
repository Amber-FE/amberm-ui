#!/usr/bin/env node

import { readFile } from 'fs/promises'

// eslint-disable-next-line import/no-extraneous-dependencies
import { Command } from 'commander'

// eslint-disable-next-line import/extensions
import { dev } from '../src/commands/dev.js'

const { version } = JSON.parse(await readFile(new URL('../package.json', import.meta.url)))

const program = new Command()

program.version(version)

program
  .command('dev')
  .description('Run dev server')
  .action(async () => {
    dev()
  })

program.parse()
