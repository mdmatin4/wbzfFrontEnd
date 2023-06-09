import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { embedDashboard } from "@superset-ui/embedded-sdk";
import { Observable } from 'rxjs';
import { SupersetAuthServicesService } from 'src/app/services/superset-auth-services.service';
import { loginChart } from '../../models/loginChart';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-superset-chart',
  templateUrl: './superset-chart.component.html',
  styleUrls: ['./superset-chart.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class SupersetChartComponent  {
  @ViewChild('myDiv', { static: false }) myDiv!: ElementRef;
  constructor(private http: HttpClient,private supersetAuthService : SupersetAuthServicesService) {
    this.supersetAuthService.login();
    this._loginChart.access_token=localStorage.getItem("access_token")!;
    this._loginChart.refresh_token=localStorage.getItem("refrest_token")!;

  }
  baseURL =(environment as any).baserUrl_superset;
  invalidLogin : boolean= true;
   _loginChart: loginChart={access_token:"",refresh_token:""};


   


  ngOnInit(){
    
embedDashboard({
  id: "b921ea83-5668-401c-bbc0-5a2e5adca614", // given by the Superset embedding UI
  supersetDomain: "http://4.155.236.214:8088",
  mountPoint : document.getElementById("myDiv")!, // any html element that can contain an iframe
  fetchGuestToken: () => this.fetchGuestTokenFromBackend(),
  dashboardUiConfig: { // dashboard UI config: hideTitle, hideTab, hideChartControls, filters.visible, filters.expanded (optional)
      hideTitle: true,
      hideTab: false,
      hideChartControls: false,
      filters: {
          expanded: true,
          visible: false
      }
  },
});


}
ngAfterViewInit() {
  
  setTimeout(() => {
    if(this.myDiv){
      const iframe=document.getElementById('myDiv')?.firstChild as HTMLIFrameElement;
      console.log(iframe);
      if (iframe) {
          this.resizeIframeToFitContent(iframe);
      }
      
    }
  }, 100);
  
  
}
resizeIframeToFitContent(iframe: HTMLIFrameElement) {
  
  iframe.style.height = iframe.contentWindow?.document.body.scrollHeight + 'px';
  console.log(iframe.style.height);
}


fetchGuestTokenFromBackend(): Promise<string> {
  
  console.log(this._loginChart.access_token);
  const requestOptions = {
    headers: {
      "Content-Type": 'application/json',
      Authorization: `Bearer ${this._loginChart.access_token}`
    }
  };
  const body={
    resources: [
      {
        id: "b921ea83-5668-401c-bbc0-5a2e5adca614",
        type: "dashboard"
      }
    ],
    rls: [
    ],
    user: {
      
    }
  }
  
  return this.http.post<JSON>(`${this.baseURL}/security/guest_token/`,body,requestOptions).toPromise()
    .then((response: any)  => {
      
      var guest_token=response.token;
      // this.checkAndRefreshToken();
      console.log(guest_token);
      return guest_token;
    })
    .catch((err : HttpErrorResponse ) => {
      console.log(err);
      throw err;

    });
}

checkAndRefreshToken(): void {
  if (this.supersetAuthService.checkTokenValidity(this._loginChart.access_token)) {
    // Token is about to expire, refresh it
   this._loginChart.refresh_token= this.supersetAuthService.refreshAccessToken(this._loginChart.refresh_token);
    localStorage.setItem("access_token",this._loginChart.access_token);  
  }
}
getCSRFToken(): void {

  const requestOptions = {
    headers: {
      "Content-Type": 'application/json',
      Authorization: `Bearer ${this._loginChart.access_token}`
    }
  };
  
  
  this.http.get<JSON>(`${this.baseURL}/security/csrf_token`,requestOptions).subscribe({
    next: (response: any) => {
      const token = response.result;
      localStorage.setItem("csrf-token", token); 
    },
    error: (err: HttpErrorResponse) => {
      this.invalidLogin = true,
      console.log(err);
     
    }
  })
  }
    
}



