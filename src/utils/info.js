import os from 'os';
const numCPUs = os.cpus().length;

export function info() {
    const processInfo = {
        "Argumentos de entrada": process.argv,
        "Nombre de la plataforma - sistema operativo": process.platform,
        "Version de node": process.version,
        "Memoria total reservada rss": process.memoryUsage().rss,
        "Path de ejecución": process.execPath,
        "Process.id": process.pid,
        "Carpeta de proyecto": process.cwd(),
        "Cantidad de Procesadores": numCPUs,
    }
    return processInfo
};