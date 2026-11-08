import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { REPO_URL, SUPPORT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "StreamDisk is free, open-source software provided as is under the GNU General Public License v3.0.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use" lede="StreamDisk is free, open-source software. These are the few things to know when you use it.">
      <h2>License</h2>
      <p>
        StreamDisk is licensed under the <a href={`${REPO_URL}/blob/main/LICENSE`}>GNU General Public License v3.0</a>. You may use, study, share and
        change it under that license.
      </p>

      <h2>No warranty</h2>
      <p>
        StreamDisk is provided as is, without warranty of any kind. Keep your own copies of files that matter. The developer is not liable for lost or
        damaged data, or any other damage, arising from its use, to the extent the law allows.
      </p>

      <h2>Your Google account</h2>
      <p>
        StreamDisk works with your Google Drive on your behalf. Your use of Google Drive remains subject to Google&rsquo;s terms. How StreamDisk handles
        your data is described in the <Link href="/privacy">Privacy Policy</Link>.
      </p>

      <h2>Contact</h2>
      <p>
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
      </p>
    </LegalPage>
  );
}
