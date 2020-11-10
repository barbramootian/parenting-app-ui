import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from 'src/app/shared/services/chat/chat.service';
import { DbService } from 'src/app/shared/services/db/db.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage/local-storage.service';
import { SurveyService } from '../survey/survey.service';

@Component({
  selector: 'plh-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  public offlineChatEnabled = false;

  public useButtonHomeScreen = false;

  constructor(private chatService: ChatService, private localStorageService: LocalStorageService,
    private router: Router, private surveyService: SurveyService, private dbService: DbService) { }

  toggleButtonHomeScreen() {
    this.localStorageService.setBoolean("home_screen.use_button_version", this.useButtonHomeScreen);
  }

  toggleOfflineChat() {
    this.chatService.init(this.offlineChatEnabled);
  }

  ngOnInit() {
    this.offlineChatEnabled = this.chatService.isUsingOffline();
    this.useButtonHomeScreen = this.localStorageService.getBoolean("home_screen.use_button_version");
  }

  openWelcomeFlow() {
    this.localStorageService.setBoolean("weclome_skipped", false);
    this.localStorageService.setBoolean("weclome_finished", false);
    this.router.navigateByUrl("/chat?trigger=welcome");
  }

  openWelcomeSurvey() {
    this.surveyService.runSurvey("welcome");
  }

  resetApp() {
    this.localStorageService.clear();
    this.dbService.db.delete();
  }

}