interface SiteStatus{
    caminho: string;
    status: boolean;
}

function verificarSites(caminho: string): Promise<SiteStatus>{
    console.log("Verificando Sites...");
    return new Promise((resolve , reject) =>{
        setTimeout(() =>{
            if(caminho)
        }
    }
}
const sites: string[] = ["https://www.google.com", "https://www.github.com",];
verificarSites(sites);