import {Component, OnInit} from '@angular/core';
import {AlertController, LoadingController, NavController} from '@ionic/angular';
import {Router, ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {HTTP} from '@ionic-native/http/ngx';
import {ApisService} from '../services/apis.service';
import {Sim} from '@ionic-native/sim/ngx';

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
    public simInfo: any;
    public cards: any;
    public simdata: any;
    // tslint:disable-next-line:max-line-length
    constructor(private sim: Sim, public router: Router, public loadingController: LoadingController, public serviceApi: ApisService) {
    }

    ngOnInit(): void {
        this.getSimData();
        this.getTypeNumero();
        this.getoperateur();
    }
    async getSimData() {
        try {
            const simPermission = await this.sim.requestReadPermission();
            if (simPermission === 'OK') {
                const simData = await this.sim.getSimInfo();
                this.simdata = simData;
                this.simInfo = simData;
                this.cards = simData.cards;
            }
        } catch (error) {
            console.log(error);
        }
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
            this.idOperateur = null;
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
            this.idOperateur = null;
            this.titre = 'Operateurs';
            this.titre = this.OperteursSeclect.libelle;
        } else if (this.idOperateur != null) {
            this.idOperateur = null;
        }
    }

    DetailsTypeNumero(params) {
        this.idTypeNumero = params.id;
        this.idOperateur = params.id;
        this.typeSeclect = params;
        this.titre = params.libelle;
        this.getNumero();
    }

    DetailsTypeNumeros(id: any) {
    }
}
