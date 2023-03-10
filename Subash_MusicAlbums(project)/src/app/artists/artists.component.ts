import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent {
  public Song_Name:any;
  public Image:any;
  public Album:any;
  public Singer:any;
  public M_Director:any;
  public Lyricist:any;

  constructor(private route:ActivatedRoute)
  {

  }

  ngOnInit()
  {
    let name=this.route.snapshot.paramMap.get('name');
    this.Song_Name=name;

    let image=this.route.snapshot.paramMap.get('image');
    this.Image=image;


    let album=this.route.snapshot.paramMap.get('album');
    this.Album=album;

    let singer=this.route.snapshot.paramMap.get('singer');
    this.Singer=singer;

    let m_director=this.route.snapshot.paramMap.get('m_director');
    this.M_Director=m_director;

    let lyricist=this.route.snapshot.paramMap.get('lyricist');
    this.Lyricist=lyricist;

  }
}
