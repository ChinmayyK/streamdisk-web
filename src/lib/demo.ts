// The sample Drive shown on the site: the same files the app's demo volume serves for captures.
export type DemoFile = { name: string; kind: string; icon: string; size: string; bytes: number; modified: string };

export const DEMO_FILES: DemoFile[] = [
  { name: "Album stems.zip", kind: "ZIP archive", icon: "zip", size: "18.9 GB", bytes: 18_903_114_752, modified: "5 Oct 2026" },
  { name: "Interview A-cam.mov", kind: "QuickTime movie", icon: "mov", size: "128.6 GB", bytes: 128_604_221_440, modified: "30 Oct 2026" },
  { name: "Konkan monsoon 4K.mov", kind: "QuickTime movie", icon: "mov", size: "61.37 GB", bytes: 61_372_118_016, modified: "5 Nov 2026" },
  { name: "Lecture 12, Fluid mechanics.mp4", kind: "MPEG-4 movie", icon: "mp4", size: "2.42 GB", bytes: 2_417_206_272, modified: "Yesterday" },
  { name: "Lightroom catalog 2019-2024.zip", kind: "ZIP archive", icon: "zip", size: "87.22 GB", bytes: 87_216_350_720, modified: "6 Sep 2026" },
  { name: "Portfolio scans.zip", kind: "ZIP archive", icon: "zip", size: "4.1 GB", bytes: 4_098_566_144, modified: "27 Oct 2026" },
  { name: "Tax documents 2025.pdf", kind: "PDF document", icon: "pdf", size: "3.9 MB", bytes: 3_912_384, modified: "29 Sep 2026" },
  { name: "Wedding, Pune (raw)", kind: "Folder", icon: "folder", size: "--", bytes: 0, modified: "18 Oct 2026" },
];
