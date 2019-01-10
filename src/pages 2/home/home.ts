import { Component } from '@angular/core';
import { NavController, ActionSheetController, ActionSheet } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: Array<{titulo: string, descripcion: string}>;
  accionAloe: ActionSheet;
  accionTe: ActionSheet;
  accionMalteada: ActionSheet;
  accionProteina: ActionSheet;
  accionExtra: ActionSheet;
  accion24: ActionSheet;

      

  constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController) {

    this.items = [];
      
  }






  agregarAloe(){
    let item = {
      titulo: "Aloe",
      descripcion: "Frio"
    }

    this.agregarItem(item);
  }


  agregarTe(){
    let item = {
      titulo: "Te",
      descripcion: "Frio"
    }

    this.agregarItem(item);
  }





  // =========================================================================================
  // MALTEADA MALTEADA MALTEADA   ============================================================
  // =========================================================================================
  agregarMalteada(){
      
      var malteada = {titulo:"", descripcion: ""};

      this.accionMalteada = this.actionSheetCtrl.create({
        title: 'Selecciona Sabor',
        buttons: [
          { 
              text: "Galleta", 
              handler: () => {
                  malteada.titulo = "Malteada";
                  malteada.descripcion = "Sabor: Galleta";
                  console.log("Galleta");
                  this.agregarItem(malteada);
              }
          },
          { 
              text: "Fresa", 
              handler: () => {
                  malteada.titulo = "Malteada";
                  malteada.descripcion = "Sabor: Fresa";
                  console.log("Fresa");
                  this.agregarItem(malteada);
              }
          },
          { 
              text: "Dulce de leche", 
              handler: () => {
                  malteada.titulo = "Malteada";
                  malteada.descripcion = "Sabor: Dulce de leche";
                  console.log("Dulce de leche");
                  this.agregarItem(malteada);
              }
          },
          { 
              text: "Vainilla", 
              handler: () => {
                  malteada.titulo = "Malteada";
                  malteada.descripcion = "Sabor: Vainilla";
                  console.log("Vainilla");
                  this.agregarItem(malteada);
              }
          },
          { 
              text: "Chocolate", 
              handler: () => {
                  malteada.titulo = "Malteada";
                  malteada.descripcion = "Sabor: Chocolate";
                  console.log("Chocolate");
                  this.agregarItem(malteada);
              }
          },
          { 
              text: "Platano", 
              handler: () => {
                  malteada.titulo = "Malteada";
                  malteada.descripcion = "Sabor: Platano";
                  console.log("Platano");
                  this.agregarItem(malteada);
              }
          },
          { 
              text: "Piña colada", 
              handler: () => {
                  malteada.titulo = "Malteada";
                  malteada.descripcion = "Sabor: Piña colada";
                  console.log("Piña colada");
                  this.agregarItem(malteada);
              }
          },
          { 
              text: "Moka", 
              handler: () => {
                  malteada.titulo = "Malteada";
                  malteada.descripcion = "Sabor: Moka";
                  console.log("Moka");
                  this.agregarItem(malteada);
              }
          },
          { 
              text: "Especialidad", 
              handler: () => {
                  malteada.titulo = "Malteada";
                  malteada.descripcion = "Sabor: Especialidad";
                  console.log("Especialidad");
                  this.agregarItem(malteada);
              }
          },
          { 
              text: "Frutas", 
              handler: () => {
                  malteada.titulo = "Malteada";
                  malteada.descripcion = "Sabor: Frutas";
                  console.log("Frutas");
                  this.agregarItem(malteada);
              }
          },
          { 
            text: "Cancelar", 
            role: "cancel"
          }
        ]
      });
      
      this.accionMalteada.present();
  }


  // =========================================================================================
  // PROTEINA PROTEINA PROTEINA   ============================================================
  // =========================================================================================
  agregarProteina(){
      
    var proteina = {titulo:"", descripcion: ""};

    const accionProteina = this.actionSheetCtrl.create({
      title: 'Selecciona Sabor',
      buttons: [
        { 
            text: "Chocolate", 
            handler: () => {
                proteina.titulo = "Proteina";
                proteina.descripcion = "Chocolate";
                console.log("Chocolate");
                this.agregarItem(proteina);
            }
        },
        { 
            text: "Vainilla", 
            handler: () => {
                proteina.titulo = "Proteina";
                proteina.descripcion = "Vainilla";
                console.log("Vainilla");
                this.agregarItem(proteina);
            }
        },
        { 
            text: "Natural", 
            handler: () => {
                proteina.titulo = "Proteina";
                proteina.descripcion = "Natural";
                console.log("Natural");
                this.agregarItem(proteina);
            }
        },
        { 
            text: "Barra", 
            handler: () => {
                proteina.titulo = "Proteina";
                proteina.descripcion = "Barra";
                console.log("Barra");
                this.agregarItem(proteina);
            }
        },
        { 
            text: "Ponche", 
            handler: () => {
                proteina.titulo = "Proteina";
                proteina.descripcion = "Ponche";
                console.log("Ponche");
                this.agregarItem(proteina);
            }
        },
        { 
            text: "Herbalife Pro", 
            handler: () => {
                proteina.titulo = "Proteina";
                proteina.descripcion = "Herbalife Pro";
                console.log("Herbalife Pro");
                this.agregarItem(proteina);
            }
        }, 
        { 
          text: "Cancelar", 
          role: "cancel"
        }
      ]
    });
    
    accionProteina.present();
}


// =========================================================================================
// EXTRA EXTRA EXTRA   =====================================================================
// =========================================================================================
agregarExtra(){
  var extra = {titulo:"", descripcion: ""};

    const accionExtra = this.actionSheetCtrl.create({
      title: 'Selecciona',
      buttons: [
        { 
            text: "Fibra", 
            handler: () => {
                extra.titulo = "Fibra";
                extra.descripcion = "";
                console.log("Fibra");
                this.agregarItem(extra);
            }
        },
        { 
            text: "Prolessa", 
            handler: () => {
                extra.titulo = "Prolessa";
                extra.descripcion = "";
                console.log("Prolessa");
                this.agregarItem(extra);
            }
        },
        { 
            text: "Niteworks", 
            handler: () => {
                extra.titulo = "Niteworks";
                extra.descripcion = "";
                console.log("Niteworks");
                this.agregarItem(extra);
            }
        },
        { 
            text: "Calcio", 
            handler: () => {
                extra.titulo = "Calcio";
                extra.descripcion = "";
                console.log("Calcio");
                this.agregarItem(extra);
            }
        },
        { 
            text: "Sopa de pollo", 
            handler: () => {
                extra.titulo = "Sopa de pollo";
                extra.descripcion = "";
                console.log("Sopa de pollo");
                this.agregarItem(extra);
            }
        },
        { 
            text: "Colágeno", 
            handler: () => {
                extra.titulo = "Colágeno";
                extra.descripcion = "";
                console.log("Colágeno");
                this.agregarItem(extra);
            }, 
        }, 
        { 
          text: "F2 en polvo", 
          handler: () => {
              extra.titulo = "F2 en polvo";
              extra.descripcion = "";
              console.log("F2 en polvo");
              this.agregarItem(extra);
          }, 
      }, 
        { 
          text: "Cancelar", 
          role: "cancel"
        }
      ]
    });
    
    accionExtra.present();
}



// =========================================================================================
// Herbalife24 Herbalife24 Herbalife24   ===================================================
// =========================================================================================
agregar24(){
  var herbalife24 = {titulo:"", descripcion: ""};

    const accion24 = this.actionSheetCtrl.create({
      title: 'Selecciona',
      buttons: [
        { 
            text: "F1 Sport", 
            handler: () => {
                herbalife24.titulo = "F1 Sport";
                herbalife24.descripcion = "";
                console.log("F1 Sport");
                this.agregarItem(herbalife24);
            }
        },
        { 
            text: "Strength", 
            handler: () => {
                herbalife24.titulo = "Strength";
                herbalife24.descripcion = "";
                console.log("Strength");
                this.agregarItem(herbalife24);
            }
        },
        { 
            text: "CR7", 
            handler: () => {
                herbalife24.titulo = "CR7";
                herbalife24.descripcion = "";
                console.log("CR7");
                this.agregarItem(herbalife24);
            }
        },
        { 
          text: "Cancelar", 
          role: "cancel"
        }
      ]
    });
    
    accion24.present();
}

// =========================================================================================
// AGREGAR ITEM     ========================================================================
// =========================================================================================
agregarItem(item) {
  this.items.push(item);
}

// =========================================================================================
// BORRAR ITEM     =========================================================================
// =========================================================================================
borrarItem(item) {
  // delete this.items[item];
  this.items.splice(item, 1);
  console.log(item);
}




}
