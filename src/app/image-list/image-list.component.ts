import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {
  images:any[] ;
  imagesFound: boolean = false;
  searching: boolean = false;
  blanksearch: boolean = false;
  searchQuery : string = '';
  constructor(private _imageService : ImageService) { }

  handlesuccess(data){
    this.images = data.hits; 

    (this.images.length > 0) ? this.imagesFound = false:this.imagesFound = true;
    console.log(data);
  }
  handleError(error){
    console.log(error);
  }
  searchtag(tag:string){
    this.searchQuery = tag;
    this.searchImages(this.searchQuery);
  }
  
  searchImages(query : string ) {    
    if(query){
      this.searching = true;
      this.blanksearch = false;
    return this._imageService.getImage(query).subscribe(
      data => this.handlesuccess(data),
      error => this.handleError(error),
      () =>  this.searching = false,
     
    );
    }else{
      this.blanksearch = true;
    }
  }
  ngOnInit() {
  }

}
