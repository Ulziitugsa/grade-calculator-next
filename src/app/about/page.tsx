export const metadata = {
  title: "About | Global Grade Calculator",
  description:
    "Learn about the Global Grade Calculator, its purpose and the developer behind it.",
};

export default function AboutPage() {
  return (
    <main className="container py-4 py-md-5">
      <h1 className="mb-3">About</h1>

      <p>
        The Global Grade Calculator was created to help students quickly estimate
        final grades, GPA, WAM and required exam scores using a variety of
        grading systems, including:
      </p>

      <ul>
        <li>Australian university bands (HD / D / C / P1 / P2)</li>
        <li>US letter scale (A–F)</li>
        <li>UK Honours degrees</li>
        <li>A-Level and GCSE systems</li>
        <li>International Baccalaureate (IB)</li>
      </ul>

      <p>
        The goal is to provide a clean, fast and useful student tool for
        planning, goal-setting and grade calculations without ads,
        clutter or paywalls.
      </p>

      <h2 className="h5 mt-4">How It Works</h2>
      <p>
        The calculator uses weighted averages to estimate percentages, converts
        them into grade bands, and optionally helps determine the minimum score
        required on final assessments to reach target grades.
      </p>

      <h2 className="h5 mt-4">Who Built This?</h2>
      <p>
        This project was built by an independent developer with a background in
        software engineering and a passion for education technology. The tool
        will continue improving as more grading systems and features are added.
      </p>
    </main>
  );
}
