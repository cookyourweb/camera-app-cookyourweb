import { Component } from '@angular/core';
import { Camera } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  imageURL
  base64Image
  
  constructor() {}
  takePhoto(){
    Camera.getPicture().then((imageData) => {
       this.imageURL = imageData
    }, (err) => {
       console.log(err);
    });
  }
  
   accessGallery(){
   Camera.getPicture({
     sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,
     destinationType: Camera.DestinationType.DATA_URL
    }).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,'+imageData;
     }, (err) => {
      console.log(err);
    });
}
}

