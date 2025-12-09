"use client";

import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";
import { Button, buttonVariants } from "@/components/ui/button";

export function AuthButtons() {
  return (
    <>
      <SignedOut>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <SignInButton mode="modal">
            <Button variant="outline">Sign in</Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button variant="outline">Create account</Button>
          </SignUpButton>
        </div>
      </SignedOut>

      <SignedIn>
        <Link
          href="/dashboard"
          className={buttonVariants({ variant: "outline" })}
        >
          Go to dashboard
        </Link>
      </SignedIn>
    </>
  );
}


