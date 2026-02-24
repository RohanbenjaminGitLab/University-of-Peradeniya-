import React, { useState } from "react";

// Sample data for all sections
const books = [
  {
    title: "Politics of Poverty Alleviation in Sri Lanka: Public Policy and Beneficiary Organizations",
    publisher: "LAMBERT Academic Publishing GmbH & Co. KG, Heinrich-Bocking-Str.6-8 (In English) 2011"
  },
  {
    title: "Kantavanata Prajatantravadi Praveshayak (A Democratic Initiative for Women)",
    publisher: "Co-author, Saviya Development Foundation, Galle. (In Sinhalese) 2011"
  },
  {
    title: "Palat Palanaayathana (Local Government Institutions)",
    publisher: "Vikalpa Pratipatti Kendraya, Colombo. (In Sinhalese) 2007"
  },
  {
    title: "Sahabagitva Sanvardanaya: Janasaviya Vedapilivela (Participatory Development: Janasaviya Programme)",
    publisher: "Supun Graphic, Colombo. (In Sinhalese) 1997"
  },
];

const chapters = [
  {
    title: "Perspective from the south",
    publisher: "(Co-author) Georg Frerks and Bart Klem (eds), Dealing with Diversity: Sri Lankan Discourse on Peace and Conflict, The Netherlands Institute of International Relations ‘Clingendael’ Maharagama(Translated in to Sinhala and Tamil). 2004"
  },
  {
    title: "Ethnic Problem and Sri Lankan Political Culture",
    publisher: "Georg Frerks and Bart Klem (eds), Dealing with Diversity: Sri Lankan Discourse on Peace and Conflict, The Netherlands Institute of International Relations ‘Clingendael’ Maharagama (Translated in to Sinhala and Tamil) 2004"
  },
  {
    title: "The Annotated Bibliography on Sri Lankan Discourse on Peace and Conflict",
    publisher: "(Contributor) The Netherlands Institute of Relations ‘Clingendael’ Maharagama. 2004"
  },
  {
    title: "Sri Lankave Kulaya ha Deshapalanaya, (Caste and Politics in Sri Lanka)",
    publisher: "Navarathne Bandara (ed.) Deshapalana VidyaLipi ha Agayum Modiyula, Jathika Tarunaseva Sabava, Maharagama (in Sinhalese) 1999"
  },
];

const journals = [
  {
    title: "Ethno-nationalism in Sri Lanka: Reverse and obverse of nation state",
    publisher: "Journal of Humanities and Social Science, Faculty of Humanities and Social Science, University of Ruhuna.(In English) 2011"
  },
  {
    title: "Revolutionary Idealism and Parliamentary Politics: A study of Janatha Vimukthi Peramuna (People’s Liberation Front) in Sri Lanka",
    publisher: "Special Issues, No. 01 December, 2010(In English)"
  },
  {
    title: "Political Crisis and the Role of Judiciary in Sri Lanka",
    publisher: "(Co-author) Asia-Pacific Journal of Social Science, vol. 01 (02) June- December pp1-20. (In English) 2009"
  },
  {
    title: "Participatory Development and Policing the Poor: A study of National Poverty Alleviation Programme in Sri Lanka",
    publisher: "Vol 29(3) BiiSs Journal, Bangladesh Institute of International and Strategic Studies, Pp: 302-304. (In English) 2008"
  },
  {
    title: "Rajya Paripalana Vidyave Vikasaya: Venasvana Paradimanena Adhyanayak: (Evolution of the study of Public Administration: A study of Changing Paradigms)",
    publisher: "Vimasuma, Pp. Department of Sociology, University of Ruhuna. (In Sinhalese) 2011"
  },
  {
    title: "Rajya Paripalanaya: Vishay Kshetraya ha Maata Kalina Prvanata(Public Administration: Scope of the Discipline and Recent Trends)",
    publisher: "Samajeeya Vidya Vimarshana, Vol.01 Samajeeya Vidya Adhyana Kenraya (In Sinhalese) August 2000"
  },
];

const conferences = [
  {
    title: "Participatory Development and Government: A study of Implementer- Beneficiary Syndromes",
    publisher: "10 Academic Session, University of Ruhuna, Matara, Sri Lanka. 2011"
  },
  {
    title: "Poverty Alleviation in Sri Lanka: A Study of Policy Impact on Political Behavior",
    publisher: "9th Academic Session, University of Ruhuna, Matara, Sri Lanka. 2010"
  },
  {
    title: "Physical Intimidation and Discourse of Deceive: A Study of Political Violence at the University of Ruhuna",
    publisher: "Second Academic Session, University of Ruhuna, Matara, Sri Lanka. 2004"
  },
];

const abstracts = [
  {
    title: "Ethno-Nationalism in Sri Lanka: Reverse and Obverse of the Nation State",
    publisher: "12th International Conference on Sri Lanka Studies: Sri Lanka After the War: Royal Asiatic Society of Sri Lanka and the Open University of Sri Lanka. 2010"
  },
  {
    title: "Role of Civil Society Organizations and Politicians in Disaster Management in Sri Lanka: A study of post-tsunami Rehabilitation Work",
    publisher: "(Co-author) 10 Annual Conference on Sri Lankan Studies. 2005"
  },
  {
    title: "Poverty, Public Policy Implementation and the politics of the beneficiaries: A study of Samurdhi Movement of Sri Lanka, Culture and Society in a Colonial Context",
    publisher: "Leonard Woolf Memorial International Conference, University of Ruhuna, University of Ottawa and Sri Lanka Studies Network. 2004"
  },
  {
    title: "War and Ethnic Identity in an Ethnically Mixed Village Community in Panama Village in the Ampara District of Sri Lanka",
    publisher: "9th International Conference on Sri Lankan Studies, University of Ruhuna, Matara, Sri Lanka p. 114. 2003"
  },
  {
    title: "Responses of Majority Community to the Ethnic Conflict in a Multi Ethnic Society: A Study of the Present Conflict of Sri Lanka",
    publisher: "(Co-author) 9th International Conference on Sri Lankan Studies, University of Ruhuna, Matara, Sri Lanka p. 114. 2003"
  },
];

const editors = [
  {
    title: "Review of Humanities and Social Sciences",
    publisher: "(Editor in Chief) , University of Ruhuna. 2011"
  },
  {
    title: "Sri Gunasinha Feliciation Volume",
    publisher: "(Assistant Editor) Cultural Centre, University of Ruhuna. 2010"
  },
  {
    title: "Samaajeeya Vidya Vimarshana",
    publisher: "(Social Sciences Review, A bi-annual Journal in Sinhala Published by Samajeeya Vidya Adyana Kendraya), volume 01 no 01, April 2000"
  },
  {
    title: "Samaajeeya Vidya Vimarshana",
    publisher: "(Social Sciences Review, A bi-annual Journal in Sinhala Published by Samajeeya Vidya Adyana Kendraya), volume 01 no 02, April 2001"
  },
];

export default function Publications() {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (id) => {
    setExpandedSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const renderSection = (id, title, items) => (
    <section id={id} className="mb-12 scroll-mt-28">
      {/* Invisible anchor for navbar scroll */}
      <div className="h-24 -mt-24" />
      <h2
        className="text-2xl font-bold text-indigo-700 mb-4 cursor-pointer flex justify-between items-center"
        onClick={() => toggleSection(id)}
      >
        {title}
        <span>{expandedSections[id] ? "−" : "+"}</span>
      </h2>

      {expandedSections[id] && (
        <div className="flex flex-col gap-4">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
            >
              <p className="font-semibold text-gray-800">{item.title}</p>
              <p className="text-gray-600 text-sm">{item.publisher}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="px-4 sm:px-6 md:px-8 pt-24 max-w-7xl mx-auto">
        {/* Invisible anchor for navbar scroll */}
        <div id="publications" className="h-14 -mt-6" />
        <h1 className="text-3xl sm:text-4xl font-bold text-indigo-700 text-center mb-24">
          Publications
        </h1>

        {renderSection("books", "Books", books)}
        {renderSection("chapters", "Chapters in Books", chapters)}
        {renderSection("journals", "Journal Articles", journals)}
        {renderSection("conferences", "Conference Papers", conferences)}
        {renderSection("abstracts", "Published in Abstract Form", abstracts)}
        {renderSection("editors", "Chief Editor / Editor", editors)}
      </div>
    </div>
  );
}
