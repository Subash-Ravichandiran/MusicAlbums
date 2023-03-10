import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { FormBuilder, FormGroup} from '@angular/forms';
import { MusicModel } from './music.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 
  public img="../assets/logo.png";


  formValue !: FormGroup;
  music: MusicModel = new MusicModel();
  musics: any;
  showAdd !:boolean;
  showUpdate !: boolean;


  constructor(private formBuilder: FormBuilder
    , private api: ApiService,
    private router:Router) {

  }

  fetchMusics(music:any)
  {
    this.router.navigate(['/musics',music.image,music.name,music.album,music.singer,music.m_director,music.lyricist]);
  }

  ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute=()=>false;
    this.formValue= this.formBuilder.group({
      image:[''],
      name:[''],
      album:[''],
      singer:[''],
      m_director:[''],
      lyricist:['']
    });
    this.getAllMusics();
  }

  clickAddMusic(){
    this.formValue.reset();
    this.showAdd=true;
    this.showUpdate=false;
  }

  postMusics() {
    this.music.image = this.formValue.value.image;
    this.music.name = this.formValue.value.name;
    this.music.album = this.formValue.value.album;
    this.music.singer = this.formValue.value.singer;
    this.music.m_director = this.formValue.value.m_director;
    this.music.lyricist = this.formValue.value.lyricist;
    this.api.postMusics(this.music).subscribe(
      res => {
        console.log(res);
        alert("Song Added !");
        this.getAllMusics();
        let close = document.getElementById("cancel");
        close?.click();
        this.formValue.reset();

      },
      err => {
        alert("something went wrong !");
        this.getAllMusics();

      }
    )
  }

  getAllMusics() {
    this.api.getAllMusic().subscribe(
      res => {
        this.musics= res
      }
    )
  }

  deleteMusics(data: any) {
    this.api.deleteMusic(data.id).subscribe(
      res => {
        alert("Song deleted");
        this.getAllMusics();
      }
    )
  }

  editMusics(data: any) {

    this.music.id = data.id;
    this.showAdd=false;
    this.showUpdate=true;
    this.formValue.controls['image'].setValue(data.image);
    this.formValue.controls['name'].setValue(data.name);
    this.formValue.controls['album'].setValue(data.album);
    this.formValue.controls['singer'].setValue(data.singer);
    this.formValue.controls['m_director'].setValue(data.m_director);
    this.formValue.controls['lyricist'].setValue(data.lyricist);
    
  }

  updateMusics() {
    
    this.music.image = this.formValue.value.image;
    this.music.name = this.formValue.value.name;
    this.music.album = this.formValue.value.album;
    this.music.singer = this.formValue.value.singer;
    this.music.m_director = this.formValue.value.m_director;
    this.music.lyricist = this.formValue.value.lyricist;

    this.api.updateMusic(this.music, this.music.id).subscribe(
      res => {
        console.log(res);
        alert("Song edited successfully!");
        this.getAllMusics();
        let close = document.getElementById("cancel");
        close?.click();
        this.formValue.reset();

      },
      err => {
        alert("something went wrong !");
        this.getAllMusics();

      }
    )
  }
}


  