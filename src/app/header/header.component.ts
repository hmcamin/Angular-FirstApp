import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataStorageService} from "../shared/data-storage.service";
import {AuthService} from "../auth/auth.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy{
  private userSub: Subscription;
  isAuthenticated = false;
  constructor(private storage: DataStorageService, private authService: AuthService) {
  }
  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user =>{
        this.isAuthenticated = !!user;
    })
  }
  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  onFetchData(){
    this.storage.fetchData().subscribe();
  }
  onSaveData(){
    this.storage.saveData();
  }
}
