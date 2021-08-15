Enfoque básico del ejercicio y responsive

Lo primero que quería comentar es que me he tomado ciertas libertades.
Al abrir las imágenes, he interpretado el diseño de manera totalmente diferente.

Por supuesto, esto es algo que en una situación real de trabajo en grupo no habría hecho; lo hubiera consultado con el equipo antes. Pero entiendo que el ejercicio consiste en demostrar mis aptitudes y me es más cómodo hacerlo así.

Ni la referencia de que el texto en el body tenía un tamaño de 11px ni del máximo ancho de 952 me cuadraban con lo que veía al abrir la imagen.



144 pixeles por pulgada me daban la pista de que la imagen había sido quizá creada usando un dispositivo con pantalla retina. Así que decidí usar las medidas en pixeles que veía. 16px me cuadraba también como tamaño del texto de body, así que he tirado por aquí ….

En cuanto al responsive: al no haber diseño de móvil he empezado por hacer el de desktop. Luego he hecho un poco de responsive usado el enfoque mobile-first. No he considerado necesario acabarlo dado que pienso que lo importante es demostrar que sé hacerlo.

He usado un mixin para hacer media queries que me gusta bastante:
https://github.com/sass-mq/sass-mq

He intentado usar ITCSS aunque no estoy muy familiarizado con ello.








RTL
He añadido dos archivos html desde donde se puede ver cómo cargo lo imprescindible para hacer rtl. Mi manera de trabajar esto con el css ha sido la siguiente:

1 - Una vez tenía hecha la versión lrt, lo primero que he hecho es añadir el atributo dir a la etiqueta HTML.
2 - Luego, he generado una copia del index.scss a la que he llamado index_rtl.css. 3 3 - Más tarde, cuando veía que tenía que modificar algo, hacía una copia del partial correspondiente, lo nombraba con “_rtl”  al final y hacía el cambio en dicho archivo.

Independientemente de esto, también he añadido un pequeño script de js donde se  ve cómo podríamos añadir el atributo dir a la etiqueta html o manejar los css a cargar o añadir alguna clase en caso de que fuera necesario.

Posiblemente si hubiera tenido más tiempo hubiera intentado usar alguna herramienta como https://github.com/MohammadYounes/rtlcss para gestionarlo de manera más dinámica.


SASS VS CSS VARS
He decidido utilizar finalmente las variables css por dos motivos: se pueden usar en cascada y se pueden modificar via JS.


IE11
No se vería bien principalmente por el uso de “flex” pese a que se supone que IE11 tiene un soporte parcial.

Mi enfoque para solucionarlo es el siguiente:
1- compilar el css con postcss usando el “autoprefixer” para tener prefixes para asegurar algo de compatibilidad
2- Añadir al final del index.css un partial “ie_fixes” con correcciones específicas
2- preparar un index_ie.css que se cargue condicionalmente en el html por si el navegador es incluso más bajo que el 11.
