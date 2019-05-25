import {Component, OnInit} from '@angular/core';
import {AlertController, LoadingController, NavController} from '@ionic/angular';
import {Router, ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {HTTP} from '@ionic-native/http/ngx';
import {ApisService} from '../services/apis.service';

@Component({
    selector: 'app-tab3',
    templateUrl: 'tab3.page.html',
    styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

    public operateurs: any;
    public TypeNumero: any;
    public Numero: any;
    public idOperateur: number = null;
    public idTypeNumero: number = null;
    public OperteursSeclect: any;
    public typeSeclect: any;
    public titre = 'Operateurs';
    image = '../../assets/imgs/logo-orange.png';

    // tslint:disable-next-line:max-line-length
    constructor(public router: Router, public loadingController: LoadingController, public serviceApi: ApisService) {
    }

    ngOnInit(): void {
        this.getoperateur();
    }

    async getoperateur() {

        const loading = await this.loadingController.create({
            message: 'Loading'
        });
        await loading.present();
        this.serviceApi.getOperateurs().subscribe(res => {
            this.operateurs = res;
            loading.dismiss();
        }, err => {
            console.log(err);
            loading.dismiss();
        });
    }

    async getTypeNumero() {

        const loading = await this.loadingController.create({
            message: 'Loading'
        });
        await loading.present();
        this.serviceApi.getTypeNumero().subscribe(res => {
            this.TypeNumero = res;
            loading.dismiss();
        }, err => {
            console.log(err);
            loading.dismiss();
        });
    }
    async getNumero() {

        const loading = await this.loadingController.create({
            message: 'Loading'
        });
        await loading.present();
        this.serviceApi.getNumero().subscribe(res => {
            this.Numero = res;
            loading.dismiss();
        }, err => {
            console.log(err);
            loading.dismiss();
        });
    }

    ResetIdOperateur() {
        if (this.idTypeNumero != null) {
            this.idTypeNumero = null;
            this.titre = this.OperteursSeclect.libelle;
        } else if (this.idOperateur != null) {
            this.idOperateur = null;
            this.titre = 'Operateurs';
        }
    }

    DetailsOperateur(params) {
        this.idOperateur = params.id;
        this.OperteursSeclect = params;
        this.titre = params.libelle;
        this.getTypeNumero();
    }
    DetailsTypeNumero(params) {
        this.idTypeNumero = params.id;
        this.typeSeclect = params;
        this.titre = params.libelle;
        this.getNumero();
    }

}
