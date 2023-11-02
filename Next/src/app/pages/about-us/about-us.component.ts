import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],


})
export class AboutUsComponent {

  developer_list = [{'name':'Ajith','imgurl':'../../../assets/profile-1.svg'}, {'name':'Sriram','imgurl':'../../../assets/profile-1.svg'}, {'name':'Joswin','imgurl':'../../../assets/profile-1.svg'}];
  
}
