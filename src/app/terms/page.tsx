export const metadata = {
  title: "Terms of Use | Global Grade Calculator",
  description:
    "Terms and acceptable use for the Global Grade Calculator website.",
};

export default function TermsPage() {
  return (
    <main className="container py-4 py-md-5">
      <h1 className="mb-3">Terms of Use</h1>
      <p className="text-muted">Last updated: {new Date().getFullYear()}</p>

      <p>
        By using the Global Grade Calculator website, you agree to the following
        terms and conditions.
      </p>

      <h2 className="h5 mt-4">Accuracy</h2>
      <p>
        This calculator is provided for estimation purposes only. Grade bands,
        boundaries and conversion scales can differ between universities,
        schools or faculties. Always verify official results through your
        institution.
      </p>

      <h2 className="h5 mt-4">No Liability</h2>
      <p>
        We are not responsible for exam outcomes, academic decisions, or any
        consequences arising from the use of the calculator. Use the results
        at your own discretion.
      </p>

      <h2 className="h5 mt-4">User Responsibility</h2>
      <p>
        You are responsible for ensuring that weights, marks and grading
        structures are entered correctly and applicable to your institution.
      </p>

      <h2 className="h5 mt-4">Intellectual Property</h2>
      <p>
        All branding, layout, tool logic, and content are the property of the
        site owner unless stated otherwise. You may not reproduce or
        redistribute the tool without permission.
      </p>

      <h2 className="h5 mt-4">External Links</h2>
      <p>
        We may link to third-party education tools or university resources. We
        are not responsible for accuracy, security, or policies of external
        sites.
      </p>

      <h2 className="h5 mt-4">Updates</h2>
      <p>
        These terms may be updated periodically. Continued use of the site
        indicates acceptance of the current terms.
      </p>
    </main>
  );
}
