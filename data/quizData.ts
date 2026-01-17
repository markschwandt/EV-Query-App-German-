export const quizQuestions = [
  {
    question: "Warum scheitert einfacher Keyword-Ausschluss (NOT 'Car') bei Electro-Voice?",
    explanation: "Einfacher Ausschluss ist fragil. Wenn ein DJ postet 'Setting up my EV speakers at the Car Show', würde eine globale 'NOT Car' Regel diesen relevanten Post löschen (False Negative).",
    options: [
      { text: "Es verbraucht zu viele Daten", isCorrect: false },
      { text: "Es riskiert das Löschen relevanter Posts (False Negatives)", isCorrect: true },
      { text: "Brandwatch unterstützt NOT nicht", isCorrect: false },
      { text: "Electro-Voice stellt auch Autos her", isCorrect: false },
    ]
  },
  {
    question: "Was ist der empfohlene Proximity-Abstand für den NEAR-Operator, um Marke und Kategorie zu verknüpfen?",
    explanation: "Forschung zeigt, dass 10-15 Wörter die 'Goldene Zone' sind, um durchschnittliche Satzlängen abzudecken und gleichzeitig Präzision mit natürlicher Sprachvariation zu balancieren.",
    options: [
      { text: "NEAR/1 (Angrenzend)", isCorrect: false },
      { text: "NEAR/50 (Ganzer Absatz)", isCorrect: false },
      { text: "NEAR/10 bis NEAR/15", isCorrect: true },
      { text: "AND Operator ist besser", isCorrect: false },
    ]
  },
  {
    question: "Wie sollten Sie das Keyword 'Battery' in Bezug auf EVERSE-Lautsprecher handhaben?",
    explanation: "Das ist das 'Batterie-Paradoxon'. EV-Autos nutzen Batterien (Rauschen), aber EVERSE-Lautsprecher nutzen auch Batterien (Signal). Sie können 'Battery' nicht global ausschließen. Sie müssen kontextuelle Negation nutzen: NOT ('EV' NEAR/5 'Car Battery').",
    options: [
      { text: "'Battery' global ausschließen, um sicher zu sein", isCorrect: false },
      { text: "'Battery' nicht ausschließen, sondern spezifische kontextuelle Ausschlüsse wie 'Car Battery' nutzen", isCorrect: true },
      { text: "Nur Lautsprecher tracken, die an die Steckdose angeschlossen werden", isCorrect: false },
    ]
  },
  {
    question: "Welche BigQuery-Funktion wird für High-Volume-Analysen aufgrund der Geschwindigkeit empfohlen?",
    explanation: "LIKE ist signifikant schneller (ca. 10x) und nutzt Such-Indexe, was es zur besten Wahl für eindeutige Namen macht. REGEXP ist mächtiger, aber langsamer/teurer.",
    options: [
      { text: "REGEXP_CONTAINS", isCorrect: false },
      { text: "LIKE", isCorrect: true },
      { text: "MATCH", isCorrect: false },
      { text: "JSON_EXTRACT", isCorrect: false },
    ]
  }
];