import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

type Genero = 'Hombre' | 'Mujer' | string;

export interface Doctor {
  id?: string | number;
  nombre: string;
  especialidad: string;
  cmp: string | undefined; // Permitir undefined
  rne: string | undefined; // Permitir undefined
  rne2: string | undefined; // Nuevo campo para RNE secundario
  especialidad2: string | undefined; // Nuevo campo para especialidad secundaria
  foto: string;
  cnp?: string | undefined; // Permitir undefined
  cop?: string | undefined; // Permitir undefined
  cpsp?: string | undefined; // Permitir undefined
  genero: Genero; // Permitir undefined
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

  // originalDoctores: Doctor[] = [
  //   {
  //     "nombre": "AGUILAR COSME JORGE MARCELO",
  //     "especialidad": "RADIOLOGÍA",
  //     "cmp": "026465",
  //     "rne": "13976",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/026465.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "ALVA LA HOZ JUAN JOSE",
  //     "especialidad": "GASTROENTEROLOGÍA",
  //     "cmp": "028826",
  //     "rne": "018708",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/028826.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "ALVA PINTO ALEXIS MICHAELE",
  //     "especialidad": "UROLOGIA ",
  //     "cmp": "027856",
  //     "rne": "011507",
  //     "rne2": "025416",
  //     "especialidad2": "UROLOGIA ONCOLOGICA",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/027856.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "ALVARADO HINOJOSA ABRAHAM AUGUSTO",
  //     "especialidad": "GASTROENTEROLOGÍA",
  //     "cmp": "019397",
  //     "rne": "012972",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/019397.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "ANGELES CADENILLAS LILIANA CARMEN",
  //     "especialidad": "ANESTESIOLOGÍA",
  //     "cmp": "041234",
  //     "rne": "029520",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/041234.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "ANGULO LUNA HELEN ISABEL",
  //     "especialidad": "OTORRINOLARINGOLOGÍA",
  //     "cmp": "065269",
  //     "rne": "037215",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/065269.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "APESTEGUI MORENO CRISTIAN",
  //     "especialidad": "CIRUGIA  DE CABEZA Y CUELLO",
  //     "cmp": "049597",
  //     "rne": "029310",
  //     "rne2": "031459",
  //     "especialidad2": "CIRUGIA ONCOLOGICA DE CABEZA Y CUELLO",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/049597.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   // {
  //   //   "nombre": "ARAGON REATEGUI LUIS FELIPE",
  //   //   "especialidad": "ONCOLOGÍA MÉDICA",
  //   //   "cmp": "060591",
  //   //   "rne": "033583",
  //   //   "rne2": undefined,
  //   //   "especialidad2": undefined,
  //   //   "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/060591.png",
  //   //   "cnp": undefined,
  //   //   "cop": undefined,
  //   //   "cpsp": undefined
  //   // },
  //   {
  //     "nombre": "ARIZOLA BLUA LAURA ROCIO",
  //     "especialidad": "MEDICINA GENERAL",
  //     "cmp": "96451",
  //     "rne": undefined,
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/96451.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "ARROYO GARATE RODRIGO EDUARDO",
  //     "especialidad": "CIRUGIA DE COLON Y RECTO",
  //     "cmp": "073561",
  //     "rne": "041169",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/073561.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   // {
  //   //   "nombre": "ASMAT HUAMAN DANIEL GERARDO",
  //   //   "especialidad": "CIRUGIA ONCOLOGICA",
  //   //   "cmp": "62615",
  //   //   "rne": "43666",
  //   //   "rne2": undefined,
  //   //   "especialidad2": undefined,
  //   //   "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/62615.png",
  //   //   "cnp": undefined,
  //   //   "cop": undefined,
  //   //   "cpsp": undefined
  //   // },
  //   {
  //     "nombre": "AYON SEMINARIO JORGE EDUARDO",
  //     "especialidad": "RADIOLOGÍA",
  //     "cmp": "037724",
  //     "rne": "18375",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/037724.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "BARRENECHEA TARAZONA LUIS ALBERT",
  //     "especialidad": "CIRUGÍA PLÁSTICA Y REPARADORA",
  //     "cmp": "028944",
  //     "rne": "014934",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/028944.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "BECERRA VALDES CARLA",
  //     "especialidad": "CIRUGÍA DE CABEZA Y CUELLO",
  //     "cmp": "64485",
  //     "rne": "036720",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/64485.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "BERNALES ZAVALA KELLY RUTH",
  //     "especialidad": "GINECOLOGIA Y OBSTETRICIA",
  //     "cmp": "052327",
  //     "rne": "032932",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/052327.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "BERROSPI ESPINOZA FRANCISCO ENRIQUE MANUEL",
  //     "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
  //     "cmp": "020901",
  //     "rne": "012323",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/020901.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "BOADA GOMEZ ADOLFO ANTONIO",
  //     "especialidad": "CARDIOLOGÍA",
  //     "cmp": "083905",
  //     "rne": "038699",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/083905.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "BOZZO PANCORVO ORIANA",
  //     "especialidad": "ODONTOLOGÍA",
  //     "cmp": undefined,
  //     "rne": undefined,
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/25481.png",
  //     "cnp": undefined,
  //     "cop": '25481',
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "BOZZO PANCORVO RENZO GIOVANNI",
  //     "especialidad": "GINECOLOGIA Y OBSTETRICIA",
  //     "cmp": "034431",
  //     "rne": "015822",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/034431.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "BOZZO PANCORVO TANET GLENDA",
  //     "especialidad": "ODONTOLOGÍA",
  //     "cmp": undefined,
  //     "rne": undefined,
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/19521.png",
  //     "cnp": undefined,
  //     "cop": "19521",
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "BOZZO PANCORVO WILFREDO CESAR",
  //     "especialidad": "CIRUGÍA GENERAL",
  //     "cmp": "032748",
  //     "rne": "016912",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/032748.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "CABANILLAS HUALPA ELI FABRIZIO",
  //     "especialidad": "HEMATOLOGÍA",
  //     "cmp": "067345",
  //     "rne": "036950",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/067345.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "CABRERA VEGA CARMEN SILVIA",
  //     "especialidad": "PSICOLOGÍA",
  //     "cmp": undefined,
  //     "rne": undefined,
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/2129.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": "2129"
  //   },
  //   {
  //     "nombre": "CALDERON ANTICONA MONICA JACKELIN",
  //     "especialidad": "ONCOLOGÍA MÉDICA",
  //     "cmp": "040313",
  //     "rne": "021654",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/040313.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "CALDERON MORALES JORGE WALTER",
  //     "especialidad": "GINECOLOGIA Y OBSTETRICIA",
  //     "cmp": "011209",
  //     "rne": "004690",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/011209.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "CALLUPE PEREZ JOSE FRANCISCO",
  //     "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
  //     "cmp": "059502",
  //     "rne": "039729",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/059502.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "CALMET BERROCAL WILDER",
  //     "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
  //     "cmp": "029983",
  //     "rne": "016655",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/029983.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "CANTELLA SUITO RAUL ALEJANDRO",
  //     "especialidad": "RADIOLOGÍA INTERVENCIONISTA",
  //     "cmp": "32343",
  //     "rne": "015684",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/32343.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   // {
  //   //   "nombre": "CARBAJAL TORRES JORGE ARMANDO",
  //   //   "especialidad": "CIRUGIA GENERAL",
  //   //   "cmp": "057393",
  //   //   "rne": "040854",
  //   //   "rne2": undefined,
  //   //   "especialidad2": undefined,
  //   //   "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/057393.png",
  //   //   "cnp": undefined,
  //   //   "cop": undefined,
  //   //   "cpsp": undefined
  //   // },
  //   {
  //     "nombre": "CARDENAS CCORA DE GALDOS ROXANA LUZ",
  //     "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
  //     "cmp": "021914",
  //     "rne": "009788",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/021914.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "CARDENAS DEL CARPIO HERBERT AURELIO",
  //     "especialidad": "RADIOTERAPIA",
  //     "cmp": "035984",
  //     "rne": "24000",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/035984.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "CARDENAS GUTIERREZ JEAN CARLO JUNIOR",
  //     "especialidad": "CARDIOLOGÍA",
  //     "cmp": "059936",
  //     "rne": "049671",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/059936.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "CARDOZA JIMENEZ KENNLLY JOSSEPH",
  //     "especialidad": "ENDOCRINOLOGÍA",
  //     "cmp": "74776",
  //     "rne": "42805",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/74776.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "CASTILLO ELERA CHRISTIAN ERICH",
  //     "especialidad": "NEUROCIRUGÍA",
  //     "cmp": "068970",
  //     "rne": "044143",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/068970.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "CASTILLO HIDALGO LUIS IVAN",
  //     "especialidad": "MEDICINA INTENSIVA",
  //     "cmp": "70718",
  //     "rne": "040231",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/70718.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "CASTILLO ROMERO JORGE ALBERTO",
  //     "especialidad": "CIRUGIA ONCOLOGICA",
  //     "cmp": "83038",
  //     "rne": "035230",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/83038.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   // {
  //   //   "nombre": "CASTILLO VALDEZ LUIS ENRIQUE",
  //   //   "especialidad": "ONCOLOGÍA MÉDICA",
  //   //   "cmp": "033502",
  //   //   "rne": "017201",
  //   //   "rne2": undefined,
  //   //   "especialidad2": undefined,
  //   //   "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/033502.png",
  //   //   "cnp": undefined,
  //   //   "cop": undefined,
  //   //   "cpsp": undefined
  //   // },
  //   {
  //     "nombre": "CASTRO OLIDEN VICTOR ORLANDO",
  //     "especialidad": "ONCOLOGÍA MÉDICA",
  //     "cmp": "031518",
  //     "rne": "16102",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/031518.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "CENTENO SERRANO LUIS ANDRE",
  //     "especialidad": "MEDICINA GENERAL",
  //     "cmp": "076730",
  //     "rne": undefined,
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/076730.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   // {
  //   //   "nombre": "CERNA VEGA LUIS ELMER",
  //   //   "especialidad": "CIRUGÍA GENERAL",
  //   //   "cmp": "025178",
  //   //   "rne": "012353",
  //   //   "rne2": undefined,
  //   //   "especialidad2": undefined,
  //   //   "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/025178.png",
  //   //   "cnp": undefined,
  //   //   "cop": undefined,
  //   //   "cpsp": undefined
  //   // },
  //   {
  //     "nombre": "CHAVARRY STECHMANN MARY ANN",
  //     "especialidad": "NUTRICION",
  //     "cmp": undefined,
  //     "rne": undefined,
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/9781.png",
  //     "cnp": "9781",
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "CHUQUILLANQUI LLIMPE JORGE ALBERTO",
  //     "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
  //     "cmp": "041748",
  //     "rne": "018591",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/041748.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   // {
  //   //   "nombre": "CHUQUISUTA ANAMARIA RAUL RICARDO",
  //   //   "especialidad": "CIRUGIA ONCOLOGICA DE MAMA Y TEJIDOS BLANDOS",
  //   //   "cmp": "073489",
  //   //   "rne": "044994",
  //   //   "rne2": undefined,
  //   //   "especialidad2": undefined,
  //   //   "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/073489.png",
  //   //   "cnp": undefined,
  //   //   "cop": undefined,
  //   //   "cpsp": undefined
  //   // },
  //   {
  //     "nombre": "CONCEPCION CARHUANCHO WILLIAM ENRIQUE",
  //     "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
  //     "cmp": "032812",
  //     "rne": "016310",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/032812.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "CONDEZO SANTANA HAMHNER HESSELL",
  //     "especialidad": "CARDIOLOGÍA",
  //     "cmp": "081186",
  //     "rne": "049786",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/081186.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "CORDOVA MATTA NEDDY BRIGITTE",
  //     "especialidad": "MEDICINA GENERAL",
  //     "cmp": "089370",
  //     "rne": undefined,
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/089370.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "CRUZ HUALPA KAREN YOSHIRA",
  //     "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
  //     "cmp": "76024",
  //     "rne": "43269",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/76024.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "CRUZADO SANCHEZ DEIVY ROBERT",
  //     "especialidad": "OFTALMOLOGIA",
  //     "cmp": "049963",
  //     "rne": "023405",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/049963.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "CUEVA AGUIRRE , GUSTAVO",
  //     "especialidad": "MEDICINA INTENSIVA",
  //     "cmp": "029120",
  //     "rne": "016525",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/029120.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "CUNZA PAREDES JAIME",
  //     "especialidad": "CARDIOLOGÍA",
  //     "cmp": "031899",
  //     "rne": "014950",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/031899.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "DE LA CRUZ SACASQUI MIGUEL ANGEL",
  //     "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
  //     "cmp": "030592",
  //     "rne": "018018",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/030592.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "DE LA FUENTE CHAVEZ GARCIA ENRIQUE",
  //     "especialidad": "UROLOGIA GENERAL",
  //     "cmp": "007563",
  //     "rne": "005159",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/007563.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "DE LA GUERRA PANCORVO ALBERTO JOSE",
  //     "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
  //     "cmp": "026178",
  //     "rne": "021963",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/026178.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   // {
  //   //   "nombre": "DEL CARPIO HERRERA DAVID ROLANDO",
  //   //   "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
  //   //   "cmp": "032070",
  //   //   "rne": "017087",
  //   //   "rne2": undefined,
  //   //   "especialidad2": undefined,
  //   //   "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/032070.png",
  //   //   "cnp": undefined,
  //   //   "cop": undefined,
  //   //   "cpsp": undefined
  //   // },
  //   // {
  //   //   "nombre": "DELGADO MENDOZA LUIS ENRIQUE",
  //   //   "especialidad": "NEUROCIRUGÍA",
  //   //   "cmp": "025499",
  //   //   "rne": "011910",
  //   //   "rne2": undefined,
  //   //   "especialidad2": undefined,
  //   //   "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/025499.png",
  //   //   "cnp": undefined,
  //   //   "cop": undefined,
  //   //   "cpsp": undefined
  //   // },
  //   // {
  //   //   "nombre": "DELGADO PINEDO ANGELA CONSUELO",
  //   //   "especialidad": "MEDICINA INTERNA",
  //   //   "cmp": "026414",
  //   //   "rne": "015383",
  //   //   "rne2": undefined,
  //   //   "especialidad2": undefined,
  //   //   "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/026414.png",
  //   //   "cnp": undefined,
  //   //   "cop": undefined,
  //   //   "cpsp": undefined
  //   // },
  //   {
  //     "nombre": "DEZA RUIZ PEDRO ENRIQUE",
  //     "especialidad": "NEUROCIRUGÍA",
  //     "cmp": "30694",
  //     "rne": "18649",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/30694.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   // {
  //   //   "nombre": "DIAZ FLORES CARLOS MIGUEL",
  //   //   "especialidad": "MEDICINA INTENSIVA",
  //   //   "cmp": "024317",
  //   //   "rne": "011681",
  //   //   "rne2": undefined,
  //   //   "especialidad2": undefined,
  //   //   "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/024317.png",
  //   //   "cnp": undefined,
  //   //   "cop": undefined,
  //   //   "cpsp": undefined
  //   // },
  //   {
  //     "nombre": "DIAZ LAJO VICTOR",
  //     "especialidad": "CIRUGÍA GENERAL",
  //     "cmp": "062387",
  //     "rne": "032327",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/062387.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "DIAZ PEREZ GILMER",
  //     "especialidad": "CIRUGIA GENERAL",
  //     "cmp": "036128",
  //     "rne": "016861",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/036128.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   // {
  //   //   "nombre": "DIAZ RUIZ ROSA ISABEL",
  //   //   "especialidad": "GINECOLOGIA Y OBSTETRICIA",
  //   //   "cmp": "030588",
  //   //   "rne": "014457",
  //   //   "rne2": undefined,
  //   //   "especialidad2": undefined,
  //   //   "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/030588.png",
  //   //   "cnp": undefined,
  //   //   "cop": undefined,
  //   //   "cpsp": undefined
  //   // },
  //   {
  //     "nombre": "ERRASTI DIAZ SURIEL",
  //     "especialidad": "HEMATOLOGÍA",
  //     "cmp": "070145",
  //     "rne": "030901",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/070145.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   // {
  //   //   "nombre": "ESPEJO ROMERO ELAR",
  //   //   "especialidad": "UROLOGIA ",
  //   //   "cmp": "033518",
  //   //   "rne": "018804",
  //   //   "rne2": undefined,
  //   //   "especialidad2": undefined,
  //   //   "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/033518.png",
  //   //   "cnp": undefined,
  //   //   "cop": undefined,
  //   //   "cpsp": undefined
  //   // },
  //   {
  //     "nombre": "ESPEJO VALENCIA KARINNA DEL ROSARIO",
  //     "especialidad": "INMUNOLOGIA Y REUMATOLOGÍA",
  //     "cmp": "039062",
  //     "rne": "021365",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/039062.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "ESPILCO HARO JONATAN JULIO LUIS",
  //     "especialidad": "MEDICINA GENERAL",
  //     "cmp": "081509",
  //     "rne": undefined,
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/081509.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   // {
  //   //   "nombre": "ESTELA DELGADO ELSA BETZABE",
  //   //   "especialidad": "RADIOLOGÍA",
  //   //   "cmp": "034033",
  //   //   "rne": "017260",
  //   //   "rne2": undefined,
  //   //   "especialidad2": undefined,
  //   //   "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/034033.png",
  //   //   "cnp": undefined,
  //   //   "cop": undefined,
  //   //   "cpsp": undefined
  //   // },
  //   // {
  //   //   "nombre": "ESTRADA MORA ADRIAN ARMANDO",
  //   //   "especialidad": "RADIOLOGÍA",
  //   //   "cmp": "029519",
  //   //   "rne": "014295",
  //   //   "rne2": undefined,
  //   //   "especialidad2": undefined,
  //   //   "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/029519.png",
  //   //   "cnp": undefined,
  //   //   "cop": undefined,
  //   //   "cpsp": undefined
  //   // },
  //   {
  //     "nombre": "FEIJOO MENDOZA RAFAEL ENRIQUE",
  //     "especialidad": "MEDICINA GENERAL",
  //     "cmp": "86744",
  //     "rne": undefined,
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/86744.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "FERNANDEZ PLACENCIA RAMIRO MANUEL",
  //     "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
  //     "cmp": "056883",
  //     "rne": "30126",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/056883.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "FIERRO FALCON ELKA LORENA",
  //     "especialidad": "DERMATOLOGÍA",
  //     "cmp": "26093",
  //     "rne": "15323",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/26093.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "FLORES DULANTO CESAR ALEJANDRO",
  //     "especialidad": "ANESTESIOLOGÍA",
  //     "cmp": "034492",
  //     "rne": "016122",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/034492.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "FLORES SIERRA MELVA",
  //     "especialidad": "MEDICINA FISICA Y REHABILITACION",
  //     "cmp": "012417",
  //     "rne": "005054",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/012417.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "GARCES CASTRE MILKO RAPHAEL",
  //     "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
  //     "cmp": "029663",
  //     "rne": "014655",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/029663.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   // {
  //   //   "nombre": "GARCIA CARPIO MILAGROS GRACIELA",
  //   //   "especialidad": "MEDICINA FÍSICA Y REHABILITACIÓN",
  //   //   "cmp": "039326",
  //   //   "rne": "020849",
  //   //   "rne2": undefined,
  //   //   "especialidad2": undefined,
  //   //   "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/039326.png",
  //   //   "cnp": undefined,
  //   //   "cop": undefined,
  //   //   "cpsp": undefined
  //   // },
  //   {
  //     "nombre": "GARCIA CORROCHANO MEDINA PAMELA LYS",
  //     "especialidad": "NEUROCIRUGÍA",
  //     "cmp": "51148",
  //     "rne": "39309",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/51148.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   // {
  //   //   "nombre": "GARCIA FLORES MIGUEL ANGEL",
  //   //   "especialidad": "CIRUGIA ONCOLOGICA DE MAMA Y TEJIDOS BLANDOS",
  //   //   "cmp": "051390",
  //   //   "rne": "034875",
  //   //   "rne2": undefined,
  //   //   "especialidad2": undefined,
  //   //   "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/051390.png",
  //   //   "cnp": undefined,
  //   //   "cop": undefined,
  //   //   "cpsp": undefined
  //   // },
  //   // {
  //   //   "nombre": "GARCIA ROJAS JORGE LUIS",
  //   //   "especialidad": "UROLOGIA GENERAL",
  //   //   "cmp": "036127",
  //   //   "rne": "019409",
  //   //   "rne2": undefined,
  //   //   "especialidad2": undefined,
  //   //   "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/036127.png",
  //   //   "cnp": undefined,
  //   //   "cop": undefined,
  //   //   "cpsp": undefined
  //   // },
  //   {
  //     "nombre": "GNADINGER ROCA STEFAN",
  //     "especialidad": "CIRUGÍA PLÁSTICA Y REPARADORA",
  //     "cmp": "63701",
  //     "rne": "051093",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/63701.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   // {
  //   //   "nombre": "GOMEZ CONTRERAS KAREN PAOLA",
  //   //   "especialidad": "NEUROCIRUGÍA",
  //   //   "cmp": "074744",
  //   //   "rne": "040777",
  //   //   "rne2": undefined,
  //   //   "especialidad2": undefined,
  //   //   "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/074744.png",
  //   //   "cnp": undefined,
  //   //   "cop": undefined,
  //   //   "cpsp": undefined
  //   // },
  //   {
  //     "nombre": "GONZALES LAGUADO ERICK ALEXANDER",
  //     "especialidad": "CIRUGÍA DE CABEZA Y CUELLO",
  //     "cmp": "67411",
  //     "rne": "35414",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/67411.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "GRANDA CHAUPIS EDGARDO ARTURO",
  //     "especialidad": "TRAUMATOLOGÍA Y ORTOPEDIA",
  //     "cmp": "034030",
  //     "rne": "028114",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/034030.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "GUEVARA JABILES ANDRES",
  //     "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
  //     "cmp": "061915",
  //     "rne": "32858",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/061915.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   // {
  //   //   "nombre": "GUTIERREZ ZEBALLOS RAUL FERNANDO",
  //   //   "especialidad": "RADIOLOGÍA",
  //   //   "cmp": "033583",
  //   //   "rne": "017265",
  //   //   "rne2": undefined,
  //   //   "especialidad2": undefined,
  //   //   "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/033583.png",
  //   //   "cnp": undefined,
  //   //   "cop": undefined,
  //   //   "cpsp": undefined
  //   // },
  //   {
  //     "nombre": "HARO VARAS JUAN CARLOS",
  //     "especialidad": "ONCOLOGÍA MÉDICA",
  //     "cmp": "062138",
  //     "rne": "035152",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/062138.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "HERNANDEZ PEÑA ARTURO GABRIEL",
  //     "especialidad": "OFTALMOLOGÍA",
  //     "cmp": "37639",
  //     "rne": "017308",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/37639.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "HERRERA MORALES SANTIAGO ANTONIO",
  //     "especialidad": "MEDICINA INTERNA",
  //     "cmp": "029528",
  //     "rne": "035417",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/029528.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "HIDALGO GUARNIZ MEYLIN ZOLSI",
  //     "especialidad": "NEUROLOGÍA",
  //     "cmp": "064171",
  //     "rne": "035463",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/064171.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "HIDALGO RAMOS RENSON EDUARDO",
  //     "especialidad": "CIRUGÍA GENERAL",
  //     "cmp": "53437",
  //     "rne": "34338",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/53437.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "HINOJOSA OBANDO MAYDA",
  //     "especialidad": "GINECOLOGIA Y OBSTETRICIA",
  //     "cmp": "027015",
  //     "rne": "017583",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/027015.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "HOYLE CASTRO CONNAN EDWARD",
  //     "especialidad": "OTORRINOLARINGOLOGÍA",
  //     "cmp": "33580",
  //     "rne": "15557",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/33580.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "HUARIPATA ATALAYA PEDRO FAUSTO",
  //     "especialidad": "RADIOLOGÍA",
  //     "cmp": "042737",
  //     "rne": "024224",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/042737.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "LA ROSA CANALES MILAGROS",
  //     "especialidad": "NUTRICION",
  //     "cmp": undefined,
  //     "rne": undefined,
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/001092.png",
  //     "cnp": "001092",
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "LADD HUARACHI GUILLERMO SEGUNDO",
  //     "especialidad": "PSIQUIATRÍA",
  //     "cmp": "23318",
  //     "rne": "11957",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/23318.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "LADD VICUÑA GUILLERMO",
  //     "especialidad": "MEDICINA GENERAL",
  //     "cmp": "048309",
  //     "rne": undefined,
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/048309.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "LESCANO BRAVO CARLOS",
  //     "especialidad": "PSICOLOGIA ONCOLOGICA",
  //     "cmp": undefined,
  //     "rne": undefined,
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/5623.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": "5623"
  //   },
  //   {
  //     "nombre": "LI VALENCIA MIGUEL ROBERTO",
  //     "especialidad": "CIRUGÍA GENERAL",
  //     "cmp": "027037",
  //     "rne": "011697",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/027037.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "LIENDO LIENDO CESAR ARTURO",
  //     "especialidad": "NEFROLOGÍA",
  //     "cmp": "009232",
  //     "rne": "11093",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/009232.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   // {
  //   //   "nombre": "LINARES ZELAYA RICARDO ARTURO",
  //   //   "especialidad": "MEDICINA INTERNA",
  //   //   "cmp": "028203",
  //   //   "rne": "015291",
  //   //   "rne2": undefined,
  //   //   "especialidad2": undefined,
  //   //   "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/028203.png",
  //   //   "cnp": undefined,
  //   //   "cop": undefined,
  //   //   "cpsp": undefined
  //   // },
  //   {
  //     "nombre": "LIU BEJARANO HUMBERTO",
  //     "especialidad": "GASTROENTEROLOGÍA",
  //     "cmp": "046739",
  //     "rne": "021569",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/046739.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "LOAYZA FERNANDEZ DE BACA CHRISTIAN DANIEL",
  //     "especialidad": "CIRUGÍA DE CABEZA Y CUELLO",
  //     "cmp": "55852",
  //     "rne": "27286",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/55852.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "LOPEZ BLANCO ALDO",
  //     "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
  //     "cmp": "039415",
  //     "rne": "020707",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/039415.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   // {
  //   //   "nombre": "LOZADA RAMIREZ JORGE LUIS",
  //   //   "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
  //   //   "cmp": "017290",
  //   //   "rne": "007559",
  //   //   "rne2": "007887",
  //   //   "especialidad2": "CIRUGÍA ONCOLÓGICA",
  //   //   "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/017290.png",
  //   //   "cnp": undefined,
  //   //   "cop": undefined,
  //   //   "cpsp": undefined
  //   // },
  //   {
  //     "nombre": "LUNA CYDEJKO JUAN CARLOS",
  //     "especialidad": "CIRUGÍA GENERAL",
  //     "cmp": "040305",
  //     "rne": "024034",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/040305.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "LUQUE VASQUEZ CARLOS EMILIO",
  //     "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
  //     "cmp": "025255",
  //     "rne": "011990",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/025255.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "MACO CHAVEZ LORENZO GERALD",
  //     "especialidad": "ONCOLOGÍA MÉDICA",
  //     "cmp": "067588",
  //     "rne": "041152",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/067588.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "MALCA VASQUEZ JENNY",
  //     "especialidad": "RADIOTERAPIA",
  //     "cmp": "058905",
  //     "rne": "032857",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/058905.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "MANNARELLI CAVAGNARI ALFIERI ADOLFO",
  //     "especialidad": "TRAUMATOLOGÍA Y ORTOPEDIA",
  //     "cmp": "008917",
  //     "rne": "012996",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/008917.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "MANSILLA PRADA LUIS",
  //     "especialidad": "PSICOLOGÍA",
  //     "cmp": undefined,
  //     "rne": undefined,
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/28958.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": "28958"
  //   },
  //   {
  //     "nombre": "MARES MOROTE CARLOS ALFREDO",
  //     "especialidad": "CIRUGÍA GENERAL",
  //     "cmp": "031666",
  //     "rne": "014299",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/031666.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   // {
  //   //   "nombre": "MARQUEZ DIAZ LUIS ALBERTO",
  //   //   "especialidad": "NEUROCIRUGÍA",
  //   //   "cmp": "031238",
  //   //   "rne": "016834",
  //   //   "rne2": undefined,
  //   //   "especialidad2": undefined,
  //   //   "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/031238.png",
  //   //   "cnp": undefined,
  //   //   "cop": undefined,
  //   //   "cpsp": undefined
  //   // },
  //   {
  //     "nombre": "MARQUILLO ROMERO JAVIER RENATO",
  //     "especialidad": "UROLOGIA",
  //     "cmp": "41956",
  //     "rne": "024277",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/41956.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "MARTINEZ SAMANIEGO FRANCIS",
  //     "especialidad": "OTORRINOLARINGOLOGÍA",
  //     "cmp": "59833",
  //     "rne": "28886",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/59833.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "MENDOZA DE LAMA GASTON WILMER",
  //     "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
  //     "cmp": "026363",
  //     "rne": "014449",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/026363.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "MENDOZA RIVERA SAMANTHA ELISA",
  //     "especialidad": "MEDICO CIRUJANO",
  //     "cmp": "100877",
  //     "rne": undefined,
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/100877.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   // {
  //   //   "nombre": "MENDOZA RODRIGUEZ ERIKA",
  //   //   "especialidad": "RADIOLOGÍA",
  //   //   "cmp": "039327",
  //   //   "rne": "021484",
  //   //   "rne2": undefined,
  //   //   "especialidad2": undefined,
  //   //   "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/039327.png",
  //   //   "cnp": undefined,
  //   //   "cop": undefined,
  //   //   "cpsp": undefined
  //   // },
  //   // {
  //   //   "nombre": "MENDOZA VENTURA CESAR AUGUSTO",
  //   //   "especialidad": "CIRUGÍA GENERAL",
  //   //   "cmp": "026115",
  //   //   "rne": "013233",
  //   //   "rne2": undefined,
  //   //   "especialidad2": undefined,
  //   //   "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/026115.png",
  //   //   "cnp": undefined,
  //   //   "cop": undefined,
  //   //   "cpsp": undefined
  //   // },
  //   {
  //     "nombre": "MENESES MONTOYA NELSON",
  //     "especialidad": "NUTRICION",
  //     "cmp": undefined,
  //     "rne": undefined,
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/009416.png",
  //     "cnp": "009416",
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "MEZA MONTOYA LUIS FERNANDO",
  //     "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
  //     "cmp": "023391",
  //     "rne": "010152",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/023391.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "MEZZICH GUERRERO WALTER",
  //     "especialidad": "CIRUGIA TORACICA Y CARDIOVASCULAR",
  //     "cmp": "010616",
  //     "rne": "014013",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/010616.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "MIRANDA DELGADO OSCAR",
  //     "especialidad": "CIRUGÍA GENERAL",
  //     "cmp": "007636",
  //     "rne": "002011",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/007636.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "MIRANDA FLORES CARLOS ALFONSO",
  //     "especialidad": "NEUROLOGÍA",
  //     "cmp": "030274",
  //     "rne": "016928",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/030274.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "MORANTE CRUZ ZAIDA DENISSE",
  //     "especialidad": "ONCOLOGÍA MÉDICA",
  //     "cmp": "048899",
  //     "rne": "28500",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/048899.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "MORANTE DEZA CARLOS MANUEL",
  //     "especialidad": "UROLOGIA",
  //     "cmp": "015360",
  //     "rne": "15229",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/015360.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "MUNIVE HUARI CARLOS ORLANDO",
  //     "especialidad": "ONCOLOGÍA MÉDICA",
  //     "cmp": "34932",
  //     "rne": "022164",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/34932.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "MUÑOZ QUISPE MIGUEL ANGEL",
  //     "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
  //     "cmp": "62380",
  //     "rne": "043074",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/62380.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "MUÑOZ QUISPE NANCY ELENA",
  //     "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
  //     "cmp": "033370",
  //     "rne": "017328",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/033370.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "NICOLICH LUQUE FLAVIO LUIS",
  //     "especialidad": "CIRUGÍA PLÁSTICA Y REPARADORA",
  //     "cmp": "21341",
  //     "rne": "1101",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/21341.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "NIETO YRIGOIN KEVIN ALBERTH",
  //     "especialidad": "CIRUGÍA GENERAL",
  //     "cmp": "088645",
  //     "rne": "049954",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/088645.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "NUÑEZ VILLALBA ELOY CLEMENTE",
  //     "especialidad": "ANESTESIOLOGÍA",
  //     "cmp": "018463",
  //     "rne": "008306",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/018463.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "OJEDA MEDINA LUIS",
  //     "especialidad": "NEUROCIRUGÍA",
  //     "cmp": "27269",
  //     "rne": "018477",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/27269.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "OLAECHEA MATTO CARLOS ERNESTO",
  //     "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
  //     "cmp": "029918",
  //     "rne": "015679",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/029918.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "OTOYA LOPEZ MIGUEL ANGEL",
  //     "especialidad": "ANESTESIOLOGÍA",
  //     "cmp": "31576",
  //     "rne": "17017",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/31576.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   // {
  //   //   "nombre": "OVIEDO LEYVA PABLO RICARDO",
  //   //   "especialidad": "MEDICINA INTERNA",
  //   //   "cmp": "029705",
  //   //   "rne": "016913",
  //   //   "rne2": undefined,
  //   //   "especialidad2": undefined,
  //   //   "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/029705.png",
  //   //   "cnp": undefined,
  //   //   "cop": undefined,
  //   //   "cpsp": undefined
  //   // },
  //   {
  //     "nombre": "PAITAN AMARO VICTOR ROMAN",
  //     "especialidad": "ONCOLOGÍA MÉDICA",
  //     "cmp": "059644",
  //     "rne": "032252",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/059644.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "PALACIOS FLORES JOSE ALEJANDRO",
  //     "especialidad": "MEDICINA GENERAL",
  //     "cmp": "76926",
  //     "rne": undefined,
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/76926.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "PANDZIC SABA SAMIR ALEJANDRO",
  //     "especialidad": "MEDICINA GENERAL",
  //     "cmp": "100869",
  //     "rne": undefined,
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/100869.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "PANDZIC SABA SHADYA",
  //     "especialidad": "MEDICINA GENERAL",
  //     "cmp": "100868",
  //     "rne": undefined,
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/100868.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "PAREDES GALVEZ KORI CHASKA",
  //     "especialidad": "CIRUGÍA GENERAL",
  //     "cmp": "038707",
  //     "rne": "021200",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/038707.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "PAREDES GUERRA GLORIA",
  //     "especialidad": "PEDIATRIA",
  //     "cmp": "24398",
  //     "rne": "013238",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/24398.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "PAREDES PEREZ NOE NAPOLEON",
  //     "especialidad": "GINECOLOGIA Y OBSTETRICIA",
  //     "cmp": "022662",
  //     "rne": "009153",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/022662.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   // {
  //   //   "nombre": "PAREDES SALAZAR MARCO ANTONIO",
  //   //   "especialidad": "CIRUGIA ONCOLOGICA DE MAMA Y TEJIDOS BLANDOS",
  //   //   "cmp": "060592",
  //   //   "rne": "034789",
  //   //   "rne2": undefined,
  //   //   "especialidad2": undefined,
  //   //   "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/060592.png",
  //   //   "cnp": undefined,
  //   //   "cop": undefined,
  //   //   "cpsp": undefined
  //   // },
  //   {
  //     "nombre": "PAREDES TORRES OSCAR RICARDO",
  //     "especialidad": "CIRUGIA ONCOLOGICA",
  //     "cmp": "64692",
  //     "rne": "40553",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/64692.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "PATIñO SEDANO NICOLAY PABLO",
  //     "especialidad": "MEDINA GENERAL",
  //     "cmp": "75182",
  //     "rne": undefined,
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/75182.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "PEDRESCHI MONTES EDUARDO ANTONIO",
  //     "especialidad": "CIRUGÍA GENERAL",
  //     "cmp": "009933",
  //     "rne": "003283",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/009933.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "PERALTA CONCHA MARIA GUADALUPE",
  //     "especialidad": "GASTROENTEROLOGÍA",
  //     "cmp": "16632",
  //     "rne": "010367",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/16632.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "PRADA MEDINA CARLOS",
  //     "especialidad": "NEUMOLOGÍA",
  //     "cmp": "019829",
  //     "rne": "008916",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/019829.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   // {
  //   //   "nombre": "PULACHE MORALES CLAUDIA CAROLINA",
  //   //   "especialidad": "RADIOLOGÍA",
  //   //   "cmp": "057396",
  //   //   "rne": "038740",
  //   //   "rne2": undefined,
  //   //   "especialidad2": undefined,
  //   //   "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/057396.png",
  //   //   "cnp": undefined,
  //   //   "cop": undefined,
  //   //   "cpsp": undefined
  //   // },
  //   {
  //     "nombre": "QUINCHO ESPINOZA NESTOR JESUS",
  //     "especialidad": "GINECOLOGIA Y OBSTETRICIA",
  //     "cmp": "26388",
  //     "rne": "17088",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/26388.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "QUIÑONES PEREYRA CLAUDIA SOFIA",
  //     "especialidad": "GINECOLOGIA Y OBSTETRICIA",
  //     "cmp": "080740",
  //     "rne": "046471",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/080740.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "QUIROA VERA FERNANDO JAVIER",
  //     "especialidad": "UROLOGIA GENERAL Y  ONCOLOGICA",
  //     "cmp": "027205",
  //     "rne": "013540",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/027205.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "QUIROA VERA JORGE LUIS",
  //     "especialidad": "UROLOGIA",
  //     "cmp": "030722",
  //     "rne": "18511",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/030722.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   // {
  //   //   "nombre": "RAMIREZ CARNERO JOSE RAUL",
  //   //   "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
  //   //   "cmp": "025424",
  //   //   "rne": "011853",
  //   //   "rne2": undefined,
  //   //   "especialidad2": undefined,
  //   //   "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/025424.png",
  //   //   "cnp": undefined,
  //   //   "cop": undefined,
  //   //   "cpsp": undefined
  //   // },
  //   {
  //     "nombre": "RAMIREZ MENDOZA NATHALY MARIAN",
  //     "especialidad": "INFECTOLOGÍA",
  //     "cmp": "079880",
  //     "rne": "033066",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/079880.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   // {
  //   //   "nombre": "REYES VALDIVIA ERICK ALEXANDER",
  //   //   "especialidad": "CIRUGÍA GENERAL",
  //   //   "cmp": "074345",
  //   //   "rne": "040713",
  //   //   "rne2": undefined,
  //   //   "especialidad2": undefined,
  //   //   "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/074345.png",
  //   //   "cnp": undefined,
  //   //   "cop": undefined,
  //   //   "cpsp": undefined
  //   // },
  //   // {
  //   //   "nombre": "REYNA LOAYZA JAVIER EDUARDO",
  //   //   "especialidad": "UROLOGIA GENERAL",
  //   //   "cmp": "030138",
  //   //   "rne": "018260",
  //   //   "rne2": undefined,
  //   //   "especialidad2": undefined,
  //   //   "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/030138.png",
  //   //   "cnp": undefined,
  //   //   "cop": undefined,
  //   //   "cpsp": undefined
  //   // },
  //   {
  //     "nombre": "RICSE CHAUPIS HECTOR",
  //     "especialidad": "MEDICINA INTERNA",
  //     "cmp": "56862",
  //     "rne": "036669",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/56862.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   // {
  //   //   "nombre": "RIVERA CHIRINOS ALBERTO DIONISIO",
  //   //   "especialidad": "GINECOLOGIA Y OBSTETRICIA",
  //   //   "cmp": "032644",
  //   //   "rne": "017267",
  //   //   "rne2": undefined,
  //   //   "especialidad2": undefined,
  //   //   "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/032644.png",
  //   //   "cnp": undefined,
  //   //   "cop": undefined,
  //   //   "cpsp": undefined
  //   // },
  //   {
  //     "nombre": "RIVERA MORON LESLIE PRISCILLA",
  //     "especialidad": "GINECOLOGIA Y OBSTETRICIA",
  //     "cmp": "058426",
  //     "rne": "034609",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/058426.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "RIVERA TORRES JULIO",
  //     "especialidad": "CIRUGIA TORACICA Y CARDIOVASCULAR",
  //     "cmp": "032125",
  //     "rne": "016929",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/032125.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "RODRIGUEZ GUTARRA NICANOR ALBERTO",
  //     "especialidad": "UROLOGIA",
  //     "cmp": "025867",
  //     "rne": "013271",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/025867.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "ROJAS LA TORRE JUAN DE DIOS",
  //     "especialidad": "GINECOLOGIA Y OBSTETRICIA",
  //     "cmp": "034306",
  //     "rne": "015891",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/034306.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "RUIZ AGUILAR NEPTON VICTOR DAVID",
  //     "especialidad": "UROLOGIA GENERAL",
  //     "cmp": "54841",
  //     "rne": "025722",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/54841.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "RUIZ CARBAJAL MARIA EUGENIA",
  //     "especialidad": "CIRUGÍA PLÁSTICA Y REPARADORA",
  //     "cmp": "029662",
  //     "rne": "015710",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/029662.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "RUIZ FIGUEROA ELOY FRANCISCO",
  //     "especialidad": "ONCOLOGIA QUIRURGICA",
  //     "cmp": "14112",
  //     "rne": "006942",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/14112.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "SAAVEDRA SOBRADOS PATRICIA JANETH",
  //     "especialidad": "MEDICINA NUCLEAR",
  //     "cmp": "031234",
  //     "rne": "020096",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/031234.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "SAL Y ROSAS ROSALES YINA ELVIRA",
  //     "especialidad": "ANESTESIOLOGÍA",
  //     "cmp": "075138",
  //     "rne": "042904",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/075138.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "SALAS HURTADO ABRAHAM",
  //     "especialidad": "CIRUGIA ONCOLOGICA DE CABEZA Y CUELLO",
  //     "cmp": "017072",
  //     "rne": "018118",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/017072.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "SALAZAR SALAZAR DARWIN VALENTIN",
  //     "especialidad": "TRAUMATOLOGÍA Y ORTOPEDIA",
  //     "cmp": "45317",
  //     "rne": "21049",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/45317.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "SALINAS PONCE JOSE CARLOS",
  //     "especialidad": "HEMATOLOGÍA",
  //     "cmp": "039876",
  //     "rne": "024398",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/039876.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   // {
  //   //   "nombre": "SANCHEZ PAREDES DANTE EDUARDO",
  //   //   "especialidad": "ONCOLOGÍA MÉDICA",
  //   //   "cmp": "032890",
  //   //   "rne": "019488",
  //   //   "rne2": undefined,
  //   //   "especialidad2": undefined,
  //   //   "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/032890.png",
  //   //   "cnp": undefined,
  //   //   "cop": undefined,
  //   //   "cpsp": undefined
  //   // },
  //   {
  //     "nombre": "SANDOVAL JAUREGUI JAVIER OSCAR",
  //     "especialidad": "CIRUGIA GENERAL",
  //     "cmp": "017934",
  //     "rne": "07862",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/017934.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "SEIJAS HIDALGO MC-BRYAM LWIS",
  //     "especialidad": "MEDICO CIRUJANO",
  //     "cmp": "092863",
  //     "rne": undefined,
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/092863.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   // {
  //   //   "nombre": "SEVILLANO JIMENEZ ANGELICA",
  //   //   "especialidad": "GASTROENTEROLOGÍA",
  //   //   "cmp": "034346",
  //   //   "rne": "019436",
  //   //   "rne2": undefined,
  //   //   "especialidad2": undefined,
  //   //   "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/034346.png",
  //   //   "cnp": undefined,
  //   //   "cop": undefined,
  //   //   "cpsp": undefined
  //   // },
  //   // {
  //   //   "nombre": "SORIA LOPEZ VICTOR HUMBERTO",
  //   //   "especialidad": "CIRUGÍA GENERAL",
  //   //   "cmp": "028205",
  //   //   "rne": "013759",
  //   //   "rne2": undefined,
  //   //   "especialidad2": undefined,
  //   //   "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/028205.png",
  //   //   "cnp": undefined,
  //   //   "cop": undefined,
  //   //   "cpsp": undefined
  //   // },
  //   {
  //     "nombre": "SORRENTINO TIPACTI CARMEN ANGELINA",
  //     "especialidad": "GINECOLOGIA Y OBSTETRICIA",
  //     "cmp": "76338",
  //     "rne": "32635",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/76338.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "SOTO INGA GERSON ANDRE",
  //     "especialidad": "UROLOGIA GENERAL",
  //     "cmp": "072403",
  //     "rne": "046012",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/072403.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "SULLON OLAYA JOSE VICTOR",
  //     "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
  //     "cmp": "021340",
  //     "rne": "16668",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/021340.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "TAIRO CERRON TESSY SHIRLEY",
  //     "especialidad": "MEDICINA NUCLEAR",
  //     "cmp": "071549",
  //     "rne": "040367",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/071549.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "TARA BRITTO SUSANA LUISA",
  //     "especialidad": "ENDOCRINOLOGÍA",
  //     "cmp": "21710",
  //     "rne": "009440",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/21710.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "TEJADA CHAVARRY DIANA PAOLA",
  //     "especialidad": "GINECOLOGIA Y OBSTETRICIA",
  //     "cmp": "080852",
  //     "rne": "049841",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/080852.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "TEODORO INOCENTE ANTONIO",
  //     "especialidad": "CARDIOLOGÍA",
  //     "cmp": "036428",
  //     "rne": "38938",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/036428.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "TICONA HUAROTO CESAR EDUARDO",
  //     "especialidad": "ENFERMEDADES INFECCIOSAS Y TROPICALES",
  //     "cmp": "061917",
  //     "rne": "032167",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/061917.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   // {
  //   //   "nombre": "TRUJILLO ALARCON RAFAEL",
  //   //   "especialidad": "CIRUGIA PLASTICA",
  //   //   "cmp": "038318",
  //   //   "rne": "019484",
  //   //   "rne2": undefined,
  //   //   "especialidad2": undefined,
  //   //   "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/038318.png",
  //   //   "cnp": undefined,
  //   //   "cop": undefined,
  //   //   "cpsp": undefined
  //   // },
  //   {
  //     "nombre": "URIBE VILCARA ANDRES ALONSO",
  //     "especialidad": "UROLOGIA GENERAL",
  //     "cmp": "073070",
  //     "rne": "043341",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/073070.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "URQUIZO SORIANO JUAN ALEJANDRO",
  //     "especialidad": "ANESTESIOLOGÍA",
  //     "cmp": "018635",
  //     "rne": "15863",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/018635.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "VALDIVIA FRANCO HENRY MODESTO",
  //     "especialidad": "GINECOLOGIA ONCOLOGICA",
  //     "cmp": "033284",
  //     "rne": "019689",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/033284.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "VALLEJOS MUÑOZ ORLANDO OMAR",
  //     "especialidad": "MEDICINA FISICA Y REHABILITACION",
  //     "cmp": "20279",
  //     "rne": "20182",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/20279.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "VALVERDE ZAVALETA CARLOS EDUARDO",
  //     "especialidad": "OTORRINOLARINGOLOGÍA",
  //     "cmp": "20140",
  //     "rne": "13407",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/20140.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "VAN DYCK ARBULU HECTOR EDWARD",
  //     "especialidad": "CIRUGIA TORACICA Y CARDIOVASCULAR",
  //     "cmp": "27510",
  //     "rne": "011337",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/27510.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "VARGAS SALDAÑA MARIA INES PAULLETE",
  //     "especialidad": "CIRUGÍA PLÁSTICA Y REPARADORA",
  //     "cmp": "60646",
  //     "rne": "34630",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/60646.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "VASQUEZ MEDINA MIRTHA JIMENA",
  //     "especialidad": "GINECOLOGIA Y OBSTETRICIA",
  //     "cmp": "088559",
  //     "rne": "49865",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/088559.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "VASQUEZ MESIAS MARVIN LEVI",
  //     "especialidad": "MEDICO CIRUJANO",
  //     "cmp": "055294",
  //     "rne": undefined,
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/055294.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "VELARDE MENDEZ MARCO MAURICIO",
  //     "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
  //     "cmp": "037273",
  //     "rne": "017573",
  //     "rne2": "023209",
  //     "especialidad2": "CIRUGIA ONCOLOGIA DE MAMAS, TEJ",
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/037273.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "VELARDE NAVARRETE CARLOS",
  //     "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
  //     "cmp": "016846",
  //     "rne": "017803",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/016846.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "VELASQUEZ HAWKINS CARLOS MIGUEL",
  //     "especialidad": "CIRUGÍA GENERAL",
  //     "cmp": "020915",
  //     "rne": "011021",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/020915.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "VELASQUEZ ORELLANO EDGAR RICARDO",
  //     "especialidad": "OFTALMOLOGÍA",
  //     "cmp": "062616",
  //     "rne": "032323",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/062616.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "VENEGAS COELLO SANDRA MIRELLY",
  //     "especialidad": "HEMATOLOGÍA",
  //     "cmp": "071488",
  //     "rne": "043391",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/071488.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "VENTOSILLA VILLANUEVA RONALD",
  //     "especialidad": "ONCOLOGÍA MÉDICA",
  //     "cmp": "40238",
  //     "rne": "29914",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/40238.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "VERA YAMAMOTO GIULIANO",
  //     "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
  //     "cmp": "031661",
  //     "rne": "015507",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/031661.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "VIDAURRE ROJAS TATIANA",
  //     "especialidad": "ONCOLOGÍA MÉDICA",
  //     "cmp": "033478",
  //     "rne": "015147",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/033478.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "VILLANUEVA YAVE ELSA CATALINA",
  //     "especialidad": "OTORRINOLARINGOLOGÍA",
  //     "cmp": "067030",
  //     "rne": "036410",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/067030.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   },
  //   {
  //     "nombre": "ZAPATER AGUERO JOSE CARLOS MANUEL",
  //     "especialidad": "NEUROCIRUGÍA",
  //     "cmp": "16413",
  //     "rne": "007228",
  //     "rne2": undefined,
  //     "especialidad2": undefined,
  //     "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/16413.png",
  //     "cnp": undefined,
  //     "cop": undefined,
  //     "cpsp": undefined
  //   }
  // ];

  originalDoctores: Doctor[] = [
    {
      "nombre": "AGUILAR COSME JORGE MARCELO",
      "cmp": "026465",
      "rne": "13976",
      "especialidad": "RADIOLOGÍA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/026465.png",
      "genero": "Hombre"
    },
    {
      "nombre": "ALVA LA HOZ JUAN JOSE",
      "cmp": "028826",
      "rne": "018708",
      "especialidad": "GASTROENTEROLOGÍA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/028826.png",
      "genero": "Hombre"
    },
    {
      "nombre": "ALVA PINTO ALEXIS MICHAELE",
      "cmp": "027856",
      "rne": "011507",
      "especialidad": "UROLOGIA",
      "rne2": "025416",
      "especialidad2": "UROLOGIA ONCOLOGICA",
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/027856.png",
      "genero": "Hombre"
    },
    {
      "nombre": "ALVARADO HINOJOSA ABRAHAM AUGUSTO",
      "cmp": "019397",
      "rne": "012972",
      "especialidad": "GASTROENTEROLOGÍA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/019397.png",
      "genero": "Hombre"
    },
    {
      "nombre": "ANGELES CADENILLAS LILIANA CARMEN",
      "cmp": "041234",
      "rne": "029520",
      "especialidad": "ANESTESIOLOGÍA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/041234.png",
      "genero": "Mujer"
    },
    {
      "nombre": "ANGULO LUNA HELEN ISABEL",
      "cmp": "065269",
      "rne": "037215",
      "especialidad": "OTORRINOLARINGOLOGÍA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/065269.png",
      "genero": "Mujer"
    },
    {
      "nombre": "APESTEGUI MORENO CRISTIAN",
      "cmp": "049597",
      "rne": "029310",
      "especialidad": "CIRUGIA DE CABEZA Y CUELLO",
      "rne2": "031459",
      "especialidad2": "CIRUGIA ONCOLOGICA DE CABEZA Y CUELLO",
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/049597.png",
      "genero": "Hombre"
    },
    {
      "nombre": "ARAGON REATEGUI LUIS FELIPE",
      "cmp": "060591",
      "rne": "033583",
      "especialidad": "ONCOLOGÍA MÉDICA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/060591.png",
      "genero": "Hombre"
    },
    {
      "nombre": "ARIZOLA BLUA LAURA ROCIO",
      "cmp": "96451",
      "rne": undefined,
      "especialidad": "MEDICINA GENERAL",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/96451.png",
      "genero": "Mujer"
    },
    {
      "nombre": "ARROYO GARATE RODRIGO EDUARDO",
      "cmp": "073561",
      "rne": "041169",
      "especialidad": "CIRUGIA DE COLON Y RECTO",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/073561.png",
      "genero": "Hombre"
    },
    {
      "nombre": "ASMAT HUAMAN DANIEL GERARDO",
      "cmp": "62615",
      "rne": "43666",
      "especialidad": "CIRUGIA ONCOLOGICA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/62615.png",
      "genero": "Hombre"
    },
    {
      "nombre": "AYON SEMINARIO JORGE EDUARDO",
      "cmp": "037724",
      "rne": "18375",
      "especialidad": "RADIOLOGÍA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/037724.png",
      "genero": "Hombre"
    },
    {
      "nombre": "BARRENECHEA TARAZONA LUIS ALBERT",
      "cmp": "028944",
      "rne": "014934",
      "especialidad": "CIRUGÍA PLÁSTICA Y REPARADORA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/028944.png",
      "genero": "Hombre"
    },
    {
      "nombre": "BECERRA VALDES CARLA",
      "cmp": "64485",
      "rne": "036720",
      "especialidad": "CIRUGÍA DE CABEZA Y CUELLO",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/64485.png",
      "genero": "Mujer"
    },
    {
      "nombre": "BERNALES ZAVALA KELLY RUTH",
      "cmp": "052327",
      "rne": "032932",
      "especialidad": "GINECOLOGIA Y OBSTETRICIA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/052327.png",
      "genero": "Mujer"
    },
    {
      "nombre": "BERROSPI ESPINOZA FRANCISCO ENRIQUE MANUEL",
      "cmp": "020901",
      "rne": "012323",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/020901.png",
      "genero": "Hombre"
    },
    {
      "nombre": "BOADA GOMEZ ADOLFO ANTONIO",
      "cmp": "083905",
      "rne": "038699",
      "especialidad": "CARDIOLOGÍA",
      "rne2": "036942",
      "especialidad2": "MEDICINA INTERNA",
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/083905.png",
      "genero": "Hombre"
    },
    {
      "nombre": "BOZZO PANCORVO ORIANA",
      "cop": '25481',
      "cmp": undefined,
      "rne": undefined,
      "especialidad": "ODONTOLOGÍA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/25481.png",
      "genero": "Mujer"
    },
    {
      "nombre": "BOZZO PANCORVO RENZO GIOVANNI",
      "cmp": "034431",
      "rne": "015822",
      "especialidad": "GINECOLOGIA Y OBSTETRICIA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/034431.png",
      "genero": "Hombre"
    },
    {
      "nombre": "BOZZO PANCORVO TANET GLENDA",
      "cmp": undefined,
      "rne": undefined,
      "especialidad": "ODONTOLOGÍA",
      "rne2": undefined,
      "especialidad2": undefined,
      "cop": "19521",
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/19521.png",
      "genero": "Mujer"
    },
    {
      "nombre": "BOZZO PANCORVO WILFREDO CESAR",
      "cmp": "032748",
      "rne": "016912",
      "especialidad": "CIRUGÍA GENERAL",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/032748.png",
      "genero": "Hombre"
    },
    {
      "nombre": "CABANILLAS HUALPA ELI FABRIZIO",
      "cmp": "067345",
      "rne": "036950",
      "especialidad": "HEMATOLOGÍA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/067345.png",
      "genero": "Hombre"
    },
    {
      "nombre": "CABRERA VEGA CARMEN SILVIA",
      "cmp": undefined,
      "rne": undefined,
      "especialidad": "PSICOLOGÍA",
      "rne2": undefined,
      "especialidad2": undefined,
      "cpsp": "2129",
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/2129.png",
      "genero": "Mujer"
    },
    {
      "nombre": "CALDERON ANTICONA MONICA JACKELIN",
      "cmp": "040313",
      "rne": "021654",
      "especialidad": "ONCOLOGÍA MÉDICA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/040313.png",
      "genero": "Mujer"
    },
    {
      "nombre": "CALDERON MORALES JORGE WALTER",
      "cmp": "011209",
      "rne": "004690",
      "especialidad": "GINECOLOGIA Y OBSTETRICIA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/011209.png",
      "genero": "Hombre"
    },
    {
      "nombre": "CALLUPE PEREZ JOSE FRANCISCO",
      "cmp": "059502",
      "rne": "039729",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/059502.png",
      "genero": "Hombre"
    },
    {
      "nombre": "CALMET BERROCAL WILDER",
      "cmp": "029983",
      "rne": "016655",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "rne2": "022019",
      "especialidad2": "CIRUGIA ONCOLOGICA ABDOMINAL",
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/029983.png",
      "genero": "Hombre"
    },
    {
      "nombre": "CANTELLA SUITO RAUL ALEJANDRO",
      "cmp": "32343",
      "rne": "015684",
      "especialidad": "RADIOLOGÍA INTERVENCIONISTA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/32343.png",
      "genero": "Hombre"
    },
    {
      "nombre": "CARBAJAL TORRES JORGE ARMANDO",
      "cmp": "057393",
      "rne": "040854",
      "especialidad": "CIRUGIA GENERAL",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/057393.png",
      "genero": "Hombre"
    },
    {
      "nombre": "CARDENAS CCORA DE GALDOS ROXANA LUZ",
      "cmp": "021914",
      "rne": "009788",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/021914.png",
      "genero": "Mujer"
    },
    {
      "nombre": "CARDENAS DEL CARPIO HERBERT AURELIO",
      "cmp": "035984",
      "rne": "24000",
      "especialidad": "RADIOTERAPIA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/035984.png",
      "genero": "Hombre"
    },
    {
      "nombre": "CARDENAS GUTIERREZ JEAN CARLO JUNIOR",
      "cmp": "059936",
      "rne": "049671",
      "especialidad": "CARDIOLOGÍA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/059936.png",
      "genero": "Hombre"
    },
    {
      "nombre": "CARDOZA JIMENEZ KENNLLY JOSSEPH",
      "cmp": "74776",
      "rne": "42805",
      "especialidad": "ENDOCRINOLOGÍA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/74776.png",
      "genero": "Hombre"
    },
    {
      "nombre": "CASTILLO ELERA CHRISTIAN ERICH",
      "cmp": "068970",
      "rne": "044143",
      "especialidad": "NEUROCIRUGÍA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/068970.png",
      "genero": "Hombre"
    },
    {
      "nombre": "CASTILLO HIDALGO LUIS IVAN",
      "cmp": "70718",
      "rne": "040231",
      "especialidad": "MEDICINA INTENSIVA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/70718.png",
      "genero": "Hombre"
    },
    {
      "nombre": "CASTILLO ROMERO JORGE ALBERTO",
      "cmp": "83038",
      "rne": "035230",
      "especialidad": "CIRUGIA ONCOLOGICA",
      "rne2": "S00231",
      "especialidad2": "GINECOLOGIA ONCOLOGICA",
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/83038.png",
      "genero": "Hombre"
    },
    {
      "nombre": "CASTILLO VALDEZ LUIS ENRIQUE",
      "cmp": "033502",
      "rne": "017201",
      "especialidad": "ONCOLOGÍA MÉDICA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/033502.png",
      "genero": "Hombre"
    },
    {
      "nombre": "CASTRO OLIDEN VICTOR ORLANDO",
      "cmp": "031518",
      "rne": "16102",
      "especialidad": "ONCOLOGÍA MÉDICA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/031518.png",
      "genero": "Hombre"
    },
    {
      "nombre": "CENTENO SERRANO LUIS ANDRE",
      "cmp": "076730",
      "rne": undefined,
      "especialidad": "MEDICINA GENERAL",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/076730.png",
      "genero": "Hombre"
    },
    {
      "nombre": "CERNA VEGA LUIS ELMER",
      "cmp": "025178",
      "rne": "012353",
      "especialidad": "CIRUGÍA GENERAL",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/025178.png",
      "genero": "Hombre"
    },
    {
      "nombre": "CHAVARRY STECHMANN MARY ANN",
      "cmp": undefined,
      "rne": undefined,
      "especialidad": "NUTRICIÓN",
      "rne2": undefined,
      "especialidad2": undefined,
      "cnp": "9781",
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/9781.png",
      "genero": "Mujer"
    },
    {
      "nombre": "CHUQUILLANQUI LLIMPE JORGE ALBERTO",
      "cmp": "041748",
      "rne": "018591",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "rne2": "025188",
      "especialidad2": "CIRUGIA ONCLOGICA ABDOMINAL",
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/041748.png",
      "genero": "Hombre"
    },
    {
      "nombre": "CHUQUISUTA ANAMARIA RAUL RICARDO",
      "cmp": "073489",
      "rne": "044994",
      "especialidad": "CIRUGIA ONCOLOGICA DE MAMA Y TEJIDOS BLANDOS",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/073489.png",
      "genero": "Hombre"
    },
    {
      "nombre": "CONCEPCION CARHUANCHO WILLIAM ENRIQUE",
      "cmp": "032812",
      "rne": "016310",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "rne2": "042024",
      "especialidad2": "GINECOLOGIA ONCOLOGICA",
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/032812.png",
      "genero": "Hombre"
    },
    {
      "nombre": "CONDEZO SANTANA HAMHNER HESSELL",
      "cmp": "081186",
      "rne": "049786",
      "especialidad": "CARDIOLOGÍA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/081186.png",
      "genero": "Hombre"
    },
    {
      "nombre": "CORDOVA MATTA NEDDY BRIGITTE",
      "cmp": "089370",
      "rne": undefined,
      "especialidad": "MEDICINA GENERAL",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/089370.png",
      "genero": "Mujer"
    },
    {
      "nombre": "CRUZ HUALPA KAREN YOSHIRA",
      "cmp": "76024",
      "rne": "43269",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/76024.png",
      "genero": "Mujer"
    },
    {
      "nombre": "CRUZADO SANCHEZ DEIVY ROBERT",
      "cmp": "049963",
      "rne": "023405",
      "especialidad": "OFTALMOLOGIA",
      "rne2": "026870",
      "especialidad2": "OFTALMOLOGIA ONCOLOGICA",
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/049963.png",
      "genero": "Hombre"
    },
    {
      "nombre": "CUEVA AGUIRRE , GUSTAVO",
      "cmp": "029120",
      "rne": "016525",
      "especialidad": "MEDICINA INTENSIVA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/029120.png",
      "genero": "Hombre"
    },
    {
      "nombre": "CUNZA PAREDES JAIME",
      "cmp": "031899",
      "rne": "014950",
      "especialidad": "CARDIOLOGÍA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/031899.png",
      "genero": "Hombre"
    },
    {
      "nombre": "DE LA CRUZ SACASQUI MIGUEL ANGEL",
      "cmp": "030592",
      "rne": "018018",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "rne2": "021281",
      "especialidad2": "CIRUGIA ONCOLOGIA DE MAMAS, TEJIDOS BLANDOS Y PIEL",
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/030592.png",
      "genero": "Hombre"
    },
    {
      "nombre": "DE LA FUENTE CHAVEZ GARCIA ENRIQUE",
      "cmp": "007563",
      "rne": "005159",
      "especialidad": "UROLOGIA GENERAL",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/007563.png",
      "genero": "Hombre"
    },
    {
      "nombre": "DE LA GUERRA PANCORVO ALBERTO JOSE",
      "cmp": "026178",
      "rne": "021963",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/026178.png",
      "genero": "Hombre"
    },
    {
      "nombre": "DEL CARPIO HERRERA DAVID ROLANDO",
      "cmp": "032070",
      "rne": "017087",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/032070.png",
      "genero": "Hombre"
    },
    {
      "nombre": "DELGADO MENDOZA LUIS ENRIQUE",
      "cmp": "025499",
      "rne": "011910",
      "especialidad": "NEUROCIRUGÍA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/025499.png",
      "genero": "Hombre"
    },
    {
      "nombre": "DELGADO PINEDO ANGELA CONSUELO",
      "cmp": "026414",
      "rne": "015383",
      "especialidad": "MEDICINA INTERNA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/026414.png",
      "genero": "Mujer"
    },
    {
      "nombre": "DEZA RUIZ PEDRO ENRIQUE",
      "cmp": "30694",
      "rne": "18649",
      "especialidad": "NEUROCIRUGÍA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/30694.png",
      "genero": "Hombre"
    },
    {
      "nombre": "DIAZ FLORES CARLOS MIGUEL",
      "cmp": "024317",
      "rne": "011681",
      "especialidad": "MEDICINA INTENSIVA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/024317.png",
      "genero": "Hombre"
    },
    {
      "nombre": "DIAZ LAJO VICTOR",
      "cmp": "062387",
      "rne": "032327",
      "especialidad": "CIRUGÍA GENERAL",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/062387.png",
      "genero": "Hombre"
    },
    {
      "nombre": "DIAZ PEREZ GILMER",
      "cmp": "036128",
      "rne": "016861",
      "especialidad": "CIRUGIA GENERAL",
      "rne2": "023881",
      "especialidad2": "UROLOGIA GENERAL",
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/036128.png",
      "genero": "Hombre"
    },
    {
      "nombre": "DIAZ RUIZ ROSA ISABEL",
      "cmp": "030588",
      "rne": "014457",
      "especialidad": "GINECOLOGIA Y OBSTETRICIA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/030588.png",
      "genero": "Mujer"
    },
    {
      "nombre": "ERRASTI DIAZ SURIEL",
      "cmp": "070145",
      "rne": "030901",
      "especialidad": "HEMATOLOGÍA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/070145.png",
      "genero": "Hombre"
    },
    {
      "nombre": "ESPEJO ROMERO ELAR",
      "cmp": "033518",
      "rne": "018804",
      "especialidad": "UROLOGIA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/033518.png",
      "genero": "Hombre"
    },
    {
      "nombre": "ESPEJO VALENCIA KARINNA DEL ROSARIO",
      "cmp": "039062",
      "rne": "021365",
      "especialidad": "INMUNOLOGIA Y REUMATOLOGÍA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/039062.png",
      "genero": "Mujer"
    },
    {
      "nombre": "ESPILCO HARO JONATAN JULIO LUIS",
      "cmp": "081509",
      "rne": undefined,
      "especialidad": "MEDICINA GENERAL",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/081509.png",
      "genero": "Hombre"
    },
    {
      "nombre": "ESTELA DELGADO ELSA BETZABE",
      "cmp": "034033",
      "rne": "017260",
      "especialidad": "RADIOLOGÍA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/034033.png",
      "genero": "Mujer"
    },
    {
      "nombre": "ESTRADA MORA ADRIAN ARMANDO",
      "cmp": "029519",
      "rne": "014295",
      "especialidad": "RADIOLOGÍA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/029519.png",
      "genero": "Hombre"
    },
    {
      "nombre": "FEIJOO MENDOZA RAFAEL ENRIQUE",
      "cmp": "86744",
      "rne": undefined,
      "especialidad": "MEDICINA GENERAL",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/86744.png",
      "genero": "Hombre"
    },
    {
      "nombre": "FERNANDEZ PLACENCIA RAMIRO MANUEL",
      "cmp": "056883",
      "rne": "30126",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/056883.png",
      "genero": "Hombre"
    },
    {
      "nombre": "FIERRO FALCON ELKA LORENA",
      "cmp": "26093",
      "rne": "15323",
      "especialidad": "DERMATOLOGÍA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/26093.png",
      "genero": "Mujer"
    },
    {
      "nombre": "FLORES DULANTO CESAR ALEJANDRO",
      "cmp": "034492",
      "rne": "016122",
      "especialidad": "ANESTESIOLOGÍA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/034492.png",
      "genero": "Hombre"
    },
    {
      "nombre": "FLORES SIERRA MELVA",
      "cmp": "012417",
      "rne": "005054",
      "especialidad": "MEDICINA FISICA Y REHABILITACION",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/012417.png",
      "genero": "Mujer"
    },
    {
      "nombre": "GARCES CASTRE MILKO RAPHAEL",
      "cmp": "029663",
      "rne": "014655",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "rne2": "019483",
      "especialidad2": "CIRUGIA ONCOLOGICA DE MAMAS, TEJIDOS BLANDOS Y PIEL",
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/029663.png",
      "genero": "Hombre"
    },
    {
      "nombre": "GARCIA CARPIO MILAGROS GRACIELA",
      "cmp": "039326",
      "rne": "020849",
      "especialidad": "MEDICINA FÍSICA Y REHABILITACIÓN",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/039326.png",
      "genero": "Mujer"
    },
    {
      "nombre": "GARCIA CORROCHANO MEDINA PAMELA LYS",
      "cmp": "51148",
      "rne": "39309",
      "especialidad": "NEUROCIRUGÍA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/51148.png",
      "genero": "Mujer"
    },
    {
      "nombre": "GARCIA FLORES MIGUEL ANGEL",
      "cmp": "051390",
      "rne": "034875",
      "especialidad": "CIRUGIA ONCOLOGICA DE MAMA Y TEJIDOS BLANDOS",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/051390.png",
      "genero": "Hombre"
    },
    {
      "nombre": "GARCIA ROJAS JORGE LUIS",
      "cmp": "036127",
      "rne": "019409",
      "especialidad": "UROLOGIA GENERAL",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/036127.png",
      "genero": "Hombre"
    },
    {
      "nombre": "GNADINGER ROCA STEFAN",
      "cmp": "63701",
      "rne": "051093",
      "especialidad": "CIRUGÍA PLÁSTICA Y REPARADORA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/63701.png",
      "genero": "Hombre"
    },
    {
      "nombre": "GOMEZ CONTRERAS KAREN PAOLA",
      "cmp": "074744",
      "rne": "040777",
      "especialidad": "NEUROCIRUGÍA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/074744.png",
      "genero": "Mujer"
    },
    {
      "nombre": "GONZALES LAGUADO ERICK ALEXANDER",
      "cmp": "67411",
      "rne": "35414",
      "especialidad": "CIRUGÍA DE CABEZA Y CUELLO",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/67411.png",
      "genero": "Hombre"
    },
    {
      "nombre": "GRANDA CHAUPIS EDGARDO ARTURO",
      "cmp": "034030",
      "rne": "028114",
      "especialidad": "TRAUMATOLOGÍA Y ORTOPEDIA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/034030.png",
      "genero": "Hombre"
    },
    {
      "nombre": "GUEVARA JABILES ANDRES",
      "cmp": "061915",
      "rne": "32858",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/061915.png",
      "genero": "Hombre"
    },
    {
      "nombre": "GUTIERREZ ZEBALLOS RAUL FERNANDO",
      "cmp": "033583",
      "rne": "017265",
      "especialidad": "RADIOLOGÍA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/033583.png",
      "genero": "Hombre"
    },
    {
      "nombre": "HARO VARAS JUAN CARLOS",
      "cmp": "062138",
      "rne": "035152",
      "especialidad": "ONCOLOGÍA MÉDICA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/062138.png",
      "genero": "Hombre"
    },
    {
      "nombre": "HERNANDEZ PEÑA ARTURO GABRIEL",
      "cmp": "37639",
      "rne": "017308",
      "especialidad": "OFTALMOLOGÍA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/37639.png",
      "genero": "Hombre"
    },
    {
      "nombre": "HERRERA MORALES SANTIAGO ANTONIO",
      "cmp": "029528",
      "rne": "035417",
      "especialidad": "MEDICINA INTERNA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/029528.png",
      "genero": "Hombre"
    },
    {
      "nombre": "HIDALGO GUARNIZ MEYLIN ZOLSI",
      "cmp": "064171",
      "rne": "035463",
      "especialidad": "NEUROLOGÍA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/064171.png",
      "genero": "Mujer"
    },
    {
      "nombre": "HIDALGO RAMOS RENSON EDUARDO",
      "cmp": "53437",
      "rne": "34338",
      "especialidad": "CIRUGÍA GENERAL",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/53437.png",
      "genero": "Hombre"
    },
    {
      "nombre": "HINOJOSA OBANDO MAYDA",
      "cmp": "027015",
      "rne": "017583",
      "especialidad": "GINECOLOGIA Y OBSTETRICIA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/027015.png",
      "genero": "Mujer"
    },
    {
      "nombre": "HOYLE CASTRO CONNAN EDWARD",
      "cmp": "33580",
      "rne": "15557",
      "especialidad": "OTORRINOLARINGOLOGÍA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/33580.png",
      "genero": "Hombre"
    },
    {
      "nombre": "HUARIPATA ATALAYA PEDRO FAUSTO",
      "cmp": "042737",
      "rne": "024224",
      "especialidad": "RADIOLOGÍA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/042737.png",
      "genero": "Hombre"
    },
    {
      "nombre": "LA ROSA CANALES MILAGROS",
      "cmp": undefined,
      "rne": undefined,
      "especialidad": "NUTRICIÓN",
      "rne2": undefined,
      "especialidad2": undefined,
      "cnp": "001092",
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/001092.png",
      "genero": "Mujer"
    },
    {
      "nombre": "LADD HUARACHI GUILLERMO SEGUNDO",
      "cmp": "23318",
      "rne": "11957",
      "especialidad": "PSIQUIATRÍA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/23318.png",
      "genero": "Hombre"
    },
    {
      "nombre": "LADD VICUÑA GUILLERMO",
      "cmp": "048309",
      "rne": undefined,
      "especialidad": "MEDICINA GENERAL",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/048309.png",
      "genero": "Hombre"
    },
    {
      "nombre": "LESCANO BRAVO CARLOS",
      "cmp": undefined,
      "rne": undefined,
      "especialidad": "PSICOLOGIA ONCOLOGICA",
      "rne2": undefined,
      "especialidad2": undefined,
      "cpsp": "5623",
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/5623.png",
      "genero": "Hombre"
    },
    {
      "nombre": "LI VALENCIA MIGUEL ROBERTO",
      "cmp": "027037",
      "rne": "011697",
      "especialidad": "CIRUGÍA GENERAL",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/027037.png",
      "genero": "Hombre"
    },
    {
      "nombre": "LIENDO LIENDO CESAR ARTURO",
      "cmp": "009232",
      "rne": "11093",
      "especialidad": "NEFROLOGÍA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/009232.png",
      "genero": "Hombre"
    },
    {
      "nombre": "LINARES ZELAYA RICARDO ARTURO",
      "cmp": "028203",
      "rne": "015291",
      "especialidad": "MEDICINA INTERNA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/028203.png",
      "genero": "Hombre"
    },
    {
      "nombre": "LIU BEJARANO HUMBERTO",
      "cmp": "046739",
      "rne": "021569",
      "especialidad": "GASTROENTEROLOGÍA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/046739.png",
      "genero": "Hombre"
    },
    {
      "nombre": "LOAYZA FERNANDEZ DE BACA CHRISTIAN DANIEL",
      "cmp": "55852",
      "rne": "27286",
      "especialidad": "CIRUGÍA DE CABEZA Y CUELLO",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/55852.png",
      "genero": "Hombre"
    },
    {
      "nombre": "LOPEZ BLANCO ALDO",
      "cmp": "039415",
      "rne": "020707",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "rne2": "022602",
      "especialidad2": "GINECOLOGIA ONCOLOGICA",
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/039415.png",
      "genero": "Hombre"
    },
    {
      "nombre": "LOZADA RAMIREZ JORGE LUIS",
      "cmp": "017290",
      "rne": "007559",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "rne2": "007887",
      "especialidad2": "CIRUGÍA ONCOLÓGICA",
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/017290.png",
      "genero": "Hombre"
    },
    {
      "nombre": "LUNA CYDEJKO JUAN CARLOS",
      "cmp": "040305",
      "rne": "024034",
      "especialidad": "CIRUGÍA GENERAL",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/040305.png",
      "genero": "Hombre"
    },
    {
      "nombre": "LUQUE VASQUEZ CARLOS EMILIO",
      "cmp": "025255",
      "rne": "011990",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/025255.png",
      "genero": "Hombre"
    },
    {
      "nombre": "MACO CHAVEZ LORENZO GERALD",
      "cmp": "067588",
      "rne": "041152",
      "especialidad": "ONCOLOGÍA MÉDICA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/067588.png",
      "genero": "Hombre"
    },
    {
      "nombre": "MALCA VASQUEZ JENNY",
      "cmp": "058905",
      "rne": "032857",
      "especialidad": "RADIOTERAPIA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/058905.png",
      "genero": "Mujer"
    },
    {
      "nombre": "MANNARELLI CAVAGNARI ALFIERI ADOLFO",
      "cmp": "008917",
      "rne": "012996",
      "especialidad": "TRAUMATOLOGÍA Y ORTOPEDIA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/008917.png",
      "genero": "Hombre"
    },
    {
      "nombre": "MANSILLA PRADA LUIS",
      "cmp": undefined,
      "rne": undefined,
      "especialidad": "PSICOLOGÍA",
      "rne2": undefined,
      "especialidad2": undefined,
      "cpsp": "28958",
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/28958.png",
      "genero": "Hombre"
    },
    {
      "nombre": "MARES MOROTE CARLOS ALFREDO",
      "cmp": "031666",
      "rne": "014299",
      "especialidad": "CIRUGÍA GENERAL",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/031666.png",
      "genero": "Hombre"
    },
    {
      "nombre": "MARQUEZ DIAZ LUIS ALBERTO",
      "cmp": "031238",
      "rne": "016834",
      "especialidad": "NEUROCIRUGÍA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/031238.png",
      "genero": "Hombre"
    },
    {
      "nombre": "MARQUILLO ROMERO JAVIER RENATO",
      "cmp": "41956",
      "rne": "024277",
      "especialidad": "UROLOGIA",
      "rne2": "33453",
      "especialidad2": "UROLOGIA ONCOLOGICA",
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/41956.png",
      "genero": "Hombre"
    },
    {
      "nombre": "MARTINEZ SAMANIEGO FRANCIS",
      "cmp": "59833",
      "rne": "28886",
      "especialidad": "OTORRINOLARINGOLOGÍA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/59833.png",
      "genero": "Hombre"
    },
    {
      "nombre": "MENDOZA DE LAMA GASTON WILMER",
      "cmp": "026363",
      "rne": "014449",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "rne2": "031429",
      "especialidad2": "CIRUGIA ONCOLOGICA DE MAMAS TEJIDOS BLANDOS Y PIEL",
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/026363.png",
      "genero": "Hombre"
    },
    {
      "nombre": "MENDOZA RIVERA SAMANTHA ELISA",
      "cmp": "100877",
      "rne": undefined,
      "especialidad": "MEDICO CIRUJANO",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/100877.png",
      "genero": "Mujer"
    },
    {
      "nombre": "MENDOZA RODRIGUEZ ERIKA",
      "cmp": "039327",
      "rne": "021484",
      "especialidad": "RADIOLOGÍA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/039327.png",
      "genero": "Mujer"
    },
    {
      "nombre": "MENDOZA VENTURA CESAR AUGUSTO",
      "cmp": "026115",
      "rne": "013233",
      "especialidad": "CIRUGÍA GENERAL",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/026115.png",
      "genero": "Hombre"
    },
    {
      "nombre": "MENESES MONTOYA NELSON",
      "cmp": undefined,
      "rne": undefined,
      "especialidad": "NUTRICIÓN",
      "rne2": undefined,
      "especialidad2": undefined,
      "cnp": "009416",
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/009416.png",
      "genero": "Hombre"
    },
    {
      "nombre": "MEZA MONTOYA LUIS FERNANDO",
      "cmp": "023391",
      "rne": "010152",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "rne2": "017883",
      "especialidad2": "UROLOGIA",
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/023391.png",
      "genero": "Hombre"
    },
    {
      "nombre": "MEZZICH GUERRERO WALTER",
      "cmp": "010616",
      "rne": "014013",
      "especialidad": "CIRUGIA TORACICA Y CARDIOVASCULAR",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/010616.png",
      "genero": "Hombre"
    },
    {
      "nombre": "MIRANDA DELGADO OSCAR",
      "cmp": "007636",
      "rne": "002011",
      "especialidad": "CIRUGÍA GENERAL",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/007636.png",
      "genero": "Hombre"
    },
    {
      "nombre": "MIRANDA FLORES CARLOS ALFONSO",
      "cmp": "030274",
      "rne": "016928",
      "especialidad": "NEUROLOGÍA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/030274.png",
      "genero": "Hombre"
    },
    {
      "nombre": "MORANTE CRUZ ZAIDA DENISSE",
      "cmp": "048899",
      "rne": "28500",
      "especialidad": "ONCOLOGÍA MÉDICA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/048899.png",
      "genero": "Mujer"
    },
    {
      "nombre": "MORANTE DEZA CARLOS MANUEL",
      "cmp": "015360",
      "rne": "15229",
      "especialidad": "UROLOGIA",
      "rne2": "009724",
      "especialidad2": "UROLOGIA ONCOLOGICA",
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/015360.png",
      "genero": "Hombre"
    },
    {
      "nombre": "MUNIVE HUARI CARLOS ORLANDO",
      "cmp": "34932",
      "rne": "022164",
      "especialidad": "ONCOLOGÍA MÉDICA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/34932.png",
      "genero": "Hombre"
    },
    {
      "nombre": "MUÑOZ QUISPE MIGUEL ANGEL",
      "cmp": "62380",
      "rne": "043074",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/62380.png",
      "genero": "Hombre"
    },
    {
      "nombre": "MUÑOZ QUISPE NANCY ELENA",
      "cmp": "033370",
      "rne": "017328",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/033370.png",
      "genero": "Mujer"
    },
    {
      "nombre": "NICOLICH LUQUE FLAVIO LUIS",
      "cmp": "21341",
      "rne": "1101",
      "especialidad": "CIRUGÍA PLÁSTICA Y REPARADORA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/21341.png",
      "genero": "Hombre"
    },
    {
      "nombre": "NIETO YRIGOIN KEVIN ALBERTH",
      "cmp": "088645",
      "rne": "049954",
      "especialidad": "CIRUGÍA GENERAL",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/088645.png",
      "genero": "Hombre"
    },
    {
      "nombre": "NUÑEZ VILLALBA ELOY CLEMENTE",
      "cmp": "018463",
      "rne": "008306",
      "especialidad": "ANESTESIOLOGÍA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/018463.png",
      "genero": "Hombre"
    },
    {
      "nombre": "OJEDA MEDINA LUIS",
      "cmp": "27269",
      "rne": "018477",
      "especialidad": "NEUROCIRUGÍA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/27269.png",
      "genero": "Hombre"
    },
    {
      "nombre": "OLAECHEA MATTO CARLOS ERNESTO",
      "cmp": "029918",
      "rne": "015679",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "rne2": "018493",
      "especialidad2": "CIRUGIA ONCOLOGICA DE CABEZA Y CUELLO",
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/029918.png",
      "genero": "Hombre"
    },
    {
      "nombre": "OTOYA LOPEZ MIGUEL ANGEL",
      "cmp": "31576",
      "rne": "17017",
      "especialidad": "ANESTESIOLOGÍA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/31576.png",
      "genero": "Hombre"
    },
    {
      "nombre": "OVIEDO LEYVA PABLO RICARDO",
      "cmp": "029705",
      "rne": "016913",
      "especialidad": "MEDICINA INTERNA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/029705.png",
      "genero": "Hombre"
    },
    {
      "nombre": "PAITAN AMARO VICTOR ROMAN",
      "cmp": "059644",
      "rne": "032252",
      "especialidad": "ONCOLOGÍA MÉDICA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/059644.png",
      "genero": "Hombre"
    },
    {
      "nombre": "PALACIOS FLORES JOSE ALEJANDRO",
      "cmp": "76926",
      "rne": undefined,
      "especialidad": "MEDICINA GENERAL",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/76926.png",
      "genero": "Hombre"
    },
    {
      "nombre": "PANDZIC SABA SAMIR ALEJANDRO",
      "cmp": "100869",
      "rne": undefined,
      "especialidad": "MEDICINA GENERAL",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/100869.png",
      "genero": "Hombre"
    },
    {
      "nombre": "PANDZIC SABA SHADYA",
      "cmp": "100868",
      "rne": undefined,
      "especialidad": "MEDICINA GENERAL",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/100868.png",
      "genero": "Mujer"
    },
    {
      "nombre": "PAREDES GALVEZ KORI CHASKA",
      "cmp": "038707",
      "rne": "021200",
      "especialidad": "CIRUGÍA GENERAL",
      "rne2": "026853",
      "especialidad2": "CIRUGIA ONCOLOGICA ABDOMINAL",
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/038707.png",
      "genero": "Mujer"
    },
    {
      "nombre": "PAREDES GUERRA GLORIA",
      "cmp": "24398",
      "rne": "013238",
      "especialidad": "PEDIATRIA",
      "rne2": "019350",
      "especialidad2": "ONCOLOGÍA PEDIÁTRICA",
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/24398.png",
      "genero": "Mujer"
    },
    {
      "nombre": "PAREDES PEREZ NOE NAPOLEON",
      "cmp": "022662",
      "rne": "009153",
      "especialidad": "GINECOLOGIA Y OBSTETRICIA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/022662.png",
      "genero": "Hombre"
    },
    {
      "nombre": "PAREDES SALAZAR MARCO ANTONIO",
      "cmp": "060592",
      "rne": "034789",
      "especialidad": "CIRUGIA ONCOLOGICA DE MAMA Y TEJIDOS BLANDOS",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/060592.png",
      "genero": "Hombre"
    },
    {
      "nombre": "PAREDES TORRES OSCAR RICARDO",
      "cmp": "64692",
      "rne": "40553",
      "especialidad": "CIRUGIA ONCOLOGICA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/64692.png",
      "genero": "Hombre"
    },
    {
      "nombre": "PATIñO SEDANO NICOLAY PABLO",
      "cmp": "75182",
      "rne": undefined,
      "especialidad": "MEDICINA GENERAL",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/75182.png",
      "genero": "Hombre"
    },
    {
      "nombre": "PEDRESCHI MONTES EDUARDO ANTONIO",
      "cmp": "009933",
      "rne": "003283",
      "especialidad": "CIRUGÍA GENERAL",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/009933.png",
      "genero": "Hombre"
    },
    {
      "nombre": "PERALTA CONCHA MARIA GUADALUPE",
      "cmp": "16632",
      "rne": "010367",
      "especialidad": "GASTROENTEROLOGÍA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/16632.png",
      "genero": "Mujer"
    },
    {
      "nombre": "PRADA MEDINA CARLOS",
      "cmp": "019829",
      "rne": "008916",
      "especialidad": "NEUMOLOGÍA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/019829.png",
      "genero": "Hombre"
    },
    {
      "nombre": "PULACHE MORALES CLAUDIA CAROLINA",
      "cmp": "057396",
      "rne": "038740",
      "especialidad": "RADIOLOGÍA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/057396.png",
      "genero": "Mujer"
    },
    {
      "nombre": "QUINCHO ESPINOZA NESTOR JESUS",
      "cmp": "26388",
      "rne": "17088",
      "especialidad": "GINECOLOGIA Y OBSTETRICIA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/26388.png",
      "genero": "Hombre"
    },
    {
      "nombre": "QUIÑONES PEREYRA CLAUDIA SOFIA",
      "cmp": "080740",
      "rne": "046471",
      "especialidad": "GINECOLOGIA Y OBSTETRICIA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/080740.png",
      "genero": "Mujer"
    },
    {
      "nombre": "QUIROA VERA FERNANDO JAVIER",
      "cmp": "027205",
      "rne": "013540",
      "especialidad": "UROLOGIA GENERAL Y ONCOLOGICA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/027205.png",
      "genero": "Hombre"
    },
    {
      "nombre": "QUIROA VERA JORGE LUIS",
      "cmp": "030722",
      "rne": "18511",
      "especialidad": "UROLOGIA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/030722.png",
      "genero": "Hombre"
    },
    {
      "nombre": "RAMIREZ CARNERO JOSE RAUL",
      "cmp": "025424",
      "rne": "011853",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/025424.png",
      "genero": "Hombre"
    },
    {
      "nombre": "RAMIREZ MENDOZA NATHALY MARIAN",
      "cmp": "079880",
      "rne": "033066",
      "especialidad": "INFECTOLOGÍA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/079880.png",
      "genero": "Mujer"
    },
    {
      "nombre": "REYES VALDIVIA ERICK ALEXANDER",
      "cmp": "074345",
      "rne": "040713",
      "especialidad": "CIRUGÍA GENERAL",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/074345.png",
      "genero": "Hombre"
    },
    {
      "nombre": "REYNA LOAYZA JAVIER EDUARDO",
      "cmp": "030138",
      "rne": "018260",
      "especialidad": "UROLOGIA GENERAL",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/030138.png",
      "genero": "Hombre"
    },
    {
      "nombre": "RICSE CHAUPIS HECTOR",
      "cmp": "56862",
      "rne": "036669",
      "especialidad": "MEDICINA INTERNA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/56862.png",
      "genero": "Hombre"
    },
    {
      "nombre": "RIVERA CHIRINOS ALBERTO DIONISIO",
      "cmp": "032644",
      "rne": "017267",
      "especialidad": "GINECOLOGIA Y OBSTETRICIA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/032644.png",
      "genero": "Hombre"
    },
    {
      "nombre": "RIVERA MORON LESLIE PRISCILLA",
      "cmp": "058426",
      "rne": "034609",
      "especialidad": "GINECOLOGIA Y OBSTETRICIA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/058426.png",
      "genero": "Mujer"
    },
    {
      "nombre": "RIVERA TORRES JULIO",
      "cmp": "032125",
      "rne": "016929",
      "especialidad": "CIRUGIA TORACICA Y CARDIOVASCULAR",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/032125.png",
      "genero": "Hombre"
    },
    {
      "nombre": "RODRIGUEZ GUTARRA NICANOR ALBERTO",
      "cmp": "025867",
      "rne": "013271",
      "especialidad": "UROLOGIA",
      "rne2": "027671",
      "especialidad2": "UROLOGIA ONCOLOGICA",
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/025867.png",
      "genero": "Hombre"
    },
    {
      "nombre": "ROJAS LA TORRE JUAN DE DIOS",
      "cmp": "034306",
      "rne": "015891",
      "especialidad": "GINECOLOGIA Y OBSTETRICIA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/034306.png",
      "genero": "Hombre"
    },
    {
      "nombre": "RUIZ AGUILAR NEPTON VICTOR DAVID",
      "cmp": "54841",
      "rne": "025722",
      "especialidad": "UROLOGIA GENERAL",
      "rne2": "S00245",
      "especialidad2": "UROLOGIA ONCOLOGICA",
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/54841.png",
      "genero": "Hombre"
    },
    {
      "nombre": "RUIZ CARBAJAL MARIA EUGENIA",
      "cmp": "029662",
      "rne": "015710",
      "especialidad": "CIRUGÍA PLÁSTICA Y REPARADORA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/029662.png",
      "genero": "Mujer"
    },
    {
      "nombre": "RUIZ FIGUEROA ELOY FRANCISCO",
      "cmp": "14112",
      "rne": "006942",
      "especialidad": "ONCOLOGIA QUIRURGICA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/14112.png",
      "genero": "Hombre"
    },
    {
      "nombre": "SAAVEDRA SOBRADOS PATRICIA JANETH",
      "cmp": "031234",
      "rne": "020096",
      "especialidad": "MEDICINA NUCLEAR",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/031234.png",
      "genero": "Mujer"
    },
    {
      "nombre": "SAL Y ROSAS ROSALES YINA ELVIRA",
      "cmp": "075138",
      "rne": "042904",
      "especialidad": "ANESTESIOLOGÍA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/075138.png",
      "genero": "Mujer"
    },
    {
      "nombre": "SALAS HURTADO ABRAHAM",
      "cmp": "017072",
      "rne": "018118",
      "especialidad": "CIRUGIA ONCOLOGICA DE CABEZA Y CUELLO",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/017072.png",
      "genero": "Hombre"
    },
    {
      "nombre": "SALAZAR SALAZAR DARWIN VALENTIN",
      "cmp": "45317",
      "rne": "21049",
      "especialidad": "TRAUMATOLOGÍA Y ORTOPEDIA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/45317.png",
      "genero": "Hombre"
    },
    {
      "nombre": "SALINAS PONCE JOSE CARLOS",
      "cmp": "039876",
      "rne": "024398",
      "especialidad": "HEMATOLOGÍA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/039876.png",
      "genero": "Hombre"
    },
    {
      "nombre": "SANCHEZ PAREDES DANTE EDUARDO",
      "cmp": "032890",
      "rne": "019488",
      "especialidad": "ONCOLOGÍA MÉDICA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/032890.png",
      "genero": "Hombre"
    },
    {
      "nombre": "SANDOVAL JAUREGUI JAVIER OSCAR",
      "cmp": "017934",
      "rne": "07862",
      "especialidad": "CIRUGIA GENERAL",
      "rne2": "S00362",
      "especialidad2": "CIRUGIA DE COLON Y RECTO",
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/017934.png",
      "genero": "Hombre"
    },
    {
      "nombre": "SEIJAS HIDALGO MC-BRYAM LWIS",
      "cmp": "092863",
      "rne": undefined,
      "especialidad": "MEDICO CIRUJANO",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/092863.png",
      "genero": "Hombre"
    },
    {
      "nombre": "SEVILLANO JIMENEZ ANGELICA",
      "cmp": "034346",
      "rne": "019436",
      "especialidad": "GASTROENTEROLOGÍA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/034346.png",
      "genero": "Mujer"
    },
    {
      "nombre": "SORIA LOPEZ VICTOR HUMBERTO",
      "cmp": "028205",
      "rne": "013759",
      "especialidad": "CIRUGÍA GENERAL",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/028205.png",
      "genero": "Hombre"
    },
    {
      "nombre": "SORRENTINO TIPACTI CARMEN ANGELINA",
      "cmp": "76338",
      "rne": "32635",
      "especialidad": "GINECOLOGIA Y OBSTETRICIA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/76338.png",
      "genero": "Mujer"
    },
    {
      "nombre": "SOTO INGA GERSON ANDRE",
      "cmp": "072403",
      "rne": "046012",
      "especialidad": "UROLOGIA GENERAL",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/072403.png",
      "genero": "Hombre"
    },
    {
      "nombre": "SULLON OLAYA JOSE VICTOR",
      "cmp": "021340",
      "rne": "16668",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/021340.png",
      "genero": "Hombre"
    },
    {
      "nombre": "TAIRO CERRON TESSY SHIRLEY",
      "cmp": "071549",
      "rne": "040367",
      "especialidad": "MEDICINA NUCLEAR",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/071549.png",
      "genero": "Mujer"
    },
    {
      "nombre": "TARA BRITTO SUSANA LUISA",
      "cmp": "21710",
      "rne": "009440",
      "especialidad": "ENDOCRINOLOGÍA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/21710.png",
      "genero": "Mujer"
    },
    {
      "nombre": "TEJADA CHAVARRY DIANA PAOLA",
      "cmp": "080852",
      "rne": "049841",
      "especialidad": "GINECOLOGIA Y OBSTETRICIA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/080852.png",
      "genero": "Mujer"
    },
    {
      "nombre": "TEODORO INOCENTE ANTONIO",
      "cmp": "036428",
      "rne": "38938",
      "especialidad": "CARDIOLOGÍA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/036428.png",
      "genero": "Hombre"
    },
    {
      "nombre": "TICONA HUAROTO CESAR EDUARDO",
      "cmp": "061917",
      "rne": "032167",
      "especialidad": "ENFERMEDADES INFECCIOSAS Y TROPICALES",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/061917.png",
      "genero": "Hombre"
    },
    {
      "nombre": "TRUJILLO ALARCON RAFAEL",
      "cmp": "038318",
      "rne": "019484",
      "especialidad": "CIRUGIA PLASTICA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/038318.png",
      "genero": "Hombre"
    },
    {
      "nombre": "URIBE VILCARA ANDRES ALONSO",
      "cmp": "073070",
      "rne": "043341",
      "especialidad": "UROLOGIA GENERAL",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/073070.png",
      "genero": "Hombre"
    },
    {
      "nombre": "URQUIZO SORIANO JUAN ALEJANDRO",
      "cmp": "018635",
      "rne": "15863",
      "especialidad": "ANESTESIOLOGÍA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/018635.png",
      "genero": "Hombre"
    },
    {
      "nombre": "VALDIVIA FRANCO HENRY MODESTO",
      "cmp": "033284",
      "rne": "019689",
      "especialidad": "GINECOLOGIA ONCOLOGICA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/033284.png",
      "genero": "Hombre"
    },
    {
      "nombre": "VALLEJOS MUÑOZ ORLANDO OMAR",
      "cmp": "20279",
      "rne": "20182",
      "especialidad": "MEDICINA FISICA Y REHABILITACION",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/20279.png",
      "genero": "Hombre"
    },
    {
      "nombre": "VALVERDE ZAVALETA CARLOS EDUARDO",
      "cmp": "20140",
      "rne": "13407",
      "especialidad": "OTORRINOLARINGOLOGÍA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/20140.png",
      "genero": "Hombre"
    },
    {
      "nombre": "VAN DYCK ARBULU HECTOR EDWARD",
      "cmp": "27510",
      "rne": "011337",
      "especialidad": "CIRUGIA TORACICA Y CARDIOVASCULAR",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/27510.png",
      "genero": "Hombre"
    },
    {
      "nombre": "VARGAS SALDAñA MARIA INES PAULLETE",
      "cmp": "60646",
      "rne": "34630",
      "especialidad": "CIRUGÍA PLÁSTICA Y REPARADORA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/60646.png",
      "genero": "Mujer"
    },
    {
      "nombre": "VASQUEZ MEDINA MIRTHA JIMENA",
      "cmp": "088559",
      "rne": "49865",
      "especialidad": "GINECOLOGIA Y OBSTETRICIA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/088559.png",
      "genero": "Mujer"
    },
    {
      "nombre": "VASQUEZ MESIAS MARVIN LEVI",
      "cmp": "055294",
      "rne": undefined,
      "especialidad": "MEDICO CIRUJANO",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/055294.png",
      "genero": "Hombre"
    },
    {
      "nombre": "VELARDE MENDEZ MARCO MAURICIO",
      "cmp": "037273",
      "rne": "017573",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "rne2": "023209",
      "especialidad2": "CIRUGIA ONCOLOGIA DE MAMAS, TEJIDOS BLANDOS Y PIEL",
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/037273.png",
      "genero": "Hombre"
    },
    {
      "nombre": "VELARDE NAVARRETE CARLOS",
      "cmp": "016846",
      "rne": "017803",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/016846.png",
      "genero": "Hombre"
    },
    {
      "nombre": "VELASQUEZ HAWKINS CARLOS MIGUEL",
      "cmp": "020915",
      "rne": "011021",
      "especialidad": "CIRUGÍA GENERAL",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/020915.png",
      "genero": "Hombre"
    },
    {
      "nombre": "VELASQUEZ ORELLANO EDGAR RICARDO",
      "cmp": "062616",
      "rne": "032323",
      "especialidad": "OFTALMOLOGÍA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/062616.png",
      "genero": "Hombre"
    },
    {
      "nombre": "VENEGAS COELLO SANDRA MIRELLY",
      "cmp": "071488",
      "rne": "043391",
      "especialidad": "HEMATOLOGÍA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/071488.png",
      "genero": "Mujer"
    },
    {
      "nombre": "VENTOSILLA VILLANUEVA RONALD",
      "cmp": "40238",
      "rne": "29914",
      "especialidad": "ONCOLOGÍA MÉDICA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/40238.png",
      "genero": "Hombre"
    },
    {
      "nombre": "VERA YAMAMOTO GIULIANO",
      "cmp": "031661",
      "rne": "015507",
      "especialidad": "CIRUGIA GENERAL Y ONCOLOGICA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/031661.png",
      "genero": "Hombre"
    },
    {
      "nombre": "VIDAURRE ROJAS TATIANA",
      "cmp": "033478",
      "rne": "015147",
      "especialidad": "ONCOLOGÍA MÉDICA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/033478.png",
      "genero": "Mujer"
    },
    {
      "nombre": "VILLANUEVA YAVE ELSA CATALINA",
      "cmp": "067030",
      "rne": "036410",
      "especialidad": "OTORRINOLARINGOLOGÍA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/067030.png",
      "genero": "Mujer"
    },
    {
      "nombre": "ZAPATER AGUERO JOSE CARLOS MANUEL",
      "cmp": "16413",
      "rne": "007228",
      "especialidad": "NEUROCIRUGÍA",
      "rne2": undefined,
      "especialidad2": undefined,
      "foto": "https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/16413.png",
      "genero": "Hombre"
    }
  ]
  // Lista que se mostrará y paginará (resultado del filtro)
  doctores: Doctor[] = [];

  // NUEVAS PROPIEDADES PARA EL FILTRO
  searchTerm: string = '';
  selectedSpecialty: string = 'Elige categoría';
  allSpecialties: string[] = [];
  // FIN NUEVAS PROPIEDADES

  /** Autoplay del carrusel */
  @Input() autoplay = false;

  /** Intervalo entre slides (ms) */
  @Input() interval = 3000;

  /** Pausar al pasar el mouse (hover) */
  @Input() pauseOnHover = true;

  /** Tarjetas por slide (4x3) */
  @Input() perPage = 12;

  pages: Doctor[][] = [];
  carouselId = 'staffCarousel-' + Math.random().toString(36).slice(2, 9);

  // 1) Lista de nombres a excluir (tal cual me pasaste)
  nombresAExcluir = new Set<string>([
    "ARAGON REATEGUI LUIS FELIPE",
    "ASMAT HUAMAN DANIEL GERARDO",
    "CARBAJAL TORRES JORGE ARMANDO",
    "CASTILLO VALDEZ LUIS ENRIQUE",
    "CERNA VEGA LUIS ELMER",
    "CHUQUISUTA ANAMARIA RAUL RICARDO",
    "DEL CARPIO HERRERA DAVID ROLANDO",
    "DELGADO MENDOZA LUIS ENRIQUE",
    "DELGADO PINEDO ANGELA CONSUELO",
    "DIAZ FLORES CARLOS MIGUEL",
    "DIAZ RUIZ ROSA ISABEL",
    "ESPEJO ROMERO ELAR",
    "ESTELA DELGADO ELSA BETZABE",
    "ESTRADA MORA ADRIAN ARMANDO",
    "GARCIA CARPIO MILAGROS GRACIELA",
    "GARCIA FLORES MIGUEL ANGEL",
    "GARCIA ROJAS JORGE LUIS",
    "GOMEZ CONTRERAS KAREN PAOLA",
    "GUTIERREZ ZEBALLOS RAUL FERNANDO",
    "LINARES ZELAYA RICARDO ARTURO",
    "LOZADA RAMIREZ JORGE LUIS",
    "MARQUEZ DIAZ LUIS ALBERTO",
    "MENDOZA RODRIGUEZ ERIKA",
    "MENDOZA VENTURA CESAR AUGUSTO",
    "OVIEDO LEYVA PABLO RICARDO",
    "PAREDES SALAZAR MARCO ANTONIO",
    "PULACHE MORALES CLAUDIA CAROLINA",
    "RAMIREZ CARNERO JOSE RAUL",
    "REYES VALDIVIA ERICK ALEXANDER",
    "REYNA LOAYZA JAVIER EDUARDO",
    "RIVERA CHIRINOS ALBERTO DIONISIO",
    "SANCHEZ PAREDES DANTE EDUARDO",
    "SEVILLANO JIMENEZ ANGELICA",
    "SORIA LOPEZ VICTOR HUMBERTO",
    "TRUJILLO ALARCON RAFAEL",
  ]);

  ngOnInit(): void {
    // 1. Asignar fotos a la lista original (manteniendo su lógica)
    // let index = 0;
    // this.originalDoctores.forEach(d => {
    //   index++;
    //   d.foto = 'https://s3.us-east-1.amazonaws.com/detecta.pe.files/staff/Rectangle+35-' + index + '.png'
    // });
    // 2) Si tu array original se llama "originalDoctores", filtramos:
    this.originalDoctores = this.originalDoctores.filter(d => !this.nombresAExcluir.has(d.nombre));
    let cpm = 0, cnp = 0, cpsp = 0, cop = 0;
    this.originalDoctores.forEach(d => {
      if (d.cmp) cpm++;
      if (d.cnp) cnp++;
      if (d.cpsp) cpsp++;
      if (d.cop) cop++;
      if (!d.cmp && !d.cnp && !d.cpsp && !d.cop) {
        console.log(`Doctor sin registro profesional: ${d.nombre} - Especialidad: ${d.especialidad}`);
      }
      let pref = this.getPrefijoProfesional(d);
      d.nombre = pref ? `${pref} ${d.nombre}` : d.nombre;
    });
    // console.log(`Doctores con CMP: ${cpm}, CNP: ${cnp}, CPSP: ${cpsp}, COP: ${cop}`);
    // console.log(this.originalDoctores.length)
    // 2. Extraer y ordenar las especialidades únicas para el filtro
    this.allSpecialties = Array.from(new Set(this.originalDoctores.map(d => d.especialidad))).sort();

    // 3. Inicializar la lista de doctores con todos los datos y reconstruir las páginas
    this.doctores = [...this.originalDoctores];
    this.rebuildPages();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['perPage']) this.rebuildPages();
  }

  getPrefijoProfesional(d: Doctor): string {
    const g = d.genero === 'Mujer' ? 'F' : 'M';

    if (d.cmp) {
      return g === 'F' ? 'Dra.' : 'Dr.';
    }

    // 2) Odontólogos (COP) o especialidad ODONTOLOGIA
    if (d.cop) {
      return 'CD.'; // ← Si prefieres Dr./Dra. para odontología:  return g === 'F' ? 'Dra.' : 'Dr.';
    }

    // 3) NutriciÓnistas (CNP) o especialidad NUTRICION
    if (d.cnp) {
      return 'Lic.';
    }

    // 4) Psicólogos (CPSP) o especialidad PSICOLOGIA
    if (d.cpsp) {
      return 'Lic.';
    }

    // 5) Caso por defecto: sin prefijo
    return '';
  }

  onFilterChange() {
    this.filterDoctores();
    this.rebuildPages();
  }

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