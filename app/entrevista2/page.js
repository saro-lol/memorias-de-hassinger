import Link from 'next/link';
import BackButton from '../../components/BackButton';
import TranscriptSection from '../../components/TranscriptSection';
import styles from './page.module.css';

export const metadata = {
  title: 'Entrevista 2: Abuelos, Juventud y Amor · Memorias de Hassinger',
};

export default function Entrevista2() {
  return (
    <article className={styles.page}>
      {/* ── Breadcrumb ── */}
      <p className={styles.breadcrumb}>
        <Link href="/">Inicio</Link> / Entrevista 2
      </p>

      {/* ── Header ── */}
      <header className={styles.header}>
        <span className={styles.tag}>Entrevista 2</span>
        <h1 className={styles.title}>Abuelos, Juventud y Amor</h1>
      </header>

      {/* ── Video ── */}
      <div className={styles.videoWrapper}>
        <iframe
          src="https://www.youtube.com/embed/g19MHjqj56U"
          title="Entrevista 2: Abuelos, Juventud y Amor"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* ── Contexto ── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Contexto</h2>
        <div className={styles.contextGrid}>
          <div className={styles.contextItem}>
            <span className={styles.contextLabel}>Fecha de grabación</span>
            <span className={styles.contextValue}>28 de marzo de 2026</span>
          </div>
          <div className={styles.contextItem}>
            <span className={styles.contextLabel}>Temas</span>
            <span className={styles.contextValue}>Abuelos, adolescencia en Oxapampa, estudios en Lima, cómo conoció a Pepe Romero</span>
          </div>
          <div className={styles.contextItem}>
            <span className={styles.contextLabel}>Participantes</span>
            <span className={styles.contextValue}>Iris Teresa Hassinger Verde, Toño — José Antonio Romero (entrevistador)</span>
          </div>
          <div className={styles.contextItem}>
            <span className={styles.contextLabel}>Archivo original</span>
            <span className={styles.contextValue}>iris_sesion_02.m4a (58 MB)</span>
          </div>
        </div>
      </section>

      {/* ── Resumen ── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Resumen</h2>
        <p className={styles.summaryText}>
          En esta segunda sesión, Iris recuerda a sus abuelos: por el lado paterno, Jorge Hassinger
          Monz, a quien su padre perdió a los 17 años; y por el lado materno, la legendaria
          "mamá Jetro", conocida por sus semanas de celebración. Luego habla de su adolescencia
          en Oxapampa — el grupo de siete amigas inseparables, las salidas en bicicleta, a caballo
          y en moto, el cine, las fiestas del Club Social y Unión — y de sus años en Lima estudiando
          corte y confección en el Art Studio, donde vivió el terremoto de los años 60. Finalmente,
          cuenta cómo conoció a Pepe Romero: él llegó a Oxapampa para conocer a su padre,
          y a fuerza de insistencia conquistó a Iris, con quien se casaría años después.
        </p>
      </section>

      {/* ── Puntos importantes ── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Puntos importantes</h2>
        <ul className={styles.keyPointsList}>
          <li className={styles.keyPointItem}>
            Su abuelo paterno, Jorge Hassinger Monz, murió cuando el padre de Iris tenía solo 17 años. Lo llevaron enfermo desde Oxapampa hasta La Merced en mula, donde falleció. Su padre lo vivió solo, acompañado únicamente de un amigo, y lo recordaba con mucha tristeza.
          </li>
          <li className={styles.keyPointItem}>
            El abuelo Hassinger tuvo primero una pareja alemana. No pudo casarse con la abuela Gálvez — madre de todos sus hijos — hasta que falleció la primera esposa.
          </li>
          <li className={styles.keyPointItem}>
            Solo conoció a su abuela materna, Gertrudis Colonio, conocida como "mamá Jetro". Era de carácter fuerte, muy trabajadora, y sus cumpleaños duraban una semana entera con banda traída de Paucartambo, pachamanca y baile. Se convirtió en referencia familiar para cualquier celebración exagerada.
          </li>
          <li className={styles.keyPointItem}>
            La cultura de celebración de la familia viene principalmente del lado materno. El primer presidente del Club Social de Oxapampa fue el abuelo paterno Hassinger, y las fiestas del club eran muy elegantes: las mujeres iban con vestidos largos, se sacaban los zapatos para cruzar el barro del camino, y se lavaban los pies antes de entrar a bailar.
          </li>
          <li className={styles.keyPointItem}>
            A los 13 años se mudó del fundo al pueblo y se integró sin dificultad, porque ya conocía a las familias vecinas: los Pichu, los Segarra, los Piskulich, los Baumann.
          </li>
          <li className={styles.keyPointItem}>
            Su grupo de siete amigas inseparables era: Cata Fernández, Hilda Fernández, Rebeca Segarra, Blanquita Villanueva, Helga Egl, Raquel Vellan y Nélida Shegadeh. Coordinaban todo caminando, sin teléfono. Cada domingo una preparaba el lonche en su casa.
          </li>
          <li className={styles.keyPointItem}>
            Las salidas del grupo eran inventivas: fueron en bicicleta a Yamakisu a comer chicharrones con Nora Álvares; salieron en moto con "las casacas negras"; y un domingo alquilaron caballos para ir a Quiasú. El caballo de Iris se desbocó y la llevó al galope hasta la casa de su dueño.
          </li>
          <li className={styles.keyPointItem}>
            Aprendieron a bailar rock and roll subiendo a la terraza del depósito de Castillo, sin pasamanos y con taquitos de aguja. Llevaron champán con marrasquinos y bajaron las escaleras sentadas porque ya no podían bajar de pie.
          </li>
          <li className={styles.keyPointItem}>
            Dejó la secundaria por el asma crónica, que se agravaba especialmente en épocas de exámenes. En Lima estudió corte y confección durante tres años en el Art Studio (Jirón Moquegua), viviendo con su hermana Alicia. La directora le escribió a su madre para que pudiera terminar los tres años completos.
          </li>
          <li className={styles.keyPointItem}>
            Al graduarse, la directora del Art Studio le dijo: "Vete a tu tierra y serás cabeza de león, no cola de ratón." De regreso a Oxapampa, abrió su propio taller de costura en la casa familiar y tuvo clientela propia siendo soltera.
          </li>
          <li className={styles.keyPointItem}>
            Vivió el terremoto de Lima en el segundo piso del Art Studio, un edificio de quincha que se rajaba por todos lados. Le dobló el brazo a la profesora que bloqueaba la salida y escapó con su amiga Hilda en taquitos de aguja. Caminaron hasta la Plaza San Martín mientras caían tejas y el asfalto se ondulaba. Llegó a casa de Alicia a las diez de la noche. Desde entonces tiene pánico a los terremotos.
          </li>
          <li className={styles.keyPointItem}>
            Pepe Romero llegó a Oxapampa traído por Esteban Bueno para conocer a su padre, don Lucho Romero. La primera vez que se encontraron, don Lucho solo le dio la mano. Eso marcó profundamente a Pepe.
          </li>
          <li className={styles.keyPointItem}>
            Pepe se quedó en Oxapampa, se hizo amigo de todo el mundo enseñando matemáticas a los alumnos de quinto año, y vivió en un cuarto alquilado en la casa de Raúl Miller. Trabajó con su padre don Lucho.
          </li>
          <li className={styles.keyPointItem}>
            Iris tenía 15 años cuando Pepe empezó a buscarla. Ella no quería saber nada de él. La conquistó a pura insistencia durante casi nueve años. Su hermana Eulalia lo llamaba "upatángara" (el que no habla). Lo que a Iris le terminó gustando fue su atención: le jalaba la silla para que se sentara.
          </li>
          <li className={styles.keyPointItem}>
            Ni su padre, ni su madre, ni sus hermanos Eduardo ni Emilio aprobaban la relación porque Pepe era bebedor. Emilio le advirtió directamente: "Si te portas mal con mi hermana, ya sabes lo que te espera."
          </li>
          <li className={styles.keyPointItem}>
            La pedida de mano se hizo con tres hombres (el padre de Pepe, Nico Vallarín y Chima Vallarín) porque el padre de Iris había amenazado con recibirlos con carabina. Un año después de la pedida se casaron, pese a que la madre quería que la boda fuera en una semana.
          </li>
        </ul>
      </section>

      {/* ── Transcripción ── */}
      <TranscriptSection>
        <div className={styles.transcriptBody}>

          <p>
            <span className={styles.speaker}>Toño:</span> Okay, mami, vamos a empezar la segunda sesión de esta lista de entrevistas para conocer tu historia. En la sesión pasada, hablamos acerca de tus padres, tu familia, tus hermanos, un poco de tu infancia. Hoy vamos a dividir la entrevista en dos partes. La primera parte vamos a hablar antes de tus padres y después vamos a empezar a hablar de tu juventud, tus amigos, tus estudios y cómo conociste a mi papá. Vamos a ver cuánto tiempo más o menos nos toma eso y vamos decidiendo dónde cortamos. Pero, okay, vamos a empezar hablando acerca de, eh, tus abuelos. Primero tus abuelos paternos. ¿Cómo se llamaban tus abuelos paternos?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Eh, Jorge... Hassinger Monz. Eh, es lo que yo me acuerdo porque yo no los he conocido. Y, este, mi abuela, como, eh, ¿cómo se llamaba?
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Ya, ya luego volvemos a ella.
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Eh, pero ella era Gálvez. Gálvez, sí, pero el nombre no recuerdo.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Sí. ¿Qué te decía tu papá de su padre, de Jorge Hassinger?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Mira, a mí, como yo era chica, cuando esto, la última, yo no prestaba atención a lo que que podía haberme informado. Pero, lo que sí me dijo que perdió a su papá muy pronto. A los 17 años. Y él es el que ha estado con él, incluso se puso mal acá en Oxapampa y lo llevaron a La Merced en mula. Sí, lo llevaron en mula, total que, ahí falleció, porque fue con un amigo que lo acompañó. Y entonces, ahí fallece mi abuelo, y nuevamente cogieron yo creo la mula, o cómo será, no, eso no estoy bien informada, lo regresaron a Oxapampa. Él y un amigo, más nadie, más nadie. Y eso es lo que él contaba con mucha tristeza.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Oh, mira. Y, él te contaba de cómo era el trato con su padre?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Con su papá, bueno, él, su papá de bueno, él este, cuando, el papá, es lo que me contaban, ¿no? Porque yo muy informada no estoy. Pero él contaba de que su papá siempre hacía huerto, porque para el consumo de ellos. Y mi papá tenía muy, muy, este, en decir de que a mí, a nosotros nos mandaba a recoger la col para la ensalada, pero no es como nosotros, cortamos la col. No, no, no. Él le decía, "ustedes van a recoger las hojas de abajo, las verdes, esas son las que valen, ahí". Y eso era que él tenía muy así de decirnos que las hojas verdes son las que te tienen que dar el caroteno o algo así, mucha vitamina, mucho bueno que tenía. Y sembraba de toda clase de verduras, porque en Oxapampa da de todo.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Y este abuelo tuyo, aparentemente, había tenido previamente otro compromiso con una alemana y es con la segunda esposa, la Gálvez, que él tiene a todos sus hijos, en realidad, ¿no?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Sí. Sí. De la primera esposa yo no estoy muy enterada porque no hablaba. La segunda sí que, bueno, ella posteriormente que estaría solo pues, y ya la lo tuvo como pareja a ella. Y este, ahí tuvo a los hijos, los hermanos de mi papá.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Algo que pude averiguar es que hasta que no murió la primera esposa, él no pudo casarse con su segunda esposa, con la que tuvo a todos los hijos, ¿no?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> No. Así es.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Okay. Entonces esa es la parte de tus abuelos paternos. ¿Qué hay de tus abuelos maternos? ¿Quiénes eran los padres de tu mamá, de Filomena?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> De mi mamá era la eh este, ¿cómo le decían?, la Gertrudis se llamaba. Gertrudis... Colonio. Colonio. Al abuelo yo no lo he conocido. Yo no lo he conocido, yo le he conocido a la abuela. La abuela que era tenía un carácter fuerte, pero era muy trabajadora, ella es la que hacía y deshacía. Y hacía sus grandes fiestas en su cumpleaños. Yo no sé si haría en carnavales, pero su cumpleaños yo creo que era duraba una semana. Uy, te traía banda de Paucartambo, las personas de Oxapampa, ¿cómo esperaban ese evento? "Ah ya la mamá Jetro, ya va a ser su cumpleaños, que la fiesta, que la fiesta". Y eran pues unas comilonas tremendas, que su pachamanca, que haría pues su caldo de gallina, su escabeche y que tomaban pues, bailaban y tomaban y se divertían demasiado.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Era como una fiesta patronal.
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Eh sí. Ah, ahora cuando alguien celebra demasiado su cumpleaños, entonces le decían, "ay, Jetro, la mamá Jetro". Y una de ellas, este, siempre la fastidiábamos a Kesha, porque Kesha siempre festejaba su cumpleaños dos, tres días. Y entonces le decíamos, "ya la mamá Jetro está preparando su cumpleaños".
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Sí, lo que es bonito porque algo que en nuestra familia se ha apreciado mucho es la celebración, ¿no? Entonces, yo no sé si viene más por el lado de tu familia materna, de tu familia paterna, o de ambos. ¿Tú de dónde crees que sale ese afán de hacer celebraciones para compartir en familia, sobre todo?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Más que nada por la familia de mi mamá. Mi papá no, no lo he visto. Aunque mi papá también era jaranero, allá había el Centro Social, Club Centro Social, que el primer presidente ha sido mi abuelo, y entonces, ahí tenía un club muy bonito, muy bonito, y este, todos se reunían ahí. En esa época, los caminos eran no eran pues empedrados ni nada, eran de barro. Barro, porque llovía mucho. Barro. Entonces, ¿qué hacían? Que ellas se iban muy elegantes, ¿ah? Eso sí, tenían que ir, que si no estaban elegantes, no pasaban. Entonces, iban muy elegantes, pero el barro. Entonces, ¿qué hacían? Se sacaban los zapatos y caminaban entre el barro, hasta llegar al club. Llegaban al club, había agua, y ellos se lavaban bien los pies y se ponían los zapatos y entraban al club a bailar. Muy jaraneros, esa fiesta, yo no asistía porque todavía era muy chica. Mis hermanas, Eulalia, Rosa, mi papá les llevaba junto con mi mamá. Y ahí en el club hacían unas kermeses, o sea, vendían viandas, como era el caldo de gallina, el escabeche y cosas ricas. Entonces, la en que están bailando y esto, estaban consumiendo, estaban comiendo. Y este, y se amanecían pues.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> De tus abuelos entonces, ¿solamente conociste a la mamá Jetro?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Sí, a la mamá Jetro.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Sí la llegaste a conocer. ¿Y qué te acuerdas de ella?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Me acuerdo que mi abuela era de un carácter fuerte. Entonces yo, mi mamá un día me dice, "acompáñame para visitar a mi mamá". Yo era chiquita. Y voy, me acompaño, le acompaño, y en eso nos sirve el lonche. Y yo pues como como en mi casa, este, en mi café y me comencé a echar, ya estaba en la segunda cucharita de azúcar y me dijo, "ya no, ya no, que no me eches más". Así, bien feo. Y yo así, chiquita, me molesté. Y cuando salimos de ahí, yo a mi mamá le dije, "nunca más me digas que te acompañe porque yo no voy a venir". Y así fue. Nunca más.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> O sea que no has tenido mucho contacto con la mamá Jetro. Bueno, ahora vamos a hablar de tu etapa de adolescencia, juventud, porque tú ya sales del fundo y te vas a vivir a tu casa en el pueblo. Entonces, ahí haces un grupo muy bonito de amigas. Cuéntame de tus amigas.
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Yo vengo pues del fundo San Francisco, porque se hizo una casa y ahí había, se puso una tienda. Entonces, yo para esa época yo tendría pues trece años. Y me encuentro que en el barrio que vivía, que estaba, había mucha juventud, mucha chiquillada, muchos vecinos, casi de mi edad. Entonces, todos salíamos a la calle a jugar.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Ahí te quiero hacer una pregunta porque normalmente cuando llega alguien nuevo, hay un periodo de adaptación, ¿no? ¿Cómo te integras a ese nuevo sitio? ¿Fue muy rápida?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> No, no, no. Yo llego allá, para eso yo ya era, yo era conocida ya, desde el fundo, ya me conocían, tenía mis padres tenían amistad pues con con la señora Esther Segarra, con la señora, la mamá de las Pichu, de ya. Y ellos eran un montón. Más ahí estaban los Bardales, los Piskulich, Baumann... Con la familia Baumann, o sea, don Juan y sus hijas no, no he tenido yo mucho contacto, pero con con este, con las Pichu, con Segarra... ellas iban a ahí cuando nosotros vivíamos en el fundo, ellos iban a visitarnos. Nosotros, éramos amigos, amigos.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Ah, okay. O sea, no fue un periodo de adaptación, sino más bien una felicidad de encontrarse cerca ahora, ¿no? Okay, ¿y quiénes eran entonces ese grupo de amigos, los más cercanos?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Los más cercanos. Bueno, los Pichu eran como cuántos pues eran, ahí estaba Aníbal, Rómulo, Irma, este, bueno, las mayores, con las mayores no he tenido contacto mucho, con Adelma... Adelma era amiga de Eulalia, de Rosa, ¿no?, pero conmigo no. Carolina, Carolina también era mayor, tampoco. Pero ya. Y con las Segarra pues era Rebeca, Machi, Chito y ellos. Después con las Piskulich. Las Piskulich pues muy amigas también. Y ahí estaba Yolanda, Amanda, Rolando, y Pitín le decíamos, Pitín, a él. Él es este, ahorita no me acuerdo, pero cuando jugábamos, pues jugaban la mata gente, la peste, las escondidas. Y cuando era mata gente con eso, Américo, Américo, él jugaba vóley y todo, pero él era alto, pues fuerte, y cuando teníamos un, dos equipos, uno para un lado y otro para el otro. "Ah, no, si Pitín juega para allá, yo no juego". Y así, no queríamos que si era para nosotros, sí, pero si no, no. Total, un día estamos jugando la peste, él, Pitín me agarra y nosotros teníamos vestido pues este de dos tiempos, que recogido así a la cintura y el Pitín me agarra mi falda y se hace como un acordeón, y se descose. Entonces, yo agarro mi falda y la pongo así, pero todo eso y... esas cosas, pero fue muy lindo, ese recuerdo lo tengo tan lindo con todas ellas.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> ¿Y las Fernández?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Ah, Cata e Hilda. Bueno, Cata e Hilda, eso ya fue posteriormente, cuando ya era jovencita yo, porque lo que estoy contando es de chiquillas. Pero ya cuando estaba jovencita, porque a Cata e Hilda no, la abuelita no los dejaba salir, ellos no jugaban cuando nosotros jugábamos. No, no, no. Ya cuando yo era jovencita, ahí sí ya una amistad, pero ya no como hermanas, porque teníamos la casa pegada una con la otra. Entonces, y como las casas de allá tenían balcón, entonces nos pasaban de un balcón al otro. Me iba para acá o ella venía para acá y así. Y ahí una amistad muy, muy, hasta hasta ahora, bueno, qué pena que ahorita solamente está Cata. Pero una amistad muy buena. La abuelita a mí me quería mucho. Ahora, después de eso, ya jovencitas, teníamos un grupo, un grupo, pero inseparables. Que era Cata, Hilda, Rebeca, Blanquita Villanueva, Helga Egl, Raquel Vellan, y Nélida Shegadeh. Éramos siete.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Oye, ahí te hago una pregunta. Porque alguien que escucha esto y es joven, dice, "pero si no tenían teléfono, no tenían WhatsApp, ¿cómo coordinaban en encontrarse?"
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> No, qué fácil, no sé cómo coordinábamos pero ya, este, estábamos atentas, caminábamos pues, porque no había otra forma, caminábamos. Y lo que era también nuestro grupo, el domingo teníamos que salir al parque, a darnos unas vueltas en la tardecita, pero bien puestas, bien puestitas, a dar y dar vueltas ahí. Y después de eso ya, ir al cine. Teníamos, nos íbamos al cine. Y para ir al cine había que hacer cola. Sí. Y así, teníamos, nos, nosotras íbamos a las fiestas, armábamos la fiesta. Porque llegábamos y al toque nos poníamos a bailar. Y entonces ya los demás también se animan, pues. Y nos decían, "¿van a ir a la fiesta los que organizan?". "Sí, sí, vamos a ir". Y a veces decían, "No, porque era entre el Social y el Unión".
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Wow.
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Sí. Y, así que ahí pues al Social, bueno, nosotras más que nada éramos del Unión, pero también nos íbamos al Social y bailarinas pues. Tenía también cada domingo una de nosotras tenía que preparar el lonche en su casa, para juntarnos.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> ¿Y los chicos alrededor de ese grupo?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Los chicos, bueno, teníamos nuestros enamorados. Que fue Pepe Romero, que fue mi enamorado. Y los este, no, mi mamá, no, ellos no querían, entonces todos los encuentros eran pues a escondidas, porque si no me caía. Y y así. Y también, cuando nosotros teníamos las reuniones entre amigas, decíamos, "acá no entra ni un hombre, que si es tu enamorado, lo que sea, no entra ni un hombre. Somos nosotras nomás". ¿Por qué? Porque nosotros entre nosotras podíamos hablar lo que queríamos, hacer, no cosas malas, pero tener una intimidad de mujeres.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Sí. Y, ¿qué cosa había en esos lonchecitos, en esas reuniones? ¿Qué comida hacían?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Cada una lo que podía, lo que hacía. Había su queque que cada una ya sabíamos hacer el queque, que el huevo frito, que no sé qué, las mermeladas, el queso, la mantequilla y y eso era. Lo que sí no me olvido es que en una de esas entró Nora Álvares, la que se estaba, se casó con Talavera. Y una vez, ella vivía en Yamakisu. Entonces le dijimos que vamos a llegar a su casa a tomar el lonche. Y, ¿qué hicimos? Cada una nos hemos prestado, no sé de quién, bicicletas. Y todas en una bicicleta llegamos a su casa porque era lejos. Y este, Nora nos esperó con unos chicharrones. ¡Wow! Dios mío, un café con chicharrones, con yuca, que no sé... ¡Inolvidable! A eso no me olvido. Y muy bien.
          </p>

          <p>
            <span className={styles.speaker}>Iris:</span> Otra vez, ya, así pues, planeábamos entre jóvenes, mujeres, ¿no? "Oye, el domingo vamos a salir en moto, pero vamos a buscar a muchachos que tienen motos y que nos lleven como por decir aquí a Surco, por ahí, ¿no?". Y buscábamos, y ahí había jóvenes que también chiquillos, muchachos que que decían que eran las casacas negras, que no sé qué. Ay, así que a ellos los buscábamos. Y nos íbamos pues, cada una en una moto, nos íbamos de paseo. Otra vez ya dijimos, "oye, este domingo vamos a pasearnos en caballo. Vamos a buscar caballos que nos presten". Y de veras, conseguíamos. Y para esa vez estaba Bedia Romero. También estuvo en caballo, nos conseguimos. Y a mí me prestó el caballo Óscar Verde, mi primo. Y él vivía pues cerca a la casa, por donde yo en Girón Grau, ¿no? Y ese caballo siempre estaba ahí parado, porque él andaba en ese caballo. Y le digo, "Óscar, préstame". "Ya", me dijo. Me prestó. Nos fuimos como para Quiasú. Todas en caballo, de seda y todo esto. Total, en eso dijimos, "ya vamos a volver". El caballo da la vuelta y mi caballo, que era de Óscar Verde, comenzó a correr de una manera terrible, que yo me, yo no sabía manejar, pues, pero yo me prendí. Pero de una manera terrible, que corría, corría, corría hasta llegar a su casa. ¡Qué me dio un susto! ¡Dios mío!
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> ¡No te creo! ¡Wow!
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Pero todas esas cosas, que vamos en caballo, que vamos en bicicleta, que vamos en moto, que no sé qué, todo lo que se nos ocurría. Después, ya más jovencitas, pues, que las fiestas, y comenzó salió lo que era el twist, con radio, Blanquita Villanueva me dice, "vamos a aprender", Nélida Shegadeh, Cata, yo, "vamos a aprender a bailar el rock and roll, porque están bailando por allá". "Ya", y nos subimos al donde Castillo tenía su depósito y era de dos pisos, pero subimos arriba a la terraza, que tenía una escalera sin pasamanos, nada, agarrándonos subimos. Y ahí pusimos la música, y que una decía que se se hace así, que se hace así.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Pero pero no había videos, no había YouTube.
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> No, no, no. Tal vez en las películas. Porque nosotros aprendíamos que queríamos aprender el rock paso. Ya, y entre eso pues llevamos nuestro traguito que era lo que nos gustaba era el champán.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> ¿Champán con?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Con marrasquinos. Yo sacaba de mi tienda marrasquinos, Cata champán, y así. Total, tomamos ese día ahí arriba, bailando, tomando y esto, total que nos habremos mareado un poco. Y para bajar esa escalera, ahora ¿qué hacemos? ¿Cómo vamos a bajar? Y este, ¿sabes cómo vamos a bajar? Sentadas. Sentadas. Así bajamos. Y ya pues, y era una diversión sana porque, claro, tomar, pero no de forma exagerada, ¿no? Y otra también, que nuestro grupo era que había matrimonios en el en el Social hacían los matrimonios. Y en eso, nos invitaban pues. Y nosotros ahí mismo les decíamos al que se casaba, "nosotros vamos a repartir el champán a todos". Y de veras pues, con nuestras bandejas, yendo, repartiendo a todo el club. Pero nos guardábamos una o dos botellas, que eso es para nosotros. Y las felices pues nosotros que estamos aprendiendo.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Oye, y en esos matrimonios, creo que la comida normal era la pachamanca.
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> La pachamanca.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Y había que comer con la mano.
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Sí, ese era lo típico. Y hasta bueno, hasta ahora, matrimonio, quince años, es la pachamanca.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Y yo me imagino que el ambiente en Oxapampa era muy sano en esa época, ¿no? Muy tranquilo, no había pues delincuencia, mucha seguridad.
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Nadie te faltaba el respeto. Nadie te faltaba el respeto. Todos muy este, todos, no había, no había problema. Por ejemplo, de chiquillos, nosotros jugábamos en la noche, las escondidas y esto. Hombres y mujeres. Pero nadie se pasaba. Nadie. Todos sanos, sanos.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Muy bien, esa es la época de tu juventud allá en Oxapampa. Y, en un momento, tú quieres salir a estudiar.
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Sí.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> ¿Cómo es eso?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Mira, mi situación de mis estudios fue así. Yo desde niña he sufrido de los bronquios. Los bronquios que me daban a matar. Bueno, estudié la primaria, entré a la secundaria al Mariscal Castilla, el primer año, y luego era que me ya tenía asma, que me mal, mal, mal, mal. Entonces, ¿qué pasó? Ya, este, el asma, los bronquios son emotivos, según sé. Entonces, ya me tocaba la época del examen, y yo ya estaba grave, ¡ah! Sí, de puros nervios. Entonces, dejé, estudié porque también vine acá a Lima internada y también el asma me...
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> ¿A qué colegio?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Al colegio de las monjas por el Rímac. Por allá por... no, no, no. De las monjas españolas.
          </p>

          <p>
            <span className={styles.speaker}>Iris:</span> Wow. Y total, ahí mal, mal, también, que me moría, me moría. Y ya pues, me tuve que regresar sin seguir. Y no podía pues, no podía seguir estudiando, y yo decía, "pero, ¿qué va a ser de mi vida? ¿Qué hago? ¿Qué hago?". Y a mí desde la primaria, habían cursos de corte y confección, de cocina, repostería y labores. Y me encantaba corte y confección. Era la señora Guillermina Franzen, la profesora, y yo captaba todo lo que ella nos enseñaba. Entonces, para mí era que me gustaba, me encantaba corte y confección. Entonces, yo al ver que yo no puedo seguir estudiando la secundaria, a terminar, ¿no?, ¿qué va a ser de mi vida? decía, ¿qué va a ser? No puede ser. Entonces, le, para eso tenía unas amigas que eran las Tiburcio. Y ellas me decían, "allá hay buenas academias". Entonces, yo hablé con mi mamá, le digo, "mamá, yo quiero irme a Lima, quiero estudiar corte y confección". Ya. Entonces mi mamá me dice, "bueno, pero un año nomás vas a ir". "Ya", le digo, "un año me voy". Y me vengo pues. Una buena academia, muy buena academia. Y todo lo que enseñaba la directora de ellos, yo captaba al toque, al toque captaba todo. Y este, a la directora ya casi para finalizar el año ya, entonces le digo a mi, "mi mamá me ha dicho un año". Entonces me dijo, "no, tú te tienes que quedar a estudiar, a terminar. Yo le voy a escribir a tu mamá". Y la directora le escribió a mi mamá que yo tenía que seguir. Y de veras, terminé ahí.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> ¿Cuántos años?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Tres.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Tres años. ¿Y dónde vivías aquí en Lima?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Donde Alicia. Con Alicia. Ella me acogió para terminar eso. Y muy bien, muy bien. Y entonces ya terminé y la directora me dice, "¿sabes qué? Ahora, tú te vas a tu tierra", me dijo así, "y tú allá vas a ser cabeza de león, no cola de ratón". Vas a poner tu taller y vas a ser cabeza de león, no cola de ratón. Ya. Llegué, abrí, ahí como la casa de mi mamá era grande, abrí mi salón ahí, para coser para la calle. Tenía, tenía mis clientes. Era soltera todavía, soltera. Y ya. Este, cosiendo, ahí y ya.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> ¿Cómo se llamaba tu academia?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Art Studio.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Art Studio. Oye, esa fue también la época del terremoto en Lima. ¿Qué pasó?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Ay, y en esa época, pues, hubo un terremoto. Estábamos en el segundo piso, esa academia era de quincha. Total, comienza a moverse y se abrían las paredes por partes, un montón, se rajaba. Y una profesora se puso en la escalera, así para que no pasemos. Y yo agarré, para eso estaba mi amiga Hilda. Hilda, no me acuerdo ahorita. Era bien guapa, alta, bonita. Y este, la agarré a Hilda, fui a donde la profesora, le doblé el brazo y bajamos con Hilda. Y nosotros usábamos este taquito siete pues. Taquito aguja. Así hemos bajado. Total, llegamos afuera, y en eso este, caminando, saliendo nomás, un carro se venía. Se venía, yo ya había pasado, pero casi la estampa ahí contra la pared a mi amiga. Felizmente paró y salimos. Enseguida comenzamos a correr porque por ahí nomás está la Plaza San Martín. Caían las tejas y esto, y la la pista se ondulaba. Se ondulaba. Parecía que estás pisando acá y estabas arriba o abajo y se ondulaba. Y en el jirón de la Unión, justo ahí en ese, a ese rato, nos encontramos con la señora Esther Segarra y Machi e Irma.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> ¡No te puedo creer!
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> E Irma. Y ahí, "oye, ¡ay!", cada uno y corrimos, nos fuimos a la Plaza San Martín y ahí había teléfono público. Mi amiga Irma agarra el teléfono para comunicar con su familia, viene otra persona y le quita el teléfono. Ya. No sabíamos, no había pues, no, no hay taxi, no hay nada, nadie te ayuda. Así que a caminar, ella para su lado y yo para, porque en esa época tomábamos este colectivo para ir donde mi hermana Alicia. Y no había, no había. Total, he llegado a las diez de la noche. Que ahí recién he podido tomar un colectivo. Para eso, Norma me esperaba en la puerta de su casa, y Alicia y Alejandro ya salieron a buscarme en los sitios de emergencia, dónde estoy. Total, llego donde Norma, nos abrazábamos, y hay réplicas pues. Total, ya llegó Alicia y ya me, ya nos encontramos. Y nos vamos pues a nos acostamos. Yo dormía en el cuarto con Norma, cada una en su camita. Y este, en una réplica, Norma me cuenta que yo me he elevado, así. El piso sentado y me he elevado. Y todo eso he pasado, Dios mío. Y de ahí yo tengo pánico. Pánico a los temblores, terremotos.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Me consta.
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Me consta. Y te consta, porque yo en la, ya cuando vivíamos acá en La Molina, yo salía volando y llamando a mis hijos, pero yo estaba primero en la calle.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Sí. Muy bien, muy interesante. Entonces, así es como haces tu carrera de corte y confección. Ahora quiero que retrocedamos un poco, ¿en qué momento es que tú conoces a Pepe Romero?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Yo lo conocí a los 15 años.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Okay. Y él tendría unos 22 años, ¿no? Pero al comienzo tú no querías saber nada de él.
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Pero al comienzo yo no quería saber nada de él.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Ahora, cuéntame un poco porque tú sabes la historia de cómo llega él a Oxapampa.
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Bueno, lo llevó el señor Bueno. Que, es lo que él me cuenta, porque yo eso no he visto, pero él me contaba que lo llevó el señor Bueno. Y lo llevó porque su papá era don Lucho Romero.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Claro, y yo más o menos sé que el señor Bueno era cuñado de la mamá de Pepe, de mi abuela, de doña Mila, ¿no? Y él sabía que él era hijo de Lucho Romero. Y por casualidad, Esteban Bueno vivía en Oxapampa. Entonces, cuando se dio la oportunidad, le dijo a mi papá, "te voy a llevar a hacer conocer a tu padre", ¿no?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Sí.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Okay. Ahora cuéntame.
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Este, su papá, don Lucho Romero, tenía su oficina abajo del cine Lindo, habían un un sitio, ¿no? Y ahí lo lleva. No sé si este, le presenta pues. "Este Lucho, acá te traigo a tu hijo". Y don Lucho... eso es lo que él me decía, don Lucho le dio la mano. Le dio la mano, habrá dicho pues mucho gusto, no sé. Pero le dio la mano. Y eso es lo que a él le dolió. Bueno, posteriormente a eso, ya Pepe ya había ido terminando la secundaria. Y era bueno en matemáticas. Así que los sus, se hizo muy rápido de amigos. Y este, los de quinto año de secundaria lo buscaban para que les enseñe. Él les enseñaba matemáticas. Y así pues, muy se hizo amigo de todo el mundo y...
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> ¿Quiénes eran sus mejores amigos?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Sus más amigos, bueno, Chongo Piskulich, después este, habría uno, ahorita no me acuerdo su nombre, pero él no era de Oxapampa. Después, tenía su grupo de buenos amigos. Lázaro Quispe, Aníbal, Javier, Javier García, Ivo Verde, y así. Y rodeado de amigos serios.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Y entonces, él estaba viviendo en un cuarto solo. ¿En dónde?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Él tenía un cuarto. Primero era en una casa de los Raimondi. Después ya se fue a ahí a la casa de Raúl Miller, alquiló un cuarto, o bueno, le dieron un cuarto y ahí estaba él, soltero pues. Y en la casa de Raúl Miller, es donde la notaría. Donde después, ya cuando yo me casé, ya le pedimos a Raúl Miller que nos dé la parte ya que era una, un departamentito. Ahí hemos vivido muchos años.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Okay. ¿Y sabes por qué decidió quedarse él allí en Oxapampa?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> No sé. Le habrá gustado las amistades, el trago y todo eso, la vida pues que hay allá.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Y en esa época él trabajaba con su papá. Ayudaba a su papá. Y ahí él también conoce a sus hermanos.
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Ah, claro. Betty, Betty lo acogió a Pepe. Betty lo acogió. Según él cuenta, que Betty lo acogió a Pepe, que su hermano, y lo llevó a la casa de su papá con la señora Zaida y los demás hermanos. Ahí le invitaban a almorzar. Eso es lo que cuenta Pepe que Betty es la que lo acogió.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Okay. Bueno, entonces teníamos a este muchacho que había llegado a Oxapampa, ¿en qué momento te empieza a buscar?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Yo pues era voleibolista, que esto que lo otro. Y, ¿qué será pues? ¿Qué será que me comienza a buscar, a fastidiarme y esto? Yo no quería saber nada.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> ¿A qué edad, qué edad tenías tú en ese momento?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Tendría pues ya para cumplir 15.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Oh, chiquilla estabas. Y fue por insistencia.
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Oh, la insistencia, insistencia, insistencia. ¿Qué haré al final? Ya pues.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Y era no sé, ¿era coqueto? ¿Era...?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Oye, era, él era, ¿qué habrá?, hablaba poco, hablaba poco. Sí. Bueno, conmigo hablaba. Inclusive, mi hermana Eulalia me decía, "¿por qué te vas a casar tú con ese?", "si ese es un upatángara". "¿Un qué?" "Si ese no habla", me dice. Y de veras que hablaba tan poco que, no sé, lo que a mí me agradó de él era atento, o sea, que si íbamos a un sitio, él me jalaba la silla, me sentaba yo y eso. Eso yo creo es lo que a mí me gustó. Pero que, no. Upatángara.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Así. Oh, mira, qué interesante. Y, entonces, desde que él empezó, tú tenías 15 años, hasta que finalmente ya le aceptaste, ¿pasaron cuánto tiempo?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Mucho tiempo, pero también él no era de lo más fiel. Y yo que perdonaba y perdonaba desde soltera. Que no debería haber, ahora si a mí, si ahora como soy, a mí nadie me ve la cara.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> No, o sea que no era que... era un picaflor.
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Era un picaflor, un gran.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Ah, mira tú. Okay. Y, pero en un momento ya deciden sí ser novios. O sea, tú te has casado a los 24 años. Estamos hablando de casi nueve años que te ha estado persiguiendo.
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Sí.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> ¿Y cuánto tiempo estuvieron de enamorados antes de que se casen?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Un año antes de casarme, fue a pedir la mano. Fue a pedir la mano con su papá, con dos Vallarines, Nico y Chima, más él, porque el cuento allá era que mi papá decía que si vienen con la carabina los voy a correr. O se va a encontrar con la carabina. Y por eso fue con tres. Y a pedir la mano. Ahí aceptaron ya, bien y todo, ¿no? Y total, mi mamá a la semana, antes se hacía así, pues. A la semana, mi mamá me dice, "bueno, ahora alista tus papeles y te casas. Ya, de acá a una semana te casas". Y yo le dije, "no, yo me caso de acá a un año. Así que ya lo bueno. A mí, yo no me caso un año".
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Y un año antes de que fueran a pedir la mano, ¿cuál era la opinión de tus padres de Pepe?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> No querían. Nadie quería. Ni mi papá, ni mi mamá, ni Eduardo, ni Emilio. Emilio le dijo, "tú te portas mal con mi hermana y yo te saco el ancho". "Y tú ya sabes", le dijo. "Así que con mi hermana tú vas a andar bien bonito, porque de lo contrario, ya sabes". Y él sabía lo que era Emilio. Y así pues, no, nunca.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> ¿Y por qué no querían?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Porque era de tomar mucho. Borrachito. Allá todo el mundo pues toma y toma, ¿no? Y este, por eso. Que, "¿por qué te vas a casar? Él no está bien", no, no, no, no querían.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> ¿Y tú por qué estabas tan convencida?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> No sé, yo ya estaba enamorada y yo ya no, ya no, ya no hacía caso a nadie.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Bueno, creo que es un buen momento para cerrar este capítulo. Y seguiremos. Gracias.
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Ya.
          </p>

        </div>
      </TranscriptSection>

      {/* ── Volver ── */}
      <div className={styles.backRow}>
        <BackButton />
      </div>
    </article>
  );
}
