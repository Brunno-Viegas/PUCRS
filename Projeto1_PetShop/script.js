// Atualiza a data e a hora atual.
function atualiza_data()
{
    var data = new Date();
    document.getElementById("hora").innerHTML = data.toLocaleDateString() + " " + data.toLocaleTimeString();
}

setInterval(atualiza_data, 1000);

// Verifica a data e confirma o agendamento demonstrativo.
function agendar()
{
    var data = new Date();
    var agenda = new Date(document.getElementById("agenda").value);

    if (agenda < data)
    {
        alert("Escolha uma data e horário futuros.");
    }
    else
    {
        alert("Agendamento demonstrativo realizado com sucesso!");
    }

    return false;
}
