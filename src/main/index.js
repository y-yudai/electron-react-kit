import { app, BrowserWindow, Menu } from 'electron'
import log from 'electron-log'
import unhandled from 'electron-unhandled'
import { getURIPathToFile } from './lib/utils'

log.info('starting up...')
unhandled()

const templateMenu = [
  {
    label: 'Menu',
    submenu: [
      {
        label: 'Quit',
        role: 'quit'
      }
    ]
  }
]

let win

function createWindow() {
  const menu = Menu.buildFromTemplate(templateMenu)
  Menu.setApplicationMenu(menu)
  win = new BrowserWindow({ width: 800, height: 600 })
  win.loadURL(getURIPathToFile('views/index.html'))
  win.webContents.openDevTools()
  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
