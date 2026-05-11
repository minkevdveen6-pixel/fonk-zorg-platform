export type ScanCategory =
  | "draagvlak"
  | "werkdruk"
  | "eigenaarschap"
  | "leiderschap"
  | "sociale innovatie"
  | "implementatiekracht"
  | "verandermoeheid"
  | "psychologische veiligheid"
  | "ruimte voor experiment"
  | "praktijkbetrokkenheid";

export type ScanQuestion = {
  id: ScanCategory;
  label: string;
  prompt: string;
};

export type ScanLevel = "Lage veranderkracht" | "Gemiddelde veranderkracht" | "Hoge veranderkracht";

export const scanQuestions: ScanQuestion[] = [
  {
    id: "draagvlak",
    label: "Draagvlak",
    prompt: "In ons team begrijpen mensen waarom deze verandering belangrijk is.",
  },
  {
    id: "werkdruk",
    label: "Werkdruk",
    prompt: "Er is voldoende ruimte in de werkdruk om met vernieuwing bezig te zijn.",
  },
  {
    id: "eigenaarschap",
    label: "Eigenaarschap",
    prompt: "Zorgmedewerkers voelen zich mede-eigenaar van verandering.",
  },
  {
    id: "leiderschap",
    label: "Leiderschap",
    prompt: "Leidinggevenden helpen om verandering klein, helder en haalbaar te maken.",
  },
  {
    id: "sociale innovatie",
    label: "Sociale innovatie",
    prompt: "We vernieuwen niet alleen technologie, maar ook samenwerking en gedrag.",
  },
  {
    id: "implementatiekracht",
    label: "Implementatiekracht",
    prompt: "Nieuwe ideeën worden bij ons consequent vertaald naar uitvoering.",
  },
  {
    id: "verandermoeheid",
    label: "Verandermoeheid",
    prompt: "Het team heeft nog energie voor verandering en nieuwe initiatieven.",
  },
  {
    id: "psychologische veiligheid",
    label: "Psychologische veiligheid",
    prompt: "Mensen durven eerlijk te zeggen wat wel en niet werkt.",
  },
  {
    id: "ruimte voor experiment",
    label: "Ruimte voor experiment",
    prompt: "We mogen kleine experimenten doen zonder dat alles direct perfect moet zijn.",
  },
  {
    id: "praktijkbetrokkenheid",
    label: "Praktijkbetrokkenheid",
    prompt: "Zorgmedewerkers worden vroeg betrokken bij plannen en keuzes.",
  },
];

export function getScanLevel(score: number): ScanLevel {
  if (score < 2.8) return "Lage veranderkracht";
  if (score < 4) return "Gemiddelde veranderkracht";
  return "Hoge veranderkracht";
}

export function getScanRecommendations(score: number): string[] {
  if (score < 2.8) {
    return [
      "Begin met één klein teamprobleem dat binnen 14 dagen oplosbaar is.",
      "Verminder top-down communicatie en organiseer een praktijkpanel.",
      "Maak zichtbaar waar werkdruk innovatie blokkeert voordat je nieuwe projecten start.",
    ];
  }

  if (score < 4) {
    return [
      "Maak tijd vrij voor micro-experimenten met een helder leerdoel.",
      "Meet niet alleen output, maar ook energie en draagvlak.",
      "Kies per verandering één eigenaar vanuit de praktijk en één bestuurlijke sponsor.",
    ];
  }

  return [
    "Gebruik de huidige energie om succesvolle experimenten verantwoord op te schalen.",
    "Leg vast welke sociale patronen bijdragen aan implementatiekracht.",
    "Maak teams ambassadeur van bewezen verbeteringen, niet alleen ontvanger van beleid.",
  ];
}

export async function requestAiScanAdvice(score: number, answers: Record<ScanCategory, number>) {
  // Future integration point:
  // Send score and answers to an API route for contextual advice.
  return {
    score,
    answers,
    recommendations: getScanRecommendations(score),
  };
}
