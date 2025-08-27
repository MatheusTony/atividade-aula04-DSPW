import fetch from "node-fetch";

type Resultado = {
    site: string;
    status: number | string;
};

async function verificarSites(sites: string[]): Promise<void> {
    const promessas: Promise<Resultado>[] = sites.map(async site => {
        try {
            const resultados = await fetch(site);
            return { site, status: resultados.status };
        } catch (error: any) {
            return { site, status: `Erro: ${error.code || error.message}` };
        }
    });

    const resultados: Resultado[] = await Promise.all(promessas);

    console.log("Status dos Sites:");
    resultados.forEach(res => {
        console.log(`${res.site}: Status ${res.status}`);
    });
}

const sites: string[] = [
    "https://www.google.com",
    "https://www.github.com",
    "https://umsitequenaoexiste.com.br"
];

// Chama a função
verificarSites(sites);
