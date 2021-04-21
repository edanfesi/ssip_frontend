    function Temporizador(id, inicio, final){
      this.id = id;
      this.inicio = inicio;
      this.final = final;
      this.contador = this.inicio;

      this.conteoSegundos = function(){
        if (this.contador == this.final){
          this.conteoSegundos = null;
          return;
        }

        document.getElementById(this.id).innerHTML = this.contador--;
        setTimeout(this.conteoSegundos.bind(this), 1000);
      };
    }

    let temporizador = new Temporizador('temporizador', 40, 0);
    temporizador.conteoSegundos();

const 