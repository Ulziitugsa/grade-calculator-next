export const metadata = {
  title: "Privacy Policy | Global Grade Calculator",
  description:
    "Privacy policy for Global Grade Calculator. Learn how we handle data, analytics and your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="container py-4 py-md-5">
      <h1 className="mb-3">Privacy Policy</h1>
      <p className="text-muted">
        Last updated: {new Date().getFullYear()}
      </p>

      <p>
        Global Grade Calculator is a free online tool that helps students
        estimate final grades, GPA, WAM, and required exam scores using
        percentage or band-based grading systems from multiple regions.
      </p>

      <h2 className="h5 mt-4">Data You Enter</h2>
      <p>
        Any marks, weights or inputs entered in the calculator are processed
        locally and are not sent to our servers. We do not store assignment
        marks, course names, weights, or percentages.
      </p>

      <h2 className="h5 mt-4">Analytics</h2>
      <p>
        We use services such as Google Analytics to measure site usage, traffic
        patterns, and popular pages. These services may use cookies or similar
        technologies to collect general, non-identifying information.
      </p>

      <h2 className="h5 mt-4">Advertising</h2>
      <p>
        In the future, we may display third-party advertising (such as Google
        AdSense). These services may use cookies to personalise ads. You can
        control cookie permissions in your browser settings.
      </p>

      <h2 className="h5 mt-4">External Links</h2>
      <p>
        This website may contain links to other educational calculators, tools
        or universities. We are not responsible for the content or privacy
        practices of external websites.
      </p>

      <h2 className="h5 mt-4">Contact</h2>
      <p>
        If you have questions about this privacy policy, you can contact the
        site owner by email:
      </p>
      <p>
        <a href="mailto:contact@globalgradecalc.com">
          contact@globalgradecalc.com
        </a>
      </p>
    </main>
  );
}
