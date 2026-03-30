import Link from 'next/link';
import BackButton from '../../components/BackButton';
import TranscriptSection from '../../components/TranscriptSection';
import styles from './page.module.css';

export const metadata = {
  title: 'Entrevista 1: Infancia y Familia · Memorias de Hassinger',
};

export default function Entrevista1() {
  return (
    <article className={styles.page}>
      {/* ── Breadcrumb ── */}
      <p className={styles.breadcrumb}>
        <Link href="/">Inicio</Link> / Entrevista 1
      </p>

      {/* ── Header ── */}
      <header className={styles.header}>
        <span className={styles.tag}>Entrevista 1</span>
        <h1 className={styles.title}>Infancia y Familia</h1>
      </header>

      {/* ── Video ── */}
      <div className={styles.videoWrapper}>
        <iframe
          src="https://www.youtube.com/embed/eeSdkCK9Af4"
          title="Entrevista 1: Infancia y Familia"
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
            <span className={styles.contextValue}>15 de marzo de 2026</span>
          </div>
          <div className={styles.contextItem}>
            <span className={styles.contextLabel}>Lugar</span>
            <span className={styles.contextValue}>Oxapampa</span>
          </div>
          <div className={styles.contextItem}>
            <span className={styles.contextLabel}>Participantes</span>
            <span className={styles.contextValue}>Iris Teresa Hassinger Verde, Toño (entrevistador)</span>
          </div>
          <div className={styles.contextItem}>
            <span className={styles.contextLabel}>Transcripción</span>
            <span className={styles.contextValue}>Gemini 3.1 Pro</span>
          </div>
        </div>
      </section>

      {/* ── Resumen ── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Resumen</h2>
        <p className={styles.summaryText}>
          En esta primera sesión, Iris Teresa Hassinger Verde nos lleva a sus años de infancia
          en el fundo San Francisco de Oxapampa. Con detalle y ternura, recuerda a sus padres
          Luis y Filomena, la vida familiar con sus once hermanos, las comidas preparadas en
          casa, el ingenio de su padre como carpintero y productor de embutidos, la tienda
          familiar que abrieron en el pueblo, y sus experiencias en el colegio con las monjas
          españolas. También habla de su vena artística — el concurso de canto que ganó — y
          del episodio que truncó su desenvoltura en público.
        </p>
      </section>

      {/* ── Timestamps ── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Capítulos del video</h2>
        <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '1rem', fontStyle: 'italic' }}>
          Los tiempos son aproximados y pueden variar según la grabación.
        </p>
        <ul className={styles.timestampList}>
          <li className={styles.timestampItem}>
            <span className={styles.timestampTime}>0:00</span>
            <span className={styles.timestampLabel}>Presentación — nombre, fecha y lugar de nacimiento</span>
          </li>
          <li className={styles.timestampItem}>
            <span className={styles.timestampTime}>2:30</span>
            <span className={styles.timestampLabel}>La infancia en el fundo San Francisco</span>
          </li>
          <li className={styles.timestampItem}>
            <span className={styles.timestampTime}>7:00</span>
            <span className={styles.timestampLabel}>Los hermanos: familia de doce hijos</span>
          </li>
          <li className={styles.timestampItem}>
            <span className={styles.timestampTime}>14:00</span>
            <span className={styles.timestampLabel}>Las comidas de la casa: pan de maíz, caldo, charque y más</span>
          </li>
          <li className={styles.timestampItem}>
            <span className={styles.timestampTime}>20:00</span>
            <span className={styles.timestampLabel}>El padre: la chacra, el camión y sus mil oficios</span>
          </li>
          <li className={styles.timestampItem}>
            <span className={styles.timestampTime}>28:00</span>
            <span className={styles.timestampLabel}>Los embutidos alemanes, el ahumadero y el chucrut</span>
          </li>
          <li className={styles.timestampItem}>
            <span className={styles.timestampTime}>35:00</span>
            <span className={styles.timestampLabel}>La carpintería: puertas, muebles y accidentes sin drama</span>
          </li>
          <li className={styles.timestampItem}>
            <span className={styles.timestampTime}>40:00</span>
            <span className={styles.timestampLabel}>Recuerdos de hermanos: Eulalia, Emilio, Fernando, Hilda y Laura</span>
          </li>
          <li className={styles.timestampItem}>
            <span className={styles.timestampTime}>52:00</span>
            <span className={styles.timestampLabel}>El colegio con las monjas españolas — la madre Antonia</span>
          </li>
          <li className={styles.timestampItem}>
            <span className={styles.timestampTime}>58:00</span>
            <span className={styles.timestampLabel}>El concurso de canto y el escándalo del baile</span>
          </li>
        </ul>
      </section>

      {/* ── Puntos importantes ── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Puntos importantes</h2>
        <ul className={styles.keyPointsList}>
          <li className={styles.keyPointItem}>
            Nació el 3 de noviembre de 1945 en Oxapampa, en el fundo San Francisco, propiedad de sus padres Luis Hassinger Gálvez y Filomena Verde.
          </li>
          <li className={styles.keyPointItem}>
            Fueron 12 hijos en total: Alicia, Laura, Rosa, Eulalia, Hilda, Fernando, Eduardo, Iris, Emilio y Abel — dos murieron de bebés y Abel falleció a los tres años.
          </li>
          <li className={styles.keyPointItem}>
            De niña sufría de bronquios crónicos, lo que la obligaba a ponerse de arquera en los partidos de fútbol con sus hermanos varones.
          </li>
          <li className={styles.keyPointItem}>
            La vida en el fundo era completamente autosuficiente: ganado, chacra, aserradero, huerto de verduras, cría de cuyes, conejos y cerdos. Solo salían al pueblo a comprar azúcar, harina, sal y galletas.
          </li>
          <li className={styles.keyPointItem}>
            Su padre aprendió a elaborar embutidos alemanes — salchichas, jamón, tocino, carne ahumada, paté y queso de chancho — de su tío Preissing, un alemán casado con su tía Rosa. Construyó él mismo un pequeño ahumadero de aserrín.
          </li>
          <li className={styles.keyPointItem}>
            También fabricaba chucrut de col del huerto. Los descendientes alemanes de las colonias cercanas venían con su baldecito a buscarle cuando anunciaba que tenía listo.
          </li>
          <li className={styles.keyPointItem}>
            El padre era carpintero autodidacta: hacía puertas, camas, sillones, sillas y piezas torneadas. Perdió varios dedos en accidentes con la maquinaria y reaccionaba con total indiferencia ("¡Carajo, no pasa nada!").
          </li>
          <li className={styles.keyPointItem}>
            A los 12 años se mudaron al pueblo, donde el padre construyó una casa de dos pisos con una tienda de abarrotes en la planta baja. Vendían arroz, azúcar, fideos, aceitunas en barril, bacalao importado, mondongo argentino (Anglo) y sus propios embutidos.
          </li>
          <li className={styles.keyPointItem}>
            Era la más traviesa de los hermanos. Le desarmó el reloj a su hermana Laura (y lo tiró al monte), pellizcaba a las visitas por sorpresa y se revolcaba en el suelo para que le hicieran juguetes.
          </li>
          <li className={styles.keyPointItem}>
            Su hermana mayor Eulalia le enseñó a bailar escuchando la radio conectada a la batería del camión del padre.
          </li>
          <li className={styles.keyPointItem}>
            Fernando era el hermano más serio; Emilio era boxeador y líder del grupo juvenil conocido como "las casacas negras". La madre lo respaldó cuando le pegó a un chico que insultó a la familia.
          </li>
          <li className={styles.keyPointItem}>
            Hilda era sordomuda pero podía hablar algo. Era perfeccionista en todo lo que hacía. La familia no hizo lo suficiente para darle herramientas y desarrollar esa capacidad.
          </li>
          <li className={styles.keyPointItem}>
            Las monjas españolas del colegio eran violentas: la madre Antonia tiraba a los alumnos contra la pizarra cuando no sabían dividir. Su prima María Hassinger le devolvió un cachetón y nunca más volvió al colegio.
          </li>
          <li className={styles.keyPointItem}>
            Tenía una vena artística marcada: cantó "La Mujer Andina" en un concurso público y ganó una jaba de Oxacola. Todo el pueblo lo comentó con su madre al día siguiente.
          </li>
          <li className={styles.keyPointItem}>
            Una noche bailó la zampa con Aníbal Pichón en una actuación de La Radio. Las monjas fueron a casa de su madre a quejarse de "baile indecente". El lunes siguiente la monja la humilló frente a todo el alumnado. Ese episodio cortó su confianza para hablar o actuar en público, algo que le ha durado toda la vida.
          </li>
          <li className={styles.keyPointItem}>
            De niña practicaba en un "escenario" imaginario debajo de la escalera de casa, soñando con ser cantante.
          </li>
        </ul>
      </section>

      {/* ── Transcripción ── */}
      <TranscriptSection>
        <div className={styles.transcriptBody}>

          <p>
            <span className={styles.speaker}>Toño:</span> Cámara acción. Hola.
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Hola, ¿qué tal? ¿Cómo está mi hijo?
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Mami, ¿cuál es tu nombre?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Mi nombre es Iris Teresa Hassinger Verde.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> ¿Cuándo naciste?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Yo nací el 3 de noviembre del 1945. O sea de noviembre, ¿no? Del 45.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> ¿Dónde naciste?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> En Oxapampa.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> ¿Quiénes fueron tus padres?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Mis padres fue Luis Hassinger Gálvez y Filomena Verde.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Okay. ¿cómo era Oxapampa cuando tú eras pequeña?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Bueno, cuando yo era pequeña yo vivía en el fundo San Francisco, que era de mis padres. He tenido una vida muy feliz, natural. He vivido con amor, con respeto y, este, siempre hemos tenido el cariño de ambos, ¿no? Siempre nos han... nos han estado ahí mirando, vigilando. Y bien... bien, bien.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Y de tu infancia, ¿qué es lo primero que te acuerdas? ¿Cuál es tu primer recuerdo de infancia?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> La vida natural de allá, que vivíamos. Como tenía varios hermanos, los últimos eran varones, entonces me crecí con los varones. Y ellos, este... jugaban pues las cosas de hombres, ¿no? Que eran las bolitas, el bolero, y todo eso. Yo jugaba lo mismo.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> ¿Y jugaban fútbol por ejemplo?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Fútbol también, pero yo como sufría de bronquios, este, siempre yo me ponía de arquera porque yo no podía correr. Entonces yo decía "yo me voy al arco, yo me voy al arco". Y una vez mi hermano jugábamos con una pelotita chiquita de jebe. Y entonces mi hermano Fernando va para el arco y yo que quiero agarrar la bolita y me patea acá el dedo y esto se me levanta, se me sale del nodo. Y mi hermana Hilda estaba parada en la puerta de la cocina mirando y agarró, corrió y me jaló y volvió a su sitio. Porque yo gritaba, pues, porque mi dedo estaba arriba.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> ¿Y quiénes eran esos hermanos que jugaban contigo en esa época?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Era Fernando, Eduardo, Emilio y yo.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> ¿Y en qué equipo jugabas tú?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> No, ellos se ponían dos para acá y dos para allá, así que era ahí los contrarios.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Okay. Entonces tenemos a Eduardo, Emilio, Fernando, tú, Hilda... ¿qué otros hermanos o hermanas tenías?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Yo mi hermana Eulalia.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> ¿Quién era la mayor?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Este, mi hermana Rosa. Es... cuando yo vivía, porque yo la verdad que a mi hermana Alicia, como era la mayor, cuando yo era pequeña ella ya se... ya era casada y ya vivía en su casa. Entonces la conocía pero así, pues, poco, ¿no? Y a mi hermana Laura yo no la conocía. No la conocía porque ella se casó jovencita, yo creo de 15 años y salió de la casa y se fue y yo nunca la había visto. En eso un día está entrando, porque la casa donde vivíamos era como a una cuadra hacia adentro. Y entonces vi que entraba ella con un bebé, que era Beto. Entonces yo pregunté a mi mamá, le digo, "¿Y quién es esa señora?". Mi mamá me dice, "es tu hermana". "¿Mi hermana?". "Ah ya". Ahí recién la conozco. Yo ¿cuántos años tendría? Pues tendría unos siete, ocho años. Siete... Ya, y ya pues ahí conocí a ella. Eh, Rosa y Eulalia vivían en la casa, eran ya grandes pues, cuando yo era chiquita eran ya casi señoritas. Muy bonitas eran, muy bonitas. Mi papá veía la atención que tenía con todas nosotras. Cuando eran... había fiestas en los aniversarios, en las reuniones que había, y se iba al Centro Social, donde mi abuelo ha sido el primer presidente. Ellos eran los fundadores de ese club. Entonces mi papá y mi mamá se arreglaban y arreglaban a mis hermanas. Las vestían como si fueran unas princesitas porque iban con vestidos largos. Bien... yo las miraba y decía "Pero qué lindas". Yo era chiquita, pues. Ya... y las llevaban, las traían, o sea estaban con ellas en la fiesta.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> ¿Y esas fiestas dónde eran?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> En el Club Social de Oxapampa. Claro, ahora el club es uno nuevo, pero anteriormente había un original que hicieron los colonos.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> ¿Pero en la misma ubicación?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> En la misma, en el mismo sitio. Sí.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> ¿Y ustedes desde dónde iban a la fiesta? ¿O tus hermanas desde dónde?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Desde el fundo San Francisco. De donde vivíamos, que era más o menos un kilómetro... un kilómetro y medio. Y en esa época el camino era puro barro. Barro. Entonces, ¿qué hacían? Se sacaban los zapatos y caminaban a la fiesta. A la hora de entrar al club, había seguro ahí algo para que se lavaban bien los pies y eso y entraban. Sí, así es. Así es como ellos me cuentan porque yo no he andado eso, pero ellos decían "nosotros llegábamos al club y nos lavábamos". Mi papá y mi mamá... Mi papá era muy atento. Este, yo me acuerdo cuando he podido ver y observar ya mayorcita, cuando ya iba... en el club era que las mujeres se sentaban a un lado y los hombres para el otro lado, por donde está la cantina. Una mujer no podía ir a la cantina ni acercarse. Entonces, ¿qué hacían? Los varones venían, te traían algo de tomar y así. Y mi papá agarraba y decía que se hacía una fiesta y hacían viandas. Hacían escabeche, cosas ricas y vendían. Entonces mi papá agarraba y decía, "Bueno, que sirvan a todas las señoras que están sentadas". Y mi papá le invitaba a todas. Bien atento, así. Siempre ha sido muy, muy amable.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> ¿Y era cariñoso con ustedes?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Sí, sí. Jamás, jamás en la vida nos ha puesto un... la ma... o por lo menos yo no he visto a nadie que nos han pegado. No. Nunca. Mi mamá tampoco. Mi mamá era bien humilde, bien buena, no era de buscar líos ni nada. Tranquila, era tranquila. Mmm.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> ¿Cuántos hermanos fueron entonces?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Ya para esa época ya éramos... ya habían nacido doce. Pero dos se murieron bebitos, bebitos. Y uno sí estuvo hasta los tres años y de ahí ya falleció.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> ¿Él era Abel?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Abel. Abel.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Okay, entonces... la hermana mayor Alicia, luego Laura, Rosa, Eulalia, Hilda, Fernando, Eduardo, tú, Emilio y Abel.
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Pero tres años nomás con nosotros. Pero yo me acuerdo de él.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Okay. ¿Y cómo era la dinámica entre ustedes los hermanos? ¿Cómo te llevabas tú con ellas?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Bien, bien, nos llevábamos todos bien. Y cada una tenía su tarea. Eulalia, Rosa... yo no, a mí nunca me han... Entonces mi mamá agarraba, era así: Eulalia tenía su tarea, por decir, una semana dedicarse a la limpieza de la casa. Y Rosa a ver lo de la cocina. Y a la próxima semana ya hacían el cambio. Y todo siempre bien ordenado.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> ¿Y cómo era una comida típica? Hablemos de desayuno, almuerzo y cena.
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Primeramente, para el desayuno, ya mi mamá y ellos todos se dedicaban que tenía que haber pan. Y el pan se hacía de maíz. Ellos ya sabían cómo hacer, rallar el maíz y todo. Luego, este, bueno siempre ha habido, porque teníamos... mi papá ganado. Había cosas, entonces en el desayuno siempre había mantequilla, queso, había leche. Porque hacían hervir una olla grande de leche para que todos tomen su jarra de leche. Y, este... bueno, había esas cosas. Mi papá luego iba a trabajar, a hacer algo, y ya regresaba que tiene que tomar a las nueve otra vez. Café, pan, así. En eso ya se iba y regresaba a las doce en punto, porque no podía ser más tarde, el almuerzo. Ya, comíamos todos. Eso sí, todos teníamos que estar sentados. Después ya el lonche, a las tres de la tarde. Con pan, su cafecito, eso sí. Y la comida, la cena, era a las seis de la tarde. O sea él, dedicados a comer.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> ¿Y tenía que ser algo distinto del almuerzo o se comía lo mismo?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Ah, no. El almuerzo era una cosa y la comida era otra. Porque como éramos tantos una cocinada de almuerzo no alcanzaba, pues. Entonces tenían que volver a cocinar para la noche.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> ¿Y qué platos te acuerdas de esa época que te gustaban de esos almuerzos?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Sí, en general siempre hacían el caldo de gallina. Y de la gallina que sancochaban hacían el escabeche. Siempre había yuca, o arracacha. Pituca yo no he visto mucho, o será que a mí no me gustaba y que no le di importancia. Después, este, había de todo para comer. Había... mi papá en esa época no había pues frigider para conservar las carnes. Entonces como tenía ganado, mataba un ganado y hacían para poder conservar, charque. Le hacían como bistecs grandes, le echaban sal y lo ponían al sol. Y después ya lo almacenaban en costales. Y ya tenían pues para una buena temporada. Con eso, ese charque hacían caldos, hacían segundos, lo que sea. Y este, así. Después había también cuyes que criaban. Cuyes. También había conejos. Y así, pues, todo. Y mi papá también en la parte del costado de la casa... había un buen espacio, ahí el... sembraba las verduras. Ahí había rabanitos, había col, había lechuga, había alverjas. Col china, todo. Entonces todo se cogía ahí. En la chacra más allá había yucas, había arracachas.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> O sea, ¿eran pocas las cosas que tenían que salir a comprar?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Salían a comprar mi mamá con mi papá al pueblo, que decíamos nosotros, salían a comprar el azúcar, la harina... compraban galletas, la sal, todas las cosas así. Pero las cosas que producía la chacra eso se consumía. Me acuerdo que traían... siempre que iban traían un kilo de galleta de soda, porque vendían suelto. Y era bastante porque eso no pesa, entonces en el desayuno pues... la mesa. Pero yo era una dormilona. No me levantaba temprano. Y cuando yo me levantaba, ya no había galletas. Comenzaba a llorar, que por qué no me han guardado galletas... Y así, pues, yo por eso siempre quiero comer una galleta. Me acuerdo...
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Oye, y... ¿a qué se dedicaba tu papá?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Mi papá... mi papá era de todo. Era mil oficios. Hacía la chacra, sembraba frutas, no nos faltaban frutas, teníamos de todo. Él, si tenían que ir a plantar el maíz a la chacra también iba, siempre había gente que ayudaba, que eran de San Chopen, que eran sus compadres. Y ellos se quedaban también en la casa, como que ayudaban, pues, ¿no? Eran sus compadres. Entonces sembraban el maíz, porque tenían que tener bastante maíz, porque tenían que tener para las gallinas, para los chanchos, los cerdos, y así. Entonces cosechaban, cuando ya estaba maduro el maíz cosechaban por sacos y tenían un cuartito y ahí almacenaban. Y ahí mi papá... tenías que desgranar ese maíz y guardarlo ya desgranado. Y mira que en esa época no había pues cosas que hay ahora que tú puedes desgranar. Entonces, ¿qué hacía mi papá? Agarraba las corontas del maíz y hacía un círculo, así. Y lo amarraba bien, bien ahí. Y entonces ahí la mazorca de maíz lo sobaban de esta forma y se desgranaba, así, mira qué...
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> ¿Ingenioso?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Ingenioso.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> ¿Y él vendía algo de lo que se producía en la chacra? ¿Cómo generaba ingresos él?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Yo no he visto eso, yo no he visto eso. No. Ah, y él se compró pues, joven nomás, joven, se compró su camión.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> ¿Su camión? ¿En qué año se habrá comprado el camión? ¿Tú habías nacido?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Yo... recién creo yo, en un... 47. Entonces con eso también hacía unos viajes no sé si hasta La Merced o más allá, no sé. Hacía, ahí llevaba seguro, no, no me percataba qué llevaba, qué traía, pero...
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> ¿Y en qué momento tienen ustedes la casa en Oxapampa?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> No, ya mi papá, este... se casó, y entonces en la casa de mi tío Jorge era yo creo que la casa de mi abuelo. Entonces él vivía en la casa pero en eso había como... unas casas así como graneros, como hacer. Y ahí ellos empezaron a vivir ahí, con mi mamá. Han pasado duro. No tenían nada. O sea, su taza, lo necesario, esto y el otro, y han luchado duro para salir adelante. Y luego ya en la parte que nos correspondió del terreno, en la parte alta, porque como para el cerro era en la parte de bajando para la derecha... ahí hizo mi papá su casa. Ahí vivimos, ahí yo he vivido. Ahí hubo un temblor, dice. Eso me cuenta Alicia. Que hubo, yo creo que era el 40 y no sé cuánto, que hubo un grandísimo que murieron personas en Huancabamba, un terremoto, mejor dicho. Y Alicia me cuenta, me dice "yo quería sacar..." Ya, ya era chiquita pero ya estaba. Emilio también. Entonces Emilio dice era bebé todavía, y estaba en su cunita. Y Alicia había corrido a quererlo sacar. Lo agarraba y no podía, lo soltaba, lo agarraba y lo soltaba, por el movimiento que había.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> ¿Esa casa ya no está?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> No está. Y después de eso yo creo que ya hicieron la casa en la parte baja, a la izquierda. Ahí ya hizo una casa bien, ahí es donde he vivido yo y la mayoría de nosotros.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Okay. ¿Pero la casa del pueblo cuándo es que aparece?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Mira, yo tenía 12 años, yo vivía allá en San Francisco. Entonces mi papá compra una parte del terreno que tenía de los Pérez. Le compró. Entonces ahí dijo "Voy a hacer una casa ahí... para negocio". Y ¿quién lo ha construido? Mi tío Jorge. Una casa grande y este... arriba era de dos pisos, en la parte alta habían hecho tantos cuartos, como 12, 10 cuartos habría. Lo habían hecho. Y en la parte de abajo se puso la tienda. Y ahí es cuando yo vine a vivir ya al, como decíamos, al pueblo. Y ya con la tienda, pusieron la tienda, nos fue bien. Muy bien. Y, este... yo ayudaba ahí. Pero como era una traviesa, estaba ayudando a mi mamá y en eso veía a mis amigas, me escapaba, me iba. Y mi mamá pobrecita ella sola. Y en esa época no había estas bolsas plásticas, que tú puedes... eran bolsas de papel, y este, teníamos que embolsar el arroz, el azúcar, el fideo, la harina, todo en la noche. Porque a la mañana siguiente venían los clientes para poder entregar, nomás. Ese era...
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> ¿O sea vendían cosas de primera necesidad?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Todo de abarrotes. Sí. Hasta los fideos se envolvía, los fideos venían en bolsas según la forma, había un entrefino que la bolsa era grande. Entonces eso se abría, se pesaba el esto y se envolvía. Con ese mismo papel. Y ya. Esta... eso fue muy bien, nos fue bien, la tienda estaba exitosa, pero a la final no sé qué pasó. Yo creo que mi mamá ya se cansó o ya estaba medio mal, y lo dejó, dijo "ya no, ya no quiero". Y lo trasladaron a don Óscar Fernández, la mamá de Cata, Hilda. Y ahí ya quedaron ellos. Mi mamá ya a la parte posterior ya ahí tenía su vivienda, pues. O sea comedor, cocina, todo lo necesario. Mmm.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Oye, hablando un poco más de tu papá. Yo recuerdo que a él le gustaba preparar cosas para comer. ¿Qué hacía él, por ejemplo?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Uh, a mi papá le gustaba la buena comida. Sí. Y entonces, ¿qué hacía? Él tenía una botella, o un vidrio grande, y agarraba rocoto y cebolla. Para hacer su encurtido, eso tenía. Una tremenda. Entonces cuando nos sentábamos a comer, teníamos el encurtido. Bueno, ahí se hacían caldos, cosas buenas. Posteriormente, bueno, antes de ir al pueblo... mi tío Preissing, que era casado con mi tía Rosa, este, él era alemán. Entonces, este, mi papá criaba muchos cerdos, tenía su chiquero que decíamos nosotros. Ahí tenían varios cerdos. Entonces mi papá siempre agarraba uno de ellos y lo engordaba, lo engordaba tanto para que, para que nos den manteca. Porque antes nos cocinábamos con manteca. Entonces ahí se hacía de la grasa, chicharrón chiquito y salían pues dos, tres latas de manteca y ya teníamos pues para una temporada. En eso, como criaba tantos chanchos, mi tío Preissing le dice, "Te voy a enseñar a hacer cosas del cerdo". Ya, ahí comienzan a enseñarle a mi papá a hacer todo del cerdo. Salchichas, carne ahumada, tocino, jamón, paté, queso de chancho, este... relleno. Y así, todo. Todo. Y él hizo su casita, una casita chiquita, cerradita sin ninguna ventana. Entonces al medio ponía para poder ahumar esa carne. Entonces, ¿qué se ponía ahí? Ponía aserrín. Y lo prendía, y este... salía humo, pues. Como el humo no salía para nada, y arriba había puesto alambres así, y tenían sus ganchitos. Y agarraba la carne para ahumar, lo ensartaban ahí, lo colgaban, el paté, la salchicha, el jamón, todo, todo. Y ahí se ahumaba. Ay, qué cosa tan deliciosa, deliciosa, deliciosa. Y así aprendió. Y después nos fuimos a vivir al pueblo, y en la tienda vendíamos. Vendíamos la salchicha, vendíamos la carne ahumada, y así. En la tienda se vendía, cosas. Vendíamos aceitunas. Mi papá llevaba un barril así de grande de aceituna. Eso vendíamos, cosas deliciosas llevaba mi papá para la tienda. Con decirte que llevaba este... esto de pescado que se hace en la Semana Santa...
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> ¿Bacalao?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Bacalao, en lata. Azul. Que no sé si era... eran importados, no sé de qué país. Eso se vendía ahí, mi mamá preparaba ese bacalao, oh, más rico. Después llevaban unas bolsitas de Anglo, Anglo era este... como ah... ¿cómo se hace? ¿Cau cau?
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> ¿Mondongo?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Mondongo. Mondongo argentino en bolsitas. Entonces mi mamá agarraba esas bolsitas y hacía cau cau, o hacía el otro que se come este... mondongo a la italiana.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> A la italiana.
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Mondongo a la italiana, todo, rico preparaba. Preparaba bien rico.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> ¿Y hacía chucrut?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Mi papá, bueno, ahí en ese espacio que te decía que hacía su huerto, ahí sembraba bastante col. Entonces, para eso mi papá hizo él confeccionó un rallador él. Y agarraba la col, ya cuando está buena, y lo rallaba. Y para eso tenía también su barril, su barrilito. Agarraba y la col lo echaba, yo creo que nada más que sal. Y lo tapaba. Hay que fermente. Cuando ya está, no sé cuántos días, ya estaba el chucrut. Mi mamá lo sabía preparar. Y a mi papá le encantaba que le haga. Pero yo nunca... no, no me gustaba.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> ¿Y los alemanes iban a...?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Como sabían, como sabían que mi papá hacía esas cosas, venían de las colonias. Los descendientes de alemán, iban a donde mi papá, todos ya sabían con su baldecito. Y mi papá agarraba y les daba su baldecito. A sí, les invitaba. Ellos ya sabían, "Oh, mi papá también diría, oye, estoy preparando chucrut pa tal fecha", porque a él le gustaba invitar.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> ¿Cuándo empieza él con la carpintería?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Con la carpintería... siempre ha sido que le gustaba. Ya te digo las cosas, y... mira que hacía, yo no sé si alguien le habrá enseñado. Hacía puertas, hacía camas, hacía sillones, sillas, todo. Hasta hacía este, ¿cómo se llama? Torneadas, las maderas torneadas, hacía una cosa bonita. Que yo tengo eh, ya hasta ahora tengo unos cuantos de mi papá.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Algo que a mí me llamaba la atención es que él se ha accidentado varias veces en la carpintería y era como que... como si nada.
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Como si nada. Me acuerdo yo mucho... él se habrá volado tres dedos. Así es. Me acuerdo mucho que yo, cuando estaba haciendo mi casa, allá, este fui y le di, tenía que cortar una madera y llevé la madera. Le digo, "Papá, por favor, córtame esta madera". "Ah, ya", va, prende su máquina, esto, y ¡fa! se vuela un dedo. "¡Ay! Dios mío yo, ¡ay papá!" "¡Carajo, no pasa nada!" me dice. Ya, y ya pues... va, porque tenía su moto, ¿no? Tenía una moto, ahí en la puerta ahí, prendió para ir a que lo curen. Yo que andaba con mi bicimoto en ese rato no podía prender mi bicimoto para seguir a mi papá. No podía, no podía, no podía del puro susto. Ya después ya y ya. Pero para él no pasaba nada, "¡carajo, eso no pasa nada!".
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Qué bárbaro, es impresionante. Bueno, volvamos a tus hermanos. La época que tú eras chica, ¿con quién te llevabas mejor de tus hermanos en esa época? ¿Con quién eras más afín?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Yo era chiquilla, chiquita. ¿Con quién? Con Eulalia. Eulalia me quería desde chiquita. ¿Y qué era? Que nosotros allá escuchábamos la radio, la música porque mi papá sacaba su batería de su carro y lo enchufaba al radio. Entonces ahí teníamos música o también escuchábamos novelas. Y entonces ahí cuando la música, Eulalia agarraba me enseñaba a bailar, Eulalia. Eulalia y yo siempre me he llevado muy bien con Eulalia. Sí.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Y de los chicos, ¿quién era el más travieso?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> De los de... yo creo... yo. Porque, ¿sabe qué? Cuando iba la visita a la casa, allá, cuando vivíamos en el San Francisco... llegaba la visita pues si venía gente de Lima así, nos visitaban, visitaban, pues mis hermanas tan bonitas... Entonces ya pues era... los asientos eran sillas, no habían muebles. Sillas, entonces las entonces venía a la sala y esto el otro. Y Eulalia decía, "Cuídate, cuídate, cuídate ah. Porque esta yendo a pellizcarte". Y de veras, yo, así chiquita, toda solapa, iba a darle un pelliscón, a ella. Así asaltaba...
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Eras tremenda.
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Era traviesa, traviesa...
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> ¿Y quién era el más serio de tus hermanos?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Fernando. Fernando era el más serio, serio. Eduardo, Emilio no. Ah, cuando hacían sus carritos, porque como teníamos aserradero, había madera y desechos. Entonces mis hermanos agarraban y se hacían sus carritos de madera. Y yo quería que me haga mi carrito, yo le decía "me tienen que hacer mi carrito". "No, no". Agarraba, me tiraba al suelo y me revolcaba. Y le tenían que hacer mi carrito. Se iban a la chacra pues con sus pirachos. Yo también quería ir, pues. Yo iba. Pero no tenía bolsillos pues. Agarraba una latita de la de leche, le ponía sus pitas, me lo colgaba y ahí metía mis piedritas para ir dice a matar pajaritos. Como ellos. Una vez ya el Fernando, que era más grande y como había tanta madera ahí botada... que salían pues las cáscaras, todo eso... me dijo "Tú ya no vas a ir a la chacra. Tú nos estás molestando ya. Yo te voy a hacer tu casita". Ay, de veras que me hizo mi casita con los desechos de la madera del aserradero. Me hizo cocina, sala, comedor, el cuarto no creo. Y me dijo, porque ahí en el cerro que nosotros teníamos había un barro rojo, que con eso se hacía, sacaban de ahí para hacer sus cocinas. Entonces él ha hecho la cocinita con ese barro, le ha puesto... como mi papá tenía carro, había muelles. Le había puesto, "Ya, ahí vas a cocinar". Y este, "nosotros vamos a traerte a las pajaritas, a las pichuchancas". Ya. Venía, me traían las pichuchancas, yo los pelaba dice, piernitas por ahí y hacía mi... y a hacer la sopita. ¡Qué sopita! Era una mazamorra. Porque le echaba un montón de fideos. Una mazamorra. Y así comían.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Chiquillos, pues, chiquillos.
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Chiquillos. Claro.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Oye, ¿y hay alguien en tu familia que te marcó especialmente o no?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> No.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Eh... Okay. Colegio. ¿Cómo fue?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Colegio... veníamos desde la chacra. Teníamos que pasar por el cementerio. Y ahí en los árboles eran bien espesos por la carretera que casi lo cubrían así, quedaba oscuro, oscuro. De día y entonces teníamos miedo. Pasábamos corriendo con miedo. Y así, pues, desde ahí veníamos. Ya después ya estuve en el pueblo, ahí ya, de chiquita, también logré estudiar en el jardín con las madres alemanas. Me acuerdo mucho, la Madre Corona ha sido mi profesora en el jardín de infancia. Y como era traviesa, pues, me agarraba de esto y me alzaba. Y así. Yo ya después ya primaria... Primaria sí pues con las monjas, pero ya con las españolas, porque ya a las alemanas ya las habían sacado. Estudiaba con las españolas. Tengo fe.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Volviendo al colegio. ¿Qué tal la experiencia con las monjas españolas en el colegio?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Pésimas, pésimas, pésimas. Yo no he sido muy buena en los estudios. Sí, no, o sea, no ha habido alguien que me ayude a poder entender y comprender, ¿no? Entonces yo no sabía dividir. Yo estaba en quinto año de primaria. No sabía dividir, y habíamos sido un grupo, éramos varias que no sabíamos. Y la monja sinvergüenza, la madre Antonia se llamaba. Nos saca a la pizarra. Y como no podíamos, estábamos distraídas, agarraba así y ¡pua! nos tiraba contra el pizarrón. Nos tiraba... Ah, qué dolor. Y tampoco, qué nos íbamos a aprender. Nada. Y para eso tenía a mi prima hermana María Hassinger, que también era mayor que yo pero estaba estudiando el quinto de primaria. La saca a ella y ella tampoco sabía dividir. Y la manda contra la pizarra. Ella dio la vuelta y la cacheteó y le sacó sus tocas, le tiró su katana como debe ser. ¡Cómo debe ser! Porque esta era muy abusiva. Y... este, nosotros en el asiento aplaudiendo. Y ella agarró y se fue para su casa y nunca más volvió al colegio. No estudió, nunca más volvió al colegio. Imagínate. Por eso yo... Y las monjas, había una de Sor Covadonga también, era otra mala, mala, mala... Las españolas han sido muy malas.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Yo me acuerdo de un tema relacionado con una actuación que tuviste tú allá. ¿Cómo fue?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> ¡Ah, sí, pues! Tenía... yo terminé ya quinto de, no, primaria. Terminé. Y en eso había un sitio que le llamaban La Radio, que transmitían y este... hacían actuación. Y como a mí toda la vida me ha gustado actuar, he sido muy desenvuelta y todo. Y entonces este, con Aníbal Pichón practicamos para bailar la, la zampa. Ya, y fuimos a la actuación y las monjas estaban ahí sentadas adelante. Oye, y eso se acordó un joven que me llamó la otra vez, yo no me acuerdo, Tacuri dice. Me llamó, de Estados Unidos me llamó. Y me dice, "Señora Iris, ¿usted es Iris Hassinger? Sí. Yo soy, yo he sido muy, muy, muy amigo de Emilio. Y todo sabía de Emilio y, y también de mí". Y él me hace de "mire, él se acordaba de esa situación". Me dice, "¿Me acuerdo que tú bailaste y total...?" "Ay, con las monjas" "Sí, con las...". Las monjas sentadas adelante comenzamos a bailar con Aníbal, pues a mover, como debe ser. Se levantaron y se fueron. Y, ¿a dónde se fueron? A tocarle la puerta a esa hora. Ahora ya serían nueve de la noche, para ese rato en esa zona era ya tarde, ¿no? Entonces le tocan a mi mamá y le dicen, "Señora, ¿cómo es posible que le deje bailar a Iris, un baile indecente? ¿Y con qué ropa?" ¡Ay! Total, yo inocente después ya voy a mi casa. Le toco a mi mamá, me abre. Me dice, "Oye, ¿qué has hecho? ¿Has bailado, dice?" "Sí, mamá, he bailado, esto..." "¿Y con qué ropa?", me dice. "Con esta que estoy puesta". Que mi mamá me había hecho. Era un cuellito ojal, talle largo y hasta acá, bajo la rodilla. "¿Y con un baile indecen...? Mamá, con esta ropa, ¿y cómo dicen las monjas que con este... un baile indecente?". Ya. Y este... ya, pasó eso. Mi mamá no fue a aclarar a la monja, porque debería haber ido. Pero no fue. Entonces llegó el lunes, porque eso fue un sábado. Llegó el lunes, todo el colegio de primaria se formaba en el patio. Y la monja salió y dijo "que no vayan a ser como Iris Hassinger, que ha salido del colegio y bailando un baile indecente pa todo el cole..." Entonces yo me enteré de eso, y desde ese día, yo nunca más he sido así, extrovertida de ir a presentarme a hablar ante el público... yo no tenía problemas, yo podía hablar con cualquiera, pero me cortó. Y eso me dura... hasta ahorita me dura. Porque yo lo menos que quiero evitar es hablar en público. Yo que he sido tan desenvuelta, porque hasta había un cine y ahí había un concurso de canto. Y este... dijeron van a hacer un concurso, ahí concursaron un montón, entre esos yo. A cantar, dice, salí a cantar. Total, me canté, dice, La Mujer Andina, ¡bueno! Y canté, bailé, ay, qué hace de ese nivel. Total, ganadora yo. Gané. ¿Y qué era mi premio? Un... una jaba de Oxacola. Ese era mi premio. Ya, me dieron, total, como teníamos tienda, y al otro día ya fui en la tienda. Iban cuántas personas a decirle a mi mamá, "¡Ay, señora! ¡Felicitaciones que su hija ha cantado, que no sé qué!" Mira, todo lo que yo hacía, pero estas monjas... eso sí, hasta ahora yo les tengo cólera. Porque me... o sea, ¿cómo es uno?
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Claro, se notaba una vena artística que has recuperado últimamente también, ¿no? Porque el hecho de que hagas pintura, ¿no?, es un poco tomar eso que ya tenías. Pero sí... efectivamente cómo...
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Exponerme al público, no me gusta. No me gusta.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> ¿Qué te dijeron tus amigas en ese momento?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> No, no me acuerdo. Pero yo ahí pienso, digo que mi mamá debería haber ido a quejarse, pero también era... mi mamá era muy calmada y así.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> ¿Qué querías ser cuando fueras grande?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Yo en esa época que yo cantaba... yo quería ser artista. Cantante, pero... y para eso en la casa, en el pueblo había un sitio que se hacía la escalera, la escalera ¿no? Entonces acá había un vacío, y ahí era el comedor y este... entonces yo me metía ahí y salía de ese pueblo "Ahora voy a cantar", y cantaba como si estaba en mi escenario. Sí, pero ya pues, ¿ves? Qué pasó.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Qué pena que las monjas hayan truncado eso.
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Fue.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Eh, hablemos un poco más de tus hermanos. ¿Cómo era Eduardo, por ejemplo?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Eduardo ha sido muy bueno, pasivo. Sí, buena gente. Bien, bien, bueno. Cariñoso, bueno. Listo para ayudarte. Sí. Con Emilio... que era mi menor. Muchas veces nos peleábamos duro, peleábamos. Yo un día en el segundo piso de la casa donde vivían con mis padres todavía, chicos, ¿no?, chicos. Nos agarramos a pelear. Pero nos dimos de alma, los dos, los dos. Y para eso en ese cuarto habían dos camas. Nos hemos pegado tanto que se echó a dormir allá y yo allá. Y de ahí nació el respeto. De ahí ya nacía ya este... nos queríamos, nos después de eso nos queríamos demasiado. Yo me lo veía porque este era boxeador pues. Ya estaba atenta a dónde puede estar, cómo es... y así. Y, un día me metí en... había, pues, por ahí nomás era el mercado y habían cantinas ahí, y en eso siento que están peleando. Y yo salía del circo con Cata e Hilda, porque íbamos al circo porque a de vez en cuando llegaba el circo.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> ¿Y él qué edad tendría?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Él pues ya tendría 17, 18 años. Ya... sí. Y entonces siento que pelean y yo paro las orejas y ya estoy llegando a la casa, y le agarro, no les dije nada a Hilda ni a Cata, comencé a correr a ese sitio. Y entro... Emilio con el hombre se pelean, el hombre tenía una botella que la había roto, para esto... Y mi hermano con una silla, estaba así, defendiéndose. ¡Y yo vi eso y yo me metí, al medio! Y decía, "¡Ya no, ya no, ya no, no, ya no, ya no, ya no, ya no!" Y los dos pararon. Y de ahí ya el hombre botó el otro también, Emilio me abrazó, nos fuimos llorando a la casa. Los dos.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Porque de alguna manera tú le querías ayudar, atenta a Emilio.
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Sí, pues, y Emilio era un personaje en esa época.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Así es. Porque ya me acuerdo que se hablaba de los ¿Casacas negras? ¿O camisas negras?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Casacas negras, no, creo.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Creo que sí, ¿no? Y eran peleadores.
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Peleadores. ¿Con quién se juntaba él en esa época? El primo Emilio Hassinger, el otro Emilio, eran como uña y mugre. Esos dos eran así, por eso siempre cuando las peleas ya, sabían quiénes eran los Emilios. Ay, de Emilio una vez estamos en la tienda con mi mamá atendiendo, en eso viene la señora Benítez. Una señora que vivía por ahí y tenía sus hijos. Entonces uno de esos hijos... bueno, la señora llega a la tienda a quejarse, a decir que el Emilio le ha pegado a su hijo. Entonces mi mamá le llama a Emilio, "¡Emilio, ven acá! Este, ¿qué cosa has hecho? ¿Le has pegado al chico?" Entonces el Emilio dice, "Sí, mamá, le he pegado". "¿Y por qué?". "Porque ha dicho, 'concha tu madre'". "¡Y eso no va a decir a mi madre! Por eso le he pegado". Entonces mi mamá le dice... "¡Está bien!" Y la señora se quedó...
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> ¿Y de los otros hermanos? No hemos hablado de Rosa mucho. ¿Qué te acuerdas de Rosa?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Rosa... Rosa era pues, buena, buena. Bueno, también buena, tranquila, bien tranquilita era. Callada, y así. Porque otra, no, como me cuenta la Pichona, la Aída Pichón. Me dice, su mamá sí, cualquier cosa iba y los encaraba y le gritaba a la monja. Pero mi mamá no pues. Y la mala costumbre era de que se cosía, alguna cosa que se ha roto, se cosía. Y entonces, terminaba la costura y la aguja prendía en la cortina. Y como seguro esa semana le tocaba a Rosa lavar la ropa, agarra la cortina a lavar la ropa. Y se rompe, la aguja le entra y se rompe, y se esto. Han volado al hospital, porque decían que esa aguja podía correr con la sangre y llegar ahí, y se muere. Y los ya la sacaron, todo, pero... eso me acuerdo bastante.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Alicia. ¿Cómo era tu relación con Alicia?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Alicia. Como te digo, ella ya, este... ya se había casado, no, no tenía de chica, no he tenido mucha convivencia allá, en Oxapampa. Rosa y Eulalia. Laura tampoco, porque ya estaba casada.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> ¿Y Laura? La travesura que le hiciste.
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Ah, Laura. Porque a la traviesa, pues. Llega pues... con su bebito, que es mi hermano. En eso dice "me voy a lavar las cosas", porque éramos un montón y ella dijo "yo voy a lavar las cosas". Se saca su reloj. Va, sí. Se saca su reloj. Lo pone a un lado para lavar las cosas. Yo no sé por qué, era una traviesa, por qué le agarré, a la escondida y me lo llevé y me escondí y lo desarmé. Porque decía "ahí adentro deben estar unos chiquitos, chiquitos". La... lo desarmé el reloj. Y que quería armarlo, no podía. No podía pues. Y entonces agarré y lo tiré así pa allá por el monte. De ahí Laura buscaba, "¿dónde está mi reloj?, yo he dejado acá que mi reloj". Y yo no he visto nada, yo no he dicho nada. ¡Oye, era terrible yo!
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> ¿Y le contaste alguna vez a Laura o no de esa travesura?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Yo creo que sí, pero no sé. Pero yo le boté, yo le desarmé su reloj.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Oye, y... ¿Hilda?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Hilda, Hilda pues, ella miraba nomás las travesuras, todo ella estaba, pero siempre observándonos.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Ella era sordomuda.
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Sordomuda. Pero no era tan muda, ni tampoco porque podía hablar. Si le hubiéramos incentivado más, ella se hubiera valido bien. Porque...
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> ¿Por qué crees que no... los abuelos no se esforzaron más en que ella se pudiera adaptar a tener una vida más normal? ¿Por qué crees?
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> No sé, mi mamá era la que, según dicen, que mi mamá es la que ha tratado de ocultarla o qué será. Porque ella no iba, no iba tanto, no iba tanto. A Gini la seguía, con su cuadernito y su lápiz, para que le enseñe, dice. Le enseñaba. La Gini a veces dice como era también... dice, "sí, le hacía", pero como ella también quería jugar se iba. Mira pues... Bueno. Y era, este, Hilda era perfeccionista. Oh. Perfeccionista, tenía que ser perfecto, todo. Lo que va a hacer, perfecto.
          </p>

          <p>
            <span className={styles.speaker}>Toño:</span> Bueno, creo que para una primera sesión está perfecto. Ya luego continuaremos en otras sesiones a hablar de otros temas diferentes. Gracias.
          </p>
          <p>
            <span className={styles.speaker}>Iris:</span> Está bien. Gracias.
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
