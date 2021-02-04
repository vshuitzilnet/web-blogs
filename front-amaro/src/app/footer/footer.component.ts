import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  openFacebook(){
    window.open("https://www.facebook.com", "_blank");
  }

  openInstagram(){
    window.open("https://www.instagram.com", "_blank");
  }

  openTwitter(){
    window.open("https://twitter.com", "_blank");
  }

  openYoutube(){
    window.open("https://www.youtube.com", "_blank");
  }

}
