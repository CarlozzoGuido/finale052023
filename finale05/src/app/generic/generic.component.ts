import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Coin, Cryptocoin } from '../module';

@Component({
  selector: 'app-generic',
  templateUrl: './generic.component.html',
  styleUrls: ['./generic.component.css']
})
export class GenericComponent {
  //@ts-ignore
  guy: Coin = {};
  link: string = "";
  xxx: Coin[] = []

  constructor(private route: ActivatedRoute, public http: HttpClient) {
    this.pleasefuckingwork("");
    this.http.get("https://api.coinranking.com/v2/coins").subscribe(baller => {
        
      //@ts-ignoreS
      this.xxx  = baller.data.coins;
    })

    setInterval(() => {
      this.http.get(this.link).subscribe(baller => {
        
        //@ts-ignoreS
        this.guy = baller.data.coin;
      })

    }, 1000)

 }

 pleasefuckingwork = (a: string) => {
  if (a != "") {
    this.link = "https://api.coinranking.com/v2/coin/" + a;
  } else {
    this.route.paramMap.subscribe(this.getRouterParam);
  }
 } 
 
 getRouterParam = (params: ParamMap) =>
  {    
    let uri_param = params.get('id'); //Ottengo l'id dalla ParamMap
    const options = {
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': 'coinranking8312d211410ce80dbcbb14d2307c2444aac6f92b02e57300',
      },
    };
    
      switch (uri_param) {
        case "btc":
          this.link = "https://api.coinranking.com/v2/coin/Qwsogvtv82FCd"
          break;
        case "eth":
          this.link = "https://api.coinranking.com/v2/coin/razxDUgYGNAdQ"
  
          break;
        case "doge":
          this.link = "https://api.coinranking.com/v2/coin/a91GCGd_u96cF"
          break;
    //this.service.getTrack()
  }
}
}
