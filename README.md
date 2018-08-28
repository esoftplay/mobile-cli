# mobile-cli
command line interface to support esoftplay mobile framework
## COMMAND
`esp` -- to manage file in your project with esoftplay package

## SYNOPSIS
`esp [option] [module/filename]`

## DESCRIPTION
This command is only work inside react-native project which has "esoftplay" package
The following options are available:
* `test`     = rebuild all routers
* `start`    = start execution (execute automatically when starting the program)
* `watch`    = detect when you've made code changes and then automatically build router
* `stop`     = stop watching code changes
* `help`     = display help
* `c/create` = create new module
* `e/edit`   = edit module
* `l/list`   = display all possible routing
* `n/new`    = create new module along with 'reducer'
* `i/info`   = display file priority from the module
* `v/view`   = concatenate and print file from any module

## EXAMPLE
* `esp create modulename/taskname` [OR] `esp c modulename/taskname`
* `esp list modulename` [OR] `esp l modulename`
* `esp modulename/taskname`

``
  PS: Do not use any option, if you want to display all routing list
``