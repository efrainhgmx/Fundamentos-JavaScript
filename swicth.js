//Pide datos al usuario
var signo = prompt('¿Cuál es tu signo?');

switch (signo) {
    case 'acuario':
        console.log('La enfermedad de un familiar o vecino podría hacer que sientas desánimo hoy. La noticia probablemente ha pasado por demasiada gente, por lo que podría no ser tan mala como te dijeron. El trabajo puede ir lento en tus propios proyectos, ya que podrías tener un bloqueo mental transitorio acerca de qué hacer a continuación.');
        break;
    
    case 'tauro':
        console.log('Hoy podrías tratar de obtener el trabajo perfecto, posiblemente en un campo artístico o uno relacionado con las artes curativas.');
        break;
    case 'cancer':
        console.log('Los sueños y la meditación podría traer profundas emociones del pasado que han estado bloqueando tu crecimiento sin que te des cuenta. Tanto buscar como perdonar pueden adquirir una nueva importancia. La pasión romántica debe estar en su punto más álgido de todos los tiempos. Estas emociones también son susceptibles de servir de inspiración artística para que desees cambiar la decoración de tu hogar.');
        break;
    default:
        console.log('No eexiste ese signo');
}