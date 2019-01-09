// import {cont1} from '/js/datos.js';
// import { cont1,cont2,cont3,cont4 } from '/js/datos.js';
var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },

    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.iOS() || isMobile.Opera() ||
            isMobile.Windows());
    }
};

var cont = $('.contenido');
// $.getJSON('js/data.json')
var cont1='<div class="A"> <div class="caratula"><img class="imgCartatula" src="img/caratulas/macro.png" alt=""></div><h2 class="h2principal">Análisis del macro entorno</h2> <p>Desde el punto de vista macro, el sistema financiero en Argentina presenta un panorama particular, en comparación con otros países del continente. Parte impxortante de la población del país permanece aislada del sistema bancario, por diversas razones, entre las que pueden destacarse la falta de tradición en esta clase de manejo financiero personal y familiar, las metodologías de trabajo bajo relación de dependencia, la informalidad en diversos sectores económicos, la evasión de impuestos, así como la desconfianza de la generación de adultos y adultos mayores, sobre las entidades bancarias. Sin embargo, a medida que avanzan y se tecnifican todos los procesos de la vida humana, las nuevas generaciones van incorporándose con fuerza a la bancarización, y además exigiendo servicios que se adapten a un estilo de vida dinámico y en el que tiempo es ampliamente valorado. A continuación, se presenta un análisis de los factores políticos, sociales, económicos y tecnológicos, que pueden influir en la viabilidad del proyecto que nos ocupa.</p> <h2 id="politico">Factor Político</h2> <p>Venció el plazo que fijó la Administración Federal de Ingresos Públicos (AFIP) en febrero de 2017 para aplicar la obligatoriedad del uso de medios electrónicos como formas de pago a comercios, empresas, profesionales y monotributistas que vendan al consumidor final. Esto implica que los comercios estarán obligados a aceptar tarjetas de débito como medio de pago, así como también tarjetas prepagas no bancarias u otros medios equivalentes en cualquier compra que supere el monto de diez pesos. Las multas para aquellos que incumplan con la normativa van desde los $300 a los $30.000, además de posibles clausuras de entre tres y diez días.</p> <p>El BCRA modifica normas de plazos fijos y aumenta encajes bancarios. La autoridad monetaria autorizó a los bancos a pagar intereses de plazos fijos de forma mensual, en lugar de hacerlo al final de la colocación. Además, subió los encajes en tres puntos desde octubre.</p> <p>Para reducir la brecha de financiamiento, se anunció el “Fondo Mujer” por U$S 200 millones para las empresas de América latina y el Caribe. Se estima que hay un potencial de U$S 98 mil millones en la región en proyectos. El financiamiento estará a cargo de BID Invest (la rama del sector privado del Banco Interamericano de Desarrollo) y la Corporación de Inversión Privada en el Extranjero (OPIC, por sus siglas en inglés). Los fondos alcanzarán a mujeres emprendedoras, empresas con una participación significativa de mujeres en puestos de liderazgo y también a empresas que generan empleos o productos de consumo para las mujeres. </p> <h2 id="economico">Factor Económico</h2> <p>Las variables económicas del país, han sufrido movimientos particulares en los últimos meses. Analistas económicos esperan que la inflación cierre el 2018 en 44,8% y alcance el 31,9% en los próximos doce meses, según el Relevamiento de Expectativas del Mercado (REM) de septiembre realizado por el Banco Central (BCRA), mientras que esperan una mayor recesión y un dólar a $ 43 para fin de año. Los últimos datos oficiales indican que entre enero y julio la inflación fue de 19,6%. Una canasta de consumo valía antes $100, en julio $115,1. En lo que va del año, los fondos internacionales atesorados en la entidad bajaron US$ 3.612 millones.</p> <p>La Argentina y el Fondo Monetario Internacional (FMI) anunciaron un nuevo acuerdo que eleva en u$s 7.100 millones el monto original de u$s 50.000 millones firmado en junio, a la vez que adelanta desembolsos por u$s 19.000 millones para lo que resta de este año y el 2019. Medidas económicas de ajustes, elevado costo en los servicios básicos, y un proceso inflacionario perceptible para el ciudadano común, nos coloca en un escenario económico complejo, y que impacta directamente en los hábitos de consumo del ciudadano.</p> <h2 id="social">Factor social</h2> <p>La empresa consultora Pwc, realizó para el año 2017, un análisis sobre los clientes bancarios, que llevó por título, “¿Qué buscan los clientes de servicios financieros en la era digital?”. Entre los datos obtenidos, pueden destacarse, por ejemplo, que, para el año señalado, el 50% de las personas bancarizadas a escala mundial, prefiere el uso medios digitales para la interacción con sus bancos. A quienes pertenecen a esta nueva tendencia, se les denomina omnidigitales, y presentan un incremento importante, sin consideramos que en 2012 solo el 23% prefería el medio digital. Estos cambios en el consumo de servicios bancarios van de la mano de la fuerte inserción de los smartphones. Según el estudio el 81% de los clientes bancarios tienen celulares inteligentes. </p> <span style="display:block;text-align: center;"> <img src="img/macro/image1.png" alt=""> <p><em>Fuente: ¿Qué buscan los clientes de servicios financieros en la era digital? PWC. (2017</em>)</p> </span> <span style="display:block;text-align: center;"> <img src="img/macro/image2.png" alt=""> <p><em>Fuente: ¿Qué buscan los clientes de servicios financieros en la era digital? PWC. (2017)</em></p> </span> <p>Según gráficos expuestos en el mencionado informe, los clientes bancarios están más familiarizados con la tecnología y con experiencias que le solucionen los trámites con más rapidez. </p> <span style="display:block;text-align: center;"> <img src="img/macro/image5.png" alt=""> <p><em>Fuente: ¿Qué buscan los clientes de servicios financieros en la era digital? PWC. (2017)</em></p> </span> <p>Como se mencionó con anterioridad, un tema digno de consideración es la baja bancarización de la población argentina, en comparación con otros países del continente. Informalidad en la economía, evasión de impuestos, escasas sucursales bancarias en zonas menos favorecida, e historial de desconfianza en el sistema bancario, son factores que influyen directamente en esta realidad. A continuación, se presentan datos de una encuesta realizada por la Universidad de Palermo y la consultora Voices, y publicada por el Diario Clarín, en el que se reflejan datos importantes que sustentan el planteamiento realizado.</p> <span style="display:block;text-align: center;"> <img src="img/macro/image3.png" alt=""> </span> <span style="display:block;text-align: center;"> <img src="img/macro/image4.png" alt=""> <p><em>Fuente: Diario Clarín (en base a informes de Universidad de Palermo y Voices) (2017).</em></p> </span> <p>Un 46% de los argentinos dicen tener cuenta bancaria, pero los que hacen pagos con esas cuentas son menos. En la encuesta mencionada, se revela que sólo un 41% de los argentinos expresó poseer o utilizar tarjetas de débito (9 de cada 10 bancarizados) y que sólo un 24% de la población tiene o usa las de crédito (la mitad de los incluidos).</p> <h2 id="tecnologico">Factor Tecnológico</h2> <p>Actualmente la evolución de los avances tecnológicos genera cambios de paradigmas continuos. Esto impacta directamente en las decisiones estratégicas de las empresas, que se tornan ampliamente competitivas. En este contexto las instituciones financieras buscan ser partícipes de este nuevo mercado, implementando tecnologías innovadoras orientadas al consumidor. Según una encuesta desarrollada a nivel internacional por KPMG, 7 de cada 10 CEOs encuestados manifiestan que planean incrementar la inversión en su infraestructura digital, nuevas tecnologías emergentes e innovación en los servicios ofrecidos por las entidades que lideran. Esperan que en los próximos tres años una disrupción en el sector bancario como consecuencia directa de la innovación tecnológica. Algunos sucesos dentro del campo teconológico, suman a la viabilidad de la propuesta en cuestión:</p> <p>Desde el año 2014, el pago contactless ha avanzado exponencialmente. Según las previsiones presentadas por <a href="https://www.gsma.com/identity/wp-content/uploads/2013/12/Mobile-Identity-Global-Review-2013.pdf">GSMA</a>, se estima que este año los pagos globales a través de NFC asciendan a 1.300 millones de dólares Sin embargo, esta forma de pago es sólo una de las muchas aplicaciones que parece tener NFC. El fundador de <a href="https://www.bbva.com/es/biohacker-implanta-chip-nfc-pulgar-llevar-cartera/">Biofoundry </a>se instaló el año pasado un chip dentro de su pulgar para poder pagar sin llevar cartera, ni móvil.</p> <p>Credit Suisse Group AG anunció que facilitará que sus acaudalados clientes en Singapur y Hong Kong se comuniquen con sus banqueros privados, a través de la integración del chat de negocios de Apple en su plataforma digital. Los clientes del banco con sede en Suiza podrán usar el servicio de Apple Inc. Para obtener información sobre los balances de sus cuentas y carteras de inversión, o el estado de sus transacciones, dijo la firma financiera en un comunicado el martes. </p> <p>La banca europea está cada vez más preocupada por el avance que las bigtech están haciendo en materia financiera. Basta fijarse, por ejemplo, en Google que, a través de Wallet, permite efectuar pagos o hacer transferencias a una cuenta y que, además, tiene licencia bancaria en varios países. Google es un ejemplo, como lo es también Facebook, que ya cuenta con licencia bancaria en Irlanda (lo que le permita operar en Europa), en Estados Unidos ya trata de negociar con algunas entidades para permitir que sus clientes puedan consultar el saldo bancario a través de su cuenta en la red social. A estas dos grandes compañías podríamos sumar otras como Apple o Samsung. Grandes tecnológicas que, poco a poco, dan pasos para acaparar servicios que hasta ahora ofrecían sólo las entidades financieras, lo que constituye un reto y necesidad de innovación para los bancos tradicionales.</p> </div>';

var cont2=' <div class="A"> <div class="caratula"><img class="imgCartatula" src="img/caratulas/micro.png" alt=""></div><h2 class="h2principal">Análisis del micro entorno</h2> <p>En Argentina la tecnología contactless está habilitada de forma legal desde el año 2012. Por el momento son pocos los comercios que brindan este servicio. MasterCard es la empresa que tiene esta tecnología en sus tarjetas y los distribuye por medio de los siguientes bancos: Galicia, Itaú, HSBC, Superville. El monto máximo para los gastos sin pin es de ARS 1000.</p><span style="display: block;text-align: center"><img src="img/micro/image1.png"/><img src="img/micro/image2.png"/></span> <p>Las entidades bancarias que constituyen la competencia directa de Banco Galicia, no cuentan con esta nueva forma de ofrecer el servicio contactless, lo que constituye una oportunidad para diferenciar al banco, por un servicio novedoso. La revisión documental en torno al uso de los diversos dispositivos contactless, debe orientarse entonces a la forma en que se utiliza el mismo servicio en otros países. El banco español Caixa Bank, presenta la pulsera para su uso en momentos informales como salir a tomar algo o a hacer una actividad física. En este caso se ofrecen de forma gratuita.</p><span style="display: block;text-align: center"><img src="img/micro/image3.png" /></span><p>Este banco ofrece la pulsera de forma gratuita por un año, luego del cual se cobra un abono de 10 euros por año. Si la pulsera supera el importe de 20 euros se pide el ingreso de un pin.</p> <h2 id="competencia" >Competencia</h2> <p>Los competidores directos son los bancos que operan en la República Argentina. Dentro de estos los principales según encuesta realizada por Rankia.com a los usuarios son los siguientes </p><ol ><li><p>Banco Santander Rio (36,4%)</p></li><li><p>Banco Galicia (31,9%)</p></li><li><p>BBVA Banco Francés (26,6%),</p></li><li><p>Banco Nación (23,5%) </p></li><li><p>Banco Macro (14,8%)</p></li></ol> <p>Los servicios que ofrecen son similares lo cual significa que tienen poca diferenciación entre sí. Los servicios para personas y premium son los siguientes: cuentas, tarjetas, préstamos, inversiones, seguros y comercio exterior. Para empresas, pymes y agro tenemos los siguientes: cuentas, cobros y pago, financiación, inversión y convenios. </p><p> Como competidor sustituto podrían mencionarse a las empresas que ofrecen servicios de pago digital como Paypal y Mercado Libre. Éste último, con Mercado Pago puede tomarse como competidor indirecto ya que ofrece ciertos servicios similares, como financiación, créditos y tarjetas para personas no bancarizadas.</p> <h2 id="proveedores" >Proveedores </h2> <p>En este caso tenemos empresas de servicios IT para mantenimiento de plataformas, empresas que brindan servicios de internet, de hosting para alojar webs y aplicaciones del banco. Los niveles de negociación son medios a bajos dependiendo el área. También tenemos como proveedores las empresas Visa y MasterCard, que ofrecen los servicios de transacción para las tarjetas. Estas dos tienen un gran poder de negociación ya que son las principales empresas a nivel mundial que dan estos servicios. </p><p>Posnet está distribuyendo sus nuevas terminales con esta tecnología en los locales desde el 2017. El cambio total tiene un tiempo de demora para los dos próximos años. </p> <h2 id="competencia" >Análisis de competencia</h2> <span style="display: block;text-align: center;"> <table><colgroup><col ><col ><col ><col ><col ></colgroup> <tbody> <tr> <td><p>Empresa</p></td> <td><p>Servicios ofertados</p></td> <td><p>Propuesta de valor</p></td> <td><p>Percepción de los clientes</p></td> <td><p>Sitio web</p></td> </tr> <tr> <td><p>Banco Santander Río</p></td> <td><p>Tarjetas, cuentas créditos, seguros, inversiones.</p></td> <td><p>Sistema de puntos canjeables utilizando la tarjeta de débito.</p> <p>Aplicación Santander Río</p> <p>Atención especial PYMES</p> <p>333 sucursales y más de 2.5 millones de clientes.</p></td> <td><p>Entidad bancaria sólida.</p></td> <td><p><a href="http://www.santanderrio" >www.santanderrio</a>.com.ar</p></td> </tr> <tr> <td><p>Banco Provincia</p></td> <td><p>Tarjetas, cuentas, créditos, seguros, inversiones.</p></td> <td><p>Banca agropecuaria</p> <p>Servicio de banca por internet</p></td> <td><p>Banco más pequeño.</p> <p>Diferencial orientado al sector agroindustrial</p></td> <td><p><a href="http://www.bancoprovincia" >www.bancoprovincia</a>.com.ar</p></td> </tr> <tr> <td><p>Banco Macro</p></td> <td><p>Tarjetas, cuentas, créditos, seguros, inversiones</p></td> <td><p>Aplicación del banco.</p> <p>Sistema de puntos.</p> <p>Sección Selecta para clientes VIP.</p> <p>Opera desde 1978, cuenta con 481 puntos de atención</p></td> <td><p>Busca diferenciarse en atención y cercanía con el cliente.</p> </td> <td><p><a href="http://www.macro" >www.macro</a>.com.ar</p></td> </tr> <tr> <td><p>Banco Francés</p></td> <td><p>Tarjetas, cuentas, créditos, seguros, inversiones</p></td> <td><p>Servicios Premium, empresas, PYMES, y agroindustria.</p> <p>Aplicación Francés Go</p></td> <td><p>Banco sólido.</p></td> <td><p><a href="http://www.bbvafrances" >www.bbvafrances</a>.com.ar</p></td> </tr> </tbody> </table> <p><em>Fuente: Elaboración propia. (2018)</em>.</p></span> <p>Dentro del panorama financiero privado, son varias las entidades bancarias que cuentan con un fuerte posicionamiento en el mercado argentino. Banco Galicia destaca entre los bancos mejor rankeados del país, en ítems de evaluación como la calidad de las sucursales y la atención al cliente. A continuación, se presenta una tabla con datos sobre el crecimiento de los principales bancos del país, según datos obtenidos a través de Rankia Argentina, comunidad financiera.</p> <span style="display:block;text-align: center;"> <table style="margin: 0 auto;"><colgroup><col ><col ><col ><col ><col ></colgroup> <tbody > <tr> <td><p>Banco</p></td> <td><p>Patrimonio</p></td> <td><p>Crecimiento</p></td> <td><p>Sucursales</p></td> <td><p>Atención de usuario</p></td> </tr> <tr> <td><p>Banco Santander Río</p></td> <td><p>Activos por $ 45.823 millones.</p></td> <td></td> <td><p>1er lugar</p></td> <td><p>36.4%</p></td> </tr> <tr> <td><p>Banco Provincia</p></td> <td><p>Activos por $ 44.273 millones</p></td> <td></td> <td></td> <td></td> </tr> <tr> <td><p>Banco Galicia</p></td> <td><p>Activos por $ 43.324 millones.</p></td> <td><p>58.06%</p></td> <td><p>2do lugar</p></td> <td><p>31.9%</p></td> </tr> <tr> <td><p>Banco Macro</p></td> <td></td> <td><p>59%</p></td> <td></td> <td><p>14.8%</p></td> </tr> <tr> <td><p>Banco Francés</p></td> <td></td> <td><p>56.65%</p></td> <td><p>3er lugar</p></td> <td><p>26.6%</p></td> </tr> </tbody> </table> <p><em> Fuente: Elaboración propia en base a datos de Rankia Argentina (2018).</em></p></span> <p>En este sentido, podemos concluir que, si bien Galicia no es el líder de mercado, está entre las tres primeras entidades financieras valoradas positivamente. Diseño de políticas y planes de incentivo al consumo, mejora constante de la experiencia de cliente, adecuación y modernización de sucursales, y vanguardia tecnológica, hacen que Banco Galicia tenga un crecimiento sostenido en las preferencias de consumo de los usuarios. Apostando a una innovación tecnológica para el mercado argentino, como la planteada en el presente proyecto, el Banco puede fortalecer y ampliar su posicionamiento, como una empresa que prioriza la experiencia del usuario, y la practicidad y comodidad de sus procesos financieros.</p><h2 id="clientes" >Análisis de clientes</h2> <p>Sobre el análisis de los clientes, tenemos dos aristas a considerar. En primera instancia, y desde una perspectiva global, tenemos como realidad que parte importante de la población argentina no está bancarizada. La ya señalada encuesta nacional de la Universidad de Palermo (UP) y la consultora Voices! publicada en la versión electrónica del Diario Clarín, en fecha 31/05/18, expone que un 52% de la población mayor de 18 años reconoce no tener siquiera una caja de ahorro básica en un banco. Menciona además que el promedio es bastante más alto entre las personas de menores ingresos, llegando a un 57%. Ahora bien, dentro de la población bancarizada, Banco Galicia ocupa un lugar importante, manejando un promedio de 2.5 millones de clientes, entre quienes se cuentan personas naturales y jurídicas. En este sentido, se puntualiza el análisis de clientes, entre las personas con un determinado perfil:</p><p>El cliente potencial de la pulsera Contactless de Banco Galicia, es aquella persona que posea cualquiera de los servicios del banco, y sea usuario asiduo de la tarjeta de débito. Se ubican los potenciales clientes en el rango de 18 a 40 años, enfocándonos en personas jóvenes, activas, trabajadores o estudiantes, deportistas, o con un estilo de vida enfocado en las experiencias y el disfrute. La pulsera otorga la posibilidad de sustituir a la tarjeta de débito, eliminando el uso del plástico, de claves, firmas y tickets, por lo que la propuesta puede ser permeable en personas con buena predisposición a las nuevas tecnologías, y a la incorporación de dispositivos nuevos en su cotidianidad.</p><p>En este sentido, la ventaja competitiva de la propuesta se define hacia el ámbito de la diferenciación. Banco Galicia sería la primera entidad bancaria de Argentina en proponer e implementar un sistema que modernice y evolucione los métodos de pago. Una pulsera única e intransferible, habilitada para el uso solo por el titular de la cuenta, y con un chip incorporado que permita el cobro de cualquier compra que desee hacer el usuario, de manera inmediata, con la misma funcionalidad y seguridad de la tarjeta de débito, pero de forma más rápida y simple. La implementación de la nueva tecnología de la pulsera Contactless, pondría a Banco Galicia a la vanguardia tecnológica en el sector, y daría a sus usuarios un servicio único, que les haría valorar positivamente el Banco, por encima de sus competidores.</p> </div>';

var cont3='<div class="A"><div class="caratula"><img class="imgCartatula" src="img/caratulas/foda.png" alt=""></div><h2>FODA</h2><div class=""><h2>Fortalezas</h2><ul><li> Más de 110 años de historia que respalda y posiciona a la marca como Banco Universal de Argentina.</li><li>Más de 7,5 millones de clientes fidelizados. Ser pioneros en el lanzamiento del producto en el mercado argentino.</li><li> Innovación tecnológica en el sistema financiero.</li><li> Alianzas estratégicas con diversas entidades privadas de interés.</li></ul></div><div class=""><h2>Oportunidades</h2><ul><li> Brindar mayor seguridad en el sistema de pagos.</li><li> Utilización masiva de distintas tecnologías por nuestros clientes y potenciales clientes.</li><li> Medida de regulación de medios de pago, que obligan a los comerciantes a utilizar servicio posnet.</li></ul></div><div class=""><h2>Debilidades</h2><ul><li> Bajo porcentaje de población argentina bancarizada.</li><li> Baja tasa de empleo.</li><li> Baja credibilidad en el sistema bancario argentino.</li></ul></div><div class=""><h2>Amenazas</h2><ul><li> Barreras de entrada bajas para otras entidades bancarias.</li><li> Puede ser sustituida rápidamente por otra tecnología.</li><li> Medidas del BCRA no contempladas que puedan impactar en la comercialización del servicio.</li></ul></div></div>';

var cont4='<h2>Contenido 4</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, ipsam! Deleniti, beatae nesciunt omnis dolore quidem magnam odio nam eveniet aliquam repellat id quisquam reprehenderit libero fuga corrupti eligendi cupiditate?</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, ipsam! Deleniti, beatae nesciunt omnis dolore quidem magnam odio nam eveniet aliquam repellat id quisquam reprehenderit libero fuga corrupti eligendi cupiditate?</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, ipsam! Deleniti, beatae nesciunt omnis dolore quidem magnam odio nam eveniet aliquam repellat id quisquam reprehenderit libero fuga corrupti eligendi cupiditate?</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, ipsam! Deleniti, beatae nesciunt omnis dolore quidem magnam odio nam eveniet aliquam repellat id quisquam reprehenderit libero fuga corrupti eligendi cupiditate?</p>';

var ctrlMacro = '<div class="ctrl-temas"><div class="ctrl-opcion"><a href="#politico"></a></div> <div class="ctrl-opcion"><a href="#economico"></a></div> <div class="ctrl-opcion"><a href="#social"></a></div> <div class="ctrl-opcion"><a href="#tecnologico"></a></div></div>';

var ctrlMicro = '<div class="ctrl-temas"><div class="ctrl-opcion"><a href="#politico"></a></div> <div class="ctrl-opcion"><a href="#economico"></a></div> <div class="ctrl-opcion"><a href="#social"></a></div>';



var txtCheck =  $('li a').click(function(){

    if (isMobile.any()) {
    $('#trMenu').empty().append(' <a  onclick=" c()" >Menu</a>')
    }

 
    $('li a').removeClass('barraA');
 $(this).addClass('barraA')

});

var $crtlOp=$('.ctrl-opcion');

var ctrlCheck =  $crtlOp.click(function(){
    $crtlOp.removeClass('ctrl-op-Selec');
 $(this).addClass('ctrl-op-Selec')
});





function mostrarMacro(n){

    switch(n){
        case 1 :
        cont.empty();
        cont.append(cont1);
        cont.append(ctrlMacro);
        
        
         break;
         case 2 :
        cont.empty();
        cont.append(cont2);
        cont.append(ctrlMicro);
        
         break;
         case 3 :
        cont.empty();
        cont.append(cont3);
        
         break;
         case 4 :
        cont.empty();
        cont.append(cont4);
       
         break;
         case 5 :
        //  cont.empty();
         cont.load("html/macro.html")
        
          break;



    }


}
