import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { REPO_URL, SUPPORT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "StreamDisk has no servers. Your Mac talks to Google Drive directly, and nothing about you or your files is sent to anyone else.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lede="StreamDisk has no servers. Your Mac talks to Google Drive directly, and nothing about you or your files is sent to the developer or anyone else."
    >
      <h2>The short version</h2>
      <p>
        StreamDisk is a Mac app that shows your Google Drive as a disk in Finder. It runs entirely on your Mac. The developer of StreamDisk does not
        collect, receive, store, sell or share any of your data. There are no StreamDisk accounts, no StreamDisk servers, no analytics and no advertising.
      </p>

      <h2>Google user data StreamDisk accesses</h2>
      <p>When you sign in with Google, you choose one of two levels of access:</p>
      <ul>
        <li>
          <strong>A StreamDisk folder</strong> (the default, Google scope <code>drive.file</code>). StreamDisk can see and change only the files it
          creates or that you put into it through StreamDisk, which live in a folder named StreamDisk in your Drive.
        </li>
        <li>
          <strong>Your whole Drive</strong> (Google scope <code>drive</code>), only if you choose it. StreamDisk can then list, open, upload, rename, move
          and move to trash the files in your My Drive.
        </li>
      </ul>
      <p>
        StreamDisk also reads your account&rsquo;s email address and storage use, to show which account is connected and how much space is used.
      </p>

      <h2>How StreamDisk uses that data</h2>
      <p>Google user data is used only to provide StreamDisk&rsquo;s features on your Mac:</p>
      <ul>
        <li>File names, sizes, dates and folders are shown in Finder.</li>
        <li>
          File contents are downloaded when an app on your Mac reads a file, and held in memory while it is in use. They are not saved to disk, except
          for files you choose to keep on your Mac.
        </li>
        <li>Files you choose to <strong>keep on this Mac</strong> are downloaded in full and stored in StreamDisk&rsquo;s folder in your Library.</li>
        <li>Files you add, change, rename or delete on the StreamDisk disk are uploaded to, changed in, or moved to the trash in your Drive.</li>
      </ul>
      <p>
        StreamDisk does not use Google user data for advertising, does not sell it, does not transfer it to anyone, does not use it to train AI or
        machine-learning models, and does not let any person read it. All of it goes only between your Mac and Google.
      </p>
      <p>
        StreamDisk&rsquo;s use and transfer of information received from Google APIs adheres to the{" "}
        <a href="https://developers.google.com/terms/api-services-user-data-policy">Google API Services User Data Policy</a>, including the Limited Use
        requirements.
      </p>

      <h2>What is stored on your Mac</h2>
      <ul>
        <li>
          <strong>Your Google sign-in.</strong> The refresh token Google issues is stored in the macOS Keychain. The short-lived access token is kept
          only in memory.
        </li>
        <li>
          <strong>Files waiting to upload.</strong> A file you copy onto the disk is kept in StreamDisk&rsquo;s folder until it has uploaded, then deleted.
        </li>
        <li>
          <strong>Kept files.</strong> Copies of the files you keep on this Mac, until you remove them or sign out.
        </li>
      </ul>
      <p>
        Everything is in <code>~/Library/Application Support/StreamDisk</code> and the Keychain. Nothing is sent to the developer.
      </p>

      <h2>Removing your data</h2>
      <p>
        Signing out in StreamDisk&rsquo;s Settings revokes its access at Google, deletes the sign-in from the Keychain and deletes all kept files.
        You can also remove StreamDisk&rsquo;s access at any time at{" "}
        <a href="https://myaccount.google.com/permissions">myaccount.google.com/permissions</a>. Your files in Google Drive are never deleted by
        signing out.
      </p>

      <h2>This website</h2>
      <p>This website does not use cookies, analytics or tracking. It is served by Cloudflare, which may keep standard request logs.</p>

      <h2>Open source</h2>
      <p>
        StreamDisk&rsquo;s code is public at <a href={REPO_URL}>github.com/ChinmayyK/streamdisk</a>, so anyone can check what it does with your data.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about privacy: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
      </p>
    </LegalPage>
  );
}
