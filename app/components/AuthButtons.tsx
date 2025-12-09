"use client";

import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";

export function AuthButtons() {
  return (
    <>
      <SignedOut>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <SignInButton mode="modal">
            <button className="inline-flex items-center justify-center rounded-full border border-border px-6 py-2 text-sm font-medium hover:bg-secondary/60 transition-colors">
              Sign in
            </button>
          </SignInButton>
          <SignUpButton mode="modal">
            <button className="inline-flex items-center justify-center rounded-full border border-border px-6 py-2 text-sm font-medium hover:bg-secondary/60 transition-colors">
              Create account
            </button>
          </SignUpButton>
        </div>
      </SignedOut>

      <SignedIn>
        <Link
          href="/dashboard"
          className="inline-flex items-center justify-center rounded-full border border-border px-6 py-2 text-sm font-medium hover:bg-secondary/60 transition-colors"
        >
          Go to dashboard
        </Link>
      </SignedIn>
    </>
  );
}


