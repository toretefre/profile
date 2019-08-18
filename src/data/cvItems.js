import React from 'react';

export const cvItems = [
  {
    title: 'Informatikk - master',
    placement: 'left',
    organization: 'NTNU Gløshaugen',
    location: 'Trondheim',
    period: 'August 2019 - Juni 2021',
    description: (
      <details>
        <p>Interaksjonsdesign, spill- og læringsteknologi</p>
        <p>Tverrfaglig prosjektarbeid</p>
      </details>
    )
  },
  {
    title: 'Frontendutvikler',
    placement: 'right',
    organization: 'OMS / Oslo Børs',
    location: 'Oslo',
    period: 'Sommeren 2019',
    description: (
      <details>
        <p>React Hooks applikasjon bygget fra scratch på 10 uker.</p>
        <p>Tilgjengelig på arena.obvps.no</p>
      </details>
    )
  },
  {
    title: 'Orakel',
    placement: 'left',
    organization: 'NTNU IT',
    location: 'Trondheim',
    period: 'Oktober 2016 - d.d.',
    description: <details />
  },
  {
    title: 'Sommerstudent',
    placement: 'right',
    organization: 'Huawei Technologies',
    location: 'Shenzhen, Guangdong, Kina',
    period: 'Juli 2018',
    description: (
      <details>
        <p>Kursing i bruksområder for IoT, AI, og cloud-løsninger</p>
        <p>
          Innføring i kinesisk kultur og språk ved Beijing Language and Culture
          University
        </p>
      </details>
    )
  },
  {
    title: 'Arrangør og DJ',
    placement: 'left',
    organization: 'Studentersamfundet',
    location: 'Trondheim',
    period: 'Januar 2017 - d.d.',
    description: (
      <details>
        <p>Opplæring av nye DJer</p>
        <p>Arrangering av konserter og events ved behov</p>
      </details>
    )
  },
  {
    title: 'Ekskursjonskomiteen',
    placement: 'left',
    organization: 'Linjeforeningen Online',
    location: 'Trondheim',
    period: 'September 2018 - Juni 2019',
    description: (
      <details>
        <p>Medarrangør av ekskursjon for 63 deltagere</p>
        <p>Arrangerte konferansen Tech Talks 2019</p>
      </details>
    )
  },
  {
    title: 'Informatikk - bachelor',
    placement: 'left',
    organization: 'NTNU Gløshaugen',
    location: 'Trondheim',
    period: 'August 2016 - Juni 2019',
    description: (
      <details>
        <p>Systemutvikling, webutvikling, og datavitenskap</p>
        <p>Prosjektarbeid med smidig arbeidsmetodikk</p>
        <p>Webutvikling med toppkarakter</p>
      </details>
    )
  }
];

export default cvItems;
