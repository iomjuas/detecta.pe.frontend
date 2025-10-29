import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

export interface Doctor {
  id?: string | number;
  nombre: string;
  especialidad: string;
  cmp: string | undefined; // Permitir undefined
  rne: string | undefined; // Permitir undefined
  rne2: string | undefined; // Nuevo campo para RNE secundario
  especialidad2: string | undefined; // Nuevo campo para especialidad secundaria
  foto: string;
  cnp: string | undefined; // Permitir undefined
  cop: string | undefined; // Permitir undefined
  cpsp: string | undefined; // Permitir undefined
}

@Component({
  selector: 'app-staff-medico',
  templateUrl: './staff-medico.component.html',
  styleUrls: ['./staff-medico.component.scss'],
  standalone: false
})
export class StaffMedicoComponent implements OnInit, OnChanges {

  // LISTA COMPLETA DE 116 DOCTORES (Lista original de datos)
  // originalDoctores: Doctor[] = [
  //   {
  //     "nombre": "DR. ADOLFO BOADA",
  //     "especialidad": "CARDIOLOGIA",
  //     "cmp": "083905",
  //     "rne": "038699",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-1.png",
  //   },
  //   {
  //     "nombre": "DR ALEJANDRO CANTELLA",
  //     "especialidad": "RADIOLOGIA INTERVENCIONISTA",
  //     "cmp": "32343",
  //     "rne": "015684",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-2.png",
  //   },
  //   {
  //     "nombre": "DR ALVA PINTO ALEXIS MICHAELE",
  //     "especialidad": "UROLOGIA ONCOLOGICA",
  //     "cmp": "027856",
  //     "rne": "025416",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-3.png",
  //   },
  //   {
  //     "nombre": "DR ALVARADO HINOJOSA ABRAHAM AUGUSTO",
  //     "especialidad": "GASTROENTEROLOGIA",
  //     "cmp": "19397",
  //     "rne": "012972",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-4.png",
  //   },
  //   {
  //     "nombre": "DR ANTONIO TEODORO",
  //     "especialidad": "CARDIOLOGIA",
  //     "cmp": "036428",
  //     "rne": "38938",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-5.png",
  //   },
  //   {
  //     "nombre": "DR ARTURO GRANDA",
  //     "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
  //     "cmp": "058140",
  //     "rne": "30980",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-6.png",
  //   },
  //   {
  //     "nombre": "DR BARRENECHEA TARAZONA LUIS ALBERT",
  //     "especialidad": "CIRUGIA PLASTICA Y REPARADORA",
  //     "cmp": "028944",
  //     "rne": "014934",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-7.png",
  //   },
  //   {
  //     "nombre": "DR BOZZO PANCORVO WILFREDO CESAR",
  //     "especialidad": "CIRUGIA GENERAL",
  //     "cmp": "032748",
  //     "rne": "016912",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-8.png",
  //   },
  //   {
  //     "nombre": "DR CALDERON MORALES JORGE WALTER",
  //     "especialidad": "GINECOLOGIA Y OBSTETRICIA",
  //     "cmp": "011209",
  //     "rne": "004690",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-9.png",
  //   },
  //   {
  //     "nombre": "DR CALLUPE PEREZ JOSE FRANCISCO",
  //     "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
  //     "cmp": "059502",
  //     "rne": "039729",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-10.png",
  //   },
  //   {
  //     "nombre": "DR CARLOS AURELIO PRADA MEDINA",
  //     "especialidad": "NEUMOLOGIA",
  //     "cmp": "019829",
  //     "rne": "008916",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-11.png",
  //   },
  //   {
  //     "nombre": "DR CARLOS LESCANO BRAVO",
  //     "especialidad": "PSICOLOGIA ONCOLOGICA",
  //     "cmp": "CPsP 5623",
  //     "rne": "",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-12.png"
  //   },
  //   {
  //     "nombre": "DR CARLOS MARES MOROTE",
  //     "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
  //     "cmp": "058140",
  //     "rne": "30980",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-13.png"
  //   },
  //   {
  //     "nombre": "DR CARLOS VELAZQUEZ HAWKING",
  //     "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
  //     "cmp": "058140",
  //     "rne": "30980",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-14.png"
  //   },
  //   {
  //     "nombre": "DR CASTILLO ELERA CHRISTIAN ERICH",
  //     "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
  //     "cmp": "058140",
  //     "rne": "30980",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-15.png"
  //   },
  //   {
  //     "nombre": "DR CASTRO OLIDEN VICTOR ORLANDO",
  //     "especialidad": "ONCOLOGÍA MÉDICA",
  //     "cmp": "031518",
  //     "rne": "16102",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-16.png"
  //   },
  //   {
  //     "nombre": "DR CHUQUILLANQUI LIMPIE JORGE ALBERTO",
  //     "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
  //     "cmp": "058140",
  //     "rne": "30980",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-17.png"
  //   },
  //   {
  //     "nombre": "DR CONCEPCION CARHUANCHO WILLIAM ENRIQUE",
  //     "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
  //     "cmp": "058140",
  //     "rne": "30980",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-18.png"
  //   },
  //   {
  //     "nombre": "DR CONDEZO HESSELL",
  //     "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
  //     "cmp": "058140",
  //     "rne": "30980",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-19.png"
  //   },
  //   {
  //     "nombre": "DR CRUZ COLCA JAVIER BERNANDO",
  //     "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
  //     "cmp": "058140",
  //     "rne": "30980",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-20.png"
  //   },
  //   {
  //     "nombre": "DR CRUZADO SANCHEZ DEIVY ROBERT",
  //     "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
  //     "cmp": "058140",
  //     "rne": "30980",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-21.png"
  //   },
  //   {
  //     "nombre": "DR CUEVA AGUIRRE GUSTAVO",
  //     "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
  //     "cmp": "058140",
  //     "rne": "30980",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-22.png"
  //   },
  //   {
  //     "nombre": "DR DE LA FUENTE CHAVEZ GARCIA ENRIQUE",
  //     "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
  //     "cmp": "058140",
  //     "rne": "30980",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-23.png"
  //   },
  //   {
  //     "nombre": "DR DE LA GUERRA PANCORVO ALBERTO JOSE",
  //     "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
  //     "cmp": "058140",
  //     "rne": "30980",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-24.png"
  //   },
  //   {
  //     "nombre": "DR ERRASTI DIAZ SURIEL",
  //     "especialidad": "HEMATOLOGIA",
  //     "cmp": "070145",
  //     "rne": "030901",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-25.png"
  //   },
  //   {
  //     "nombre": "DR FEIJOO MENDOZA RAFAEL ENRIQUE",
  //     "especialidad": "MEDICINA GENERAL",
  //     "cmp": "86744",
  //     "rne": "",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-26.png"
  //   },
  //   {
  //     "nombre": "DR FLORES DULANTO CESAR ALEJANDRO",
  //     "especialidad": "ANESTESIOLOGIA",
  //     "cmp": "034492",
  //     "rne": "016122",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-27.png"
  //   },
  //   {
  //     "nombre": "DR GNADINGER ROCA STEFAN",
  //     "especialidad": "CIRUGIA PLASTICA Y REPARADORA",
  //     "cmp": "063701",
  //     "rne": "051093",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-28.png"
  //   },
  //   {
  //     "nombre": "DR GONZALES LAGUADO ERICK ALEXANDER",
  //     "especialidad": "CIRUGÍA DE CABEZA Y CUELLO",
  //     "cmp": "67411",
  //     "rne": "35414",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-29.png"
  //   },
  //   {
  //     "nombre": "DR GUEVARA JABILES ANDRES",
  //     "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
  //     "cmp": "61915",
  //     "rne": "32858",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-30.png"
  //   },
  //   {
  //     "nombre": "DR HERNANDEZ PEÑA ARTURO GABRIEL",
  //     "especialidad": "OFTALMOLOGÍA",
  //     "cmp": "37639",
  //     "rne": "017308",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-31.png"
  //   },
  //   {
  //     "nombre": "DR HERRERA MORALES SANTIAGO ANTONIO",
  //     "especialidad": "MEDICINA INTERNA",
  //     "cmp": "029528",
  //     "rne": "035417",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-32.png"
  //   },
  //   {
  //     "nombre": "DR HIDALGO RAMOS RENSON EDUARDO",
  //     "especialidad": "CIRUGIA GENERAL",
  //     "cmp": "53437",
  //     "rne": "34338",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-33.png"
  //   },
  //   {
  //     "nombre": "DR JAIME CUNZA",
  //     "especialidad": "CARDIOLOGÍA",
  //     "cmp": "031899",
  //     "rne": "014950",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-34.png"
  //   },
  //   {
  //     "nombre": "DR JORGE CASTILLO",
  //     "especialidad": "GINECOLOGIA ONCOLOGICA",
  //     "cmp": "83038",
  //     "rne": "S00231",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-35.png"
  //   },
  //   {
  //     "nombre": "DR JUANJOSE ALVA",
  //     "especialidad": "GASTROENTEROLOGÍA",
  //     "cmp": "028826",
  //     "rne": "18708",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-36.png"
  //   },
  //   {
  //     "nombre": "DR KENLLY CARDOZA",
  //     "especialidad": "ENDOCRINOLOGÍA",
  //     "cmp": "74776",
  //     "rne": "42805",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-37.png"
  //   },
  //   {
  //     "nombre": "DR LIU BEJARANO HUMBERTO",
  //     "especialidad": "GASTROENTEROLOGÍA",
  //     "cmp": "046739",
  //     "rne": "021569",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-38.png"
  //   },
  //   {
  //     "nombre": "DR LOAYZA FERNANDEZ DE BACA CHRISTIAN DANIEL",
  //     "especialidad": "CIRUGÍA DE CABEZA Y CUELLO",
  //     "cmp": "55852",
  //     "rne": "27286",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-39.png"
  //   },
  //   {
  //     "nombre": "DR LUIS MANSILLA",
  //     "especialidad": "PSICOLOGIA",
  //     "cmp": "CPSP 28958",
  //     "rne": "",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-40.png"
  //   },
  //   {
  //     "nombre": "DR LUQUE VASQUEZ CARLOS EMILIO",
  //     "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
  //     "cmp": "025255",
  //     "rne": "011990",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-41.png"
  //   },
  //   {
  //     "nombre": "DR MACO CHAVEZ LORENZO GERALD",
  //     "especialidad": "ONCOLOGÍA MÉDICA",
  //     "cmp": "067588",
  //     "rne": "041152",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-42.png"
  //   },
  //   {
  //     "nombre": "DR MANNARELLI CAVAGNARI ALFIERI ADOLFO",
  //     "especialidad": "TRAUMATOLOGÍA Y ORTOPEDIA",
  //     "cmp": "008917",
  //     "rne": "012996",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-43.png"
  //   },
  //   {
  //     "nombre": "DR MARQUILLO ROMERO JAVIER RENATO",
  //     "especialidad": "UROLOGIA ONCOLOGICA",
  //     "cmp": "041956",
  //     "rne": "033153",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-44.png"
  //   },
  //   {
  //     "nombre": "DR MARTINEZ SAMANIEGO FRANCIS",
  //     "especialidad": "OTORRINOLARINGOLOGÍA",
  //     "cmp": "59833",
  //     "rne": "28886",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-45.png"
  //   },
  //   {
  //     "nombre": "DR MEDRANO SAMAME HECTOR ALBERTO",
  //     "especialidad": "CIRUGÍA GENERAL",
  //     "cmp": "014299",
  //     "rne": "004106",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-46.png"
  //   },
  //   {
  //     "nombre": "DR JORGE CASTILLO",
  //     "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
  //     "cmp": "058140",
  //     "rne": "30980",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-47.png"
  //   },
  //   {
  //     "nombre": "MENDOZA DE LAMA GASTON WILMER",
  //     "especialidad": "GINECOLOGIA ONCOLOGICA",
  //     "cmp": "026363",
  //     "rne": "014449",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-48.png"
  //   },
  //   {
  //     "nombre": "DR MEZZICH GUERRERO WALTER",
  //     "especialidad": "CIRUGIA TORACICA Y CARDIOVASCULAR",
  //     "cmp": "010616",
  //     "rne": "014013",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-49.png"
  //   },
  //   {
  //     "nombre": "DR MILKO GARCES",
  //     "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
  //     "cmp": "029663",
  //     "rne": "014655",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-50.png"
  //   },
  //   {
  //     "nombre": "DR MUÑOZ QUISPE MIGUEL ANGEL",
  //     "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
  //     "cmp": "62380",
  //     "rne": "043074",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-51.png"
  //   },
  //   {
  //     "nombre": "DR NELSON MENESES",
  //     "especialidad": "NUTRICION",
  //     "cmp": "CNP 07676",
  //     "rne": "",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-52.png"
  //   },
  //   {
  //     "nombre": "DR NICOLICH LUQUE FLAVIO LUIS",
  //     "especialidad": "CIRUGÍA PLÁSTICA Y REPARADORA",
  //     "cmp": "21341",
  //     "rne": "1101",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-53.png"
  //   },
  //   {
  //     "nombre": "DR NIETO YRIGOIN KEVIN ALBERTH",
  //     "especialidad": "CIRUGÍA GENERAL",
  //     "cmp": "088645",
  //     "rne": "049954",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-54.png"
  //   },
  //   {
  //     "nombre": "DR OLAECHEA MATTO CARLOS ERNESTO",
  //     "especialidad": "CIRUGIA ONCOLOGICA DE CABEZA Y CUELLO",
  //     "cmp": "029918",
  //     "rne": "018493",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-55.png"
  //   },
  //   {
  //     "nombre": "DR OTOYA LOPEZ MIGUEL ANGEL",
  //     "especialidad": "ANESTESIOLOGÍA",
  //     "cmp": "31576",
  //     "rne": "17017",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-56.png"
  //   },
  //   {
  //     "nombre": "DR PALACIOS FLORES JOSE ALEJANDRO",
  //     "especialidad": "MEDICINA GENERAL",
  //     "cmp": "076926",
  //     "rne": "",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-57.png"
  //   },
  //   {
  //     "nombre": "DR PANDZIC SABA SAMIR ALEJANDRO",
  //     "especialidad": "MEDICINA GENERAL",
  //     "cmp": "100869",
  //     "rne": "",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-58.png"
  //   },
  //   {
  //     "nombre": "DR PAREDES PEREZ NOE NAPOLEON",
  //     "especialidad": "GINECOLOGIA Y OBSTETRICIA",
  //     "cmp": "022662",
  //     "rne": "009153",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-59.png"
  //   },
  //   {
  //     "nombre": "DR PATIÑO SEDANO NICOLAY PABLO",
  //     "especialidad": "MEDICINA GENERAL",
  //     "cmp": "75182",
  //     "rne": "",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-60.png"
  //   },
  //   {
  //     "nombre": "DR PEDRESCHI MONTES EDUARDO ANTONIO",
  //     "especialidad": "CIRUGÍA GENERAL",
  //     "cmp": "009933",
  //     "rne": "003283",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-61.png"
  //   },
  //   {
  //     "nombre": "DR QUINCHO ESPINOZA NESTOR JESUS",
  //     "especialidad": "GINECOLOGIA Y OBSTETRICIA",
  //     "cmp": "26388",
  //     "rne": "17088",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-62.png"
  //   },
  //   {
  //     "nombre": "DR QUIROA VERA FERNANDO JAVIER",
  //     "especialidad": "UROLOGIA ONCOLOGICA",
  //     "cmp": "027205",
  //     "rne": "013540",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-63.png"
  //   },
  //   {
  //     "nombre": "DR RICSE CHAUPIS HECTOR",
  //     "especialidad": "MEDICINA INTERNA",
  //     "cmp": "56862",
  //     "rne": "036669",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-64.png"
  //   },
  //   {
  //     "nombre": "DR RIVERA TORRES JULIO",
  //     "especialidad": "CIRUGIA TORACICA Y CARDIOVASCULAR",
  //     "cmp": "032125",
  //     "rne": "016929",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-65.png"
  //   },
  //   {
  //     "nombre": "DR RODRIGO ARROYO",
  //     "especialidad": "CIRUGIA DE COLON Y RECTO",
  //     "cmp": "073561",
  //     "rne": "S00548",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-66.png"
  //   },
  //   {
  //     "nombre": "DR RODRIGUEZ GUTARRA NICANOR ALBERTO",
  //     "especialidad": "UROLOGIA ONCOLOGICA",
  //     "cmp": "025867",
  //     "rne": "027671",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-67.png"
  //   },
  //   {
  //     "nombre": "DR ROJAS LA TORRE JUAN DE DIOS",
  //     "especialidad": "GINECOLOGIA Y OBSTETRICIA",
  //     "cmp": "034306",
  //     "rne": "015891",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-68.png"
  //   },
  //   {
  //     "nombre": "RUIZ AGUILAR NEPTON VICTOR DAVID",
  //     "especialidad": "UROLOGIA GENERAL",
  //     "cmp": "54841",
  //     "rne": "025722",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-69.png"
  //   },
  //   {
  //     "nombre": "DR SALAZAR SALAZAR DARWIN VALENTIN",
  //     "especialidad": "TRAUMATOLOGÍA Y ORTOPEDIA",
  //     "cmp": "45317",
  //     "rne": "21049",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-70.png"
  //   },
  //   {
  //     "nombre": "DR SOTO INGA GERSON ANDRE",
  //     "especialidad": "UROLOGIA GENERAL",
  //     "cmp": "072403",
  //     "rne": "046012",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-71.png"
  //   },
  //   {
  //     "nombre": "DR TICONA HUAROTO CESAR EDUARDO",
  //     "especialidad": "ENFERMEDADES INFECCIOSAS Y TROPICALES",
  //     "cmp": "061917",
  //     "rne": "032167",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-72.png"
  //   },
  //   {
  //     "nombre": "DR URIBE VILCARA ANDRES ALONSO",
  //     "especialidad": "UROLOGIA GENERAL",
  //     "cmp": "073070",
  //     "rne": "043341",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-73.png"
  //   },
  //   {
  //     "nombre": "DR VALLEJOS MUÑOZ ORLANDO OMAR",
  //     "especialidad": "MEDICINA FISICA Y REHABILITACION",
  //     "cmp": "20279",
  //     "rne": "20182",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-74.png"
  //   },
  //   {
  //     "nombre": "DR VALVERDE ZAVALETA CARLOS EDUARDO",
  //     "especialidad": "OTORRINOLARINGOLOGÍA",
  //     "cmp": "20140",
  //     "rne": "13407",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-75.png"
  //   },
  //   {
  //     "nombre": "DR VELASQUEZ ORELLANO EDGAR RICARDO",
  //     "especialidad": "OFTALMOLOGÍA",
  //     "cmp": "062616",
  //     "rne": "032323",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-76.png"
  //   },
  //   {
  //     "nombre": "DR VAN DYCK ARBULU HECTOR EDWARD",
  //     "especialidad": "CIRUGIA TORACICA Y CARDIOVASCULAR",
  //     "cmp": "27510",
  //     "rne": "011337",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-77.png"
  //   },
  //   {
  //     "nombre": "DR VELARDE MENDEZ MARCO MAURICIO",
  //     "especialidad": "CIRUGIA ONCOLOGIA DE MAMAS, TEJIDOS BLANDOS Y PIEL",
  //     "cmp": "037273",
  //     "rne": "023209",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-78.png"
  //   },
  //   {
  //     "nombre": "DR VELARDE NAVARRETE CARLOS",
  //     "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
  //     "cmp": "016846",
  //     "rne": "017803",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-79.png"
  //   },
  //   {
  //     "nombre": "DR VERA YAMAMOTO GIULIANO",
  //     "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
  //     "cmp": "058140",
  //     "rne": "30980",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-80.png"
  //   },
  //   {
  //     "nombre": "DR VICTOR DIAS LAJO",
  //     "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
  //     "cmp": "058140",
  //     "rne": "30980",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-81.png"
  //   },
  //   {
  //     "nombre": "DR VICTOR ROMAN PAITAN AMARO",
  //     "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
  //     "cmp": "058140",
  //     "rne": "30980",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-82.png"
  //   },
  //   {
  //     "nombre": "DR ZAPATER JOSE",
  //     "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
  //     "cmp": "058140",
  //     "rne": "30980",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-83.png"
  //   },
  //   {
  //     "nombre": "DRA ANDREA HELDT",
  //     "especialidad": "ENFERMEDADES INFECCIOSAS Y TROPICALES",
  //     "cmp": "061917",
  //     "rne": "032167",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-84.png"
  //   },
  //   {
  //     "nombre": "DRA ANGELES CADENILLAS LILIANA CARMEN",
  //     "especialidad": "UROLOGIA GENERAL",
  //     "cmp": "073070",
  //     "rne": "043341",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-85.png"
  //   },
  //   {
  //     "nombre": "DRA ANGULO LUNA HELEN ISABEL",
  //     "especialidad": "MEDICINA FISICA Y REHABILITACION",
  //     "cmp": "20279",
  //     "rne": "20182",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-86.png"
  //   },
  //   {
  //     "nombre": "DRA ARIZOLA BLUA LAURA ROCIO",
  //     "especialidad": "OTORRINOLARINGOLOGÍA",
  //     "cmp": "20140",
  //     "rne": "13407",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-87.png"
  //   },
  //   {
  //     "nombre": "DRA BECERRA VALDÉS CARLA",
  //     "especialidad": "OFTALMOLOGÍA",
  //     "cmp": "062616",
  //     "rne": "032323",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-88.png"
  //   },
  //   {
  //     "nombre": "DRA BERNALES ZAVALA KELLY RUTH",
  //     "especialidad": "GINECOLOGIA Y OBSTETRICIA",
  //     "cmp": "052327",
  //     "rne": "032932",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-89.png"
  //   },
  //   {
  //     "nombre": "DRA BOZZO PANCORVO TANET GLENDA",
  //     "especialidad": "ODONTOLOGIA",
  //     "cmp": "19521",
  //     "rne": "023209",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-90.png"
  //   },
  //   {
  //     "nombre": "DRA CALDERON ANTICONA MONICA JACKELIN",
  //     "especialidad": "ONCOLOGIA MEDICA",
  //     "cmp": "040313",
  //     "rne": "021654",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-91.png"
  //   },
  //   {
  //     "nombre": "DRA CAMACHO VILLANUEVA DORA KATIA",
  //     "especialidad": "GINECOLOGIA Y OBSTETRICIA",
  //     "cmp": "36029",
  //     "rne": "17829",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-92.png"
  //   },
  //   {
  //     "nombre": "DRA TEJADA CHAVARRY DIANA PAOLA",
  //     "especialidad": "GINECOLOGIA Y OBSTETRICIA",
  //     "cmp": "080852",
  //     "rne": "049841",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-93.png"
  //   },
  //   {
  //     "nombre": "DRA FLORES SIERRA MELVA",
  //     "especialidad": "MEDICINA FISICA Y REHABILITACION",
  //     "cmp": "012417",
  //     "rne": "005054",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-94.png"
  //   },
  //   {
  //     "nombre": "DRA HIDALGO GUARNIZ MEYLIN ZOLSI",
  //     "especialidad": "NEUROLOGÍA",
  //     "cmp": "064171",
  //     "rne": "035463",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-95.png"
  //   },
  //   {
  //     "nombre": "DRA LA ROSA CANALES MILAGROS",
  //     "especialidad": "NUTRICION",
  //     "cmp": "",
  //     "rne": "001092",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-96.png"
  //   },
  //   {
  //     "nombre": "DRA FIERRO FALCON ELKA LORENA",
  //     "especialidad": "DERMATOLOGIA",
  //     "cmp": "26093",
  //     "rne": "15323",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-97.png"
  //   },
  //   {
  //     "nombre": "DRA LUNA WILSON CARLA",
  //     "especialidad": "NEUMOLOGÍA",
  //     "cmp": "48960",
  //     "rne": "27345",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-98.png"
  //   },
  //   {
  //     "nombre": "DRA MALCA VASQUEZ JENNY",
  //     "especialidad": "RADIOTERAPIA",
  //     "cmp": "058905",
  //     "rne": "032857",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-99.png"
  //   },
  //   {
  //     "nombre": "PERALTA CONCHA MARIA GUADALUPE",
  //     "especialidad": "OFTALMOLOGÍA",
  //     "cmp": "062616",
  //     "rne": "032323",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-100.png"
  //   },
  //   {
  //     "nombre": "MORANTE CRUZ ZAIDA DENISSE",
  //     "especialidad": "ONCOLOGÍA MÉDICA",
  //     "cmp": "048899",
  //     "rne": "28500",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-101.png"
  //   },
  //   {
  //     "nombre": "DRA MUÑOZ QUISPE NANCY ELENA",
  //     "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
  //     "cmp": "33370",
  //     "rne": "017328",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-102.png"
  //   },
  //   {
  //     "nombre": "BOZZO PANCORVO ORIANA",
  //     "especialidad": "ODONTOLOGIA",
  //     "cmp": "",
  //     "rne": "25481",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-103.png"
  //   },
  //   {
  //     "nombre": "DRA PANDZIC SABA SHADYA",
  //     "especialidad": "MEDICINA GENERAL",
  //     "cmp": "100868",
  //     "rne": "",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-104.png"
  //   },
  //   {
  //     "nombre": "DRA PAREDES GUERRA GLORIA",
  //     "especialidad": "ONCOLOGIA PEDIATRICA",
  //     "cmp": "24398",
  //     "rne": "019350",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-105.png"
  //   },
  //   {
  //     "nombre": "DRA RAMIREZ MENDOZA NATHALY MARIAN",
  //     "especialidad": "MEDICINA INTERNA",
  //     "cmp": "079880",
  //     "rne": "033065",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-106.png"
  //   },
  //   {
  //     "nombre": "DRA. SANCHEZ ORTIZ JOANA PAMELA",
  //     "especialidad": "OFTALMOLOGIA ONCOLOGICA",
  //     "cmp": "65782",
  //     "rne": "S00369",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-107.png"
  //   },
  //   {
  //     "nombre": "DRA VENEGAS COELLO SANDRA MIRELLY",
  //     "especialidad": "HEMATOLOGÍA",
  //     "cmp": "071488",
  //     "rne": "043391",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-108.png"
  //   },
  //   {
  //     "nombre": "DRA SORRENTINO TIPACTI CARMEN ANGELINA",
  //     "especialidad": "GINECOLOGÍA Y OBSTETRICIA",
  //     "cmp": "76338",
  //     "rne": "32635",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-109.png"
  //   },
  //   {
  //     "nombre": "DRA TAIRO CERRON TESSY SHIRLEY",
  //     "especialidad": "NEUMOLOGÍA",
  //     "cmp": "48960",
  //     "rne": "27345",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-110.png"
  //   },
  //   {
  //     "nombre": "DRA TARA BRITTO SUSANA LUISA",
  //     "especialidad": "Endocrinología",
  //     "cmp": "21710",
  //     "rne": "009440",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-111.png"
  //   },
  //   {
  //     "nombre": "DRA TEJADA SILVA CLAUDIA PAMELA",
  //     "especialidad": "CIRUGIA ONCOLOGICA",
  //     "cmp": "055858",
  //     "rne": "31005",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-112.png"
  //   },
  //   {
  //     "nombre": "DRA VARGAS SALDAÑA MARIA INES PAULLETE",
  //     "especialidad": "CIRUGÍA PLÁSTICA Y REPARADORA",
  //     "cmp": "60646",
  //     "rne": "34630",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-113.png"
  //   },
  //   {
  //     "nombre": "DRA VASQUEZ MEDINA MIRTHA JIMENA",
  //     "especialidad": "GINECOLOGIA Y OBSTETRICIA",
  //     "cmp": "08859",
  //     "rne": "049865",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-114.png"
  //   },
  //   {
  //     "nombre": "VILLALOBOS RIOS MARGARITA DEL CARMEN",
  //     "especialidad": "MEDICINA GENERAL",
  //     "cmp": "084892",
  //     "rne": "",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-115.png"
  //   },
  //   {
  //     "nombre": "DRA VILLANUEVA YAVE ELSA CATALINA",
  //     "especialidad": "OTORRINOLARINGOLOGÍA",
  //     "cmp": "067030",
  //     "rne": "036410",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-116.png"
  //   }
  // ]
  originalDoctores: Doctor[] = [
    {
      "nombre": "AGUILAR COSME JORGE MARCELO",
      "especialidad": "RADIOLOGÍA",
      "cmp": "026465",
      "rne": "13976",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/026465.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "ALVA LA HOZ JUAN JOSE",
      "especialidad": "GASTROENTEROLOGÍA",
      "cmp": "028826",
      "rne": "018708",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/028826.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "ALVA PINTO ALEXIS MICHAELE",
      "especialidad": "UROLOGIA ",
      "cmp": "027856",
      "rne": "011507",
      "rne2": "025416",
      "especialidad2": "UROLOGIA ONCOLOGICA",
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/027856.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "ALVARADO HINOJOSA ABRAHAM AUGUSTO",
      "especialidad": "GASTROENTEROLOGÍA",
      "cmp": "019397",
      "rne": "012972",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/019397.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "ANGELES CADENILLAS LILIANA CARMEN",
      "especialidad": "ANESTESIOLOGÍA",
      "cmp": "041234",
      "rne": "029520",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/041234.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "ANGULO LUNA HELEN ISABEL",
      "especialidad": "OTORRINOLARINGOLOGÍA",
      "cmp": "065269",
      "rne": "037215",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/065269.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "APESTEGUI MORENO CRISTIAN",
      "especialidad": "CIRUGIA  DE CABEZA Y CUELLO",
      "cmp": "049597",
      "rne": "029310",
      "rne2": "031459",
      "especialidad2": "CIRUGIA ONCOLOGICA DE CABEZA Y CUELLO",
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/049597.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "ARAGON REATEGUI LUIS FELIPE",
      "especialidad": "ONCOLOGÍA MÉDICA",
      "cmp": "060591",
      "rne": "033583",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/060591.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "ARIZOLA BLUA LAURA ROCIO",
      "especialidad": "MEDICINA GENERAL",
      "cmp": "96451",
      "rne": undefined,
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/96451.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "ARROYO GARATE RODRIGO EDUARDO",
      "especialidad": "CIRUGIA DE COLON Y RECTO",
      "cmp": "073561",
      "rne": "041169",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/073561.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "ASMAT HUAMAN DANIEL GERARDO",
      "especialidad": "CIRUGIA ONCOLOGICA",
      "cmp": "62615",
      "rne": "43666",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/62615.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "AYON SEMINARIO JORGE EDUARDO",
      "especialidad": "RADIOLOGÍA",
      "cmp": "037724",
      "rne": "18375",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/037724.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "BARRENECHEA TARAZONA LUIS ALBERT",
      "especialidad": "CIRUGÍA PLÁSTICA Y REPARADORA",
      "cmp": "028944",
      "rne": "014934",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/028944.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "BECERRA VALDES CARLA",
      "especialidad": "CIRUGÍA DE CABEZA Y CUELLO",
      "cmp": "64485",
      "rne": "036720",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/64485.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "BERNALES ZAVALA KELLY RUTH",
      "especialidad": "GINECOLOGIA Y OBSTETRICIA",
      "cmp": "052327",
      "rne": "032932",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/052327.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "BERROSPI ESPINOZA FRANCISCO ENRIQUE MANUEL",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "cmp": "020901",
      "rne": "012323",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/020901.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "BOADA GOMEZ ADOLFO ANTONIO",
      "especialidad": "CARDIOLOGÍA",
      "cmp": "083905",
      "rne": "038699",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/083905.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "BOZZO PANCORVO ORIANA",
      "especialidad": "ODONTOLOGÍA",
      "cmp": undefined,
      "rne": undefined,
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/25481.png",
      "cnp": undefined,
      "cop": '25481',
      "cpsp": undefined
    },
    {
      "nombre": "BOZZO PANCORVO RENZO GIOVANNI",
      "especialidad": "GINECOLOGIA Y OBSTETRICIA",
      "cmp": "034431",
      "rne": "015822",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/034431.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "BOZZO PANCORVO TANET GLENDA",
      "especialidad": "ODONTOLOGÍA",
      "cmp": undefined,
      "rne": undefined,
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/19521.png",
      "cnp": undefined,
      "cop": "19521",
      "cpsp": undefined
    },
    {
      "nombre": "BOZZO PANCORVO WILFREDO CESAR",
      "especialidad": "CIRUGÍA GENERAL",
      "cmp": "032748",
      "rne": "016912",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/032748.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "CABANILLAS HUALPA ELI FABRIZIO",
      "especialidad": "HEMATOLOGÍA",
      "cmp": "067345",
      "rne": "036950",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/067345.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "CABRERA VEGA CARMEN SILVIA",
      "especialidad": "PSICOLOGÍA",
      "cmp": undefined,
      "rne": undefined,
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/2129.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": "2129"
    },
    {
      "nombre": "CALDERON ANTICONA MONICA JACKELIN",
      "especialidad": "ONCOLOGÍA MÉDICA",
      "cmp": "040313",
      "rne": "021654",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/040313.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "CALDERON MORALES JORGE WALTER",
      "especialidad": "GINECOLOGIA Y OBSTETRICIA",
      "cmp": "011209",
      "rne": "004690",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/011209.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "CALLUPE PEREZ JOSE FRANCISCO",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "cmp": "059502",
      "rne": "039729",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/059502.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "CALMET BERROCAL WILDER",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "cmp": "029983",
      "rne": "016655",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/029983.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "CANTELLA SUITO RAUL ALEJANDRO",
      "especialidad": "RADIOLOGÍA INTERVENCIONISTA",
      "cmp": "32343",
      "rne": "015684",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/32343.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "CARBAJAL TORRES JORGE ARMANDO",
      "especialidad": "CIRUGIA GENERAL",
      "cmp": "057393",
      "rne": "040854",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/057393.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "CARDENAS CCORA DE GALDOS ROXANA LUZ",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "cmp": "021914",
      "rne": "009788",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/021914.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "CARDENAS DEL CARPIO HERBERT AURELIO",
      "especialidad": "RADIOTERAPIA",
      "cmp": "035984",
      "rne": "24000",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/035984.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "CARDENAS GUTIERREZ JEAN CARLO JUNIOR",
      "especialidad": "CARDIOLOGÍA",
      "cmp": "059936",
      "rne": "049671",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/059936.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "CARDOZA JIMENEZ KENNLLY JOSSEPH",
      "especialidad": "ENDOCRINOLOGÍA",
      "cmp": "74776",
      "rne": "42805",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/74776.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "CASTILLO ELERA CHRISTIAN ERICH",
      "especialidad": "NEUROCIRUGÍA",
      "cmp": "068970",
      "rne": "044143",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/068970.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "CASTILLO HIDALGO LUIS IVAN",
      "especialidad": "MEDICINA INTENSIVA",
      "cmp": "70718",
      "rne": "040231",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/70718.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "CASTILLO ROMERO JORGE ALBERTO",
      "especialidad": "CIRUGIA ONCOLOGICA",
      "cmp": "83038",
      "rne": "035230",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/83038.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "CASTILLO VALDEZ LUIS ENRIQUE",
      "especialidad": "ONCOLOGÍA MÉDICA",
      "cmp": "033502",
      "rne": "017201",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/033502.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "CASTRO OLIDEN VICTOR ORLANDO",
      "especialidad": "ONCOLOGÍA MÉDICA",
      "cmp": "031518",
      "rne": "16102",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/031518.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "CENTENO SERRANO LUIS ANDRE",
      "especialidad": "MEDICINA GENERAL",
      "cmp": "076730",
      "rne": undefined,
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/076730.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "CERNA VEGA LUIS ELMER",
      "especialidad": "CIRUGÍA GENERAL",
      "cmp": "025178",
      "rne": "012353",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/025178.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "CHAVARRY STECHMANN MARY ANN",
      "especialidad": "NUTRICION",
      "cmp": undefined,
      "rne": undefined,
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/9781.png",
      "cnp": "9781",
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "CHUQUILLANQUI LLIMPE JORGE ALBERTO",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "cmp": "041748",
      "rne": "018591",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/041748.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "CHUQUISUTA ANAMARIA RAUL RICARDO",
      "especialidad": "CIRUGIA ONCOLOGICA DE MAMA Y TEJIDOS BLANDOS",
      "cmp": "073489",
      "rne": "044994",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/073489.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "CONCEPCION CARHUANCHO WILLIAM ENRIQUE",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "cmp": "032812",
      "rne": "016310",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/032812.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "CONDEZO SANTANA HAMHNER HESSELL",
      "especialidad": "CARDIOLOGÍA",
      "cmp": "081186",
      "rne": "049786",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/081186.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "CORDOVA MATTA NEDDY BRIGITTE",
      "especialidad": "MEDICINA GENERAL",
      "cmp": "089370",
      "rne": undefined,
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/089370.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "CRUZ HUALPA KAREN YOSHIRA",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "cmp": "76024",
      "rne": "43269",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/76024.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "CRUZADO SANCHEZ DEIVY ROBERT",
      "especialidad": "OFTALMOLOGIA",
      "cmp": "049963",
      "rne": "023405",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/049963.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "CUEVA AGUIRRE , GUSTAVO",
      "especialidad": "MEDICINA INTENSIVA",
      "cmp": "029120",
      "rne": "016525",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/029120.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "CUNZA PAREDES JAIME",
      "especialidad": "CARDIOLOGÍA",
      "cmp": "031899",
      "rne": "014950",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/031899.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "DE LA CRUZ SACASQUI MIGUEL ANGEL",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "cmp": "030592",
      "rne": "018018",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/030592.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "DE LA FUENTE CHAVEZ GARCIA ENRIQUE",
      "especialidad": "UROLOGIA GENERAL",
      "cmp": "007563",
      "rne": "005159",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/007563.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "DE LA GUERRA PANCORVO ALBERTO JOSE",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "cmp": "026178",
      "rne": "021963",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/026178.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "DEL CARPIO HERRERA DAVID ROLANDO",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "cmp": "032070",
      "rne": "017087",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/032070.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "DELGADO MENDOZA LUIS ENRIQUE",
      "especialidad": "NEUROCIRUGÍA",
      "cmp": "025499",
      "rne": "011910",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/025499.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "DELGADO PINEDO ANGELA CONSUELO",
      "especialidad": "MEDICINA INTERNA",
      "cmp": "026414",
      "rne": "015383",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/026414.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "DEZA RUIZ PEDRO ENRIQUE",
      "especialidad": "NEUROCIRUGÍA",
      "cmp": "30694",
      "rne": "18649",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/30694.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "DIAZ FLORES CARLOS MIGUEL",
      "especialidad": "MEDICINA INTENSIVA",
      "cmp": "024317",
      "rne": "011681",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/024317.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "DIAZ LAJO VICTOR",
      "especialidad": "CIRUGÍA GENERAL",
      "cmp": "062387",
      "rne": "032327",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/062387.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "DIAZ PEREZ GILMER",
      "especialidad": "CIRUGIA GENERAL",
      "cmp": "036128",
      "rne": "016861",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/036128.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "DIAZ RUIZ ROSA ISABEL",
      "especialidad": "GINECOLOGIA Y OBSTETRICIA",
      "cmp": "030588",
      "rne": "014457",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/030588.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "ERRASTI DIAZ SURIEL",
      "especialidad": "HEMATOLOGÍA",
      "cmp": "070145",
      "rne": "030901",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/070145.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "ESPEJO ROMERO ELAR",
      "especialidad": "UROLOGIA ",
      "cmp": "033518",
      "rne": "018804",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/033518.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "ESPEJO VALENCIA KARINNA DEL ROSARIO",
      "especialidad": "INMUNOLOGIA Y REUMATOLOGÍA",
      "cmp": "039062",
      "rne": "021365",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/039062.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "ESPILCO HARO JONATAN JULIO LUIS",
      "especialidad": "MEDICINA GENERAL",
      "cmp": "081509",
      "rne": undefined,
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/081509.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "ESTELA DELGADO ELSA BETZABE",
      "especialidad": "RADIOLOGÍA",
      "cmp": "034033",
      "rne": "017260",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/034033.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "ESTRADA MORA ADRIAN ARMANDO",
      "especialidad": "RADIOLOGÍA",
      "cmp": "029519",
      "rne": "014295",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/029519.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "FEIJOO MENDOZA RAFAEL ENRIQUE",
      "especialidad": "MEDICINA GENERAL",
      "cmp": "86744",
      "rne": undefined,
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/86744.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "FERNANDEZ PLACENCIA RAMIRO MANUEL",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "cmp": "056883",
      "rne": "30126",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/056883.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "FIERRO FALCON ELKA LORENA",
      "especialidad": "DERMATOLOGÍA",
      "cmp": "26093",
      "rne": "15323",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/26093.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "FLORES DULANTO CESAR ALEJANDRO",
      "especialidad": "ANESTESIOLOGÍA",
      "cmp": "034492",
      "rne": "016122",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/034492.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "FLORES SIERRA MELVA",
      "especialidad": "MEDICINA FISICA Y REHABILITACION",
      "cmp": "012417",
      "rne": "005054",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/012417.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "GARCES CASTRE MILKO RAPHAEL",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "cmp": "029663",
      "rne": "014655",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/029663.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "GARCIA CARPIO MILAGROS GRACIELA",
      "especialidad": "MEDICINA FÍSICA Y REHABILITACIÓN",
      "cmp": "039326",
      "rne": "020849",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/039326.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "GARCIA CORROCHANO MEDINA PAMELA LYS",
      "especialidad": "NEUROCIRUGÍA",
      "cmp": "51148",
      "rne": "39309",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/51148.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "GARCIA FLORES MIGUEL ANGEL",
      "especialidad": "CIRUGIA ONCOLOGICA DE MAMA Y TEJIDOS BLANDOS",
      "cmp": "051390",
      "rne": "034875",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/051390.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "GARCIA ROJAS JORGE LUIS",
      "especialidad": "UROLOGIA GENERAL",
      "cmp": "036127",
      "rne": "019409",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/036127.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "GNADINGER ROCA STEFAN",
      "especialidad": "CIRUGÍA PLÁSTICA Y REPARADORA",
      "cmp": "63701",
      "rne": "051093",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/63701.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "GOMEZ CONTRERAS KAREN PAOLA",
      "especialidad": "NEUROCIRUGÍA",
      "cmp": "074744",
      "rne": "040777",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/074744.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "GONZALES LAGUADO ERICK ALEXANDER",
      "especialidad": "CIRUGÍA DE CABEZA Y CUELLO",
      "cmp": "67411",
      "rne": "35414",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/67411.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "GRANDA CHAUPIS EDGARDO ARTURO",
      "especialidad": "TRAUMATOLOGÍA Y ORTOPEDIA",
      "cmp": "034030",
      "rne": "028114",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/034030.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "GUEVARA JABILES ANDRES",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "cmp": "061915",
      "rne": "32858",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/061915.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "GUTIERREZ ZEBALLOS RAUL FERNANDO",
      "especialidad": "RADIOLOGÍA",
      "cmp": "033583",
      "rne": "017265",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/033583.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "HARO VARAS JUAN CARLOS",
      "especialidad": "ONCOLOGÍA MÉDICA",
      "cmp": "062138",
      "rne": "035152",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/062138.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "HERNANDEZ PEÑA ARTURO GABRIEL",
      "especialidad": "OFTALMOLOGÍA",
      "cmp": "37639",
      "rne": "017308",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/37639.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "HERRERA MORALES SANTIAGO ANTONIO",
      "especialidad": "MEDICINA INTERNA",
      "cmp": "029528",
      "rne": "035417",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/029528.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "HIDALGO GUARNIZ MEYLIN ZOLSI",
      "especialidad": "NEUROLOGÍA",
      "cmp": "064171",
      "rne": "035463",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/064171.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "HIDALGO RAMOS RENSON EDUARDO",
      "especialidad": "CIRUGÍA GENERAL",
      "cmp": "53437",
      "rne": "34338",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/53437.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "HINOJOSA OBANDO MAYDA",
      "especialidad": "GINECOLOGIA Y OBSTETRICIA",
      "cmp": "027015",
      "rne": "017583",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/027015.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "HOYLE CASTRO CONNAN EDWARD",
      "especialidad": "OTORRINOLARINGOLOGÍA",
      "cmp": "33580",
      "rne": "15557",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/33580.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "HUARIPATA ATALAYA PEDRO FAUSTO",
      "especialidad": "RADIOLOGÍA",
      "cmp": "042737",
      "rne": "024224",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/042737.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "LA ROSA CANALES MILAGROS",
      "especialidad": "NUTRICION",
      "cmp": undefined,
      "rne": undefined,
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/001092.png",
      "cnp": "001092",
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "LADD HUARACHI GUILLERMO SEGUNDO",
      "especialidad": "PSIQUIATRÍA",
      "cmp": "23318",
      "rne": "11957",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/23318.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "LADD VICUÑA GUILLERMO",
      "especialidad": "MEDICINA GENERAL",
      "cmp": "048309",
      "rne": undefined,
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/048309.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "LESCANO BRAVO CARLOS",
      "especialidad": "PSICOLOGIA ONCOLOGICA",
      "cmp": undefined,
      "rne": undefined,
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/5623.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": "5623"
    },
    {
      "nombre": "LI VALENCIA MIGUEL ROBERTO",
      "especialidad": "CIRUGÍA GENERAL",
      "cmp": "027037",
      "rne": "011697",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/027037.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "LIENDO LIENDO CESAR ARTURO",
      "especialidad": "NEFROLOGÍA",
      "cmp": "009232",
      "rne": "11093",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/009232.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "LINARES ZELAYA RICARDO ARTURO",
      "especialidad": "MEDICINA INTERNA",
      "cmp": "028203",
      "rne": "015291",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/028203.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "LIU BEJARANO HUMBERTO",
      "especialidad": "GASTROENTEROLOGÍA",
      "cmp": "046739",
      "rne": "021569",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/046739.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "LOAYZA FERNANDEZ DE BACA CHRISTIAN DANIEL",
      "especialidad": "CIRUGÍA DE CABEZA Y CUELLO",
      "cmp": "55852",
      "rne": "27286",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/55852.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "LOPEZ BLANCO ALDO",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "cmp": "039415",
      "rne": "020707",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/039415.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "LOZADA RAMIREZ JORGE LUIS",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "cmp": "017290",
      "rne": "007559",
      "rne2": "007887",
      "especialidad2": "CIRUGÍA ONCOLÓGICA",
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/017290.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "LUNA CYDEJKO JUAN CARLOS",
      "especialidad": "CIRUGÍA GENERAL",
      "cmp": "040305",
      "rne": "024034",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/040305.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "LUQUE VASQUEZ CARLOS EMILIO",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "cmp": "025255",
      "rne": "011990",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/025255.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "MACO CHAVEZ LORENZO GERALD",
      "especialidad": "ONCOLOGÍA MÉDICA",
      "cmp": "067588",
      "rne": "041152",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/067588.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "MALCA VASQUEZ JENNY",
      "especialidad": "RADIOTERAPIA",
      "cmp": "058905",
      "rne": "032857",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/058905.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "MANNARELLI CAVAGNARI ALFIERI ADOLFO",
      "especialidad": "TRAUMATOLOGÍA Y ORTOPEDIA",
      "cmp": "008917",
      "rne": "012996",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/008917.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "MANSILLA PRADA LUIS",
      "especialidad": "PSICOLOGÍA",
      "cmp": undefined,
      "rne": undefined,
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/28958.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": "28958"
    },
    {
      "nombre": "MARES MOROTE CARLOS ALFREDO",
      "especialidad": "CIRUGÍA GENERAL",
      "cmp": "031666",
      "rne": "014299",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/031666.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "MARQUEZ DIAZ LUIS ALBERTO",
      "especialidad": "NEUROCIRUGÍA",
      "cmp": "031238",
      "rne": "016834",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/031238.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "MARQUILLO ROMERO JAVIER RENATO",
      "especialidad": "UROLOGIA",
      "cmp": "41956",
      "rne": "024277",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/41956.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "MARTINEZ SAMANIEGO FRANCIS",
      "especialidad": "OTORRINOLARINGOLOGÍA",
      "cmp": "59833",
      "rne": "28886",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/59833.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "MENDOZA DE LAMA GASTON WILMER",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "cmp": "026363",
      "rne": "014449",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/026363.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "MENDOZA RIVERA SAMANTHA ELISA",
      "especialidad": "MEDICO CIRUJANO",
      "cmp": "100877",
      "rne": undefined,
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/100877.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "MENDOZA RODRIGUEZ ERIKA",
      "especialidad": "RADIOLOGÍA",
      "cmp": "039327",
      "rne": "021484",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/039327.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "MENDOZA VENTURA CESAR AUGUSTO",
      "especialidad": "CIRUGÍA GENERAL",
      "cmp": "026115",
      "rne": "013233",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/026115.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "MENESES MONTOYA NELSON",
      "especialidad": "NUTRICION",
      "cmp": undefined,
      "rne": undefined,
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/009416.png",
      "cnp": "009416",
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "MEZA MONTOYA LUIS FERNANDO",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "cmp": "023391",
      "rne": "010152",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/023391.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "MEZZICH GUERRERO WALTER",
      "especialidad": "CIRUGIA TORACICA Y CARDIOVASCULAR",
      "cmp": "010616",
      "rne": "014013",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/010616.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "MIRANDA DELGADO OSCAR",
      "especialidad": "CIRUGÍA GENERAL",
      "cmp": "007636",
      "rne": "002011",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/007636.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "MIRANDA FLORES CARLOS ALFONSO",
      "especialidad": "NEUROLOGÍA",
      "cmp": "030274",
      "rne": "016928",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/030274.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "MORANTE CRUZ ZAIDA DENISSE",
      "especialidad": "ONCOLOGÍA MÉDICA",
      "cmp": "048899",
      "rne": "28500",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/048899.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "MORANTE DEZA CARLOS MANUEL",
      "especialidad": "UROLOGIA",
      "cmp": "015360",
      "rne": "15229",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/015360.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "MUNIVE HUARI CARLOS ORLANDO",
      "especialidad": "ONCOLOGÍA MÉDICA",
      "cmp": "34932",
      "rne": "022164",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/34932.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "MUÑOZ QUISPE MIGUEL ANGEL",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "cmp": "62380",
      "rne": "043074",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/62380.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "MUÑOZ QUISPE NANCY ELENA",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "cmp": "033370",
      "rne": "017328",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/033370.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "NICOLICH LUQUE FLAVIO LUIS",
      "especialidad": "CIRUGÍA PLÁSTICA Y REPARADORA",
      "cmp": "21341",
      "rne": "1101",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/21341.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "NIETO YRIGOIN KEVIN ALBERTH",
      "especialidad": "CIRUGÍA GENERAL",
      "cmp": "088645",
      "rne": "049954",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/088645.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "NUÑEZ VILLALBA ELOY CLEMENTE",
      "especialidad": "ANESTESIOLOGÍA",
      "cmp": "018463",
      "rne": "008306",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/018463.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "OJEDA MEDINA LUIS",
      "especialidad": "NEUROCIRUGÍA",
      "cmp": "27269",
      "rne": "018477",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/27269.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "OLAECHEA MATTO CARLOS ERNESTO",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "cmp": "029918",
      "rne": "015679",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/029918.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "OTOYA LOPEZ MIGUEL ANGEL",
      "especialidad": "ANESTESIOLOGÍA",
      "cmp": "31576",
      "rne": "17017",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/31576.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "OVIEDO LEYVA PABLO RICARDO",
      "especialidad": "MEDICINA INTERNA",
      "cmp": "029705",
      "rne": "016913",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/029705.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "PAITAN AMARO VICTOR ROMAN",
      "especialidad": "ONCOLOGÍA MÉDICA",
      "cmp": "059644",
      "rne": "032252",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/059644.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "PALACIOS FLORES JOSE ALEJANDRO",
      "especialidad": "MEDICINA GENERAL",
      "cmp": "76926",
      "rne": undefined,
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/76926.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "PANDZIC SABA SAMIR ALEJANDRO",
      "especialidad": "MEDICINA GENERAL",
      "cmp": "100869",
      "rne": undefined,
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/100869.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "PANDZIC SABA SHADYA",
      "especialidad": "MEDICINA GENERAL",
      "cmp": "100868",
      "rne": undefined,
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/100868.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "PAREDES GALVEZ KORI CHASKA",
      "especialidad": "CIRUGÍA GENERAL",
      "cmp": "038707",
      "rne": "021200",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/038707.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "PAREDES GUERRA GLORIA",
      "especialidad": "PEDIATRIA",
      "cmp": "24398",
      "rne": "013238",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/24398.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "PAREDES PEREZ NOE NAPOLEON",
      "especialidad": "GINECOLOGIA Y OBSTETRICIA",
      "cmp": "022662",
      "rne": "009153",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/022662.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "PAREDES SALAZAR MARCO ANTONIO",
      "especialidad": "CIRUGIA ONCOLOGICA DE MAMA Y TEJIDOS BLANDOS",
      "cmp": "060592",
      "rne": "034789",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/060592.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "PAREDES TORRES OSCAR RICARDO",
      "especialidad": "CIRUGIA ONCOLOGICA",
      "cmp": "64692",
      "rne": "40553",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/64692.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "PATIñO SEDANO NICOLAY PABLO",
      "especialidad": "MEDINA GENERAL",
      "cmp": "75182",
      "rne": undefined,
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/75182.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "PEDRESCHI MONTES EDUARDO ANTONIO",
      "especialidad": "CIRUGÍA GENERAL",
      "cmp": "009933",
      "rne": "003283",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/009933.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "PERALTA CONCHA MARIA GUADALUPE",
      "especialidad": "GASTROENTEROLOGÍA",
      "cmp": "16632",
      "rne": "010367",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/16632.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "PRADA MEDINA CARLOS",
      "especialidad": "NEUMOLOGÍA",
      "cmp": "019829",
      "rne": "008916",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/019829.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "PULACHE MORALES CLAUDIA CAROLINA",
      "especialidad": "RADIOLOGÍA",
      "cmp": "057396",
      "rne": "038740",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/057396.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "QUINCHO ESPINOZA NESTOR JESUS",
      "especialidad": "GINECOLOGIA Y OBSTETRICIA",
      "cmp": "26388",
      "rne": "17088",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/26388.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "QUIÑONES PEREYRA CLAUDIA SOFIA",
      "especialidad": "GINECOLOGIA Y OBSTETRICIA",
      "cmp": "080740",
      "rne": "046471",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/080740.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "QUIROA VERA FERNANDO JAVIER",
      "especialidad": "UROLOGIA GENERAL Y  ONCOLOGICA",
      "cmp": "027205",
      "rne": "013540",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/027205.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "QUIROA VERA JORGE LUIS",
      "especialidad": "UROLOGIA",
      "cmp": "030722",
      "rne": "18511",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/030722.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "RAMIREZ CARNERO JOSE RAUL",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "cmp": "025424",
      "rne": "011853",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/025424.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "RAMIREZ MENDOZA NATHALY MARIAN",
      "especialidad": "INFECTOLOGÍA",
      "cmp": "079880",
      "rne": "033066",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/079880.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "REYES VALDIVIA ERICK ALEXANDER",
      "especialidad": "CIRUGÍA GENERAL",
      "cmp": "074345",
      "rne": "040713",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/074345.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "REYNA LOAYZA JAVIER EDUARDO",
      "especialidad": "UROLOGIA GENERAL",
      "cmp": "030138",
      "rne": "018260",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/030138.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "RICSE CHAUPIS HECTOR",
      "especialidad": "MEDICINA INTERNA",
      "cmp": "56862",
      "rne": "036669",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/56862.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "RIVERA CHIRINOS ALBERTO DIONISIO",
      "especialidad": "GINECOLOGIA Y OBSTETRICIA",
      "cmp": "032644",
      "rne": "017267",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/032644.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "RIVERA MORON LESLIE PRISCILLA",
      "especialidad": "GINECOLOGIA Y OBSTETRICIA",
      "cmp": "058426",
      "rne": "034609",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/058426.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "RIVERA TORRES JULIO",
      "especialidad": "CIRUGIA TORACICA Y CARDIOVASCULAR",
      "cmp": "032125",
      "rne": "016929",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/032125.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "RODRIGUEZ GUTARRA NICANOR ALBERTO",
      "especialidad": "UROLOGIA",
      "cmp": "025867",
      "rne": "013271",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/025867.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "ROJAS LA TORRE JUAN DE DIOS",
      "especialidad": "GINECOLOGIA Y OBSTETRICIA",
      "cmp": "034306",
      "rne": "015891",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/034306.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "RUIZ AGUILAR NEPTON VICTOR DAVID",
      "especialidad": "UROLOGIA GENERAL",
      "cmp": "54841",
      "rne": "025722",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/54841.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "RUIZ CARBAJAL MARIA EUGENIA",
      "especialidad": "CIRUGÍA PLÁSTICA Y REPARADORA",
      "cmp": "029662",
      "rne": "015710",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/029662.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "RUIZ FIGUEROA ELOY FRANCISCO",
      "especialidad": "ONCOLOGIA QUIRURGICA",
      "cmp": "14112",
      "rne": "006942",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/14112.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "SAAVEDRA SOBRADOS PATRICIA JANETH",
      "especialidad": "MEDICINA NUCLEAR",
      "cmp": "031234",
      "rne": "020096",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/031234.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "SAL Y ROSAS ROSALES YINA ELVIRA",
      "especialidad": "ANESTESIOLOGÍA",
      "cmp": "075138",
      "rne": "042904",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/075138.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "SALAS HURTADO ABRAHAM",
      "especialidad": "CIRUGIA ONCOLOGICA DE CABEZA Y CUELLO",
      "cmp": "017072",
      "rne": "018118",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/017072.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "SALAZAR SALAZAR DARWIN VALENTIN",
      "especialidad": "TRAUMATOLOGÍA Y ORTOPEDIA",
      "cmp": "45317",
      "rne": "21049",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/45317.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "SALINAS PONCE JOSE CARLOS",
      "especialidad": "HEMATOLOGÍA",
      "cmp": "039876",
      "rne": "024398",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/039876.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "SANCHEZ PAREDES DANTE EDUARDO",
      "especialidad": "ONCOLOGÍA MÉDICA",
      "cmp": "032890",
      "rne": "019488",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/032890.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "SANDOVAL JAUREGUI JAVIER OSCAR",
      "especialidad": "CIRUGIA GENERAL",
      "cmp": "017934",
      "rne": "07862",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/017934.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "SEIJAS HIDALGO MC-BRYAM LWIS",
      "especialidad": "MEDICO CIRUJANO",
      "cmp": "092863",
      "rne": undefined,
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/092863.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "SEVILLANO JIMENEZ ANGELICA",
      "especialidad": "GASTROENTEROLOGÍA",
      "cmp": "034346",
      "rne": "019436",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/034346.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "SORIA LOPEZ VICTOR HUMBERTO",
      "especialidad": "CIRUGÍA GENERAL",
      "cmp": "028205",
      "rne": "013759",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/028205.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "SORRENTINO TIPACTI CARMEN ANGELINA",
      "especialidad": "GINECOLOGIA Y OBSTETRICIA",
      "cmp": "76338",
      "rne": "32635",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/76338.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "SOTO INGA GERSON ANDRE",
      "especialidad": "UROLOGIA GENERAL",
      "cmp": "072403",
      "rne": "046012",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/072403.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "SULLON OLAYA JOSE VICTOR",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "cmp": "021340",
      "rne": "16668",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/021340.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "TAIRO CERRON TESSY SHIRLEY",
      "especialidad": "MEDICINA NUCLEAR",
      "cmp": "071549",
      "rne": "040367",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/071549.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "TARA BRITTO SUSANA LUISA",
      "especialidad": "ENDOCRINOLOGÍA",
      "cmp": "21710",
      "rne": "009440",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/21710.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "TEJADA CHAVARRY DIANA PAOLA",
      "especialidad": "GINECOLOGIA Y OBSTETRICIA",
      "cmp": "080852",
      "rne": "049841",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/080852.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "TEODORO INOCENTE ANTONIO",
      "especialidad": "CARDIOLOGÍA",
      "cmp": "036428",
      "rne": "38938",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/036428.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "TICONA HUAROTO CESAR EDUARDO",
      "especialidad": "ENFERMEDADES INFECCIOSAS Y TROPICALES",
      "cmp": "061917",
      "rne": "032167",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/061917.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "TRUJILLO ALARCON RAFAEL",
      "especialidad": "CIRUGIA PLASTICA",
      "cmp": "038318",
      "rne": "019484",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/038318.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "URIBE VILCARA ANDRES ALONSO",
      "especialidad": "UROLOGIA GENERAL",
      "cmp": "073070",
      "rne": "043341",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/073070.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "URQUIZO SORIANO JUAN ALEJANDRO",
      "especialidad": "ANESTESIOLOGÍA",
      "cmp": "018635",
      "rne": "15863",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/018635.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "VALDIVIA FRANCO HENRY MODESTO",
      "especialidad": "GINECOLOGIA ONCOLOGICA",
      "cmp": "033284",
      "rne": "019689",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/033284.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "VALLEJOS MUÑOZ ORLANDO OMAR",
      "especialidad": "MEDICINA FISICA Y REHABILITACION",
      "cmp": "20279",
      "rne": "20182",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/20279.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "VALVERDE ZAVALETA CARLOS EDUARDO",
      "especialidad": "OTORRINOLARINGOLOGÍA",
      "cmp": "20140",
      "rne": "13407",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/20140.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "VAN DYCK ARBULU HECTOR EDWARD",
      "especialidad": "CIRUGIA TORACICA Y CARDIOVASCULAR",
      "cmp": "27510",
      "rne": "011337",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/27510.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "VARGAS SALDAÑA MARIA INES PAULLETE",
      "especialidad": "CIRUGÍA PLÁSTICA Y REPARADORA",
      "cmp": "60646",
      "rne": "34630",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/60646.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "VASQUEZ MEDINA MIRTHA JIMENA",
      "especialidad": "GINECOLOGIA Y OBSTETRICIA",
      "cmp": "088559",
      "rne": "49865",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/088559.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "VASQUEZ MESIAS MARVIN LEVI",
      "especialidad": "MEDICO CIRUJANO",
      "cmp": "055294",
      "rne": undefined,
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/055294.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "VELARDE MENDEZ MARCO MAURICIO",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "cmp": "037273",
      "rne": "017573",
      "rne2": "023209",
      "especialidad2": "CIRUGIA ONCOLOGIA DE MAMAS, TEJ",
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/037273.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "VELARDE NAVARRETE CARLOS",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "cmp": "016846",
      "rne": "017803",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/016846.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "VELASQUEZ HAWKINS CARLOS MIGUEL",
      "especialidad": "CIRUGÍA GENERAL",
      "cmp": "020915",
      "rne": "011021",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/020915.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "VELASQUEZ ORELLANO EDGAR RICARDO",
      "especialidad": "OFTALMOLOGÍA",
      "cmp": "062616",
      "rne": "032323",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/062616.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "VENEGAS COELLO SANDRA MIRELLY",
      "especialidad": "HEMATOLOGÍA",
      "cmp": "071488",
      "rne": "043391",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/071488.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "VENTOSILLA VILLANUEVA RONALD",
      "especialidad": "ONCOLOGÍA MÉDICA",
      "cmp": "40238",
      "rne": "29914",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/40238.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "VERA YAMAMOTO GIULIANO",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "cmp": "031661",
      "rne": "015507",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/031661.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "VIDAURRE ROJAS TATIANA",
      "especialidad": "ONCOLOGÍA MÉDICA",
      "cmp": "033478",
      "rne": "015147",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/033478.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "VILLANUEVA YAVE ELSA CATALINA",
      "especialidad": "OTORRINOLARINGOLOGÍA",
      "cmp": "067030",
      "rne": "036410",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/067030.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    },
    {
      "nombre": "ZAPATER AGUERO JOSE CARLOS MANUEL",
      "especialidad": "NEUROCIRUGÍA",
      "cmp": "16413",
      "rne": "007228",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/16413.png",
      "cnp": undefined,
      "cop": undefined,
      "cpsp": undefined
    }
  ];

  // Lista que se mostrará y paginará (resultado del filtro)
  doctores: Doctor[] = [];

  // NUEVAS PROPIEDADES PARA EL FILTRO
  searchTerm: string = '';
  selectedSpecialty: string = 'Elige categoría';
  allSpecialties: string[] = [];
  // FIN NUEVAS PROPIEDADES

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
    // 1. Asignar fotos a la lista original (manteniendo su lógica)
    // let index = 0;
    // this.originalDoctores.forEach(d => {
    //   index++;
    //   d.foto = 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-' + index + '.png'
    // });
    // console.log(this.originalDoctores)
    // 2. Extraer y ordenar las especialidades únicas para el filtro
    this.allSpecialties = Array.from(new Set(this.originalDoctores.map(d => d.especialidad))).sort();

    // 3. Inicializar la lista de doctores con todos los datos y reconstruir las páginas
    this.doctores = [...this.originalDoctores];
    this.rebuildPages();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['perPage']) this.rebuildPages();
  }

  /**
   * NUEVO MÉTODO: Se llama cuando cambia el input de búsqueda o el select de especialidad
   */
  onFilterChange() {
    this.filterDoctores();
    this.rebuildPages();
  }

  /**
   * NUEVO MÉTODO: Aplica la lógica de filtrado a la lista original
   */
  private filterDoctores() {
    let filtered = [...this.originalDoctores];

    // 1. Filtrar por término de búsqueda (nombre, especialidad o especialidad2)
    if (this.searchTerm && this.searchTerm.trim() !== '') {
      const term = this.searchTerm.trim().toLowerCase();
      filtered = filtered.filter(d =>
        d.nombre.toLowerCase().includes(term) ||
        d.especialidad.toLowerCase().includes(term) ||
        // **NUEVA CONDICIÓN AGREGADA**
        (d.especialidad2 && d.especialidad2.toLowerCase().includes(term))
      );
    }

    // 2. Filtrar por especialidad seleccionada (sin cambios)
    if (this.selectedSpecialty && this.selectedSpecialty !== 'Elige categoría' && this.selectedSpecialty.trim() !== '') {
      filtered = filtered.filter(d => d.especialidad === this.selectedSpecialty);
    }

    this.doctores = filtered;
  }

  private rebuildPages() {
    // La paginación usa la lista 'doctores' que ya está filtrada
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
      'https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/no-user.png';
  }
}