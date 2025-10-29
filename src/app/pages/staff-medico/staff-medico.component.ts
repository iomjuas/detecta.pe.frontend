import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

export interface Doctor {
  id?: string | number;
  nombre: string;
  especialidad: string;
  cmp?: string;
  rne?: string;
  foto: string;
}

@Component({
  selector: 'app-staff-medico',
  templateUrl: './staff-medico.component.html',
  styleUrls: ['./staff-medico.component.scss'],
  standalone: false
})
export class StaffMedicoComponent implements OnInit, OnChanges {

  // LISTA INTERNA (SIN @Input)
  doctores: Doctor[] = [
    {
      "nombre": "DR. ADOLFO BOADA",
      "especialidad": "CARDIOLOGIA",
      "cmp": "083905",
      "rne": "038699",
      "foto": ""
    },
    {
      "nombre": "DR ALEJANDRO CANTELLA",
      "especialidad": "RADIOLOGIA INTERVENCIONISTA",
      "cmp": "32343",
      "rne": "015684",
      "foto": ""
    },
    {
      "nombre": "DR ALVA PINTO ALEXIS MICHAELE",
      "especialidad": "UROLOGIA ONCOLOGICA",
      "cmp": "027856",
      "rne": "025416",
      "foto": ""
    },
    {
      "nombre": "DR ALVARADO HINOJOSA ABRAHAM AUGUSTO",
      "especialidad": "GASTROENTEROLOGIA",
      "cmp": "19397",
      "rne": "012972",
      "foto": ""
    },
    {
      "nombre": "DR ANTONIO TEODORO",
      "especialidad": "CARDIOLOGIA",
      "cmp": "036428",
      "rne": "38938",
      "foto": ""
    },
    {
      "nombre": "DR ARTURO GRANDA",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "cmp": "058140",
      "rne": "30980",
      "foto": ""
    },
    {
      "nombre": "DR BARRENECHEA TARAZONA LUIS ALBERT",
      "especialidad": "CIRUGIA PLASTICA Y REPARADORA",
      "cmp": "028944",
      "rne": "014934",
      "foto": ""
    },
    {
      "nombre": "DR BOZZO PANCORVO WILFREDO CESAR",
      "especialidad": "CIRUGIA GENERAL",
      "cmp": "032748",
      "rne": "016912",
      "foto": ""
    },
    {
      "nombre": "DR CALDERON MORALES JORGE WALTER",
      "especialidad": "GINECOLOGIA Y OBSTETRICIA",
      "cmp": "011209",
      "rne": "004690",
      "foto": ""
    },
    {
      "nombre": "DR CALLUPE PEREZ JOSE FRANCISCO",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "cmp": "059502",
      "rne": "039729",
      "foto": ""
    },
    {
      "nombre": "DR CARLOS AURELIO PRADA MEDINA",
      "especialidad": "NEUMOLOGIA",
      "cmp": "019829",
      "rne": "008916",
      "foto": ""
    },
    {
      "nombre": "DR CARLOS LESCANO BRAVO",
      "especialidad": "PSICOLOGIA ONCOLOGICA",
      "cmp": "CPsP 5623",
      "rne": "",
      "foto": ""
    },
    {
      "nombre": "DR CARLOS MARES MOROTE",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "cmp": "058140",
      "rne": "30980",
      "foto": ""
    },
    {
      "nombre": "DR CARLOS VELAZQUEZ HAWKING",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "cmp": "058140",
      "rne": "30980",
      "foto": ""
    },
    {
      "nombre": "DR CASTILLO ELERA CHRISTIAN ERICH",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "cmp": "058140",
      "rne": "30980",
      "foto": ""
    },
    {
      "nombre": "DR CASTRO OLIDEN VICTOR ORLANDO",
      "especialidad": "ONCOLOGÍA MÉDICA",
      "cmp": "031518",
      "rne": "16102",
      "foto": ""
    },
    {
      "nombre": "DR CHUQUILLANQUI LIMPIE JORGE ALBERTO",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "cmp": "058140",
      "rne": "30980",
      "foto": ""
    },
    {
      "nombre": "DR CONCEPCION CARHUANCHO WILLIAM ENRIQUE",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "cmp": "058140",
      "rne": "30980",
      "foto": ""
    },
    {
      "nombre": "DR CONDEZO HESSELL",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "cmp": "058140",
      "rne": "30980",
      "foto": ""
    },
    {
      "nombre": "DR CRUZ COLCA JAVIER BERNANDO",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "cmp": "058140",
      "rne": "30980",
      "foto": ""
    },
    {
      "nombre": "DR CRUZADO SANCHEZ DEIVY ROBERT",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "cmp": "058140",
      "rne": "30980",
      "foto": ""
    },
    {
      "nombre": "DR CUEVA AGUIRRE GUSTAVO",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "cmp": "058140",
      "rne": "30980",
      "foto": ""
    },
    {
      "nombre": "DR DE LA FUENTE CHAVEZ GARCIA ENRIQUE",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "cmp": "058140",
      "rne": "30980",
      "foto": ""
    },
    {
      "nombre": "DR DE LA GUERRA PANCORVO ALBERTO JOSE",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "cmp": "058140",
      "rne": "30980",
      "foto": ""
    },
    {
      "nombre": "DR ERRASTI DIAZ SURIEL",
      "especialidad": "HEMATOLOGIA",
      "cmp": "070145",
      "rne": "030901",
      "foto": ""
    },
    {
      "nombre": "DR FEIJOO MENDOZA RAFAEL ENRIQUE",
      "especialidad": "MEDICINA GENERAL",
      "cmp": "86744",
      "rne": "",
      "foto": ""
    },
    {
      "nombre": "DR FLORES DULANTO CESAR ALEJANDRO",
      "especialidad": "ANESTESIOLOGIA",
      "cmp": "034492",
      "rne": "016122",
      "foto": ""
    },
    {
      "nombre": "DR GNADINGER ROCA STEFAN",
      "especialidad": "CIRUGIA PLASTICA Y REPARADORA",
      "cmp": "063701",
      "rne": "051093",
      "foto": ""
    },
    {
      "nombre": "DR GONZALES LAGUADO ERICK ALEXANDER",
      "especialidad": "CIRUGÍA DE CABEZA Y CUELLO",
      "cmp": "67411",
      "rne": "35414",
      "foto": ""
    },
    {
      "nombre": "DR GUEVARA JABILES ANDRES",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "cmp": "61915",
      "rne": "32858",
      "foto": ""
    },
    {
      "nombre": "DR HERNANDEZ PEÑA ARTURO GABRIEL",
      "especialidad": "OFTALMOLOGÍA",
      "cmp": "37639",
      "rne": "017308",
      "foto": ""
    },
    {
      "nombre": "DR HERRERA MORALES SANTIAGO ANTONIO",
      "especialidad": "MEDICINA INTERNA",
      "cmp": "029528",
      "rne": "035417",
      "foto": ""
    },
    {
      "nombre": "DR HIDALGO RAMOS RENSON EDUARDO",
      "especialidad": "CIRUGIA GENERAL",
      "cmp": "53437",
      "rne": "34338",
      "foto": ""
    },
    {
      "nombre": "DR JAIME CUNZA",
      "especialidad": "CARDIOLOGÍA",
      "cmp": "031899",
      "rne": "014950",
      "foto": ""
    },
    {
      "nombre": "DR JORGE CASTILLO",
      "especialidad": "GINECOLOGIA ONCOLOGICA",
      "cmp": "83038",
      "rne": "S00231",
      "foto": ""
    },
    {
      "nombre": "DR JUANJOSE ALVA",
      "especialidad": "GASTROENTEROLOGÍA",
      "cmp": "028826",
      "rne": "18708",
      "foto": ""
    },
    {
      "nombre": "DR KENLLY CARDOZA",
      "especialidad": "ENDOCRINOLOGÍA",
      "cmp": "74776",
      "rne": "42805",
      "foto": ""
    },
    {
      "nombre": "DR LIU BEJARANO HUMBERTO",
      "especialidad": "GASTROENTEROLOGÍA",
      "cmp": "046739",
      "rne": "021569",
      "foto": ""
    },
    {
      "nombre": "DR LOAYZA FERNANDEZ DE BACA CHRISTIAN DANIEL",
      "especialidad": "CIRUGÍA DE CABEZA Y CUELLO",
      "cmp": "55852",
      "rne": "27286",
      "foto": ""
    },
    {
      "nombre": "DR LUIS MANSILLA",
      "especialidad": "PSICOLOGIA",
      "cmp": "CPSP 28958",
      "rne": "",
      "foto": ""
    },
    {
      "nombre": "DR LUQUE VASQUEZ CARLOS EMILIO",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "cmp": "025255",
      "rne": "011990",
      "foto": ""
    },
    {
      "nombre": "DR MACO CHAVEZ LORENZO GERALD",
      "especialidad": "ONCOLOGÍA MÉDICA",
      "cmp": "067588",
      "rne": "041152",
      "foto": ""
    },
    {
      "nombre": "DR MANNARELLI CAVAGNARI ALFIERI ADOLFO",
      "especialidad": "TRAUMATOLOGÍA Y ORTOPEDIA",
      "cmp": "008917",
      "rne": "012996",
      "foto": ""
    },
    {
      "nombre": "DR MARQUILLO ROMERO JAVIER RENATO",
      "especialidad": "UROLOGIA ONCOLOGICA",
      "cmp": "041956",
      "rne": "033153",
      "foto": ""
    },
    {
      "nombre": "DR MARTINEZ SAMANIEGO FRANCIS",
      "especialidad": "OTORRINOLARINGOLOGÍA",
      "cmp": "59833",
      "rne": "28886",
      "foto": ""
    },
    {
      "nombre": "DR MEDRANO SAMAME HECTOR ALBERTO",
      "especialidad": "CIRUGÍA GENERAL",
      "cmp": "014299",
      "rne": "004106",
      "foto": ""
    },
    {
      "nombre": "DR JORGE CASTILLO",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "cmp": "058140",
      "rne": "30980",
      "foto": ""
    },
    {
      "nombre": "MENDOZA DE LAMA GASTON WILMER",
      "especialidad": "GINECOLOGIA ONCOLOGICA",
      "cmp": "026363",
      "rne": "014449",
      "foto": ""
    },
    {
      "nombre": "DR MEZZICH GUERRERO WALTER",
      "especialidad": "CIRUGIA TORACICA Y CARDIOVASCULAR",
      "cmp": "010616",
      "rne": "014013",
      "foto": ""
    },
    {
      "nombre": "DR MILKO GARCES",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "cmp": "029663",
      "rne": "014655",
      "foto": ""
    },
    {
      "nombre": "DR MUÑOZ QUISPE MIGUEL ANGEL",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "cmp": "62380",
      "rne": "043074",
      "foto": ""
    },
    {
      "nombre": "DR NELSON MENESES",
      "especialidad": "NUTRICION",
      "cmp": "CNP 07676",
      "rne": "",
      "foto": ""
    },
    {
      "nombre": "DR NICOLICH LUQUE FLAVIO LUIS",
      "especialidad": "CIRUGÍA PLÁSTICA Y REPARADORA",
      "cmp": "21341",
      "rne": "1101",
      "foto": ""
    },
    {
      "nombre": "DR NIETO YRIGOIN KEVIN ALBERTH",
      "especialidad": "CIRUGÍA GENERAL",
      "cmp": "088645",
      "rne": "049954",
      "foto": ""
    },
    {
      "nombre": "DR OLAECHEA MATTO CARLOS ERNESTO",
      "especialidad": "CIRUGIA ONCOLOGICA DE CABEZA Y CUELLO",
      "cmp": "029918",
      "rne": "018493",
      "foto": ""
    },
    {
      "nombre": "DR OTOYA LOPEZ MIGUEL ANGEL",
      "especialidad": "ANESTESIOLOGÍA",
      "cmp": "31576",
      "rne": "17017",
      "foto": ""
    },
    {
      "nombre": "DR PALACIOS FLORES JOSE ALEJANDRO",
      "especialidad": "MEDICINA GENERAL",
      "cmp": "076926",
      "rne": "",
      "foto": ""
    },
    {
      "nombre": "DR PANDZIC SABA SAMIR ALEJANDRO",
      "especialidad": "MEDICINA GENERAL",
      "cmp": "100869",
      "rne": "",
      "foto": ""
    },
    {
      "nombre": "DR PAREDES PEREZ NOE NAPOLEON",
      "especialidad": "GINECOLOGIA Y OBSTETRICIA",
      "cmp": "022662",
      "rne": "009153",
      "foto": ""
    },
    {
      "nombre": "DR PATIÑO SEDANO NICOLAY PABLO",
      "especialidad": "MEDICINA GENERAL",
      "cmp": "75182",
      "rne": "",
      "foto": ""
    },
    {
      "nombre": "DR PEDRESCHI MONTES EDUARDO ANTONIO",
      "especialidad": "CIRUGÍA GENERAL",
      "cmp": "009933",
      "rne": "003283",
      "foto": ""
    },
    {
      "nombre": "DR QUINCHO ESPINOZA NESTOR JESUS",
      "especialidad": "GINECOLOGIA Y OBSTETRICIA",
      "cmp": "26388",
      "rne": "17088",
      "foto": ""
    },
    {
      "nombre": "DR QUIROA VERA FERNANDO JAVIER",
      "especialidad": "UROLOGIA ONCOLOGICA",
      "cmp": "027205",
      "rne": "013540",
      "foto": ""
    },
    {
      "nombre": "DR RICSE CHAUPIS HECTOR",
      "especialidad": "MEDICINA INTERNA",
      "cmp": "56862",
      "rne": "036669",
      "foto": ""
    },
    {
      "nombre": "DR RIVERA TORRES JULIO",
      "especialidad": "CIRUGIA TORACICA Y CARDIOVASCULAR",
      "cmp": "032125",
      "rne": "016929",
      "foto": ""
    },
    {
      "nombre": "DR RODRIGO ARROYO",
      "especialidad": "CIRUGIA DE COLON Y RECTO",
      "cmp": "073561",
      "rne": "S00548",
      "foto": ""
    },
    {
      "nombre": "DR RODRIGUEZ GUTARRA NICANOR ALBERTO",
      "especialidad": "UROLOGIA ONCOLOGICA",
      "cmp": "025867",
      "rne": "027671",
      "foto": ""
    },
    {
      "nombre": "DR ROJAS LA TORRE JUAN DE DIOS",
      "especialidad": "GINECOLOGIA Y OBSTETRICIA",
      "cmp": "034306",
      "rne": "015891",
      "foto": ""
    },
    {
      "nombre": "RUIZ AGUILAR NEPTON VICTOR DAVID",
      "especialidad": "UROLOGIA GENERAL",
      "cmp": "54841",
      "rne": "025722",
      "foto": ""
    },
    {
      "nombre": "DR SALAZAR SALAZAR DARWIN VALENTIN",
      "especialidad": "TRAUMATOLOGÍA Y ORTOPEDIA",
      "cmp": "45317",
      "rne": "21049",
      "foto": ""
    },
    {
      "nombre": "DR SOTO INGA GERSON ANDRE",
      "especialidad": "UROLOGIA GENERAL",
      "cmp": "072403",
      "rne": "046012",
      "foto": ""
    },
    {
      "nombre": "DR TICONA HUAROTO CESAR EDUARDO",
      "especialidad": "ENFERMEDADES INFECCIOSAS Y TROPICALES",
      "cmp": "061917",
      "rne": "032167",
      "foto": ""
    },
    {
      "nombre": "DR URIBE VILCARA ANDRES ALONSO",
      "especialidad": "UROLOGIA GENERAL",
      "cmp": "073070",
      "rne": "043341",
      "foto": ""
    },
    {
      "nombre": "DR VALLEJOS MUÑOZ ORLANDO OMAR",
      "especialidad": "MEDICINA FISICA Y REHABILITACION",
      "cmp": "20279",
      "rne": "20182",
      "foto": ""
    },
    {
      "nombre": "DR VALVERDE ZAVALETA CARLOS EDUARDO",
      "especialidad": "OTORRINOLARINGOLOGÍA",
      "cmp": "20140",
      "rne": "13407",
      "foto": ""
    },
    {
      "nombre": "DR VELASQUEZ ORELLANO EDGAR RICARDO",
      "especialidad": "OFTALMOLOGÍA",
      "cmp": "062616",
      "rne": "032323",
      "foto": ""
    },
    {
      "nombre": "DR VAN DYCK ARBULU HECTOR EDWARD",
      "especialidad": "CIRUGIA TORACICA Y CARDIOVASCULAR",
      "cmp": "27510",
      "rne": "011337",
      "foto": ""
    },
    {
      "nombre": "DR VELARDE MENDEZ MARCO MAURICIO",
      "especialidad": "CIRUGIA ONCOLOGIA DE MAMAS, TEJIDOS BLANDOS Y PIEL",
      "cmp": "037273",
      "rne": "023209",
      "foto": ""
    },
    {
      "nombre": "DR VELARDE NAVARRETE CARLOS",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "cmp": "016846",
      "rne": "017803",
      "foto": ""
    },
    {
      "nombre": "DR VERA YAMAMOTO GIULIANO",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "cmp": "058140",
      "rne": "30980",
      "foto": ""
    },
    {
      "nombre": "DR VICTOR DIAS LAJO",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "cmp": "058140",
      "rne": "30980",
      "foto": ""
    },
    {
      "nombre": "DR VICTOR ROMAN PAITAN AMARO",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "cmp": "058140",
      "rne": "30980",
      "foto": ""
    },
    {
      "nombre": "DR ZAPATER JOSE",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "cmp": "058140",
      "rne": "30980",
      "foto": ""
    },
    {
      "nombre": "DRA ANDREA HELDT",
      "especialidad": "ENFERMEDADES INFECCIOSAS Y TROPICALES",
      "cmp": "061917",
      "rne": "032167",
      "foto": ""
    },
    {
      "nombre": "DRA ANGELES CADENILLAS LILIANA CARMEN",
      "especialidad": "UROLOGIA GENERAL",
      "cmp": "073070",
      "rne": "043341",
      "foto": ""
    },
    {
      "nombre": "DRA ANGULO LUNA HELEN ISABEL",
      "especialidad": "MEDICINA FISICA Y REHABILITACION",
      "cmp": "20279",
      "rne": "20182",
      "foto": ""
    },
    {
      "nombre": "DRA ARIZOLA BLUA LAURA ROCIO",
      "especialidad": "OTORRINOLARINGOLOGÍA",
      "cmp": "20140",
      "rne": "13407",
      "foto": ""
    },
    {
      "nombre": "DRA BECERRA VALDÉS CARLA",
      "especialidad": "OFTALMOLOGÍA",
      "cmp": "062616",
      "rne": "032323",
      "foto": ""
    },
    {
      "nombre": "DRA BERNALES ZAVALA KELLY RUTH",
      "especialidad": "GINECOLOGIA Y OBSTETRICIA",
      "cmp": "052327",
      "rne": "032932",
      "foto": ""
    },
    {
      "nombre": "DRA BOZZO PANCORVO TANET GLENDA",
      "especialidad": "ODONTOLOGIA",
      "cmp": "19521",
      "rne": "023209",
      "foto": ""
    },
    {
      "nombre": "DRA CALDERON ANTICONA MONICA JACKELIN",
      "especialidad": "ONCOLOGIA MEDICA",
      "cmp": "040313",
      "rne": "021654",
      "foto": ""
    },
    {
      "nombre": "DRA CAMACHO VILLANUEVA DORA KATIA",
      "especialidad": "GINECOLOGIA Y OBSTETRICIA",
      "cmp": "36029",
      "rne": "17829",
      "foto": ""
    },
    {
      "nombre": "DRA TEJADA CHAVARRY DIANA PAOLA",
      "especialidad": "GINECOLOGIA Y OBSTETRICIA",
      "cmp": "080852",
      "rne": "049841",
      "foto": ""
    },
    {
      "nombre": "DRA FLORES SIERRA MELVA",
      "especialidad": "MEDICINA FISICA Y REHABILITACION",
      "cmp": "012417",
      "rne": "005054",
      "foto": ""
    },
    {
      "nombre": "DRA HIDALGO GUARNIZ MEYLIN ZOLSI",
      "especialidad": "NEUROLOGÍA",
      "cmp": "064171",
      "rne": "035463",
      "foto": ""
    },
    {
      "nombre": "DRA LA ROSA CANALES MILAGROS",
      "especialidad": "NUTRICION",
      "cmp": "",
      "rne": "001092",
      "foto": ""
    },
    {
      "nombre": "DRA FIERRO FALCON ELKA LORENA",
      "especialidad": "DERMATOLOGIA",
      "cmp": "26093",
      "rne": "15323",
      "foto": ""
    },
    {
      "nombre": "DRA LUNA WILSON CARLA",
      "especialidad": "NEUMOLOGÍA",
      "cmp": "48960",
      "rne": "27345",
      "foto": ""
    },
    {
      "nombre": "DRA MALCA VASQUEZ JENNY",
      "especialidad": "RADIOTERAPIA",
      "cmp": "058905",
      "rne": "032857",
      "foto": ""
    },
    {
      "nombre": "PERALTA CONCHA MARIA GUADALUPE",
      "especialidad": "OFTALMOLOGÍA",
      "cmp": "062616",
      "rne": "032323",
      "foto": ""
    },
    {
      "nombre": "MORANTE CRUZ ZAIDA DENISSE",
      "especialidad": "ONCOLOGÍA MÉDICA",
      "cmp": "048899",
      "rne": "28500",
      "foto": ""
    },
    {
      "nombre": "DRA MUÑOZ QUISPE NANCY ELENA",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "cmp": "33370",
      "rne": "017328",
      "foto": ""
    },
    {
      "nombre": "BOZZO PANCORVO ORIANA",
      "especialidad": "ODONTOLOGIA",
      "cmp": "",
      "rne": "25481",
      "foto": ""
    },
    {
      "nombre": "DRA PANDZIC SABA SHADYA",
      "especialidad": "MEDICINA GENERAL",
      "cmp": "100868",
      "rne": "",
      "foto": ""
    },
    {
      "nombre": "DRA PAREDES GUERRA GLORIA",
      "especialidad": "ONCOLOGIA PEDIATRICA",
      "cmp": "24398",
      "rne": "019350",
      "foto": ""
    },
    {
      "nombre": "DRA RAMIREZ MENDOZA NATHALY MARIAN",
      "especialidad": "MEDICINA INTERNA",
      "cmp": "079880",
      "rne": "033065",
      "foto": ""
    },
    {
      "nombre": "DRA. SANCHEZ ORTIZ JOANA PAMELA",
      "especialidad": "OFTALMOLOGIA ONCOLOGICA",
      "cmp": "65782",
      "rne": "S00369",
      "foto": ""
    },
    {
      "nombre": "DRA VENEGAS COELLO SANDRA MIRELLY",
      "especialidad": "HEMATOLOGÍA",
      "cmp": "071488",
      "rne": "043391",
      "foto": ""
    },
    {
      "nombre": "DRA SORRENTINO TIPACTI CARMEN ANGELINA",
      "especialidad": "GINECOLOGÍA Y OBSTETRICIA",
      "cmp": "76338",
      "rne": "32635",
      "foto": ""
    },
    {
      "nombre": "DRA TAIRO CERRON TESSY SHIRLEY",
      "especialidad": "NEUMOLOGÍA",
      "cmp": "48960",
      "rne": "27345",
      "foto": ""
    },
    {
      "nombre": "DRA TARA BRITTO SUSANA LUISA",
      "especialidad": "Endocrinología",
      "cmp": "21710",
      "rne": "009440",
      "foto": ""
    },
    {
      "nombre": "DRA TEJADA SILVA CLAUDIA PAMELA",
      "especialidad": "CIRUGIA ONCOLOGICA",
      "cmp": "055858",
      "rne": "31005",
      "foto": ""
    },
    {
      "nombre": "DRA VARGAS SALDAÑA MARIA INES PAULLETE",
      "especialidad": "CIRUGÍA PLÁSTICA Y REPARADORA",
      "cmp": "60646",
      "rne": "34630",
      "foto": ""
    },
    {
      "nombre": "DRA VASQUEZ MEDINA MIRTHA JIMENA",
      "especialidad": "GINECOLOGIA Y OBSTETRICIA",
      "cmp": "08859",
      "rne": "049865",
      "foto": ""
    },
    {
      "nombre": "VILLALOBOS RIOS MARGARITA DEL CARMEN",
      "especialidad": "MEDICINA GENERAL",
      "cmp": "084892",
      "rne": "",
      "foto": ""
    },
    {
      "nombre": "DRA VILLANUEVA YAVE ELSA CATALINA",
      "especialidad": "OTORRINOLARINGOLOGÍA",
      "cmp": "067030",
      "rne": "036410",
      "foto": ""
    }
  ]

  /** Autoplay del carrusel */
  @Input() autoplay = true;

  /** Intervalo entre slides (ms) */
  @Input() interval = 3000;

  /** Pausar al pasar el mouse (hover) */
  @Input() pauseOnHover = true;

  /** Tarjetas por slide (4x3) */
  @Input() perPage = 12;

  pages: Doctor[][] = [];
  carouselId = 'staffCarousel-' + Math.random().toString(36).slice(2, 9);

  ngOnInit(): void {
    console.log(this.doctores.length)
    this.rebuildPages();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // si el padre cambia perPage/autoplay/interval, rearmamos
    if (changes['perPage']) this.rebuildPages();
  }

  private rebuildPages() {
    this.pages = this.chunk(this.doctores, this.perPage);
  }

  private chunk<T>(arr: T[], size: number): T[][] {
    const out: T[][] = [];
    for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
    return out;
  }

  trackByDoc(_i: number, d: Doctor) {
    return d.id ?? d.nombre;
  }

  onImgError(ev: Event) {
    (ev.target as HTMLImageElement).src =
      'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=1200&auto=format&fit=crop';
  }
}
