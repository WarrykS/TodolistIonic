import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  user: User; // declaration des variables

  isOpen : boolean = false;

  tasks : any[] = [];

  newTask : string;

  constructor(private menu: MenuController, private authService: AuthService) {
    this.menu.enable(true);
  }

  addNewTask(){
    var task = {
      isChecked : false,
      content : this.newTask
    }
    this.newTask = '',
    this.tasks.push(task); // permet d'ajouter un produit
  }

  deleteTask(i){
    this.tasks.splice(i, 1); // permet de supprimer un produit 
  }

  onCheck(event, i){
    this.tasks[i].isChecked = event.detail.checked; // permet de vérifier si un produit est checké
  }


  ngOnInit() {

  }

  ionViewWillEnter() {
    this.authService.user().subscribe(
      user => {
        this.user = user;
      }
    );
  }
}


