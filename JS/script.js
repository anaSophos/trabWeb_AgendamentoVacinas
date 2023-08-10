let vacinas = [
    {id: 1,nome: "Covid 19",fila: 1,vagas: 9,hora: "08:00",local: "Posto de Saude Rinatinha"}, //mudar os dados dps
    {id: 2,nome: "Gripe",fila: 1,vagas: 9,hora: "07:00",local: "Posto de Saude Maria das Graças"},
    {id: 3,nome: "Hepatite B ",fila: 1,vagas: 9,hora: "11:00",local: "Posto de Saúde Jose Manoel da Anunciacao"},
    {id: 4,nome: "Covid 19",fila: 1,vagas: 9,hora: "10:00",local: "Posto de Saude Pedro Calvacante"},
    {id: 5,nome: "Covid 19",fila: 1,vagas: 9,hora: "11:30",local: "Posto de Saude Santa Fé"},
    {id: 6,nome: "Covid 19",fila: 1,vagas: 9,hora: "15:00",local: "Posto de Saude Espirito Santo"},
    {id: 7,nome: "Covid 19",fila: 1,vagas: 9,hora: "16:00",local: "Posto de Saude Enf. Zezinha"},
    {id: 8,nome: "Covid 19",fila: 1,vagas: 9,hora: "9:40",local: "Posto de Saude Rinatinha"}
]


function idlocalstorage(e, id){ //id do item
        e.preventDefault()
        const referencia = "../HTML/criar.html"
        localStorage.setItem("idvacina", id) //nome da var e o valor dela
        setTimeout(() => {
            window.location.href=referencia
        }, 50); //primeiro armazenar o id da vac clicada em um localst e dps redir
    }

function buscaVacinas(){
    vacinas.map((item)=> {
        let id = item.id
        let nome = item.nome
        let fila = item.fila
        let vagas = item.vagas
        let hora = item.hora
        let local = item.local
    
        //html
        const elementotxt = `
        <div class="card">
                <figure>
                    <img src="../assets/syringe.png" alt="">
                    <span>${nome}</span>
                    <span class="fila">${fila} pessoas na fila</span>
                </figure>
        
                <div class="card-infos">
                    <p>${vagas} vagas disponiveis</p>
                    <p>Horário: ${hora} horas</p>
                    <p>${local}</p>
                </div>
        
                <a class="containerIdLocal" onclick="idlocalstorage(event, ${id})" href="#"><span>AGENDAR VACINA</span></a>
            </div>
        `
    
        const parser = new DOMParser() //cria elem DOM 
        const elementodocument = parser.parseFromString(elementotxt, "text/html") //transforma string em html e armazena neste novo dom
        const elemento = elementodocument.body.firstChild
    
        const container = document.querySelector(".cards-container")
        container.insertBefore(elemento, container.lastChild)
    })
    
}

//criar.html
function confirmarAgendamento(e){
    e.preventDefault()

    let agendamentos
    
    function checaListaAgendamentos(){
        if(localStorage.getItem("agendamentos")){
            agendamentos=JSON.parse(localStorage.getItem("agendamentos"))
        }else{
            localStorage.setItem("agendamentos", JSON.stringify([]))
            checaListaAgendamentos()
        }
    }
    checaListaAgendamentos()

    const vacinagendada = vacinas.filter((element)=>element.id === parseInt(localStorage.getItem("idvacina")))

    let agendamentoRepetido = false

    for(agendamento of agendamentos){
        if(agendamento.id === vacinagendada[0].id){
            agendamentoRepetido=true
            break
        }
    }

    if(agendamentoRepetido){
        Swal.fire({
            title:"Agendamento já existente",
            text: "Você já está agendado(a) nessa vacina",
            icon:"error",
            showConfirmButton: true,
            confirmButtonText: "Voltar ao início",
            allowOutsideClick:false
        }).then((result)=>{
            if(result.isConfirmed){
                window.location.href = "../HTML/index.html"
            }
        })
    }else{
        Swal.fire({
            title:"Deseja confirmar o agendamento?",
            text: "Essa ação poderá ser desfeita futuramente",
            icon:"question",
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: "Sim",
            confirmButtonColor: "#3085d6",
            cancelButtonText: "Não",
            cancelButtonColor: "#d33",
            reverseButtons:true
        }).then((result)=>{
            if(result.isConfirmed){
                agendamentos.push(vacinagendada[0])
                localStorage.setItem('agendamentos', JSON.stringify(agendamentos))
                Swal.fire({
                    title:"Vacina agendada com sucesso!",
                    icon:"success",
                    showConfirmButton:true,
                    showDenyButton:true,
                    confirmButtonText:"Voltar ao menu",
                    denyButtonText: "Ver meus agendamentos",
                    denyButtonColor: "#3085d6",
                    allowOutsideClick:false
                }).then((result)=>{
                    if(result.isConfirmed){
                        window.location.href = "../HTML/index.html"
                    }else if(result.isDenied){
                        window.location.href = "../HTML/meusAgendamentos.html"
                    }
                })
            }
        })
    }
}


function cancelarAgendamento(id){
    const agendamentos = JSON.parse(localStorage.getItem("agendamentos"))
    for(agendamento of agendamentos){
        if(agendamento.id === id){
            agendamentos.shift(agendamento)
            break
        }
    }

    Swal.fire({
        title:"Deseja cancelar o agendamento?",
        icon:"warning",
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: "Sim",
        confirmButtonColor: "#3085d6",
        cancelButtonText: "Não",
        cancelButtonColor: "#d33",
        reverseButtons:true
    }).then((result)=>{
        if(result.isConfirmed){
            localStorage.setItem('agendamentos', JSON.stringify(agendamentos))

            Swal.fire({
                title:"Agendamento cancelado com sucesso!",
                icon:"success",
                showConfirmButton:true,
                confirmButtonText:"Ok",
                allowOutsideClick:false
            }).then((result)=>{
                if(result.isConfirmed){
                    location.reload()
                }
            })
        }
    }) 
}

//meus agendamentos
function carregaAgendamentos(){
    
    const agendamentos = JSON.parse(localStorage.getItem("agendamentos"))

    if(agendamentos!==null && agendamentos.length!==0){
        document.querySelector(".agendamentos-notFound").style.display="none"
    }else if(agendamentos === null || agendamentos.length===0){
        document.querySelector(".agendamentos-notFound").style.display="block"
        return 0
    }

    agendamentos.map((item)=> {
        let id = item.id
        let nome = item.nome
        let fila = item.fila
        let vagas = item.vagas
        let hora = item.hora
        let local = item.local
    
        //html
        const elementotxt = `
            <div class="cards-container">
                <figure class="people-row">
                    <img src="../assets/pessoas_em_fila.jpg" alt="">
                </figure>
                <h2>0${fila+1}º</h2>
                <h3>Pessoa na fila</h3>
                <div class="descricoes">
                    <div class="description">
                        <figure>
                            <img src="../assets/syringe.png">
                        </figure>
                        <p>Vacina: ${nome}</p>
                    </div>
                    <div class="description">
                        <figure>
                            <img src="../assets/icone_map.jpg">
                        </figure>
                        <p>Posto de saúde: ${local}</p>
                    </div>
                    <div class="description">
                        <figure>
                            <img src="../assets/clock.jpg">
                        </figure>
                        <p>Horário estimado: ${hora} horas (BR)</p>
                    </div>
                    <a onclick="cancelarAgendamento(${id})" href="#"><span>CANCELAR AGENDAMENTO</span></a>
                </div>
            </div>
        `

        const parser = new DOMParser() //cria elem DOM 
        const elementodocument = parser.parseFromString(elementotxt, "text/html") //transforma string em html e armazena neste novo dom
        const elemento = elementodocument.body.firstChild
    
        const container = document.querySelector("main")
        container.insertBefore(elemento, container.lastChild)
    })    
}