export default function (){
    const diferencaEmDias = ref(0);

    const diasPessados = (data:Date)=>{
        const dataAtual = new Date().getTime();
        const diferencaEmMilessegundos = dataAtual- data.getTime();

        diferencaEmDias.value = Math.floor(
            diferencaEmMilessegundos / (1000*60*60*24)
        )
    }
    return {diasPessados,diferencaEmDias}
}