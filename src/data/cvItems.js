import React, { Fragment } from 'react';

export const cvItems = [
  {
    title: 'Informatikk - master Interaksjonsdesign',
    placement: 'left',
    organization: 'NTNU Gløshaugen',
    location: 'Trondheim',
    period: 'August 2019 - juni 2021',
    description: (
      <Fragment>
        <p>
          Spesialisering innen Interaksjonsdesign, spill- og læringsteknologi.
        </p>
        <p>
          Graden inkluderer en bred kombinasjon av emner, blant annet innenfor
          programvareutvikling, interaksjonsdesign, forskning og prosjektarbeid.
        </p>
      </Fragment>
    )
  },
  {
    title: 'Frontendutvikler - React',
    placement: 'right',
    organization: 'OMS / Oslo Børs',
    location: 'Oslo',
    period: 'Juni 2019 - august 2019',
    description: (
      <Fragment>
        <p>Sommervikar hos Oslo Market Solutions / Oslo Børs VPS. </p>
        <p>
          Utviklet en webapplikasjon med markedsdata for investorer og tradere,
          ved hjelp av React og OpenShift.
        </p>
      </Fragment>
    )
  },
  {
    title: 'Orakeltjenesten',
    placement: 'left',
    organization: 'NTNU IT',
    location: 'Trondheim',
    period: 'Oktober 2016 - d.d.',
    description: (
      <Fragment>
        <p>
          Brukerstøtte for NTNU sine IT-tjenester, inkludert blant annet
          administrasjon av brukerkontoer og databaser, utskrift, samt
          installasjon og oppsett av programvare. Deltidsarbeid.{' '}
        </p>
        <p>
          Bidrar også i faggruppe-utvikling der vi utvikler interne
          arbeidsverktøy, hovedsakelig vårt intranett utviklet i
          Python-rammeverket Django.
        </p>
      </Fragment>
    )
  },
  {
    title: 'Sommerstudent - Kina',
    placement: 'right',
    organization: 'Huawei Technologies',
    location: 'Shenzhen, Guangdong, Kina',
    period: 'Juli 2018',
    description: (
      <Fragment>
        <p>
          Valgt ut til Huawei sitt internasjonale "Seeds for the Future"-program
          sommeren 2018, sammen med studenter fra NTNU, OsloMet og universiteter
          i Spania og Bahrain.{' '}
        </p>
        <p>
          Gjennom programmet besøkte vi Huawei sitt globale hovedkvarter, der vi
          lærte om IoT, AI og tilknyttet infrastruktur som 4G og 5G mobilnett,
          fra Huawei sine egne ingeniører.
        </p>
        <p>
          Programmet inkluderte også en omfattende introduksjon til kinesisk
          kultur og språk, undervist ved Beijing Language and Culture
          University.
        </p>
      </Fragment>
    )
  },
  {
    title: 'DJ',
    placement: 'left',
    organization: 'Studentersamfundet',
    location: 'Trondheim',
    period: 'Januar 2017 - d.d.',
    description: (
      <Fragment>
        <p>Frivillig DJ i Klubbstyret ved Studentersamfundet i Trondhjem.</p>
        <p>
          Har spilt på alle husets scener, med publikum opptil 1 000 personer.
          Deltar også aktivt under opplæring av nye DJer.
        </p>
        <p>
          Bidrar med rigging, billettsalg og andre nødvendige oppgaver ved
          behov.
        </p>
      </Fragment>
    )
  },
  {
    title: 'Ekskursjonskomiteen',
    placement: 'left',
    organization: 'Linjeforeningen Online',
    location: 'Trondheim',
    period: 'September 2018 - juni 2019',
    description: (
      <Fragment>
        <p>
          Medarrangør av ekskursjon til Kina for 63 IT-studenter, der vi besøkte
          ulike universiteter og bedrifter, samt opplevde kinesisk kultur.
        </p>
        <p>
          Vi arrangerte også konferansen Tech Talks 2019 for å delfinansiere
          reisen.
        </p>
      </Fragment>
    )
  },
  {
    title: 'Informatikk - bachelor',
    placement: 'left',
    organization: 'NTNU Gløshaugen',
    location: 'Trondheim',
    period: 'August 2016 - juni 2019',
    description: (
      <Fragment>
        <p>Oppnådd bachelorgrad i Informatikk ved NTNU Gløshaugen.</p>
        <p>
          Programmet fokuserte på et bredt spekter av IT, blant annet
          datavitenskap, systemutvikling, webutvikling og interaksjonsdesign.{' '}
        </p>
        <p>
          De fleste emner fokuserte på prosjektarbeid og øvinger, som ofte ble
          løst i grupper.
        </p>
      </Fragment>
    )
  }
];

export default cvItems;
