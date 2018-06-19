import { Component, OnInit } from '@angular/core';
// import { OverlayContainer } from '@angular/material';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'amte-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Theming around';
  theme = 'my-theme';
  themeClass: string;

    constructor(
      private overlayContainer: OverlayContainer
    ) {}

    ngOnInit(): void {
      this.overlayContainer.themeClass = this.theme;
    }

    onThemeChange () {
      this.overlayContainer.themeClass = this.theme;
    }


}

// {
//   "workbench.welcome.enabled": false,
//   "workbench.iconTheme": "vscode-icons",
//   "vsicons.projectDetection.autoReload": true,
//   "workbench.colorTheme": "Dracula Dark Vibrant",
//   "editor.minimap.enabled": false,
//   "editorGroupHeader.tabsBackground": "#000",
//   "window.zoomLevel": 1,
//   "editor.fontFamily": "Source Code Pro",
//   "editor.fontSize": 15,
//   "workbench.colorCustomizations":{
//       // "statusBar.background": "#07bb25",
//       "activityBar.background":"#000",
//       "panel.background": "#555555",
//       "sideBar.background": "#000",
//       "editor.background": "#000",
//       "editorLineNumber.foreground": "#555",
//       "editorGroupHeader.tabsBackground":"#000",
//       "tab.inactiveBackground": "#000",
//   }

// }
