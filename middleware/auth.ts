const logado = true;// se for false ele nao exibi outra pagina

export default defineNuxtRouteMiddleware((to,from) =>{
     if(to.path != "/login" && !logado){
        return navigateTo("/login");
     }
    
});