
const scheduleData = {
  "schedule": [
    {
      "day": "monday",
      "tasks": [
        {"time": "5:00–6:00", "title": "Gym (strength + mobility)"},
        {"time": "6:00–7:50", "title": "Math I / AIME prep", "resources": "MIT OCW 18.01 problem sets 1–2, Spivak Ch.1–3, MIT OCW lectures 1–3, PatrickJMT derivatives"},
        {"time": "8:30–9:20", "title": "Calculus class"},
        {"time": "9:30–11:00", "title": "Physics challenge problems", "resources": "David Morin Intro Physics Ch.1–2, rotational dynamics, energy conservation"},
        {"time": "12:30–1:50", "title": "CS class", "resources": "Python basics / data structures"},
        {"time": "2:00–2:15", "title": "Lunch"},
        {"time": "2:20–4:30", "title": "Architecture portfolio", "resources": "Sketches + concept boards, CAD/Figma draft 1–2 pieces"},
        {"time": "5:00–6:00", "title": "Gym (cardio + mobility)"},
        {"time": "6:15–7:30", "title": "Python side project", "resources": "Automate the Boring Stuff, Ch.1–5, small project to model product data"},
        {"time": "7:30–8:30", "title": "IDEA.ENV / Design portfolio"},
        {"time": "8:30–9:30", "title": "Economics", "resources": "Perloff Micro, Ch.2–3, 5–10 problems"},
        {"time": "9:30–10:00", "title": "Reflection / AIME log"}
      ]
    },
    {
      "day": "tuesday",
      "tasks": [
        {"time": "5:00–6:00", "title": "Gym"},
        {"time": "6:00–7:50", "title": "Math: Calculus I + AIME", "resources": "MIT OCW problem sets 1–3, Spivak Ch.2 exercises, Professor Herbert Gross videos"},
        {"time": "8:30–9:20", "title": "Calculus class"},
        {"time": "9:30–10:30", "title": "Physics class + practice", "resources": "Morin Ch.3, multi-step kinematics"},
        {"time": "12:30–1:50", "title": "Social Science"},
        {"time": "2:00–2:15", "title": "Lunch"},
        {"time": "2:20–4:20", "title": "Architecture portfolio / CAD"},
        {"time": "3:30–4:35", "title": "Piano"},
        {"time": "5:00–6:00", "title": "Gym"},
        {"time": "6:15–7:30", "title": "Python: Functions & data structures exercises"},
        {"time": "7:30–8:30", "title": "IDEA.ENV / Design portfolio"},
        {"time": "8:30–9:30", "title": "Economics: Game Theory", "resources": "Perloff Ch.5, 3–5 practice problems"},
        {"time": "9:30–10:00", "title": "Math review / mistakes log"}
      ]
    },
    {
      "day": "wednesday",
      "tasks": [
        {"time": "5:00–6:00", "title": "Gym"},
        {"time": "6:00–9:20", "title": "Math I / AIME", "resources": "MIT OCW + past AIME problems, 10–15 challenging"},
        {"time": "9:40–1:20", "title": "MIT Media Lab course"},
        {"time": "1:20–1:50", "title": "Lunch"},
        {"time": "2:00–4:00", "title": "Architecture / IDEA.ENV"},
        {"time": "4:30–5:30", "title": "Gym"},
        {"time": "5:45–7:00", "title": "CS / Python small project"},
        {"time": "7:00–11:00", "title": "Optional Cram Session", "resources": "7–9 PM: Calculus I derivatives & limits; 9–11 PM: Economics micro hard exercises + policy application"}
      ]
    },
    {
      "day": "thursday",
      "tasks": [
        {"time": "5:00–6:00", "title": "Gym"},
        {"time": "6:00–7:50", "title": "Calculus I / AIME: integration + substitution"},
        {"time": "8:30–9:20", "title": "Calculus class"},
        {"time": "9:30–10:30", "title": "Physics class + hard practice", "resources": "Morin Ch.4, rotational dynamics"},
        {"time": "12:30–1:50", "title": "Social Science + Science"},
        {"time": "2:00–2:15", "title": "Lunch"},
        {"time": "2:20–3:20", "title": "Architecture portfolio / CAD"},
        {"time": "3:30–4:30", "title": "CS class"},
        {"time": "5:00–6:00", "title": "Gym"},
        {"time": "6:15–7:30", "title": "Python / product modeling"},
        {"time": "7:30–8:30", "title": "IDEA.ENV / Design portfolio"},
        {"time": "8:30–9:30", "title": "Economics: Macro + Policy", "resources": "Perloff Ch.7"},
        {"time": "9:30–10:00", "title": "Math review / mistakes log"}
      ]
    },
    {
      "day": "friday",
      "tasks": [
        {"time": "5:00–6:00", "title": "Gym"},
        {"time": "6:00–7:50", "title": "Math: Calculus / AIME problem set"},
        {"time": "8:30–9:20", "title": "Calculus class"},
        {"time": "9:30–11:00", "title": "Physics advanced problem sets"},
        {"time": "11:00–12:00", "title": "Economics: Micro review + game theory"},
        {"time": "12:30–1:50", "title": "CS / Python"},
        {"time": "2:00–2:15", "title": "Lunch"},
        {"time": "2:20–4:30", "title": "Architecture portfolio deep work"},
        {"time": "5:00–6:00", "title": "Gym"},
        {"time": "6:15–7:30", "title": "IDEA.ENV / Design portfolio"},
        {"time": "7:30–8:30", "title": "Economics / game theory review"},
        {"time": "8:30–9:30", "title": "Python / side project"},
        {"time": "9:30–10:00", "title": "Math reflection / mistakes log"},
        {"time": "10:00–10:30", "title": "MIT Media Lab prep / tasks"}
      ]
    },
    {
      "day": "saturday",
      "tasks": [
        {"time": "5:00–7:00", "title": "Math mock test / AIME full-length"},
        {"time": "7:00–8:00", "title": "Gym"},
        {"time": "8:00–9:00", "title": "Physics advanced problems"},
        {"time": "9:00–12:00", "title": "Architecture / Design portfolio deep work"},
        {"time": "12:00–1:00", "title": "Lunch"},
        {"time": "1:00–4:00", "title": "IDEA.ENV / outreach / Nubank prep"},
        {"time": "4:00–6:00", "title": "CS / Python side projects"},
        {"time": "6:00–7:00", "title": "Gym"},
        {"time": "7:00–9:00", "title": "Economics review (Macro + Micro hard problems)"},
        {"time": "9:00–11:00", "title": "Calculus I cram session (optional)", "resources": "Derivatives & limits"}
      ]
    },
    {
      "day": "sunday",
      "tasks": [
        {"time": "5:00–7:00", "title": "Math mock test / AIME full-length"},
        {"time": "7:00–8:00", "title": "Gym"},
        {"time": "8:00–9:00", "title": "Physics advanced problems"},
        {"time": "9:00–12:00", "title": "Architecture / Design portfolio deep work"},
        {"time": "12:00–1:00", "title": "Lunch"},
        {"time": "1:00–4:00", "title": "IDEA.ENV / outreach / Nubank prep"},
        {"time": "4:00–6:00", "title": "CS / Python side projects"},
        {"time": "6:00–7:00", "title": "Gym"},
        {"time": "7:00–9:00", "title": "Economics review (Macro + Micro hard problems)"},
        {"time": "9:00–11:00", "title": "Calculus I cram session (optional)", "resources": "Derivatives & limits"}
      ]
    }
  ]
};
